"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ExternalLink, MapPin, TrendingDown, RefreshCw, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full border-b border-border-subtle bg-gradient-to-b from-white via-white to-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col gap-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 relative"
        >
          {/* Eyebrow status bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-subtle text-primary font-mono text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AI / ML LEADER · GENERATIVE AI ARCHITECT
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-subtle text-text-secondary text-xs shadow-sm">
              <span className="text-text-muted font-normal">Currently at</span>
              <span className="text-text-primary font-semibold">Cognizant</span>
              <span className="text-text-muted font-normal mx-1">/</span>
              <span className="text-text-primary font-semibold">Senior Manager AI/ML</span>
            </div>
          </div>

          {/* Main Title & Value Proposition Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-5 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tight leading-tight">
                Sreejith Vasudevan
              </h1>
              <p className="text-lg sm:text-xl text-primary font-semibold tracking-tight">
                AI engineering leadership. <br className="hidden sm:block" />
                Enterprise solutions, delivered.
              </p>
              <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
                I bring 16+ years of experience in AI, analytics, and engineering leadership to building intelligent systems that solve real business problems.
              </p>

              {/* Action Cluster */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#selected-work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-sm transition-all"
                >
                  <span>Explore my work</span>
                  <ArrowDown size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sreejith-vasudevan-b033a026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-border-subtle text-text-primary hover:bg-surface-subtle text-sm font-semibold transition-all shadow-sm"
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={16} className="text-text-muted" />
                </a>
                <div className="flex items-center gap-1.5 text-xs text-text-muted ml-0 sm:ml-2 mt-2 sm:mt-0">
                  <MapPin size={18} className="text-primary" />
                  <span>Kochi, India / Open to remote & Kochi opportunities</span>
                </div>
              </div>
            </div>
            
            {/* Profile Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Sreejith Vasudevan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* KPI Outcomes Section */}
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider font-semibold">SELECTED CAREER OUTCOMES</span>
            <span className="h-[1px] flex-1 bg-border-subtle"></span>
            <span className="text-xs font-semibold text-primary">Engineering with measurable impact.</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-5 border border-border-card shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/40 transition-all group">
              <div className="py-2">
                <div className="text-3xl font-extrabold text-navy-dark tracking-tight">$45K</div>
                <p className="text-sm font-semibold text-text-primary mt-1">Annual savings through</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">Python automation at EY</p>
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-border-card shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/40 transition-all group">
              <div className="py-2">
                <div className="text-3xl font-extrabold text-navy-dark tracking-tight">100+</div>
                <p className="text-sm font-semibold text-text-primary mt-1">Production SAS processes</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">migrated to Python</p>
            </div>
            
            <div className="bg-white rounded-xl p-5 border border-border-card shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:border-primary/40 transition-all group">
              <div className="py-2">
                <div className="text-3xl font-extrabold text-navy-dark tracking-tight">80%</div>
                <p className="text-sm font-semibold text-text-primary mt-1">Less manual reporting</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">effort at EY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
