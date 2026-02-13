import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text font-mono p-4 md:p-8 flex flex-col">
      <div className="max-w-4xl mx-auto w-full border border-terminal-dim/30 bg-black/50 shadow-2xl rounded-lg overflow-hidden flex flex-col flex-grow h-[85vh]">
        {/* Terminal Header */}
        <div className="bg-terminal-dim/10 p-2 flex items-center justify-between border-b border-terminal-dim/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="text-xs text-terminal-dim">dara@portfolio: ~</div>
          <div className="w-10"></div>
        </div>

        {/* Terminal Content */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar">
            <Outlet />
        </div>
        
        {/* Status Bar / Hints */}
        <div className="bg-terminal-dim/10 p-2 text-xs text-terminal-dim border-t border-terminal-dim/30 flex justify-between">
            <span>MODE: INTERACTIVE</span>
            <span>TYPE 1-9 TO NAVIGATE</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
