"use client";

import React from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  const skills = [
    {
      num: "01",
      category: "Generative & agentic AI",
      description: "LLM architecture, retrieval, orchestration, prompt engineering, evaluation, and multi-layer AI guardrails.",
      items: ["Azure OpenAI", "Azure AI Studio", "LangChain", "LangGraph", "Pinecone"],
    },
    {
      num: "02",
      category: "Data & ML platforms",
      description: "Document intelligence, predictive modeling, enterprise data pipelines, deployment, monitoring, and governance.",
      items: ["Databricks", "MLflow", "Python", "PySpark", "Azure ML"],
    },
    {
      num: "03",
      category: "Engineering leadership",
      description: "AI strategy, solution architecture, technical roadmaps, cross-functional delivery, stakeholder engagement, and team development.",
      items: ["Delivery governance", "MLOps", "Team leadership"],
    },
  ];

  return (
    <section className="flex flex-col gap-8 scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="expertise">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 border-b border-border-subtle">
        <div>
          <div className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest">
            03 / EXPERTISE
          </div>
          <h2 className="text-2xl font-bold text-navy-dark mt-1">
            Technical expertise & leadership
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 border border-border-card shadow-sm hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-text-muted font-bold">{skillGroup.num}</span>
              <h3 className="text-lg font-bold text-navy-dark">{skillGroup.category}</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {skillGroup.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-surface-subtle border border-border-subtle rounded-lg text-xs text-text-secondary font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
