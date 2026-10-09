"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, Target, Award, Terminal, ChevronRight, Users, Handshake, Zap, ExternalLink } from "lucide-react";
import Silk from "@/components/animated_bg/Silk.jsx";
import Navbar from "@/components/Navbar.jsx";
import { useTheme } from "@/components/ThemeProvider";

const editions = [
  {
    id: "3.0",
    name: "TechZephyr 3.0",
    year: "2025",
    dates: "25–26 October 2025",
    theme: "5 Societies, 1 Summit",
    command: "$ init techzephyr_3.0 --flagship",
    status: "EXECUTIVE_SUCCESS",
    overview: "TechZephyr 3.0 was successfully organized by the Science & Technology Council, IIT Bhubaneswar on 25–26 October 2025. The event brought together students, innovators, developers, entrepreneurs, and technology enthusiasts through multiple competitions, workshops, and technical sessions.",
    highlights: [
      "Prize Pool worth ₹70,000+",
      "Multiple technical competitions",
      "National-level participation",
      "Workshops & Hackathons",
      "Networking sessions & Technical exhibitions"
    ],
    competitions: [
      "Competitive Programming Contest",
      "Business Plan Competition",
      "Machine Learning Hackathon",
      "CADathon",
      "Quadruped Challenge",
      "Web Hackathon",
      "Design Marathon",
      "Math-O-Stellar"
    ]
  },
  {
    id: "2.0",
    name: "TechZephyr 2.0",
    year: "2024",
    dates: "October 2024",
    command: "$ load_archive tz_2.0.env",
    status: "CONCLUDED",
    overview: "TechZephyr 2.0 continued the tradition of promoting innovation, technical excellence, and interdisciplinary collaboration. The edition featured competitions, workshops, and technical sessions across multiple engineering domains while encouraging participation from students."
  },
  {
    id: "1.0",
    name: "TechZephyr 1.0",
    year: "2023",
    dates: "October 2023",
    command: "$ cat inaugural_manifest.log",
    status: "ARCHIVED",
    overview: "The inaugural edition of TechZephyr laid the foundation for IIT Bhubaneswar's flagship technical festival. It introduced a platform where students could compete, collaborate, and showcase innovative ideas across multiple technical disciplines."
  }
];

const speakers = [
  { name: "Anil Bhasin", role: "Former Managing Director, India & SAARC, NetApp" },
  { name: "Anirban Mohanty", role: "Technology & Innovation Leader" },
  { name: "Bodhisattwa Sanghapriya", role: "Founder & CEO, IG Drones" },
  { name: "Priyadarshi Sadangi", role: "Space Educator and Founder, Space Club" },
  { name: "Durga Prasad Gouda", role: "Technology Professional & Mentor" },
  { name: "Jaskaran Singh", role: "Competitive Programming Expert" },
  { name: "Avelo Roy", role: "Startup Mentor & Entrepreneur" },
  { name: "Ronnie Ray", role: "Entrepreneur and Business Leader" }
];

const sponsors = [
  "EG", "Hostinger", "AceInt", "Unstop", "RedString", "WorldQuant", 
  "Nox Alfa", "Zerodha", "Wadhwani Foundation", "ISB", 
  "StockGro", "EncodersPro", "ISRO", "Pathway"
];

const impacts = [
  "Supporting national-level competitions and hackathons.",
  "Providing mentorship, industry expertise, and real-world problem statements.",
  "Offering internships, career opportunities, and networking sessions.",
  "Enhancing the overall participant experience through workshops, resources, and sponsorships."
];

