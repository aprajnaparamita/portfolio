import React from 'react';
import { Link } from 'react-router-dom';

// Extracted from resume.json
const resumeSkills = {
  languages: [
    'Ruby', 'JavaScript', 'TypeScript', 'Node.js', 'Flutter', 'Dart', 'PHP'
  ],
  frameworks: [
    'Ruby on Rails', 'React', 'Electron', 'Express', 'Heroku', 'AWS'
  ],
  leadership: [
    'Team Management', 'Negotiation', 'Strategic Leadership', 'Mentorship', 'Software Design', 'System Architecture'
  ],
  other: [
    'DevOps', 'Linux', 'Video Production', 'Learning Systems', 'OAuth', 'Big Data', 'Legacy Systems'
  ]
};

const Skills: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-terminal-dim/30 pb-4">
        <h1 className="text-2xl text-terminal-cyan font-bold mb-2">Skills & Technologies</h1>
        <div className="text-terminal-dim text-sm">-- list --all</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-3">
          <h3 className="text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block">
            PROGRAMMING LANGUAGES
          </h3>
          <ul className="space-y-1">
            {resumeSkills.languages.map((item, i) => (
              <li key={i} className="flex items-center text-sm md:text-base">
                <span className="text-terminal-green mr-2">$</span>
                <span className="text-terminal-text hover:text-terminal-yellow transition-colors cursor-default">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block">
            FRAMEWORKS & INFRASTRUCTURE
          </h3>
          <ul className="space-y-1">
            {resumeSkills.frameworks.map((item, i) => (
              <li key={i} className="flex items-center text-sm md:text-base">
                <span className="text-terminal-green mr-2">$</span>
                <span className="text-terminal-text hover:text-terminal-yellow transition-colors cursor-default">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block">
            LEADERSHIP & MANAGEMENT
          </h3>
          <ul className="space-y-1">
            {resumeSkills.leadership.map((item, i) => (
              <li key={i} className="flex items-center text-sm md:text-base">
                <span className="text-terminal-green mr-2">$</span>
                <span className="text-terminal-text hover:text-terminal-yellow transition-colors cursor-default">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block">
            SPECIALIZATIONS & OTHER
          </h3>
          <ul className="space-y-1">
            {resumeSkills.other.map((item, i) => (
              <li key={i} className="flex items-center text-sm md:text-base">
                <span className="text-terminal-green mr-2">$</span>
                <span className="text-terminal-text hover:text-terminal-yellow transition-colors cursor-default">
                  {item}
                </span>
              </li>
            ))}
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

export default Skills;
