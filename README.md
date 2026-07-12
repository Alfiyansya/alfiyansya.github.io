# 🚀 alfiyansya.github.io

> **Coming Soon** — A Kotlin-themed interactive landing page for Achmad Alfiansyah.

[![Live](https://img.shields.io/badge/Live-alfiyansya.github.io-7F52FF?style=for-the-badge&logo=github)](https://alfiyansya.github.io)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Features

- **🎮 5-Step Build Simulator** — An interactive mini-game where visitors click to "compile" the website, complete with a plot-twist error ending
- **🎨 Kotlin Brand Theme** — Animated gradient (`#7F52FF` → `#E32F65` → `#F88909`) inspired by the official Kotlin color palette
- **🖥️ Terminal Emulator** — macOS-style terminal window with live build logs
- **🌑 JetBrains Dark Mode** — Deep dark background (`#1E1E1E`) matching the JetBrains IDE aesthetic
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop
- **⚡ Performance** — Lightweight, no external dependencies beyond React & Tailwind

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev) | UI components & state management |
| [Vite 8](https://vite.dev) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [JetBrains Mono](https://www.jetbrains.com/lp/mono/) | Monospace typography |
| [Inter](https://rsms.me/inter/) | Sans-serif typography |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18

### Installation

```bash
# Clone the repository
git clone https://github.com/Alfiyansya/alfiyansya.github.io.git
cd alfiyansya.github.io

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📁 Project Structure

```
alfiyansya.github.io/
├── public/
│   └── favicon.svg          # Kotlin-gradient favicon
├── src/
│   ├── App.jsx              # Main application (all components)
│   ├── index.css            # Design system & animations
│   └── main.jsx             # Entry point
├── index.html               # HTML shell with SEO meta tags
├── vite.config.js           # Vite + Tailwind CSS config
└── package.json
```

## 🎯 How It Works

1. Visitor lands on the page and sees **"Coming soon..."** with a build button
2. Each of the **5 clicks** advances a progress bar by 20% and adds a terminal log entry
3. At **100%**, the terminal flashes red — **ERROR 503: Portfolio Under Construction**
4. An error card appears with direct links to connect via **LinkedIn** and **GitHub**

## 🔗 Connect

- **LinkedIn** — [achmad-alfiansyah](https://linkedin.com/in/achmad-alfiansyah)
- **GitHub** — [alfiyansya](https://github.com/alfiyansya)
- **Instagram** — [alfiansyah.achmad](https://www.instagram.com/alfiansyah.achmad/)

## 📄 License

© 2026 Achmad Alfiansyah. All rights reserved.
