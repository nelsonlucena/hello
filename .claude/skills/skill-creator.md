# skill-creator

Create a new Claude Code skill file interactively.

## Usage

```
/skill-creator [skill-name]
```

- `skill-name` — optional; if omitted you will be prompted to provide one.

## Instructions

You are helping the user create a new Claude Code skill (a reusable slash command stored in `.claude/skills/`).

Follow these steps in order:

### 1. Gather requirements

Ask the user (or read from args) for:
- **Name**: short kebab-case identifier (e.g. `run-tests`, `format-code`)
- **Trigger description**: one sentence — when should someone invoke this skill?
- **What it does**: the concrete steps or behaviour Claude should perform
- **Args**: any parameters the skill accepts (optional)

If `skill-name` was passed as an arg, use it and skip asking for the name.

### 2. Draft the skill file

Produce a markdown file with this structure:

```markdown
# <skill-name>

<one-line trigger description>

## Usage

\`\`\`
/<skill-name> [args]
\`\`\`

## Instructions

<detailed instructions Claude will follow when this skill is invoked>
```

Rules for good skill instructions:
- Write instructions in the imperative, addressed to Claude ("Search for…", "Run…", "Ask the user…").
- Be specific: name the exact files, commands, or APIs to use.
- List steps sequentially when order matters.
- Keep it concise — one screen of markdown is usually enough.
- Do NOT include meta-commentary about the skill itself; only operational instructions.

### 3. Confirm with the user

Show the drafted skill file content and ask: **"Does this look right? Reply yes to save, or tell me what to change."**

### 4. Save the file

Once the user confirms, write the file to:

```
.claude/skills/<skill-name>.md
```

Create the `.claude/skills/` directory if it does not exist.

Confirm: "Skill `/<skill-name>` created at `.claude/skills/<skill-name>.md`. You can invoke it with `/<skill-name>` in any future session on this project."
