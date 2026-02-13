# AI Website Builder Comparison Project

**A systematic comparison of 15-20 AI website builders for creating a terminal-style portfolio site**

## Project Overview

This project tests and compares modern AI website builders by having each one create the same terminal-emulator-style portfolio website for Janet "Dara" Jeffus, a CEO and software engineer with 20+ years of experience.

### Goals
1. Create a professional terminal-aesthetic portfolio site
2. Systematically test 15-20 different AI website builders
3. Document capabilities, limitations, and quality of each tool
4. Build a hub site showcasing all variants for comparison
5. Produce a comprehensive report on findings

### Deliverables
- ✅ Professional brand package and design specifications
- ✅ Tailored prompts for AI tools (detailed and simplified versions)
- ✅ Testing framework with scoring criteria
- ✅ 15-20 generated website variants (each with its own repo where possible)
- ✅ Hub site linking to all variants with comparison data
- ✅ Comprehensive written report and analysis
- ✅ Optional: Blog post, presentation, or video about findings

## Repository Structure

```
janet-jeffus-portfolio/
├── README.md (this file)
├── prompts/
│   ├── brand_prompt.md          # Comprehensive brand identity
│   ├── website_prompt.md        # Detailed technical specifications
│   └── simplified_prompt.md     # Flexible version for opinionated tools
├── testing/
│   ├── testing_tracker.md       # Spreadsheet for tracking all tests
│   ├── screenshots/             # Organized by tool name
│   └── results/                 # Individual tool reports
├── content/
│   └── en/                      # Source markdown files
│       ├── about.md
│       ├── skills.md
│       ├── projects.md
│       └── contact.md
├── generated-sites/             # Code from each tool (subfolders)
│   ├── v0/
│   ├── lovable/
│   ├── builder-io/
│   └── ...
├── hub-site/                    # Comparison site
│   ├── index.html
│   ├── styles.css
│   └── assets/
├── scripts/                     # Automation scripts
│   ├── translate.js
│   ├── build.js
│   └── deploy.sh
└── workflow_guide.md            # Step-by-step process guide
```

## File Guide

### Prompt Files (in `/prompts/`)

1. **`brand_prompt.md`** - Complete Brand Package
   - Comprehensive brand identity for Janet "Dara" Jeffus
   - Color palette, typography, visual style guidelines
   - Brand personality and cultural references
   - Use this for tools that want detailed brand specifications

2. **`website_prompt.md`** - Detailed Technical Specification
   - Complete technical requirements for terminal-style site
   - Architecture, navigation, animations, accessibility
   - Content structure and deployment strategy
   - Use this for code-focused or technical AI builders

3. **`simplified_prompt.md`** - Flexible Design Brief
   - Streamlined version for opinionated AI tools
   - Core concept and visual direction without technical constraints
   - Use this for no-code builders or tools with fixed architectures

### Documentation Files

4. **`testing_tracker.md`** - Testing Spreadsheet
   - Table of 20+ AI tools to test
   - Scoring criteria (Design, Performance, Code Quality, etc.)
   - Detailed testing template for each tool
   - Summary comparison table

5. **`workflow_guide.md`** - Step-by-Step Process
   - Complete workflow from setup to final report
   - Time estimates for each phase
   - Automation options
   - Tips and troubleshooting

## How to Use This Project

### For Testing AI Website Builders

1. **Review the prompts** in `/prompts/` to understand the design vision
2. **Set up your tracking** using `testing_tracker.md`
3. **Follow the workflow** in `workflow_guide.md`
4. **Test each tool** systematically:
   - Input appropriate prompt (brand + website or simplified)
   - Iterate 2-3 times to improve output
   - Document everything in the tracker
   - Save code and screenshots
5. **Build the hub site** to showcase all variants
6. **Write your analysis** comparing all tools

### For Building Your Own Portfolio

If you just want to create a terminal-style portfolio (not testing tools):

1. **Read** `brand_prompt.md` and `simplified_prompt.md` for inspiration
2. **Choose one AI tool** that suits your needs
3. **Adapt the prompts** for your own name, experience, and style
4. **Generate and iterate** until you're happy with the result
5. **Deploy** to Cloudflare Pages or your preferred host

## Design Concept

### Terminal Emulator Aesthetic

The portfolio site mimics a command-line interface:
- Dark background + bright monospace text
- Typing animations (text appears character by character)
- ASCII art for graphics
- Numbered menu navigation (1-9)
- Scrolling terminal output style
- Blinking cursor at prompts

### Brand Identity

