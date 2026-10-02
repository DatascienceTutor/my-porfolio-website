import React from "react";
import { Send, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-dark text-white font-bold text-sm tracking-wider shadow-sm group-hover:bg-primary transition-colors">
              SV
            </span>
            <span className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-text-primary group-hover:text-primary transition-colors tracking-tight">
                Sreejith Vasudevan
              </span>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider font-medium">
                AI Architect & Engineering Leader
              </span>
            </span>
          </a>
        </div>

        <nav className="hidden xl:flex items-center gap-1">
          <a
            href="#"
            className="px-3 py-1.5 text-xs font-semibold text-primary bg-primary-light rounded-lg transition-colors"
          >
            Overview
          </a>
          <a
            href="#selected-work"
            className="px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg transition-colors"
          >
            Selected Projects
          </a>
          <a
            href="#career-experience"
            className="px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg transition-colors"
          >
            Career Experience
          </a>
          <a
            href="#expertise"
            className="px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg transition-colors"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-subtle rounded-lg transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/DatascienceTutor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-border-subtle bg-white text-text-muted hover:text-text-primary hover:bg-surface-subtle transition-colors focus:outline-none"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sreejith-vasudevan-b033a026/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-border-subtle bg-white text-text-muted hover:text-text-primary hover:bg-surface-subtle transition-colors focus:outline-none"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
          >
            <Send size={16} />
            Get in Touch
          </a>
          <div className="w-8 h-8 rounded-full bg-surface-subtle border border-border-subtle flex items-center justify-center shrink-0">
            <User size={18} className="text-text-secondary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
