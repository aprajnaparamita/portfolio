import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';
import { MENU_ITEMS, ROUTE_PATHS } from '@/lib/index';
import { TypingText } from '@/components/TypingText';
import { ASCIIArt } from '@/components/ASCIIArt';

const ASCII_LOGO = `
      _                      _      ____                  
     | | __ _ _ __   ___  __| |    |  _ \  __ _ _ __ __ _ 
  _  | |/ _' | '_ \ / _ \/ _' |    | | | |/ _' | '__/ _' |
 | |_| | (_| | | | |  __/ (_| |    | |_| | (_| | | | (_| |
  \___/ \__,_|_| |_|\___|\__,_|    |____/ \__,_|_|  \__,_|
                                                          
       >>> CHIEF TECHNOLOGY OFFICER | ARCHITECT <<<
`;

const BOOT_LOGS = [
  "[  OK  ] Initializing JanetOS v2.0.26...",
  "[  OK  ] Loading kernel modules: crypto, networking, vision",
  "[  OK  ] Mounting /dev/brain to /mnt/experience",
  "[  OK  ] Establishing secure uplink to dara@jeffus.io",
  "[  OK  ] Checking technical dependencies... OK",
  "[  OK  ] Access Granted. User: GUEST_SESSION",
  "\n$ whoami",
  "Janet 'Dara' Jeffus - Technology Leader & Software Architect",
  "\n$ ls -la /welcome",
];

export default function Home() {
  const [bootStep, setBootStep] = useState(0);
  const [showMain, setShowMain] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (bootStep < BOOT_LOGS.length) {
      const timer = setTimeout(() => {
        setBootStep((prev) => prev + 1);
      }, 150 + Math.random() * 200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowMain(true), 500);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)] font-mono text-primary">
      {/* Boot Sequence */}
      <div className="flex flex-col mb-8">
        {BOOT_LOGS.slice(0, bootStep).map((log, index) => (
          <div key={index} className="mb-1">
            {log.startsWith('[  OK  ]') ? (
              <span className="opacity-70">{log}</span>
            ) : (
              <span className="text-primary font-bold">{log}</span>
            )}
          </div>
        ))}
        {bootStep < BOOT_LOGS.length && (
          <span className="animate-pulse inline-block w-2 h-4 bg-primary ml-1" />
        )}
      </div>

      <AnimatePresence>
        {showMain && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* ASCII Art Logo */}
            <div className="overflow-x-auto">
              <ASCIIArt art={ASCII_LOGO} className="text-primary drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]" />
            </div>

            {/* Intro Text */}
            <div className="max-w-2xl">
              <TypingText 
                text="Welcome to my terminal. I am a Chief Technology Officer with 20+ years of experience building scalable systems and leading high-performance engineering teams. This interface provides a direct access point to my professional history, technical stack, and curated resources."
                speed={20}
                onComplete={() => setShowMenu(true)}
              />
            </div>

            {/* Numbered Menu System */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-2 mb-4 opacity-50">
                <Terminal size={16} />
                <span className="text-xs uppercase tracking-widest">Main Menu Options</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MENU_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={showMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="group flex flex-col p-3 border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-primary/40 font-bold group-hover:text-primary transition-colors">
                          [{item.id}]
                        </span>
                        <span className="text-primary group-hover:underline decoration-primary/40 underline-offset-4">
                          {item.command}
                        </span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-2 text-xs text-primary/60 group-hover:text-primary/90 pl-8">
                        {item.description}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Command Prompt Footer */}
            {showMenu && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 flex items-center gap-2 border-t border-primary/10 pt-6"
              >
                <span className="text-primary font-bold">guest@janet-os:~$</span>
                <span className="animate-pulse w-3 h-6 bg-primary" />
                <span className="text-xs text-primary/30 italic ml-4">
                  Type a number or click a command to navigate...
                </span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Scanlines Overlay handled by Global CSS but can be enhanced here if needed */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] z-50" />
    </div>
  );
}
