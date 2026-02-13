import React from 'react';
import { TerminalShell } from "@/components/TerminalShell";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Main layout wrapper for the Janet 'Dara' Jeffus portfolio.
 * Provides the terminal shell environment, CRT effects, and consistent page structure.
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* 
        TerminalShell provides the authentic terminal emulator appearance 
        including scanlines, CRT flicker, and the glowing border.
      */}
      <TerminalShell className="min-h-screen flex flex-col">
        <main className="relative z-10 flex-grow max-w-5xl mx-auto w-full px-6 py-12 md:py-20">
          <div className="animate-in fade-in duration-700">
            {children}
          </div>
          
          {/* Consistent footer within the terminal shell */}
          <footer className="mt-24 pt-8 border-t border-primary/10 text-[10px] md:text-xs font-mono text-muted-foreground/60 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>© 2026 JANET 'DARA' JEFFUS // CTO & SOFTWARE ENGINEER</span>
            </div>
            <div className="flex gap-6 uppercase tracking-widest">
              <span>v4.0.0-cyan</span>
              <span className="hidden md:inline">BPM: 120</span>
              <span className="hidden md:inline">SECURE_LINK: ACTIVE</span>
            </div>
          </footer>
        </main>
      </TerminalShell>
    </div>
  );
}
