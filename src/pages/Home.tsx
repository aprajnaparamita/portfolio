import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TypingText from '../components/TypingText';
import profileImg from '../assets/profile.png';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { key: '1', label: 'About Me', path: '/about' },
    { key: '2', label: 'Skills & Technologies', path: '/skills' },
    { key: '3', label: 'Experience & Projects', path: '/experience' },
    { key: '4', label: 'Useful Sites', path: '/useful-sites' },
    { key: '5', label: 'Contact & Social Links', path: '/contact' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const item = menuItems.find((item) => item.key === e.key);
      if (item) {
        navigate(item.path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="space-y-6">
      <div className="mb-8 flex justify-center">
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-terminal-cyan overflow-hidden group cursor-pointer">
          <img 
            src={profileImg} 
            alt="Janet 'Dara' Jeffus" 
            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-terminal-cyan mix-blend-color opacity-60 transition-opacity duration-500 group-hover:opacity-0"></div>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-terminal-text font-bold mb-1">
          <TypingText 
            text="Janet 'Dara' Jeffus" 
            speed={50}
            onComplete={() => setShowTitle(true)}
          />
        </h1>
        {showTitle && (
          <p className="text-terminal-text">
            <TypingText 
              text="CEO & Software Engineer | 20+ Years Experience" 
              speed={30}
              onComplete={() => setShowMenu(true)}
            />
          </p>
        )}
      </div>

      {showMenu && (
        <div className="mt-2 space-y-1">
          <p className="text-terminal-yellow mb-2">Select an option:</p>
          <div className="grid gap-1">
            {menuItems.map((item) => (
              <div 
                key={item.key}
                onClick={() => navigate(item.path)}
                className="group flex items-center cursor-pointer hover:bg-terminal-dim/20 p-1 rounded transition-colors"
              >
                <span className="text-terminal-magenta font-bold mr-4">[{item.key}]</span>
                <span className="text-terminal-text group-hover:text-terminal-cyan transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {showMenu && (
        <div className="mt-4 flex items-center gap-2 text-terminal-dim animate-pulse">
            <span>&gt;</span>
            <span className="w-2 h-4 bg-terminal-cyan block animate-blink"></span>
        </div>
      )}
    </div>
  );
};

export default Home;
