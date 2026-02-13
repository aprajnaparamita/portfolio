import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Briefcase, 
  Terminal, 
  Code, 
  ExternalLink, 
  ChevronRight, 
  Database, 
  Shield 
} from 'lucide-react';
import { TypingText } from '@/components/TypingText';
import { MENU_ITEMS } from '@/lib/index';

interface JobEntry {
  period: string;
  role: string;
  company: string;
  description: string[];
  tags: string[];
}

interface ProjectEntry {
  name: string;
  tech: string;
  details: string;
  link?: string;
}

const EXPERIENCE_DATA: JobEntry[] = [
  {
    period: "2021 - PRESENT",
    role: "CHIEF TECHNOLOGY OFFICER",
    company: "QUANTUM SYSTEMS INC.",
    description: [
      "Spearheaded architectural overhaul of distributed microservices architecture.",
      "Managed a cross-functional team of 45+ engineers and product managers.",
      "Reduced operational overhead by 40% through automated CI/CD and infrastructure-as-code."
    ],
    tags: ["Strategy", "Architecture", "Scale", "Leadership"]
  },
  {
    period: "2016 - 2021",
    role: "VP OF ENGINEERING",
    company: "CYBER-GRID SOLUTIONS",
    description: [
      "Directed the development of a real-time cybersecurity monitoring platform.",
      "Implemented agile transformation across the engineering department.",
      "Mentored senior developers into leadership roles, fostering a culture of excellence."
    ],
    tags: ["Management", "Cybersecurity", "Agile", "Mentorship"]
  },
  {
    period: "2010 - 2016",
    role: "PRINCIPAL SOFTWARE ARCHITECT",
    company: "DATA-FLOW CORP",
    description: [
      "Lead architect for a high-throughput data processing engine using C++ and Rust.",
      "Optimized query performance by 300% for petabyte-scale datasets.",
      "Authored internal whitepapers on low-latency networking and concurrency."
    ],
    tags: ["C++", "Rust", "Big Data", "Performance"]
  }
];

const PROJECTS: ProjectEntry[] = [
  {
    name: "TERMINAL-UI-CORE",
    tech: "React, TS, Framer Motion",
    details: "A high-performance terminal emulator component library for web-based CLI tools.",
    link: "https://github.com/aprajnaparamita/terminal-ui"
  },
  {
    name: "NEO-SCANNER-V3",
    tech: "Go, Python, eBPF",
    details: "System-level monitoring tool designed for low-overhead observability in Linux environments.",
    link: "https://github.com/aprajnaparamita/neo-scanner"
  },
  {
    name: "DISTRIBUTED-LEDGER-DB",
    tech: "Rust, gRPC",
    details: "Experimental ACID-compliant database with decentralized replication protocols."
  }
];

const Experience = () => {
  const currentMenuItem = MENU_ITEMS.find(item => item.id === '4');

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Terminal Command Header */}
      <div className="border-b border-primary/20 pb-6">
        <div className="flex items-center gap-2 text-primary mb-2 opacity-80">
          <Terminal size={18} />
          <span className="text-sm font-mono">guest@dara-jeffus:~ $ {currentMenuItem?.command}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter text-primary flex items-center gap-3">
          <Briefcase className="text-primary" />
          <TypingText text="WORK_HISTORY.LOG" speed={50} />
        </h1>
      </div>

      {/* Professional Experience Timeline */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 text-primary/60 mb-6">
          <ChevronRight size={16} />
          <span className="text-xs tracking-[0.2em] font-bold">CAREER_TIMELINE</span>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-12">
          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[41px] top-1 w-4 h-4 bg-background border-2 border-primary rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                    <Calendar size={14} />
                    {job.period}
                  </div>
                </div>
                
                <div className="text-secondary-foreground font-semibold flex items-center gap-2">
                  <span className="text-primary">@</span>
                  {job.company}
                </div>

                <ul className="space-y-2 mt-4">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      <span className="text-primary mt-1">-&gt;</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 text-[10px] border border-primary/30 text-primary/70 font-mono uppercase tracking-wider bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="space-y-8 pt-8 border-t border-primary/10">
        <div className="flex items-center gap-2 text-primary/60 mb-6">
          <ChevronRight size={16} />
          <span className="text-xs tracking-[0.2em] font-bold">FEATURED_PROJECTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className="group border border-primary/20 bg-primary/5 p-5 hover:border-primary/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <Code size={14} className="text-primary" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-primary group-hover:underline cursor-pointer">
                    {project.name}
                  </h4>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary/50 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60">
                  <Database size={10} />
                  {project.tech}
                </div>

                <p className="text-xs text-foreground/70 leading-relaxed">
                  {project.details}
                </p>
              </div>

              {/* Decorative Scanline Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 bg-gradient-to-b from-primary/20 via-transparent to-primary/20 bg-[length:100%_4px]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Terminal Footer Info */}
      <div className="pt-12 flex items-center justify-between text-[10px] font-mono text-primary/40 uppercase tracking-[0.3em]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Shield size={10} />
            SECURE_CONNECTION: AES-256
          </div>
          <span>LATENCY: 12ms</span>
        </div>
        <div>© 2026 JEFFUS_OPERATING_SYSTEM</div>
      </div>
    </div>
  );
};

export default Experience;