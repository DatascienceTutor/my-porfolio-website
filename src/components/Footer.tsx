import React from "react";
import { Mail, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border-subtle pt-16 pb-8 mt-12" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] text-primary uppercase font-bold tracking-widest">
              LET&apos;S CONNECT
            </div>
            <h2 className="text-2xl font-bold text-navy-dark">Let&apos;s build meaningful AI solutions.</h2>
            <p className="text-text-secondary max-w-md">
              Open to senior AI leadership and architecture opportunities, <br/>
              and collaboration on AI and open-source projects.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="mailto:mvsreejith0@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all shadow-sm"
              >
                <Mail size={16} />
                <span>Get in touch</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-col gap-3 bg-surface-subtle p-5 rounded-xl border border-border-subtle min-w-[240px]">
              <div className="flex items-center gap-3 text-sm text-navy-dark font-medium">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Kochi, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-navy-dark font-medium">
                <Globe className="text-primary shrink-0" size={18} />
                <span>English / Malayalam</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border-subtle gap-4">
          <p className="text-xs text-text-muted font-medium">
            &copy; 2026 Sreejith Vasudevan
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-text-secondary">
            <a href="https://www.linkedin.com/in/sreejith-vasudevan-b033a026/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/DatascienceTutor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
