import React from 'react';
import { Layers, ShieldCheck, Zap, TrendingUp, Users, Cpu } from 'lucide-react';

export default function TransformationSummarySlide() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-slate-100 font-sans text-slate-800 relative overflow-hidden">
      {/* Top Header Section */}
      <div className="border-b border-slate-100 pb-6 mb-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest text-sky-700 uppercase">
            Group Transformation — Value Delivered to Date
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-full">
            Goal #2: Delivery Excellence
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-serif text-slate-900 mt-3 font-semibold leading-tight max-w-4xl">
          Delivery momentum across core markets: scalable capacity, automated claims, and direct revenue uplift
        </h1>
      </div>

      {/* Grid of 6 Key Transformation Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        {/* 1. Mexico Auto - Claims Automation */}
        <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-slate-50/60 to-white hover:border-sky-300 transition relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-sky-800 tracking-wider uppercase flex items-center gap-1.5">
              🇲🇽 Mexico Auto — Claims
            </span>
            <span className="text-xs font-bold text-slate-300">01</span>
          </div>
          <div className="text-2xl font-bold text-sky-700 font-serif mb-1">
            &gt;$5M USD Saved
          </div>
          <p className="text-xs font-medium text-slate-700 mb-2">
            In-House Analytical Repair Model & STP
          </p>
          <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Replaced paid Audatex add-on outright</li>
            <li>Audatex parts module: +10 FTEs (16 more by Q3-end)</li>
            <li>Ventura total loss 86% automated (up from 57%)</li>
          </ul>
        </div>

        {/* 2. Mexico Auto - Commercial & Digital */}
        <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-slate-50/60 to-white hover:border-sky-300 transition relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-sky-800 tracking-wider uppercase flex items-center gap-1.5">
              🇲🇽 Mexico Auto — Growth
            </span>
            <span className="text-xs font-bold text-slate-300">02</span>
          </div>
          <div className="text-2xl font-bold text-sky-700 font-serif mb-1">
            +24.5% Policies QoQ
          </div>
          <p className="text-xs font-medium text-slate-700 mb-2">
            Auto Plus & Fleet Turnaround Compression
          </p>
          <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Auto Plus adoption hit 73% vs. 60% plan (+4pt hit ratio)</li>
            <li>Fleet quotes compressed from 17 days to 5 days (line to 3)</li>
            <li>Agentic AI Rate Factory kicks off (4 mos → 2 wks ambition)</li>
          </ul>
        </div>

        {/* 3. Nubank Brazil - Persona Pricing */}
        <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-slate-50/60 to-white hover:border-sky-300 transition relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-sky-800 tracking-wider uppercase flex items-center gap-1.5">
              🇧🇷 Nubank Brazil — Personalization
            </span>
            <span className="text-xs font-bold text-slate-300">03</span>
          </div>
          <div className="text-2xl font-bold text-sky-700 font-serif mb-1">
            ~50% Premium Uplift
          </div>
          <p className="text-xs font-medium text-slate-700 mb-2">
            Sabio CLTV Optimization on PIX
          </p>
          <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Scaled across 90% of customer base (10% control)</li>
            <li>Direct lift in collected premium per customer interaction</li>
            <li>Demonstrates high-converting micro-targeting model</li>
          </ul>
        </div>

        {/* 4. Global Consumer Partnerships - Catalyst */}
        <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-slate-50/60 to-white hover:border-sky-300 transition relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-sky-800 tracking-wider uppercase flex items-center gap-1.5">
              🌐 International Partnerships — Catalyst
            </span>
            <span className="text-xs font-bold text-slate-300">04</span>
          </div>
          <div className="text-2xl font-bold text-sky-700 font-serif mb-1">
            8 Live Markets
          </div>
          <p className="text-xs font-medium text-slate-700 mb-2">
            Multi-Partner Digital Onboarding Engine
          </p>
          <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Live in Mercado Libre (BR/MX) & TikTok (TH/PH)</li>
            <li>Pipeline delivering Amazon UK/ES & Shopee SG by Q3 end</li>
            <li>32 FTE capacity released vs. 19 target (45 YE plan)</li>
          </ul>
        </div>

        {/* 5. APAC & LATAM - Engage+ Sales AI */}
        <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-slate-50/60 to-white hover:border-sky-300 transition relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-sky-800 tracking-wider uppercase flex items-center gap-1.5">
              🌏 APAC & LATAM — Engage+
            </span>
            <span className="text-xs font-bold text-slate-300">05</span>
          </div>
          <div className="text-2xl font-bold text-sky-700 font-serif mb-1">
            11–15% Sales Uplift
          </div>
          <p className="text-xs font-medium text-slate-700 mb-2">
            AI Sales Scripts & Telemarketer Augmentation
          </p>
          <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Live scripts driving conversion gains in Thailand & Mexico</li>
            <li>AI Trainer deployed across TH, SG, MY, TW, and HK</li>
            <li>1st Sales Chat live in Singapore; campaign ready for Q4</li>
          </ul>
        </div>

        {/* 6. Thailand Auto - Platform Remediation */}
        <div className="border border-slate-200 rounded-lg p-5 bg-gradient-to-b from-slate-50/60 to-white hover:border-sky-300 transition relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-sky-800 tracking-wider uppercase flex items-center gap-1.5">
              🇹🇭 Thailand Auto — OneHub & CMX
            </span>
            <span className="text-xs font-bold text-slate-300">06</span>
          </div>
          <div className="text-2xl font-bold text-sky-700 font-serif mb-1">
            ~4k Agent Runway
          </div>
          <p className="text-xs font-medium text-slate-700 mb-2">
            Vulnerability Remediation & Agile Stabilization
          </p>
          <ul className="text-[11px] text-slate-600 space-y-1 list-disc list-inside">
            <li>Angular fixes deploy this month; 1% pilot scaling to 800 agents</li>
            <li>BCG onboarded (9/2) to bridge specs into AI-dev-ready stories</li>
            <li>Hard testing gates: FNOL UAT on 9/16; Mobile App UAT on 9/23</li>
          </ul>
        </div>

      </div>

      {/* Slide Footer */}
      <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400">
        <div>
          <span className="font-bold text-slate-700 uppercase tracking-wider">
            Execution Baseline:
          </span>{' '}
          Initiatives actively tracked across Wave-1 Transformation Portfolio. Audited internal delivery reports.
        </div>
        <div className="mt-2 md:mt-0 uppercase tracking-wider font-semibold text-slate-500">
          Chubb Group Transformation • Confidential
        </div>
      </div>
    </div>
  );
}
