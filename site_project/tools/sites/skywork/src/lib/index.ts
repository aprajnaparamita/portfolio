/**
 * Route constants for the terminal portfolio application.
 */
export const ROUTE_PATHS = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  USEFUL_SITES: '/useful-sites',
  CONTACT: '/contact',
} as const;

/**
 * Interface for terminal command objects used throughout the CLI interface.
 */
export interface TerminalCommand {
  command: string;
  description: string;
  action?: () => void;
}

/**
 * Utility function to simulate a typing effect.
 * @param text The string to type out.
 * @param callback Callback function received at each character step.
 * @param speed Typing speed in milliseconds per character.
 */
export const typeWriter = async (
  text: string,
  callback: (text: string) => void,
  speed: number = 30
): Promise<void> => {
  let displayed = "";
  for (let i = 0; i < text.length; i++) {
    displayed += text[i];
    callback(displayed);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

/**
 * Navigation menu items for the terminal-style numbered menu system (1-6).
 */
export const MENU_ITEMS = [
  {
    id: '1',
    label: 'Home',
    path: ROUTE_PATHS.HOME,
    command: 'cd ~',
    description: 'Return to the landing interface.'
  },
  {
    id: '2',
    label: 'About',
    path: ROUTE_PATHS.ABOUT,
    command: 'cat about.md',
    description: 'Read bio and professional philosophy.'
  },
  {
    id: '3',
    label: 'Skills',
    path: ROUTE_PATHS.SKILLS,
    command: 'ls -la /bin/tech',
    description: 'List technical proficiencies and languages.'
  },
  {
    id: '4',
    label: 'Experience',
    path: ROUTE_PATHS.EXPERIENCE,
    command: 'grep -r "Janet Jeffus" /work/history',
    description: 'View career timeline and project highlights.'
  },
  {
    id: '5',
    label: 'Useful Sites',
    path: ROUTE_PATHS.USEFUL_SITES,
    command: 'curl -L bookmarks.json',
    description: 'A curated list of development resources.'
  },
  {
    id: '6',
    label: 'Contact',
    path: ROUTE_PATHS.CONTACT,
    command: 'mailx -s "Hello" dara@jeffus.io',
    description: 'Social links and communication channels.'
  },
];
