# Simplified Design Prompt (for Opinionated AI Tools)

## Project: Terminal-Style Portfolio Website

### About Me
I'm Janet "Dara" Jeffus, a CTO and software engineer leading the AI revolution teaching ordinary people how to leverage AI in their daily lives. with 20+ years of experience. I need a professional portfolio website that reflects my technical background and personality.

### Design Vision
**Terminal/Command-Line Interface Aesthetic**

The website should look and feel like a terminal emulator:
- Dark background with bright text (terminal color scheme)
- Monospace typography throughout
- Text that types out character by character
- Scrolling output like a CLI tool
- ASCII art for graphics and decorative elements
- Numbered menu system (1-9) for navigation
- Blinking cursor at input prompts

### Brand Personality
- **Professional** but with personality
- **Technical authenticity** - celebrates hacker culture (think Wozniak, Torvalds, early Unix)
- **Retro computing nostalgia** - cyberpunk, chiptune, classic computing
- **Organized and elegant** - not chaotic or messy
- **Warm and approachable** - expert but not intimidating

### Color Palette
Mix of terminal/cyberpunk colors:
- **Primary backgrounds:** Very dark grays/black (#0D0D0D, #1A1A1A)
- **Primary text:** Bright terminal green (#00FF00) or amber (#FFB000)
- **Accent colors:** Neon cyan (#00FFFF), neon magenta (#FF00FF)
- **Secondary text:** Light gray (#CCCCCC)
- Optional: CRT glow effects, subtle scan lines

### Typography
- **Monospace fonts only:** JetBrains Mono, Fira Code, IBM Plex Mono, or similar
- Consistent sizing with clear hierarchy
- Code block styling for technical content

### Required Content Sections

#### 1. Home/Landing
- ASCII art logo or header
- Brief intro: "Janet 'Dara' Jeffus - CEO & Software Engineer | 20+ Years"
- Main menu with numbered options (1-9):
  1. About Me
  2. Skills & Technologies
  3. Experience & Projects
  4. Useful Sites
  5. Contact & Social Links
  6. [Additional sections as needed]

#### 2. About Me
- Professional bio (2-3 paragraphs)
- Experience highlights
- Personal interests related to tech
- Optional: Photo or pixel art avatar

#### 3. Skills & Technologies
Present in terminal-style format:
- Programming languages (Dart, Ruby, Perl, C, Python, JavaScript, etc.)
- Frameworks & tools
- Leadership & business skills
- Display as lists or ASCII tables

#### 4. Useful Sites
Content imported from https://github.com/aprajnaparamita/interesting_sites/blob/main/website_index.md

#### 5. Experience & Projects
- Timeline of key roles
- Current position highlighted
- Notable projects with links
- GitHub repositories
- Open source contributions

#### 6. Contact & Social Links
- GitHub: aprajnaparamita
- LinkedIn: https://www.linkedin.com/in/janet-jeffus-b0709720/
- Email: darajeffus@gmail.com
- Tiktok: @darabuilds
- Instagram: @darabuilds
- Github: @aprajnaparamita

### Key Design Features

#### Navigation
- Type numbers 1-9 or click/tap options
- Scroll to see content (like terminal output)
- Clear "back to menu" option on each page
- On Desktop up, down, left, right options 
- Breadcrumb trail (optional)

#### Animations
- Text types out character by character
- Cursor blinks at prompt
- Content scrolls in from bottom
- Smooth transitions between sections
- Keep animations subtle and performant

#### Responsive Design
- **Mobile-first:** Must work perfectly on phones
- Touch-optimized tap targets
- Simplified ASCII art on small screens
- Horizontal scrolling for code/wide content if needed
- Terminal window fills viewport on mobile

#### Accessibility
- High contrast text (WCAG AA compliant)
- Keyboard navigation support
- Screen reader friendly (proper HTML structure)
- Alternative text for ASCII art
- Skip to content link
- Focus indicators visible

### Technical Requirements

#### Performance
- Fast loading (< 2 seconds on 3G)
- Lightweight JavaScript
- Optimized images (if any)
- Efficient CSS animations

#### Modern Web Standards
- Semantic HTML5
- Responsive CSS (Flexbox/Grid)
- Progressive enhancement
- Works without JavaScript (basic functionality)
- SEO-friendly structure

#### Optional Enhancements
- Easter eggs (hidden commands like `help`, `ls`, `whoami`)
- Terminal history (up arrow for previous commands)
- Tab completion hints
- Multiple terminal themes (optional)
- Keyboard shortcuts
- Using mailto-obfuscator to hide email addresses
- Using crt-css for some portions like loading screen
- Using typed.js for some interactive portions

### Inspiration References

**Style:**
- Terminal emulators: iTerm2, Hyper, Windows Terminal
- Retro computing interfaces
- Cyberpunk aesthetics (Blade Runner, Matrix)
- Classic Unix terminals
- Commodore 64, Apple II aesthetics

**Similar Sites:**
- https://www.lizthe.dev/ (professional dev portfolio - note the clean, personality-driven design)
- Terminal-style portfolio websites
- CLI-based web interfaces

### What to Avoid
- ❌ Generic blue corporate tech aesthetic
- ❌ Overly complex or cluttered layouts
- ❌ Slow, janky animations
- ❌ Difficult navigation on mobile
- ❌ Pure kitsch without substance
- ❌ Anything that looks amateurish

### Success Criteria
The website succeeds when visitors:
- ✅ Immediately recognize the terminal aesthetic
- ✅ Find navigation intuitive and fun
- ✅ See me as a credible technical leader
- ✅ Get a sense of my personality
- ✅ Can easily contact me or view my work
- ✅ Have a smooth experience on any device

### Content Tone & Voice
- **Direct and confident** - no fluff
- **Technically precise** - use correct terminology
- **Subtly playful** - nods to hacker culture
- **Professional** - appropriate for business context
- **Authentic** - genuine passion for technology

---

## For Tools with Flexible Content Input

If your tool accepts additional content or markdown files, here's what to include:

### About Me (Sample)
```
I'm Janet "Dara" Jeffus, a software engineer and technology leader with over 20 years of experience building teams, products, and companies. 

My career spans from low-level systems programming to executive leadership, always maintaining a hands-on technical approach. I believe in the Unix philosophy, open source collaboration, and building elegant solutions to complex problems.

I'm passionate about mentoring engineers, building inclusive technical cultures, and pushing the boundaries of what's possible with code.
```

### Skills (Sample Categories)
```
PROGRAMMING LANGUAGES
- Perl, C, Python, JavaScript/TypeScript
- Bash/Shell scripting, SQL
- [Add others as applicable]

LEADERSHIP & MANAGEMENT
- Technical team building
- Strategic planning
- Product development
- Startup operations

SPECIALIZATIONS
- Systems programming
- DevOps & infrastructure
- [Your specific areas]
```

### Projects (Sample Format)
```
PROJECT NAME | Role | Year(s)
- Brief description of what it does
- Technologies used
- Link to demo/repo/article
- Key achievement or outcome
```

---

## Build Instructions

Create a terminal-style portfolio website with:
1. Dark theme + monospace fonts
2. Numbered menu navigation (1-9 accessible)
3. Typing animations and scrolling terminal output
4. ASCII art headers and decorative elements
5. Mobile-responsive design
6. All content sections listed above
7. Clean, semantic HTML structure
8. Fast loading and smooth performance

The final result should feel like using a real terminal emulator, while remaining professional and accessible to all users.