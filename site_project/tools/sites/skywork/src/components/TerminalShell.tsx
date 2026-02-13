import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ROUTE_PATHS } from '@/lib/index';

interface TerminalShellProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalShell({ children, className }: TerminalShellProps) {
  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground font-mono selection:bg-primary/30 selection:text-primary overflow-x-hidden relative",
      className
    )}>
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
        <div 
          className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"
          style={{ animation: 'flicker 0.15s infinite' }}
        />
      </div>

      {/* Static Scanline Animation Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.02] bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,255,0.1)_50%)] bg-[length:100%_2px]" />

      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-5xl border border-primary/20 rounded-lg shadow-[0_0_40px_rgba(0,255,255,0.05)] bg-card/40 backdrop-blur-md relative overflow-hidden"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/40 hover:bg-destructive/60 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-chart-3/40 hover:bg-chart-3/60 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-primary/40 hover:bg-primary/60 transition-colors cursor-pointer" />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <Terminal size={12} className="text-primary/60" />
                <span className="tracking-tight font-light">
                  guest@dara-cli: {ROUTE_PATHS.HOME}
                </span>
              </div>
            </div>
            
            <div className="text-[10px] sm:text-xs text-primary/40 uppercase tracking-widest font-bold">
              VT100 Terminal Emulator
            </div>
            
            <div className="w-16" />
          </div>

          {/* Main Terminal Area */}
          <div className="relative p-6 md:p-10 min-h-[60vh] md:min-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            {/* Subtle glow effect behind content */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
            
            <div className="relative z-10">
              {children}
            </div>

            {/* Terminal Bottom Info Line */}
            <div className="mt-12 pt-8 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-primary/30">
              <div>[SESSION_ID: {Math.random().toString(36).substring(7).toUpperCase()}]</div>
              <div>ENCRYPTION: AES-256-GCM</div>
              <div>STATUS: READY</div>
            </div>
          </div>
        </motion.div>

        {/* Footnote Decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-[10px] text-primary/40 tracking-[0.2em] uppercase"
        >
          © 2026 Janet 'Dara' Jeffus | Technical Leadership & Engineering
        </motion.div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flicker {
          0% { opacity: 0.02761; }
          5% { opacity: 0.0486; }
          10% { opacity: 0.09156; }
          15% { opacity: 0.01528; }
          20% { opacity: 0.08518; }
          25% { opacity: 0.03524; }
          30% { opacity: 0.04609; }
          35% { opacity: 0.09803; }
          40% { opacity: 0.04593; }
          45% { opacity: 0.04824; }
          50% { opacity: 0.03851; }
          55% { opacity: 0.01181; }
          60% { opacity: 0.01559; }
          65% { opacity: 0.09303; }
          70% { opacity: 0.05059; }
          75% { opacity: 0.02633; }
          80% { opacity: 0.07006; }
          85% { opacity: 0.01519; }
          90% { opacity: 0.09356; }
          95% { opacity: 0.04693; }
          100% { opacity: 0.02435; }
        }
      `}} />
    </div>
  );
}
