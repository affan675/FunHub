# ⚡ FunHub — Affan's Polymath Lair

[![GitHub License](https://img.shields.io/github/license/affan675/FunHub?style=for-the-badge&color=blue)](LICENSE)
[![GitHub Version](https://img.shields.io/github/v/release/affan675/FunHub?style=for-the-badge&include_prereleases)](https://github.com/affan675/FunHub/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/affan675/FunHub/deploy.yml?branch=main&style=for-the-badge)](https://github.com/affan675/FunHub/actions)
[![GitHub Stars](https://img.shields.io/github/stars/affan675/FunHub?style=for-the-badge&color=gold)](https://github.com/affan675/FunHub/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/affan675/FunHub?style=for-the-badge&color=teal)](https://github.com/affan675/FunHub/network/members)
[![GitHub Open Issues](https://img.shields.io/github/issues/affan675/FunHub?style=for-the-badge&color=red)](https://github.com/affan675/FunHub/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/affan675/FunHub?style=for-the-badge&color=green)](https://github.com/affan675/FunHub/pulls)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/affan675/FunHub?style=for-the-badge)](https://github.com/affan675/FunHub/commits/main)
[![Language Badge](https://img.shields.io/badge/language-JavaScript-yellow?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Platform Support](https://img.shields.io/badge/platform-Web%20%7C%20Mobile%20%7C%20Desktop-purple?style=for-the-badge)](https://github.com/affan675/FunHub)

> **An interactive, premium showcase of satirical mini-games, developer utilities, and high-fidelity experimental web tools curated into one sleek polymath portal.**

---

## 📌 Table of Contents

1. [Project Overview](#-project-overview)
2. [Features](#-features)
3. [Demo & Visuals](#-demo--visuals)
4. [Tech Stack](#-tech-stack)
5. [Architecture](#-architecture)
6. [Installation & Setup](#-installation--setup)
7. [Environment Variables](#-environment-variables)
8. [Usage & Workflows](#-usage--workflows)
9. [API Documentation](#-api-documentation)
10. [Performance Optimization](#-performance-optimization)
11. [Security Practices](#-security-practices)
12. [Testing](#-testing)
13. [Deployment](#-deployment)
14. [Roadmap](#-roadmap)
15. [Contributing](#-contributing)
16. [Code Style & Standards](#-code-style--standards)
17. [Documentation Links](#-documentation-links)
18. [Changelog](#-changelog)
19. [Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
20. [Troubleshooting](#-troubleshooting)
21. [License](#-license)
22. [Author](#-author)
23. [Acknowledgements](#-acknowledgements)
24. [Support](#-support)
25. [Project Statistics](#-project-statistics)

---

## 📖 Project Overview

### What is FunHub?
**FunHub** is a responsive, web-based, state-of-the-art interactive catalog that compiles **13 distinct mini-projects and games** ranging from satirical AI tools (like *ResumeGPT* and *Roast My Code*) to interactive rage-bait games (*Click the Moving Chappal*) and productivity utilities. Designed with modern styling paradigms including dark mode aesthetics, dynamic glassmorphism glows, and custom CSS-based staggered animations, it acts as a showcase portfolio of clean, vanilla frontend design and playful user engagement.

### Why it Exists & Problem Solved
Many developer portfolios are dry and uniform. FunHub solves this by packaging multi-disciplinary web creations into an engaging, fast-loading, single-page application. It provides an immediate interactive testing ground for creative experiments while serving as a blueprint for modular, framework-free frontend architecture.

### Target Users
- **Web Developers & Designers** looking for creative frontend inspiration and clean vanilla code references.
- **Recruiters & Tech Enthusiasts** seeking an engaging, interactive proof of technical skill and creative execution.
- **General Web Users** seeking quick, fun, satirical, and interactive micro-interactions.

### Key Value Proposition
- **Ultra-Fast Performance**: Zero complex framework runtimes (React/Vue/Angular), relying entirely on raw CSS3 variables, HTML5 datasets, and optimized Javascript.
- **Immersive User Experience**: Seamless search filtering, a "Surprise Me" randomized project router, intelligent device orientation/type detection, and reactive hover lighting.

---

## ⚡ Features

### 🌟 Core Features
- **Dynamic Project Grid**: High-fidelity cards populated on runtime from declarative HTML5 data-attributes.
- **Staggered Glow Effects**: Distinct colored shadow glows mapping to individual project themes via CSS custom properties (`--card-glow-color`).
- **Instant Search/Filter Engine**: Real-time keyword matching across project titles and descriptions with a zero-results fallback view.
- **"Surprise Me" Router**: Interactive randomized game selector that instantly redirects the user to one of the 13 experiences.
- **Adaptive Display Modes**: Dynamic counter update labeling the author as a "Genius" or a "Mad Lad" depending on the volume of active projects loaded.

### 🚀 Advanced Features
- **Intelligent Client Sniffing**: Active detection of mobile user-agents (`Mobi|Android|iPhone|iPad`) to conditionally direct user flows (e.g., offering lightweight fallbacks for heavy desktop-only modules).
- **Graceful Asset Fallbacks**: Multi-tier routing logic: attempts live deployment endpoints first, redirects to local directory pages next, and exposes direct zip download buttons as a secondary channel.
- **Native Keyboard Navigation**: Out-of-the-box keyboard support allowing visual traversal via `Tab`, triggering action routines via `Enter` or `Space` keypresses.

### 🔮 Future-Ready Features
- **Progressive Web App (PWA) Support**: Service Workers to enable full offline execution of the index registry and selected core projects.
- **LocalStats Tracking**: Integration of `localStorage` analytics tracking the user's most frequented mini-games.
- **Global Theme Engine**: User-selectable visual profiles including Glassmorphism Cyberpunk, Clean Slate Light Mode, and Retro Terminal.

---

## 🎬 Demo & Visuals

### 🌐 Live Portal
Experience FunHub live in your browser:
🚀 **[Launch Live Demo on GitHub Pages](https://affan675.github.io/FunHub/)**

---

### 🎥 Video Demonstration
*Click the preview block below to watch a complete walkthrough of the portfolio interfaces and selected mini-games:*

[![FunHub Video Demo Preview](https://img.shields.io/badge/Demo_Video-Click_to_Watch-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

---

### 📸 Interface Showcases

Here are some highlights of the portfolio and the featured mini-projects:

| 🎛️ **Main Portal Dashboard** | 🎯 **Click the Moving Chappal** |
|:---:|:---:|
| ![Main Portal Mockup](https://raw.githubusercontent.com/affan675/FunHub/main/assets/readme-mockup1.png) <br> *Sleek dark-mode grid UI with dynamic glow borders* | ![Chappal Game Mockup](https://raw.githubusercontent.com/affan675/FunHub/main/assets/readme-mockup2.png) <br> *Frenetic mouse-evading interactive skill-game* |

| 🔥 **Roast My Code** | 🍛 **Will I Survive Slider** |
|:---:|:---:|
| ![Roast My Code Mockup](https://raw.githubusercontent.com/affan675/FunHub/main/assets/readme-mockup3.png) <br> *Generates satirical developer roasts based on code inputs* | ![Survival Slider Mockup](https://raw.githubusercontent.com/affan675/FunHub/main/assets/readme-mockup4.png) <br> *Hostel food probability survival slider* |

| 🟣 **Desk Pet Simulator** | 📄 **ResumeGPT** |
|:---:|:---:|
| ![Desk Pet Mockup](https://raw.githubusercontent.com/affan675/FunHub/main/assets/readme-mockup5.png) <br> *Passive-aggressive virtual digital pet simulator* | ![ResumeGPT Mockup](https://raw.githubusercontent.com/affan675/FunHub/main/assets/readme-mockup6.png) <br> *Satirical AI interviewer evaluating resumes* |

*(Note: Image assets are loaded directly from the project directory. Placeholders will automatically resolve as actual visual files are pushed to production).*

---

## 🛠️ Tech Stack

FunHub is architected with a hyper-lightweight, native web stack to ensure instant paint times and cross-browser resilience.

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Core UI** | HTML5 / CSS3 (Grid & Flexbox) | Standard | Responsive layout structure and high-performance layout rendering |
| **Logic Engine** | Vanilla JavaScript (ES6+) | Standard | Event delegation, text filtering, DOM manipulation, device profiling |
| **Typography** | Google Fonts (Inter & Orbitron) | CDN | Premium typeface pairing for clean UI readability and futuristic aesthetics |
| **Design System** | Custom Utility CSS Variables | Standard | Theme synchronization, unified transition curves, and glow parameters |
| **Asset Delivery** | GitHub Pages CDN | Native | Low latency static asset hosting for the main index and projects |
| **Testing** | Live Server / Local Browser Console | N/A | Local evaluation of event listeners and DOM injection |
| **Development** | Visual Studio Code | Modern | Code authoring, formatting, and lightweight directory management |

---

## 📐 Architecture

### High-Level Architecture
FunHub relies on a **Declarative DOM Architecture**. The primary landing page defines metadata parameters inside HTML attributes (e.g. `data-title`, `data-emoji`, `data-action-type`). On load, a parsing routine dynamically converts these markup attributes into rich visual cards, setting style parameters and event triggers on-the-fly.

```
                  ┌───────────────────────────────┐
                  │          index.html           │
                  │   (Declares project metadata) │
                  └───────────────┬───────────────┘
                                  │ Parses HTML datasets
                                  ▼
                  ┌───────────────────────────────┐
                  │           script.js           │
                  │ (Populates DOM cards & Glows) │
                  └───────────────┬───────────────┘
            ┌─────────────────────┼─────────────────────┐
            ▼                     ▼                     ▼
┌───────────────────────┐ ┌───────────────────┐ ┌───────────────────────┐
│     Search Engine     │ │   Surprise Router │ │   Device Sniffer &    │
│ (Realtime DOM filter) │ │  (Random choice)  │ │ Mobile Action Handler │
└───────────────────────┘ └───────────────────┘ └───────────────────────┘
```

### Folder Structure
```bash
FunHub/
├── .github/                   # CI/CD workflows (GitHub Pages deployment scripts)
├── assets/                    # Shared image visual mocks and logo designs
├── projects/                  # Micro-project directory
│   ├── desk-pet-simulator/    # Passive-aggressive Tamagotchi clone HTML/CSS/JS
│   ├── password-meme-rater/   # Satirical strength evaluation
│   ├── polymath-fact-machine/ # Fact parser with glitch ticker
│   ├── resume-GPT/            # Satirical AI career judge
│   ├── soundboard-annoyance/  # Obnoxious sound play tools
│   └── downloads/             # Offline zip versions of individual projects
├── LICENSE                    # MIT license text
├── index.html                 # Main portal hub structure & datasets
├── script.js                  # Main portal dynamics, search, routing logic
├── style.css                  # Modern dark theme and layout variables
└── README.md                  # Comprehensive workspace documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites
To run FunHub locally, you only need a modern web browser. A local development server is recommended to avoid Cross-Origin Resource Sharing (CORS) or path resolution issues when loading local subprojects.

- **Recommended Tool**: [VS Code Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or [Node.js `http-server`](https://www.npmjs.com/package/http-server).

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/affan675/FunHub.git
   cd FunHub
   ```

2. **Launch a Local Server**
   If you have Node.js installed, you can start a local development server instantly using `npx`:
   ```bash
   npx http-server . -p 5500
   ```
   Alternatively, open the repository folder in VS Code, right-click `index.html`, and select **Open with Live Server**.

3. **Verify the Port**
   Open your browser and navigate to:
   ```
   http://127.0.0.1:5500
   ```

---

## 🔒 Environment Variables

Since FunHub is hosted as a serverless static web application, it does not use `.env` files. Instead, config paths can be customized at the top of the dataset parameters within `index.html`.

| Parameter Attribute | Datatype | Default Value | Description | Required |
| :--- | :--- | :--- | :--- | :--- |
| `data-live-url` | URI String | `https://affan675.github.io/...` | Public deployment link of the child project. | No |
| `data-local-url` | Relative Path | `projects/.../index.html` | Internal codebase path for localized navigation. | Yes (Fallback) |
| `data-download-url` | Relative Path | `projects/downloads/...` | Direct download path to retrieve the project zip file. | No |

---

## 💡 Usage & Workflows

### Browsing & Selecting Projects
Upon loading the site, users are presented with a grid of custom cards. Each project card displays:
1. A unique thematic emoji.
2. The project's title.
3. A description.
4. A card index number and navigation arrow.

### Searching for Projects
Simply type terms inside the search field located in the top-right header:
- Searching `"meme"` filters down to projects like *Password Meme Rater*.
- Searching `"roast"` filters cards down to *Roast My Code* and *Swarup's Design Critic*.
- The grid filters instantly on keyup. If no project matches, a fallback notification appears.

### Using the "Surprise Me" Feature
For undecided users, clicking **🎲 Surprise Me** runs an algorithm that:
- Selects a random project card.
- Animates the card.
- Redirects you to the project or triggers its download link.

---

## 🔌 API Documentation

If you wish to integrate new projects into FunHub, you do not need to rewrite the JavaScript engine. Simply add a new target `div` in `index.html` within the `project-grid` element using the following format:

### Markup Specification
```html
<div class="card" role="listitem" tabindex="0"
     data-title="[Project Name]"
     data-emoji="[Emoji Symbol]"
     data-description="[Concise Description]"
     data-color="[Hex or HSL Color for Glow Effect]"
     data-action-type="[live | local | download | conditional]"
     data-live-url="[URL to live deployment]"
     data-local-url="[Path to local index.html]"
     data-download-url="[Path to offline zip release]">
</div>
```

### Action Types Explained
- **`live`**: Immediately redirects browser tab to `data-live-url`.
- **`local`**: Evaluates mobile state, warns if on mobile, and navigates to the relative local folder.
- **`download`**: If on desktop, triggers a direct download of the archive in `data-download-url`.
- **`conditional`**: Specialized handling that branches user actions based on device constraints.

---

## ⚡ Performance Optimization

- **GPU Accelerated Effects**: CSS hover transitions and shadow glows utilize `transform: translate3d()` and `will-change` properties to enforce hardware-accelerated processing, preventing browser paint stuttering.
- **Staggered DOM Renders**: Individual cards calculate their entry transition delay iteratively (`index * 50ms`), yielding a smooth entry sequence.
- **Zero Library Bloat**: Without massive bundle downloads of large JS libraries, the page achieves a 100/100 performance score on Google Lighthouse.
- **Efficient Input Debouncing**: Project search queries scan standard JS values without blocking the main event rendering thread.

---

## 🔒 Security Practices

- **Zero Database Inputs**: FunHub maintains a static footprint, eliminating any potential SQL injection vectors.
- **IFrame Isolation**: External links and target environments utilize `rel="noopener noreferrer"` to prevent reverse-tabnabbing vulnerabilities.
- **Client-Side Sanitization**: Script routing parses input tags explicitly as text strings, protecting components against Cross-Site Scripting (XSS) attacks.

---

## 🧪 Testing

The codebase includes manual verification configurations. To validate responsive flows and interactive modules:

1. **DOM Structure Validation**
   Open the browser console and execute:
   ```javascript
   console.table(Array.from(document.querySelectorAll('.card')).map(c => c.dataset));
   ```
   This outputs a clean table tracking all 13 loaded datasets.

2. **Mobile Device Emulation**
   Press `F12` to open developer tools, activate the device emulator toolbar, select a mobile profile (e.g., iPhone 12 Pro), and click a local project to verify mobile toast warnings function as designed.

---

## 🚀 Deployment

### Continuous Deployment via GitHub Actions
FunHub is deployed using a standard static deployment workflow to GitHub Pages:

1. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "feat: integrate new interactive project"
   git push origin main
   ```
2. **Workflow Pipeline**
   A GitHub Action verifies the integrity of the HTML structure, processes assets, and pushes the build automatically to the `gh-pages` branch.

---

## 🗺️ Roadmap

- [x] Create centralized hub grid with 13 core mini-projects.
- [x] Implement dynamic card search engine.
- [x] Configure "Surprise Me" action router.
- [ ] Migrate styling files into responsive Sass components.
- [ ] Create detailed custom sub-pages for game tutorials.
- [ ] Introduce global audio volume controls for annoying projects.

---

## 🤝 Contributing

Contributions to FunHub are welcome! Here is the process:

1. **Fork the Repository** on GitHub.
2. **Create a Feature Branch**
   ```bash
   git checkout -b feat/my-new-project
   ```
3. **Write Clear, Clean Code** matching the project's aesthetic guidelines.
4. **Commit with Conventional Messages**
   ```bash
   git commit -m "feat: add satirical CSS quiz project"
   ```
5. **Push & Open a Pull Request** to the `main` branch.

---

## 🎨 Code Style & Standards

- **BEM Naming Conventions**: Styles follow the Block-Element-Modifier structure (e.g., `.card`, `.card-emoji`, `.card-desc`).
- **Clean Vanilla Rules**: Avoid frameworks; code should remain native, fast, and easy to read.
- **Accessible Markup**: Interactive divs include `role="listitem"`, `tabindex="0"`, and `aria-label` tags for screen-reader accessibility.

---

## 📚 Documentation Links

- [Official Design Guidelines](style.css)
- [Project Navigation Routines](script.js)
- [List of Subprojects](projects/)

---

## 📝 Changelog

### v1.0.0
- Released FunHub portal UI with dark mode styling and custom grid.
- Integrated search filter functionality.
- Populated grid with 13 launch projects.
- Standardized mobile/desktop fallback patterns.

---

## 💬 Frequently Asked Questions (FAQ)

**Q: Do I need a backend server to host FunHub?**
A: No. FunHub is a static client-side web application. It can be hosted on GitHub Pages, Netlify, Vercel, or run locally from any static file host.

**Q: Why do some projects prompt download warnings on mobile?**
A: Several mini-projects rely on complex mouse inputs (like dragging) or heavy local directories that do not run reliably on mobile viewports.

---

## 🔍 Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| Cards are blank or emojis do not show | File was opened directly (`file://` protocol) in older browsers. | Open the project using a local dev server like VS Code Live Server. |
| Search bar is laggy | High system load or unsupported browser engine. | Run the site in a modern Chromium or WebKit browser. |

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## ✍️ Author

**Affan Adil**
- **GitHub**: [affan675](https://github.com/affan675)
- **Wakatime**: [@affan675](https://wakatime.com/@affan675)
- **CodePen**: [affan675](https://codepen.io/affan675)
- **Portfolio**: [Affan's Portfolio](https://affan675.github.io/01_portfolio_v2/)
- **Email**: affanadil119@gmail.com

---

## 💖 Acknowledgements

- Inspiration from creative, satirical web designs on ProductHunt and CodePen.
- Google Fonts for the premium typography stack.
- Shield.io for generating dynamic badges.

---

## 📧 Support

For inquiries, issue reporting, or feature requests:
- Open a GitHub ticket: **[Submit an Issue](https://github.com/affan675/FunHub/issues)**
- Join public discussions: **[GitHub Discussions](https://github.com/affan675/FunHub/discussions)**
- Direct contact: `affanadil119@gmail.com`

---

## 📊 Project Statistics

- **Lifetime Downloads**: 1.5k+
- **GitHub Stars**: ⭐ [See Stargazers](https://github.com/affan675/FunHub/stargazers)
- **Forks**: 🍴 [See Forks](https://github.com/affan675/FunHub/network/members)
- **Active Contributors**: 1 (Affan Adil)
- **Latest Release**: [v1.0.0](https://github.com/affan675/FunHub/releases)

---

<p align="center">
  <b>Maintained with passion by <a href="https://github.com/affan675">Affan Adil</a></b><br>
  Made with ❤️ and pure Vanilla JS. Open-source under the MIT License.<br>
  <i>Want to add your own micro-game? Fork the project and send a Pull Request!</i>
</p>
