import React from 'react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    role: 'Lead Software Engineer',
    company: 'Cengage Group',
    period: 'Oct 2023 - Present',
    description: 'Leading the project for updating a line of educational books, videos and meta data collection for an extensive modernization project. Created 7,256 figures, categorized, identified and extracted from a book series. Hired contractors, conducting interviews and hiring talent. Lead the project creating custom software in Node/Electron for categorization and annotation from start to finish.',
    technologies: ['Node.js', 'Electron', 'Ruby on Rails', 'Video Production', 'Software Design'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Realquantum',
    period: 'Jul 2022 - Jul 2023',
    description: 'Drove product development, authentication and geospatial (GIS) integration for a commercial real estate appraisal platform. Cultivated high-performing teams by implementing pair programming, robust testing, and a product-focused workflow.',
    technologies: ['Node.js', 'TypeScript', 'Auth0', 'AWS', 'Ruby on Rails', 'DevOps'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Bright Funds',
    period: 'Aug 2021 - Jul 2022',
    description: 'Added 23 languages to the platform with tooling and translation back-end. Developed a custom solution that rewrote over 30% of the code base and instantly added i18n tokens in all templates and JavaScript.',
    technologies: ['Node.js', 'TypeScript', 'Ruby on Rails', 'Heroku', 'Team Management'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Kicksite',
    period: 'Nov 2017 - Mar 2018',
    description: 'Senior full-stack Ruby on Rails developer working on re-designing and revamping major portions of the software platform.',
    technologies: ['Ruby on Rails', 'Heroku', 'OAuth', 'JavaScript'],
  },
  {
    role: 'Chief Technology Officer',
    company: 'Helpkin',
    period: 'Nov 2016 - Oct 2017',
    description: 'Helpkin is the new app for parents to share childcare with people they can trust. Leading the tech team to a beautiful product launch.',
    technologies: ['Node.js', 'Mobile App Dev', 'TypeScript', 'Team Management'],
  },
  {
    role: 'Chief Technology Officer',
    company: 'FAPL',
    period: 'Jul 2016 - Nov 2016',
    description: 'Bringing innovation to the fashion industry building a trail blazing social platform for fashion discovery.',
    technologies: ['Node.js', 'TypeScript', 'Mobile App Dev'],
  },
  {
    role: 'Senior Ruby Developer',
    company: 'Local Lighthouse',
    period: 'Sep 2014 - Mar 2015',
    description: 'Lead the integration and development of a big data scale business directory. Acquired large-scale marketing lead data from diverse sources.',
    technologies: ['JavaScript', 'Negotiation', 'Big Data'],
  },
  {
    role: 'Chief Technology Officer',
    company: 'Net Versa, LLC',
    period: 'Mar 2012 - Nov 2014',
    description: 'System Architect of a complex suite of products that automated business listings. Lead a team of up to 15 developers in building a multi-platform product base.',
    technologies: ['Team Management', 'Mobile App Dev', 'System Architecture'],
  },
  {
    role: 'Founder',
    company: 'Tradebitcoin.com',
    period: 'Oct 2009 - Jan 2013',
    description: 'First to market and market leader of online local Bitcoin trading that sounded a clarion call for a local-gap trading solution within the Bitcoin economy.',
    technologies: ['JavaScript', 'Negotiation', 'Bitcoin'],
  },
  {
    role: 'Chief Technology Officer',
    company: '4MatchR',
    period: 'Oct 2010 - Jan 2011',
    description: 'Team leader and system architect for a big data real estate listing aggregator. Combined all localized real estate listings in a user friendly interface.',
    technologies: ['Team Management', 'Big Data', 'Real Estate'],
  },
  {
    role: 'Chief Technology Officer',
    company: 'Learning Online, LLC',
    period: 'Apr 2005 - Nov 2008',
    description: 'Co-founder, architect and senior developer for an online learning platform that was a first to market courseware and curriculum marketplace named Scholar Square.',
    technologies: ['Team Management', 'Learning Systems', 'JavaScript'],
  }
];

const projects = [
  {
    name: 'Terminal Portfolio',
    description: 'A React-based interactive terminal portfolio website.',
    link: '#',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Legacy Migration Tool',
    description: 'Automated tool for migrating legacy databases to modern cloud infrastructure.',
    link: '#',
    tech: ['Python', 'AWS', 'PostgreSQL'],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="border-b border-terminal-dim/30 pb-4">
        <h1 className="text-2xl text-terminal-yellow font-bold mb-2">Experience & Projects</h1>
        <div className="text-terminal-dim text-sm">-- timeline --detailed</div>
      </div>

      <div className="space-y-8">
        <h2 className="text-xl text-terminal-cyan font-bold border-l-4 border-terminal-magenta pl-4">
          Professional Experience
        </h2>
        <div className="relative border-l border-terminal-dim/30 ml-2 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-terminal-bg border-2 border-terminal-cyan"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-lg font-bold text-terminal-text">{exp.role}</h3>
                <span className="text-terminal-dim font-mono text-sm whitespace-nowrap ml-2">{exp.period}</span>
              </div>
              <div className="text-terminal-magenta mb-2">{exp.company}</div>
              <p className="text-terminal-dim mb-3 max-w-2xl">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs border border-terminal-dim/50 px-2 py-0.5 rounded text-terminal-dim">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-xl text-terminal-green font-bold border-l-4 border-terminal-yellow pl-4">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-terminal-dim/30 p-4 hover:border-terminal-cyan transition-colors group">
              <h3 className="text-lg font-bold text-terminal-text mb-2 group-hover:text-terminal-cyan transition-colors">
                {project.name}
              </h3>
              <p className="text-terminal-dim text-sm mb-4 h-10">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                 {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-terminal-magenta">#{t}</span>
                 ))}
              </div>
              <a href={project.link} className="text-sm text-terminal-text underline decoration-terminal-dim hover:decoration-terminal-cyan">
                View Project -&gt;
              </a>
            </div>
          ))}
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

export default Experience;
