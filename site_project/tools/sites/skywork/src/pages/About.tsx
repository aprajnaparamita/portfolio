import React from 'react';
import { TypingText } from '@/components/TypingText';
import { ROUTE_PATHS } from '@/lib/index';
import { ChevronRight, Terminal as TerminalIcon, Cpu, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-4 font-mono">
      {/* Terminal Prompt Header */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-primary/60">
          <TerminalIcon size={16} />
          <span className="text-sm">dara@portfolio:~$ cat about_me.md</span>
        </div>
        <div className="h-px w-full bg-primary/20" />
      </section>

      {/* Bio Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <ChevronRight size={20} className="animate-pulse" />
          <h1 className="text-2xl font-bold tracking-tight uppercase">Professional_Identity</h1>
        </div>
        
        <div className="pl-6 border-l-2 border-primary/10 space-y-4">
          <TypingText 
            text="Janet 'Dara' Jeffus is a high-performance CTO and Software Architect with over two decades of experience navigating the evolution of the digital landscape. From the early days of monolithic mainframes to the modern era of distributed cloud-native architectures, she has remained 'close to the metal' while leading teams through complex technical transformations."
            speed={15}
          />
          <TypingText 
            text="Currently focused on building resilient, scalable systems that solve real-world problems, Dara combines deep technical expertise with a human-centric approach to leadership. She believes that the best code is not just efficient, but intentional and maintainable."
            speed={15}
          />
        </div>
      </section>

      {/* Core Values / Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-primary/20 p-6 rounded-sm bg-primary/5 hover:bg-primary/10 transition-colors">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Cpu size={18} />
            <h2 className="font-bold uppercase">Tech_Philosophy</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Radical transparency and clean architecture. I advocate for 'boring' technology that works perfectly over 'shiny' tools that fail at scale. Engineering is a craft that requires discipline, empathy, and constant curiosity.
          </p>
        </div>

        <div className="border border-primary/20 p-6 rounded-sm bg-primary/5 hover:bg-primary/10 transition-colors">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Globe size={18} />
            <h2 className="font-bold uppercase">Global_Impact</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Leveraging open-source culture to democratize technical knowledge. I have scaled engineering organizations across 3 continents, fostering diverse environments where technical excellence and psychological safety coexist.
          </p>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Heart size={20} />
          <h2 className="text-xl font-bold uppercase">Personal_Directives</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
          <li className="flex items-center gap-2 text-sm opacity-80">
            <span className="text-primary">[+]</span> Retro-Computing & CRT Preservation
          </li>
          <li className="flex items-center gap-2 text-sm opacity-80">
            <span className="text-primary">[+]</span> High-Performance Distributed Systems
          </li>
          <li className="flex items-center gap-2 text-sm opacity-80">
            <span className="text-primary">[+]</span> Cyberpunk Literature & Sci-Fi Cinematics
          </li>
          <li className="flex items-center gap-2 text-sm opacity-80">
            <span className="text-primary">[+]</span> Mentoring Next-Gen Technical Leaders
          </li>
        </ul>
      </section>

      {/* Footer Command Hint */}
      <footer className="pt-12 flex flex-col items-center gap-4">
        <div className="text-xs text-primary/40 animate-pulse">
          --- EOF (End of File) ---
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to={ROUTE_PATHS.HOME} 
            className="text-xs border border-primary/30 px-3 py-1 hover:bg-primary hover:text-background transition-colors"
          >
            RETURN TO ROOT [CMD+1]
          </Link>
          <Link 
            to={ROUTE_PATHS.SKILLS} 
            className="text-xs border border-primary/30 px-3 py-1 hover:bg-primary hover:text-background transition-colors"
          >
            EXECUTE SKILLS_SCAN [CMD+3]
          </Link>
        </div>
        <p className="text-[10px] text-muted-foreground mt-4">
          © 2026 JANET 'DARA' JEFFUS | SYSTEM_VER: 4.2.0-STABLE
        </p>
      </footer>
    </div>
  );
};

export default About;