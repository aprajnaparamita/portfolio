import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Instagram, Video } from 'lucide-react';

const Contact: React.FC = () => {
  const contacts = [
    { label: 'Email', value: 'darajeffus@gmail.com', href: 'mailto:darajeffus@gmail.com', icon: Mail },
    { label: 'LinkedIn', value: 'janet-jeffus-b0709720', href: 'https://www.linkedin.com/in/janet-jeffus-b0709720/', icon: Linkedin },
    { label: 'GitHub', value: 'aprajnaparamita', href: 'https://github.com/aprajnaparamita', icon: Github },
    { label: 'TikTok', value: '@darabuilds', href: 'https://www.tiktok.com/@darabuilds', icon: Video },
    { label: 'Instagram', value: '@darabuilds', href: 'https://www.instagram.com/darabuilds', icon: Instagram },
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-2xl">
      <div className="border-b border-terminal-dim/30 pb-4 mb-6">
        <h1 className="text-2xl text-terminal-green font-bold mb-2">Contact & Social Links</h1>
        <div className="text-terminal-dim text-sm">-- ping --all</div>
      </div>

      <p className="text-terminal-text mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <a 
            key={index} 
            href={contact.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 border border-terminal-dim/20 hover:bg-terminal-dim/10 hover:border-terminal-cyan transition-all group"
          >
            <contact.icon className="w-5 h-5 text-terminal-magenta mr-4 group-hover:text-terminal-cyan transition-colors" />
            <div className="flex-grow">
              <span className="text-terminal-dim text-sm block">{contact.label}</span>
              <span className="text-terminal-text font-mono group-hover:text-terminal-yellow transition-colors">{contact.value}</span>
            </div>
            <span className="text-terminal-dim opacity-0 group-hover:opacity-100 transition-opacity text-xs">&gt;</span>
          </a>
        ))}
      </div>

      <div className="pt-8">
        <Link to="/" className="text-terminal-dim hover:text-terminal-cyan transition-colors">
          &lt; Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Contact;
