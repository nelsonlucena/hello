#!/usr/bin/env bash
# AssemblyAI transcription — local file or remote URL, any size, speaker-labeled
# Usage: ./transcribe.sh <audio_file_or_url>
# Requires: ASSEMBLYAI_API_KEY env var, curl, python3

set -euo pipefail

INPUT="${1:-}"
API_KEY="${ASSEMBLYAI_API_KEY:-}"
BASE_URL="https://api.assemblyai.com/v2"

# ── Guards ────────────────────────────────────────────────────────────────────

if [[ -z "$API_KEY" ]]; then
  echo "ERROR: ASSEMBLYAI_API_KEY is not set." >&2
  echo "  Export it: export ASSEMBLYAI_API_KEY=your_key_here" >&2
  exit 1
fi

if [[ -z "$INPUT" ]]; then
  echo "Usage: $0 <audio_file_or_url>" >&2
  exit 1
fi

# ── Upload local file (skip if already a URL) ─────────────────────────────────

if [[ "$INPUT" =~ ^https?:// ]]; then
  AUDIO_URL="$INPUT"
  echo "[transcribe] Using remote URL directly." >&2
else
  if [[ ! -f "$INPUT" ]]; then
    echo "ERROR: File not found: $INPUT" >&2
    exit 1
  fi
  echo "[transcribe] Uploading $(basename "$INPUT") to AssemblyAI..." >&2
  UPLOAD_JSON=$(curl -s -X POST \
    -H "authorization: $API_KEY" \
    -H "content-type: application/octet-stream" \
    --data-binary @"$INPUT" \
    "$BASE_URL/upload")

  AUDIO_URL=$(echo "$UPLOAD_JSON" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['upload_url'])" 2>/dev/null)
  if [[ -z "$AUDIO_URL" ]]; then
    echo "ERROR: Upload failed. Response: $UPLOAD_JSON" >&2
    exit 1
  fi
  echo "[transcribe] Upload complete." >&2
fi

# ── Submit transcription ──────────────────────────────────────────────────────

echo "[transcribe] Submitting transcription request..." >&2
TRANSCRIPT_JSON=$(curl -s -X POST \
  -H "authorization: $API_KEY" \
  -H "content-type: application/json" \
  -d "{\"audio_url\": \"$AUDIO_URL\", \"speaker_labels\": true}" \
  "$BASE_URL/transcript")

TRANSCRIPT_ID=$(echo "$TRANSCRIPT_JSON" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['id'])" 2>/dev/null)
if [[ -z "$TRANSCRIPT_ID" ]]; then
  echo "ERROR: Failed to create transcript. Response: $TRANSCRIPT_JSON" >&2
  exit 1
fi
echo "[transcribe] Job ID: $TRANSCRIPT_ID — polling for completion..." >&2

# ── Poll until done ───────────────────────────────────────────────────────────

WAIT=5
while true; do
  RESULT=$(curl -s \
    -H "authorization: $API_KEY" \
    "$BASE_URL/transcript/$TRANSCRIPT_ID")

  STATUS=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['status'])" 2>/dev/null)

  case "$STATUS" in
    completed)
      echo "[transcribe] Done." >&2
      # Print speaker-labeled transcript if available, else plain text
      echo "$RESULT" | python3 -c "
import sys, json
data = json.load(sys.stdin)
utterances = data.get('utterances')
if utterances:
    for u in utterances:
        print(f'Speaker {u[\"speaker\"]}: {u[\"text\"]}')
else:
    print(data.get('text', ''))
"
      exit 0
      ;;
    error)
      ERR=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('error','unknown'))" 2>/dev/null)
      echo "ERROR: Transcription failed — $ERR" >&2
      exit 1
      ;;
    *)
      echo "[transcribe] Status: $STATUS — retrying in ${WAIT}s..." >&2
      sleep "$WAIT"
      # Back off slightly, cap at 30s
      WAIT=$(( WAIT < 30 ? WAIT + 5 : 30 ))
      ;;
  esac
done
