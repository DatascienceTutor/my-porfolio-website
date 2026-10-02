"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="flex flex-col gap-8 scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="education">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 border-b border-border-subtle">
        <div>
          <div className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest">
            04 / FOUNDATIONS
          </div>
          <h2 className="text-2xl font-bold text-navy-dark mt-1">
            Education
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl p-6 border border-border-card shadow-sm hover:border-primary/20 transition-colors"
        >
          <div className="font-mono text-xs text-text-muted mb-2">2008 — 2010</div>
          <h3 className="text-lg font-bold text-navy-dark">MSc, Statistics</h3>
          <p className="text-sm text-text-secondary mt-1">Nirmala College, Muvattupuzha</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl p-6 border border-border-card shadow-sm hover:border-primary/20 transition-colors"
        >
          <div className="font-mono text-xs text-text-muted mb-2">2005 — 2008</div>
          <h3 className="text-lg font-bold text-navy-dark">BSc, Mathematics</h3>
          <p className="text-sm text-text-secondary mt-1">Nirmala College, Muvattupuzha</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