**Professional + Retro Tech**
- Celebrates hacker culture (Wozniak, Torvalds lineage)
- Cyberpunk/chiptune/classic computing aesthetic
- Organized and elegant (not chaotic)
- Technically authentic
- Warm and approachable

### Color Palette
- Dark backgrounds (#0D0D0D, #1A1A1A)
- Terminal green (#00FF00), amber (#FFB000)
- Neon cyan (#00FFFF), neon magenta (#FF00FF)
- CRT glow effects (subtle)

### Typography
- Monospace only: JetBrains Mono, Fira Code, IBM Plex Mono

## Tools Being Tested

### Code Generators (Export Full Code)
1. v0 by Vercel
2. Lovable (formerly GPT Engineer)
3. Builder.io
4. Bolt.new
5. Claude Code
6. Cursor

### Visual Builders with AI
7. Wix AI
8. Framer AI
9. Squarespace AI
10. Readdy
11. Brizy AI
12. Mobirise AI

### Specialized Tools
13. CodeDesign.ai (code export)
14. Relume (Figma/Webflow)
15. Hostinger AI
16. Durable
17. 10Web (WordPress)
18. GoDaddy AI
19. Shopify AI (e-commerce focus)
20. Custom (Claude/ChatGPT hand-coded)

See `testing_tracker.md` for complete list with URLs and details.

## Testing Criteria

Each tool is scored 1-5 on:
- **Design Quality** - How well does it match the vision?
- **Terminal Aesthetic** - How authentic is the CLI feel?
- **Feature Completeness** - Are all required sections present?
- **Code Quality** - Is the code clean and maintainable?
- **Ease of Modification** - Can you customize it easily?
- **Performance** - Load speed, animations, optimization
- **Value** - Cost vs. features delivered

## Timeline

| Phase | Time Estimate |
|-------|---------------|
| Setup & Preparation | 30 minutes |
| Testing 15 tools | 5 hours (20 min each) |
| Hub site creation | 2-3 hours |
| Documentation & report | 2-3 hours |
| Optional automation | 3-4 hours |
| **Total** | **10-14 hours** |

## About the Project Creator

**Janet "Dara" Jeffus**
- CEO & Software Engineer
- 20+ years in tech
- Passionate about: Systems programming, DevOps, technical leadership
- LinkedIn: https://www.linkedin.com/in/janet-jeffus-b0709720/

## Technical Stack (for Hub Site)

The comparison hub site uses:
- Static HTML/CSS/JS (terminal aesthetic, of course!)
- Cloudflare Pages for hosting
- No build step required (just pure web standards)
- Mobile-first responsive design
- Accessible (WCAG AA compliant)

## Contributing

This project is a personal research project, but if you're doing something similar:
- Feel free to use these prompts as a template
- Adapt the testing framework for your needs
- Share your findings!

## License

The prompts and testing framework are provided as-is for personal and educational use.

## Resources

### Inspiration
- https://www.lizthe.dev/ (professional dev portfolio)
- Terminal emulator interfaces (iTerm2, Hyper)
- Classic Unix/Linux terminals
- Cyberpunk aesthetics
- Retro computing (Commodore 64, Apple II)

### Tools & Technologies
- GitHub for version control
- Cloudflare Pages for deployment
- Anthropic Claude for AI assistance
- Lighthouse for performance audits
- Various AI website builders (see testing list)

## Contact

For questions about this project or to see the final results:
- GitHub: [your username]
- LinkedIn: https://www.linkedin.com/in/janet-jeffus-b0709720/
- Email: [your email]

---

## Quick Start

```bash
# 1. Clone this repository
git clone [repo-url] janet-portfolio-testing
cd janet-portfolio-testing

# 2. Review the prompts
cat prompts/brand_prompt.md
cat prompts/simplified_prompt.md

# 3. Open testing tracker
open testing/testing_tracker.md

# 4. Start testing tools!
# (Follow the workflow in workflow_guide.md)

# 5. Build your hub site
cd hub-site
# Edit index.html with your results

# 6. Deploy to Cloudflare Pages
npx wrangler pages publish . --project-name=janet-ai-comparison
```

## Updates & Changelog

- **2026-02-11:** Initial project setup
  - Created brand package
  - Developed testing framework
  - Compiled list of 20+ AI builders to test
  - Established workflow and automation guides

---

**Status:** In Progress 🚧

**Next Steps:**
1. Complete testing of first 5 tools
2. Refine prompts based on initial results
3. Build hub site framework
4. Continue systematic testing
5. Compile final report
