import React, { useState, useEffect } from 'react';
import { ExternalLink, Folder, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypingText } from '@/components/TypingText';
import { ROUTE_PATHS } from '@/lib/index';

interface Bookmark {
  name: string;
  url: string;
  description: string;
  type: 'file' | 'dir';
}

interface Category {
  category: string;
  items: Bookmark[];
}

const RESOURCE_DATA: Category[] = [
  {
    category: "Development_Frameworks",
    items: [
      { name: "React_Docs", url: "https://react.dev", description: "Official React documentation and learning resources.", type: 'file' },
      { name: "Tailwind_CSS", url: "https://tailwindcss.com", description: "Utility-first CSS framework for rapid UI development.", type: 'file' },
      { name: "TypeScript_Handbook", url: "https://www.typescriptlang.org/docs/", description: "Deep dive into type-safe JavaScript.", type: 'file' },
    ]
  },
  {
    category: "Architecture_&_Leadership",
    items: [
      { name: "High_Scalability", url: "http://highscalability.com", description: "Classic blog on building large scale systems.", type: 'file' },
      { name: "Martin_Fowler", url: "https://martinfowler.com", description: "Thought leader on software architecture and patterns.", type: 'file' },
      { name: "The_Pragmatic_Engineer", url: "https://blog.pragmaticengineer.com", description: "Engineering management and leadership insights.", type: 'file' },
    ]
  },
  {
    category: "Tools_&_Utilities",
    items: [
      { name: "Excalidraw", url: "https://excalidraw.com", description: "Virtual whiteboard for sketching hand-drawn diagrams.", type: 'file' },
      { name: "Regex101", url: "https://regex101.com", description: "Regular expression tester and debugger.", type: 'file' },
      { name: "JSON_Formatter", url: "https://jsonformatter.curiousconcept.com", description: "JSON validation and formatting tool.", type: 'file' },
    ]
  },
  {
    category: "Inspiration_&_Retro",
    items: [
      { name: "ASCII_Art_Archive", url: "https://www.asciiart.eu", description: "Huge collection of classic ASCII art.", type: 'file' },
      { name: "Cyberpunk_2077_UI", url: "https://www.artstation.com/artwork/9mB3yN", description: "UI/UX inspiration from Night City.", type: 'file' },
      { name: "WinAmp_Skin_Museum", url: "https://skins.webamp.org", description: "Nostalgic digital museum of media player skins.", type: 'file' },
    ]
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function UsefulSites() {
  const [showContent, setShowContent] = useState(false);
  const [currentTime] = useState(new Date().toLocaleString('en-US', { 
    month: 'short', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit' 
  }));

  return (
    <div className="max-w-5xl mx-auto space-y-8 font-mono">
      {/* Terminal Header Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-primary/60 text-sm">
          <ChevronRight className="w-4 h-4" />
          <span>LOCATION: {ROUTE_PATHS.USEFUL_SITES}</span>
        </div>
        <div className="flex flex-wrap gap-2 items-center text-lg">
          <span className="text-primary font-bold">dara@portfolio:~/bookmarks$</span>
          <TypingText 
            text="ls -la --group-directories-first"
            speed={40}
            onComplete={() => setShowContent(true)}
          />
        </div>
      </div>

      {showContent && (
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Pseudo-Table Header */}
          <div className="grid grid-cols-12 gap-4 border-b border-primary/20 pb-2 text-xs text-muted-foreground uppercase tracking-widest">
            <div className="col-span-2">Permissions</div>
            <div className="col-span-1">Owner</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-7">Name / Resource</div>
          </div>

          {RESOURCE_DATA.map((cat, idx) => (
            <motion.section key={cat.category} variants={itemVariants} className="space-y-4">
              {/* Category Folder Row */}
              <div className="grid grid-cols-12 gap-4 items-center group">
                <div className="col-span-2 text-primary/40 text-xs">drwxr-xr-x</div>
                <div className="col-span-1 text-primary/40 text-xs">dara</div>
                <div className="col-span-2 text-primary/40 text-xs">{currentTime}</div>
                <div className="col-span-7 flex items-center gap-3 text-primary">
                  <Folder className="w-5 h-5 fill-primary/10" />
                  <span className="text-xl font-bold tracking-tight">{cat.category}/</span>
                </div>
              </div>

              {/* Items in Category */}
              <div className="ml-8 sm:ml-12 space-y-3">
                {cat.items.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-12 gap-4 items-start group hover:bg-primary/5 p-2 rounded transition-colors"
                  >
                    <div className="col-span-2 text-muted-foreground/40 text-xs mt-1">-rw-r--r--</div>
                    <div className="col-span-1 text-muted-foreground/40 text-xs mt-1">dara</div>
                    <div className="col-span-2 text-muted-foreground/40 text-xs mt-1">{currentTime}</div>
                    <div className="col-span-7">
                      <div className="flex items-center gap-2 text-primary group-hover:underline">
                        <FileText className="w-4 h-4" />
                        <span className="font-semibold">{site.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {site.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Terminal Footer Info */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-primary/10 text-xs text-muted-foreground"
          >
            <p>Total items: {RESOURCE_DATA.reduce((acc, cat) => acc + cat.items.length, 0)} files, {RESOURCE_DATA.length} directories.</p>
            <p className="mt-1 animate-pulse">$ _</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
