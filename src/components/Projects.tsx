"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Enterprise Agentic RAG",
    tagline: "Agentic AI / Knowledge retrieval",
    description: "An HR and company policy assistant that combines document retrieval with employee-record tools. A LangGraph agent selects the relevant tool to answer each question using company context.",
    bullets: [
      "Hybrid retrieval with OpenAI embeddings and BM25 sparse vectors in Pinecone",
      "Policy citations, response feedback, and stored corrections added to the agent prompt",
      "Simulated Employee and HR sign-in, with HR-only knowledge-base uploads"
    ],
    tech: ["Python", "LangGraph", "LangChain", "Pinecone", "OpenAI", "Streamlit", "SQLite"],
    linkText: "View agentic-rag on GitHub",
    linkUrl: "https://github.com/DatascienceTutor/agentic-rag"
  },
  {
    title: "BillDine",
    tagline: "Restaurant operations",
    description: "A restaurant management application for menu setup, order handling, and billing. Supports dine-in, takeaway, delivery, and aggregator order types.",
    bullets: [
      "Menu categories, item variants, add-ons, food types, and spice levels",
      "GST calculations, configurable tax rates, and UPI payment support",
      "SQLite for development and PostgreSQL for production"
    ],
    tech: ["Python", "FastAPI", "HTMX", "Bootstrap", "SQLite", "PostgreSQL"],
    linkText: "View BillDine on GitHub",
    linkUrl: "https://github.com/DatascienceTutor/Restaurant-Application"
  },
  {
    title: "HireFlow",
    tagline: "Talent assessment",
    description: "An AI-powered technical interview platform with job-specific question generation, automated answer scoring, qualitative feedback, and separate manager and candidate workflows.",
    tech: ["Python", "Streamlit", "OpenAI", "SQLAlchemy"],
    linkText: "View HireFlow on GitHub",
    linkUrl: "https://github.com/DatascienceTutor/hireflow"
  },
  {
    title: "PDF Chatbot",
    tagline: "Document intelligence",
    description: "Ask questions across uploaded PDFs. Document text is extracted, chunked, and embedded in Chroma, with GPT-4 answering from the retrieved context.",
    tech: ["LangChain", "OpenAI", "Chroma", "Streamlit"],
    linkText: "View PDF Chatbot on GitHub",
    linkUrl: "https://github.com/DatascienceTutor/pdfchatbot"
  },
  {
    title: "Ollama Chatbot",
    tagline: "Local inference",
    description: "A local chat interface for Llama models, with model selection and streamed responses. Built with Streamlit and LangChain’s Ollama integration.",
    tech: ["Python", "Ollama", "Llama", "LangChain"],
    linkText: "View Ollama Chatbot on GitHub",
    linkUrl: "https://github.com/DatascienceTutor/OllamaChatBot"
  }
];

const Projects = () => {
  return (
    <section className="flex flex-col gap-8 scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="selected-work">
      <div className="flex flex-wrap items-end justify-between gap-4 pb-3 border-b border-border-subtle">
        <div>
          <div className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest">
            01 / SELECTED WORK
          </div>
          <h2 className="text-2xl font-bold text-navy-dark mt-1">
            Selected projects
          </h2>
        </div>
        <a
          href="https://github.com/DatascienceTutor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary-hover font-semibold transition-colors"
        >
          <FaGithub size={16} />
          <span>View GitHub</span>
        </a>
      </div>

      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-6 lg:p-8 border border-border-card shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.02)] flex flex-col gap-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-border-subtle">
              <span className="px-2.5 py-1 rounded bg-surface-subtle text-text-secondary text-xs font-medium">
                {project.tagline}
              </span>
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary text-xs hover:underline font-semibold"
              >
                <span>{project.linkText}</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-navy-dark tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              {project.bullets && (
                <ul className="list-disc pl-5 flex flex-col gap-1 text-sm text-text-secondary">
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-surface-subtle border border-border-subtle text-text-secondary font-mono text-[11px] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
