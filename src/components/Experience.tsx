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
              Lead the architecture and delivery of production-grade AI, Generative AI, machine learning, document intelligence, and MLOps solutions for enterprise insurance and claims-processing use cases.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary">
              <li>Architected and delivered an enterprise document intelligence platform for classifying, processing, extracting, and validating information from insurance invoices and proof-of-payment documents.</li>
              <li>Integrated CLIP-based document classification, Azure Document Intelligence OCR, and Databricks-hosted LLM capabilities for intelligent information extraction.</li>
              <li>Designed confidence-scoring, schema-validation, table-extraction, multi-page document handling, and deduplication capabilities.</li>
              <li>Designed and shipped a Databricks Asset Bundle for Intelligent Document Processing, codifying a full medallion-architecture data platform (bronze/silver/gold) as version-controlled YAML and enabling one-command, multi-environment deploys via the Databricks CLI.</li>
              <li>Developed AI-assisted decision-support capabilities for long-term care claims using Azure Databricks and Azure OpenAI.</li>
              <li>Built agentic document-processing workflows using Azure AI Studio to automate claims-document extraction and downstream analysis.</li>
              <li>Led a three-engineer team in designing and delivering an AI-powered technical interview assessment platform with job-description and resume processing, AI-generated technical questions, human approval workflows, candidate assessment, and automated scoring.</li>
              <li>Partnered with business, architecture, engineering, and delivery stakeholders to convert business requirements into scalable AI solutions.</li>
              <li>Created architecture documentation, deployment procedures, operational guides, and technical standards for enterprise adoption.</li>
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
              Progressed from Team Lead to Associate Manager in Audit Risk Analytics, then led Azure DevOps analytics for a global Adobe Experience Manager to Unified Platform migration.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary mb-4">
              <li>Led analytics and monitoring for a global Adobe Experience Manager migration, improving leadership visibility into progress, delivery risks, and team velocity.</li>
              <li>Developed interactive Power BI dashboards and automated daily metrics extraction using Power Automate, reducing manual reporting effort by approximately 80%.</li>
              <li>Developed a fully automated Python analytics application that generated approximately USD 45,000 in annual cost savings.</li>
              <li>Migrated more than 100 production SAS processes to Python and developed reusable Python libraries, improving development efficiency by approximately 40%.</li>
              <li>Designed predictive models, statistical frameworks, and quartile-based metrics in partnership with Audit Quality stakeholders.</li>
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
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary">
              <li>Led analytics initiatives across personal lines, motor, commercial, and specialty insurance claims for UK-based actuarial, pricing, and claims teams.</li>
              <li>Developed predictive models for reserve estimation, claim lifecycle prediction, claims inflation forecasting, development triangles, and customer segmentation.</li>
              <li>Designed reusable SAS macros and automated analytics and reporting components, delivering monthly financial KPI dashboards to senior management.</li>
              <li>Improved analytical consistency and reporting turnaround through automation and reusable development standards.</li>
            </ul>
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
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary">
              <li>Developed logistic-regression models for credit-card fraud detection and customer creditworthiness assessment.</li>
              <li>Performed exploratory data analysis, feature selection, outlier detection, missing-value treatment, and data-quality validation.</li>
              <li>Collaborated with business and technology teams to translate financial risk requirements into repeatable analytical workflows for decision-making.</li>
            </ul>
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
            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary">
              <li>Developed predictive models for disease-management organizations to identify high-cost patients.</li>
              <li>Analyzed Medicare and Medicaid healthcare claims data to identify cost drivers, variable relationships, and high-cost member segments.</li>
              <li>Managed scheduled ETL pipelines for insurance policy and claims data, supporting regular data loading into enterprise data-warehouse environments.</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