export default function LastEditionPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedTab, setSelectedTab] = useState("3.0");

  const activeData = editions.find((item) => item.id === selectedTab) || editions[0];

  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col justify-between pt-8 pb-32 font-sans transition-colors duration-300">
      
      {/* Background Silk Layer */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Silk
          speed={3}
          scale={1.2}
          noiseIntensity={0.2}
          rotation={0}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col items-center">
        
        {/* Page Header */}
        <div className="text-center mt-2 mb-6">
          <p className="uppercase tracking-[0.25em] text-xs text-amber-500 dark:text-orange-400/90 font-mono font-medium mb-1.5">
            IIT Bhubaneswar &middot; Legacy & Archives
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight landing-heading bg-gradient-to-b from-amber-400 via-amber-600 to-black bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-700">
            LAST EDITIONS
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Exploring the milestone achievements, competition tracks, and growth of TechZephyr 3.0, 2.0, and 1.0.
          </p>
        </div>

        {/* Tab Switcher - */}
        <div className="flex items-center justify-center gap-1.5 p-1.5 bg-card/90 border border-border rounded-xl backdrop-blur-md mb-8 w-full max-w-md shadow-lg">
          {editions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                selectedTab === tab.id
                  ? "bg-amber-400 text-black shadow-md font-extrabold"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {tab.id === "3.0" }
              {tab.name}
            </button>
          ))}
        </div>

        {/* ALL IN ONE CARD CONTAINER */}
        <div className="w-full transition-all duration-300 mb-8">
          <div className="relative rounded-xl overflow-hidden backdrop-blur-md border border-border bg-card/90 shadow-[0_0_30px_rgba(245,158,11,0.08)]">
            
            {/* Terminal Header Bar */}
            <div className="w-full bg-muted/70 border-b border-border px-4 py-3 font-mono text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                {activeData.id === "3.0" && (
                  <span className="ml-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
                    Flagship
                  </span>
                )}
              </div>
              <span className="text-[10px] text-amber-600 dark:text-amber-400/80 font-mono font-bold">
                {activeData.year}.env
              </span>
            </div>

           
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Title & Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-border">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-wide">
                    {activeData.name}
                  </h2>
                  <p className="text-xs text-amber-500 dark:text-amber-400 font-mono mt-1 flex items-center gap-1.5">
                    <Calendar size={12} /> {activeData.dates}
                  </p>
                </div>

                {activeData.theme && (
                  <div className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-600 dark:text-amber-300">
                    Theme: <span className="font-bold text-foreground">&ldquo;{activeData.theme}&rdquo;</span>
                  </div>
                )}
              </div>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {activeData.overview}
              </p>

             
              {(activeData.highlights || activeData.competitions) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                  
                  {/* Highlights Column */}
                  {activeData.highlights && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-500 dark:text-amber-400 font-mono font-bold mb-3 flex items-center gap-1.5">
                        <Award size={13} /> Key Highlights
                      </p>
                      <ul className="space-y-2">
                        {activeData.highlights.map((item, index) => (
                          <li key={index} className="text-xs text-foreground/85 flex items-start gap-2 leading-tight">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Competitions Column */}
                  {activeData.competitions && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-orange-500 dark:text-orange-400 font-mono font-bold mb-3 flex items-center gap-1.5">
                        <Target size={13} /> Competitions Conducted
                      </p>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {activeData.competitions.map((item, index) => (
                          <li key={index} className={`text-xs font-mono flex items-center gap-1.5 ${isDark ? "text-white/90" : "text-[#2A1D17] font-medium"}`}>
                            <ChevronRight size={12} className="text-amber-500 dark:text-amber-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}

              {/* CTA Action */}
              <div className="pt-2">
                {activeData.id === "3.0" ? (
                  <a
                    href="https://www.instagram.com/techzephyr.iitbbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 uppercase text-xs font-bold tracking-wider text-black bg-amber-400 rounded-lg hover:bg-amber-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    View 3.0 Media Highlights <ExternalLink size={14} />
                  </a>
                ) : (
                  <button 
                    disabled
                    className={`w-full py-2.5 uppercase text-xs font-bold tracking-wider rounded-lg cursor-default text-center ${
                      isDark
                        ? "text-white/40 border border-white/10 bg-white/5"
                        : "text-[#4A3328]/40 border border-[#7A2E24]/15 bg-[#7A2E24]/5"
                    }`}
                  >
                    Concluded Edition
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* 3.0 Extra Sections - Clean All-In-One Boxes */}
        {selectedTab === "3.0" && (
          <div className="w-full space-y-6">
            
            {/* Speakers */}
            <div className={`p-6 rounded-xl border backdrop-blur-md transition-all ${
              isDark
                ? "bg-zinc-950/90 border-white/10"
                : "bg-white/80 border-[#7A2E24]/15 shadow-xl shadow-amber-950/5"
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Users size={16} className="text-amber-500 dark:text-amber-400" />
                <h2 className={`text-lg font-bold uppercase tracking-wide ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                  Past Featured Speakers
                </h2>
              </div>
              <p className={`text-xs mb-4 ${isDark ? "text-white/60" : "text-[#4A3328]/85"}`}>
                TechZephyr has hosted distinguished industry leaders, entrepreneurs, and researchers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {speakers.map((item, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-[#7A2E24]/[0.03] border-[#7A2E24]/10"
                  }`}>
                    <p className={`text-xs font-bold font-mono ${isDark ? "text-white" : "text-[#2A1D17]"}`}>{item.name}</p>
                    <p className={`text-[10px] mt-0.5 ${isDark ? "text-white/50" : "text-[#4A3328]/75"}`}>{item.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsors */}
            <div className={`p-6 rounded-xl border backdrop-blur-md transition-all ${
              isDark
                ? "bg-zinc-950/90 border-white/10"
                : "bg-white/80 border-[#7A2E24]/15 shadow-xl shadow-amber-950/5"
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Handshake size={16} className="text-orange-500 dark:text-orange-400" />
                <h2 className={`text-lg font-bold uppercase tracking-wide ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                  Our Past Sponsors & Collaborators
                </h2>
              </div>
              <p className={`text-xs mb-4 ${isDark ? "text-white/60" : "text-[#4A3328]/85"}`}>
                Partnered with leading companies, startups, and technology communities.
              </p>
              <div className="flex flex-wrap gap-2">
                {sponsors.map((item, index) => (
                  <span key={index} className={`px-3 py-1.5 rounded-md border text-xs font-mono font-medium ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white/85"
                      : "bg-[#7A2E24]/[0.04] border-[#7A2E24]/15 text-[#2A1D17]"
                  }`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className={`p-6 rounded-xl border backdrop-blur-md mb-8 transition-all ${
              isDark
                ? "bg-zinc-950/90 border-white/10"
                : "bg-white/80 border-[#7A2E24]/15 shadow-xl shadow-amber-950/5"
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <Zap size={16} className="text-amber-500 dark:text-amber-400" />
                <h2 className={`text-lg font-bold uppercase tracking-wide ${isDark ? "text-white" : "text-[#2A1D17]"}`}>
                  Our Partnership Impact
                </h2>
              </div>
              <p className={`text-xs mb-4 ${isDark ? "text-white/60" : "text-[#4A3328]/85"}`}>
                How our partners contributed to our campus ecosystem:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {impacts.map((item, index) => (
                  <div key={index} className={`p-3 rounded-lg border text-xs flex items-start gap-2 ${
                    isDark
                      ? "bg-white/5 border-white/5 text-white/80"
                      : "bg-[#7A2E24]/[0.03] border-[#7A2E24]/10 text-[#4A3328]/85 font-medium"
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      <Navbar />

    </section>
  );
}