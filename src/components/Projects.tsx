"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Enterprise Agentic RAG",
    tagline: "Agentic AI / Knowledge retrieval",
    description: "An Enterprise Retrieval-Augmented Generation (RAG) assistant built with Streamlit, LangChain/LangGraph, OpenAI, and Pinecone. This application acts as an intelligent HR and company policy assistant, featuring simulated Single Sign-On (SSO) with Role-Based Access Control (RBAC), and agentic tool use.",
    bullets: [
      "Hybrid Search (Dense + Sparse): Uses Pinecone's dotproduct metric to combine OpenAI dense semantic embeddings with a custom pure-Python BM25 sparse encoder for highly accurate retrieval.",
      "Agentic Assistant: Built with LangGraph, dynamically deciding when to use tools (get_my_employment_records, search_company_policies) based on context.",
      "Feedback Loop: Users can thumbs-up or thumbs-down AI responses. Corrections are saved to SQLite and injected into the prompt to prevent repeating mistakes.",
      "Automated Citations: Provides clickable markdown citations linking directly to the source policy documents.",
      "Simulated SSO & RBAC: Enforced strict access control where only HR personnel can access the Knowledge Base Management section."
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
    description: "A multi-tenant, AI-driven web application built with Streamlit designed to streamline the technical hiring process. It leverages OpenAI to generate interview questions on-demand and automatically score candidate answers with detailed feedback.",
    bullets: [
      "On-Demand AI Question Generation: Calls OpenAI live using the uploaded Job Description to generate unique technical questions.",
      "Automated Review Dashboard: Calculates average scores and provides managers with question-by-question breakdowns, LLM scores, and qualitative AI feedback.",
      "Multi-Tenant Data Isolation: Secure role-based access control (RBAC) ensuring managers only see their own jobs, candidates, and interview results.",
      "Candidate Onboarding: Automatically creates candidate and interview records upon uploading a candidate's resume (PDF).",
      "Architecture: Uses SQLAlchemy as an ORM with highly relational models and automatic data cleanup."
    ],
    tech: ["Python", "Streamlit", "OpenAI", "SQLAlchemy"],
    linkText: "View HireFlow on GitHub",
    linkUrl: "https://github.com/DatascienceTutor/hireflow"
  },
  {
    title: "PDF Chatbot",
    tagline: "Document intelligence",
    description: "An AI application that allows users to ask questions across multiple uploaded PDFs simultaneously. The application extracts text, generates embeddings, and utilizes a ConversationalRetrievalChain to provide accurate, context-aware answers.",
    bullets: [
      "Text Extraction & Chunking: Extracts text from all pages of uploaded PDFs and splits it using RecursiveCharacterTextSplitter for optimal embedding.",
      "Vector Database Integration: Uses OpenAIEmbeddings to convert text chunks into dense vectors, storing them in a Chroma vector store for fast similarity search.",
      "Conversational QA: Utilizes ChatOpenAI with a ConversationalRetrievalChain to retrieve relevant context and generate coherent answers.",
      "Contextual Memory: Maintains chat history within the Streamlit session state, allowing for contextual follow-up questions."
    ],
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
