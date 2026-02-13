import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="space-y-6 max-w-2xl animate-fade-in">
      <div className="border-b border-terminal-dim/30 pb-4 mb-6">
        <h1 className="text-2xl text-terminal-magenta font-bold mb-2">About Me</h1>
        <div className="text-terminal-dim text-sm">-- bio --verbose</div>
      </div>

      <div className="space-y-4 text-terminal-text leading-relaxed">
        <p>
          I'm <span className="text-terminal-cyan font-bold">Janet "Dara" Jeffus</span>, a software engineer and technology leader with over <span className="text-terminal-yellow">20 years of experience</span> building teams, products, and companies.
        </p>
        
        <p>
          My career spans from low-level systems programming to executive leadership, always maintaining a hands-on technical approach. I believe in the <span className="text-terminal-green">Unix philosophy</span>, open source collaboration, and building elegant solutions to complex problems.
        </p>

        <p>
          I'm passionate about mentoring engineers, building inclusive technical cultures, and pushing the boundaries of what's possible with code.
        </p>

        <div className="mt-8 p-4 border border-terminal-dim/30 bg-terminal-dim/5 rounded">
            <h3 className="text-terminal-yellow mb-2 font-bold">Character Sheet</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><span className="text-terminal-dim">Class:</span> Technologist / Hacker</li>
                <li><span className="text-terminal-dim">Level:</span> 20+ (Veteran)</li>
                <li><span className="text-terminal-dim">Alignment:</span> Chaotic Good</li>
                <li><span className="text-terminal-dim">Specialty:</span> Systems & Leadership</li>
                <li><span className="text-terminal-dim">Location:</span> /dev/world</li>
            </ul>
        </div>
      </div>

      <div className="pt-8">
        <Link to="/" className="text-terminal-dim hover:text-terminal-cyan transition-colors">
          &lt; Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default About;
