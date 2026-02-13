import React from 'react';
import { TypingText } from "@/components/TypingText";
import { ROUTE_PATHS } from "@/lib/index";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  Music, 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  Terminal 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Contact page component for Janet 'Dara' Jeffus.
 * Displays contact information and social links in a terminal-style card format.
 */
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0 space-y-12 font-mono">
      {/* Command Line Prompt */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-primary font-bold">dara@portfolio</span>
          <span>:</span>
          <span className="text-accent">~</span>
          <span>$</span>
          <TypingText text=" finger darajeffus" speed={40} />
        </div>
      </section>

      {/* Main Contact Card Interface */}
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="border border-primary/20 bg-primary/5 p-6 md:p-8 rounded-sm relative overflow-hidden"
      >
        {/* Subtle Scanline Overlay Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%]" />

        <div className="relative z-10 space-y-8">
          {/* Profile Header Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-primary/20 pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Terminal className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary tracking-tight uppercase">Janet 'Dara' Jeffus</h2>
                  <p className="text-sm text-muted-foreground">CTO / Software Architect</p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p><span className="text-primary opacity-70">ID:</span> 0x8273-DARAVCORE</p>
                <p><span className="text-primary opacity-70">STATUS:</span> ACTIVE_LISTENING</p>
                <p><span className="text-primary opacity-70">LOC:</span> Austin, TX / Remote_Link</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm space-y-1 bg-black/30 p-4 border border-primary/10">
                <p><span className="text-primary">LOGIN:</span> dara</p>
                <p><span className="text-primary">SHELL:</span> /bin/zsh</p>
                <p><span className="text-primary">SINCE:</span> 2000-01-01</p>
                <p className="flex items-start gap-2">
                  <span className="text-primary shrink-0">BIO:</span>
                  <span className="text-xs leading-relaxed">
                    20+ years building high-scale systems. Hacker culture enthusiast. Engineering leader focused on elegant technical solutions.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Communication Channels */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-primary/20" />
              <h3 className="text-xs font-bold text-primary tracking-[0.3em] uppercase px-4 whitespace-nowrap">[ Direct_Comms ]</h3>
              <div className="h-px flex-1 bg-primary/20" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="mailto:darajeffus@gmail.com" 
                className="flex items-center gap-4 p-4 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Primary Email</span>
                  <span className="text-sm truncate">darajeffus@gmail.com</span>
                </div>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://linkedin.com/in/darajeffus" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">LinkedIn</span>
                  <span className="text-sm truncate">Janet Dara Jeffus</span>
                </div>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Social Presence */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-primary/20" />
              <h3 className="text-xs font-bold text-primary tracking-[0.3em] uppercase px-4 whitespace-nowrap">[ Digital_Footprint ]</h3>
              <div className="h-px flex-1 bg-primary/20" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="https://github.com/aprajnaparamita" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 p-4 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <Github className="w-5 h-5 text-primary" />
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">GitHub</span>
                  <span className="text-sm">@aprajnaparamita</span>
                </div>
              </a>

              <a 
                href="https://instagram.com/darabuilds" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 p-4 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <Instagram className="w-5 h-5 text-primary" />
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Instagram</span>
                  <span className="text-sm">@darabuilds</span>
                </div>
              </a>

              <a 
                href="https://tiktok.com/@darabuilds" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 p-4 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <Music className="w-5 h-5 text-primary" />
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">TikTok</span>
                  <span className="text-sm">@darabuilds</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Navigation & Footer */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-primary font-bold">dara@portfolio</span>
          <span>:</span>
          <span className="text-accent">~</span>
          <span>$</span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-primary ml-1"
          />
        </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <Link 
            to={ROUTE_PATHS.HOME} 
            className="text-primary hover:text-white flex items-center gap-2 group"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span className="border-b border-transparent group-hover:border-primary">[1] CD_ROOT</span>
          </Link>
          <Link 
            to={ROUTE_PATHS.EXPERIENCE} 
            className="text-primary hover:text-white flex items-center gap-2 group"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span className="border-b border-transparent group-hover:border-primary">[4] VIEW_EXPERIENCE</span>
          </Link>
        </div>
      </section>
      
      <footer className="pt-16 pb-8 text-center text-[10px] text-muted-foreground uppercase tracking-[0.4em] opacity-50">
        © 2026 JEFFUS_CORE // TERMINAL_V4.2.0 // EST_2026
      </footer>
    </div>
  );
}
