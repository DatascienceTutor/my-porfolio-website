"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="flex flex-col gap-8 scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="career-experience">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 border-b border-border-subtle">
        <div>
          <div className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest">
            02 / CAREER
          </div>
          <h2 className="text-2xl font-bold text-navy-dark mt-1">
            Professional experience
          </h2>
          <p className="text-sm text-text-secondary mt-1 font-medium">
            From statistical modeling to enterprise AI leadership.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 relative">
        <div className="hidden sm:block absolute left-[27px] top-4 bottom-4 w-px bg-border-subtle z-0"></div>

        {/* Cognizant */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="hidden sm:flex shrink-0 mt-1">
            <div className="w-14 h-14 rounded-full bg-white border border-border-card shadow-sm flex items-center justify-center font-bold text-primary">
              C
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-border-card shadow-sm flex-1 hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-navy-dark">Cognizant</h3>
                <p className="text-sm font-semibold text-primary mt-0.5">Senior Manager AI/ML / Technical Manager AI/ML</p>
                <p className="text-xs text-text-muted mt-0.5">Kochi</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-text-muted bg-surface-subtle px-2.5 py-1 rounded-md self-start">
                <span>Nov 2024 — Present</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Leading the architecture and delivery of enterprise AI, document intelligence, and MLOps solutions for insurance and claims processing.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary">
              <li>Combined CLIP classification, Azure Document Intelligence OCR, and Databricks-hosted LLMs for document extraction and validation.</li>
              <li>Shipped a Databricks Asset Bundle for intelligent document processing across bronze, silver, and gold data layers.</li>
              <li>Built agentic claims-document workflows and AI-assisted long-term care decision support.</li>
              <li>Led a three-engineer team delivering an AI-powered technical assessment platform.</li>
            </ul>
          </div>
        </motion.div>

        {/* EY */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="hidden sm:flex shrink-0 mt-1">
            <div className="w-14 h-14 rounded-full bg-white border border-border-card shadow-sm flex items-center justify-center font-bold text-primary">
              E
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-border-card shadow-sm flex-1 hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-navy-dark">EY</h3>
                <p className="text-sm font-semibold text-primary mt-0.5">Analytics leadership & data science</p>
                <p className="text-xs text-text-muted mt-0.5">Kochi</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-text-muted bg-surface-subtle px-2.5 py-1 rounded-md self-start">
                <span>Feb 2019 — Nov 2024</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Progressed from Team Lead to Assistant Manager and Associate Manager in Audit Risk Analytics, then led Azure DevOps analytics for a global platform migration.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary mb-4">
              <li>Created Python automation delivering approximately $45,000 in annual savings and migrated 100+ SAS production processes.</li>
              <li>Improved development efficiency by approximately 40% through reusable Python libraries.</li>
              <li>Reduced manual reporting effort by approximately 80% using Power BI and Power Automate.</li>
            </ul>
            <div className="flex flex-col gap-1 text-xs text-text-secondary border-t border-border-subtle pt-3">
              <div className="flex justify-between"><strong>Data Scientist & Azure DevOps Analytics Lead</strong><span>May 2024 — Nov 2024</span></div>
              <div className="flex justify-between"><strong>Associate Manager, Audit Risk Analytics</strong><span>Sep 2022 — Apr 2024</span></div>
              <div className="flex justify-between"><strong>Assistant Manager, Audit Risk Analytics</strong><span>Sep 2020 — Aug 2022</span></div>
              <div className="flex justify-between"><strong>Team Lead, Audit Risk Analytics</strong><span>Feb 2019 — Sep 2020</span></div>
            </div>
          </div>
        </motion.div>

        {/* Allianz */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="hidden sm:flex shrink-0 mt-1">
            <div className="w-14 h-14 rounded-full bg-white border border-border-card shadow-sm flex items-center justify-center font-bold text-primary">
              A
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-border-card shadow-sm flex-1 hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-navy-dark">Allianz</h3>
                <p className="text-sm font-semibold text-primary mt-0.5">Senior Consultant, Data Analytics</p>
                <p className="text-xs text-text-muted mt-0.5">Trivandrum</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-text-muted bg-surface-subtle px-2.5 py-1 rounded-md self-start">
                <span>Jun 2014 — Feb 2019</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Led insurance claims analytics supporting UK actuarial, pricing, and management teams. Developed predictive models for reserves, claims lifecycle, inflation, and customer segmentation, alongside reusable SAS automation and KPI reporting.
            </p>
          </div>
        </motion.div>

        {/* Hexaware */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="hidden sm:flex shrink-0 mt-1">
            <div className="w-14 h-14 rounded-full bg-white border border-border-card shadow-sm flex items-center justify-center font-bold text-primary">
              H
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-border-card shadow-sm flex-1 hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-navy-dark">Hexaware Technologies</h3>
                <p className="text-sm font-semibold text-primary mt-0.5">Software Engineer, SAS</p>
                <p className="text-xs text-text-muted mt-0.5">Chennai</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-text-muted bg-surface-subtle px-2.5 py-1 rounded-md self-start">
                <span>Mar 2012 — May 2014</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Developed logistic regression models for credit-card fraud detection and creditworthiness assessment, with repeatable workflows for data quality, feature selection, and financial risk analysis.
            </p>
          </div>
        </motion.div>

        {/* Krythium */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="hidden sm:flex shrink-0 mt-1">
            <div className="w-14 h-14 rounded-full bg-white border border-border-card shadow-sm flex items-center justify-center font-bold text-primary">
              K
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-border-card shadow-sm flex-1 hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold text-navy-dark">Krythium</h3>
                <p className="text-sm font-semibold text-primary mt-0.5">Data Analyst</p>
                <p className="text-xs text-text-muted mt-0.5">Kochi</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-text-muted bg-surface-subtle px-2.5 py-1 rounded-md self-start">
                <span>Aug 2010 — Feb 2012</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Built predictive models to identify high-cost healthcare members, analyzed Medicare and Medicaid claims, and managed scheduled ETL pipelines for insurance data warehouses.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
