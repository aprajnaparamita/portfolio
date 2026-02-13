import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './components/components.css';
import './components/pages/pages.css';
import TypedOutput from './components/TypedOutput';
import { About, Skills, Experience, UsefulSites, Contact, NotFound } from './components/pages';

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const App: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState('dark');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const asciiArt = `
  ____    _    ____     _
 |  _ \\  / \\  |  _ \\   / \\
 | | | |/ _ \\ | |_) | / _ \\
 | |_| / ___ \\|  _ < / ___ \\
 |____/_/   \\_\\_| \\_\\_/   \\_\\
`;

  const MainMenu = () => (
    <div>
      <p>Available commands:</p>
      <ul>
        <li>1. About Me</li>
        <li>2. Skills & Technologies</li>
        <li>3. Experience & Projects</li>
        <li>4. Useful Sites</li>
        <li>5. Contact & Social Links</li>
        <li>help</li>
        <li>ls</li>
        <li>whoami</li>
        <li>clear</li>
        <li>home</li>
        <li>theme</li>
      </ul>
    </div>
  )

  const commands: { [key: string]: React.ReactNode } = {
    '1': <About />,
    '2': <Skills />,
    '3': <Experience />,
    '4': <UsefulSites />,
    '5': <Contact />,
    'about': <About />,
    'skills': <Skills />,
    'experience': <Experience />,
    'sites': <UsefulSites />,
    'contact': <Contact />,
    'help': <MainMenu />,
    'menu': <MainMenu />,
    ls: 'About.tsx  Contact.tsx  Experience.tsx  NotFound.tsx  Skills.tsx  UsefulSites.tsx  index.ts  pages.css',
    whoami: 'guest',
    clear: 'Clearing...',
    home: 'Welcome home!',
  };

  const themes = ['dark', 'light', 'solarized'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.toLowerCase().trim();
    const [cmd, ...args] = command.split(' ');
    let output: React.ReactNode;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'home') {
      setHistory([]);
      setInput('');
      return;
    }
    
    if (cmd === 'theme') {
      if (args.length > 0 && themes.includes(args[0])) {
        setTheme(args[0]);
        output = `Theme set to ${args[0]}`;
      } else {
        output = (
          <div>
            <p>Usage: theme [theme-name]</p>
            <p>Available themes: {themes.join(', ')}</p>
          </div>
        );
      }
    } else if (commands[cmd]) {
      output = commands[cmd];
    } else {
      output = <NotFound command={command} />;
    }

    setHistory([...history, { command, output }]);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      if (history.length > 0) {
        const newHistoryIndex = historyIndex + 1;
        if (newHistoryIndex < history.length) {
          setHistoryIndex(newHistoryIndex);
          setInput(history[history.length - 1 - newHistoryIndex].command);
        }
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const newHistoryIndex = historyIndex - 1;
        setHistoryIndex(newHistoryIndex);
        setInput(history[history.length - 1 - newHistoryIndex].command);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App" onClick={() => inputRef.current?.focus()}>
      <div className="terminal" ref={terminalRef}>
        <header>
          <pre>{asciiArt}</pre>
          <TypedOutput text="Janet 'Dara' Jeffus - CTO & Software Engineer | 20+ Years" />
        </header>
        <main>
          <TypedOutput text="Welcome to my terminal." />
          <TypedOutput text="Type 'help' for a list of commands." />
          <div className="history">
            {history.map((item, index) => (
              <div key={index}>
                <div className="prompt-line">
                  <span className="prompt">$&gt;</span>
                  <span>{item.command}</span>
                </div>
                <div>{item.output}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="prompt-line">
              <span className="prompt">$&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="terminal-input"
              />
              <span className="cursor" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default App;

