import React, { useState, useEffect } from 'react';
import { TypingText } from '@/components/TypingText';
import { MENU_ITEMS } from '@/lib/index';
import { motion } from 'framer-motion';
import { Cpu, Code, Shield, Users, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

interface SkillCategory {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const SKILL_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Rust', 'C++', 'SQL'],
    icon: <Code className="w-4 h-4" />
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'WebAssembly'],
    icon: <TerminalIcon className="w-4 h-4" />
  },
  {
    title: 'Backend/Cloud',
    items: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Supabase'],
    icon: <Cpu className="w-4 h-4" />
  },
  {
    title: 'Leadership',
    items: ['CTO Strategy', 'Team Scaling', 'Agile/Scrum', 'Mentorship', 'Budgeting'],
    icon: <Users className="w-4 h-4" />
  },
  {
    title: 'DevOps/Sec',
    items: ['CI/CD Pipelines', 'TDD', 'OWASP Top 10', 'Infrastructure as Code'],
    icon: <Shield className="w-4 h-4" />
  }
];

const ASCII_TABLE_HEADER = `
+-----------------------+-------------------------------------------------------+
| CATEGORY              | TECH STACK & PROFICIENCIES                            |
+-----------------------+-------------------------------------------------------+`;

const ASCII_TABLE_FOOTER = `+-----------------------+-------------------------------------------------------+`;

export default function Skills() {
  const [showTable, setShowTable] = useState(false);
  const currentMenu = MENU_ITEMS.find(m => m.id === '3');

  useEffect(() => {
    const timer = setTimeout(() => setShowTable(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col space-y-8 animate-in fade-in duration-700">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <span className="opacity-50">janet@dara-os:~$</span>
          <TypingText text={currentMenu?.command || 'ls -la /bin/tech'} speed={40} />
        </div>
        <div className="text-muted-foreground text-sm italic">
          <TypingText 
            text="Scanning local binaries and system capabilities..."
            speed={20}
            showCursor={false}
          />
        </div>
      </div>

      {showTable && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono overflow-x-auto"
        >
          <pre className="text-primary text-[10px] md:text-sm leading-tight whitespace-pre">
            {ASCII_TABLE_HEADER}
            {SKILL_DATA.map((cat, idx) => (
              <React.Fragment key={idx}>
                <tr className="flex">
                  <td className="border-l border-primary px-4 py-2 w-[184px] md:w-[224px] flex items-center gap-2">
                    {cat.icon}
                    <span className="uppercase tracking-wider">{cat.title}</span>
                  </td>
                  <td className="border-l border-r border-primary px-4 py-2 flex-1 text-foreground">
                    {cat.items.join(', ')}
                  </td>
                </tr>
                {idx < SKILL_DATA.length - 1 && (
                  <div className="border-t border-primary border-dashed opacity-30" />
                )}
              </React.Fragment>
            ))}
            {ASCII_TABLE_FOOTER}
          </pre>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-primary/20 bg-primary/5 rounded-sm">
              <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                CORE_SPECIALIZATION.exe
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                Over 20 years of experience architectural design and full-stack implementation. 
                Expertise in building scalable distributed systems and high-performance 
                web applications using modern React ecosystems and Go-based backends.
              </p>
            </div>

            <div className="p-4 border border-primary/20 bg-primary/5 rounded-sm">
              <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                LEADERSHIP_MODULE.sh
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                Proven track record as a technical executive (CTO/VP Eng). Focused on 
                developer experience, engineering culture, and aligning technical debt 
                reduction with business velocity.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-primary/60 text-xs animate-pulse">
            <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
            SYSTEM STATUS: ALL SYSTEMS OPERATIONAL | YEAR: 2026
          </div>
        </motion.div>
      )}
    </div>
  );
}
