# CodeSplorer Blog

A modern, fast, and SEO-friendly personal blog built with Astro, featuring dark mode, interactive components, and a clean design.

## 🚀 Features

- **Static Site Generation** with Astro for optimal performance
- **Interactive Islands** using React components where needed
- **Dark/Light Mode** with persistent theme preference
- **Content Collections** for type-safe blog posts and projects
- **Responsive Design** with Tailwind CSS
- **SEO Optimized** with proper meta tags and structured data
- **View Transitions** for smooth page navigation
- **Cloudflare Pages** deployment ready

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.astro
│   │   └── ThemeToggle.astro
│   ├── interactive/        # Interactive components (React)
│   │   └── ScrollToTopButton.jsx
│   ├── layout/            # Layout-specific components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── NavBar.astro
│   └── content/           # Content-specific components
│       ├── Post.astro
│       ├── Project.astro
│       └── Card.astro
├── content/
│   ├── posts/            # Blog posts (Markdown)
│   └── projects/         # Project showcases (Markdown)
├── layouts/
│   └── Layout.astro      # Main layout template
├── pages/                # Astro pages (routes)
├── lib/                  # Utility functions
│   └── utils.ts
├── types/                # TypeScript type definitions
│   └── index.ts
├── constants/            # Site configuration
│   └── site.ts
├── scripts/              # Client-side scripts
│   └── themeToggle.js
└── styles/               # Global styles
    └── global.css
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Interactive Components**: [React](https://reactjs.org/)
- **Content**: [Markdown](https://www.markdownguide.org/) with [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codesplorer-blog-project.git
cd codesplorer-blog-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Available Scripts

| Command | Action |
| :------ | :----- |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to Cloudflare Pages |

## 📝 Adding Content

### Blog Posts

Create new blog posts in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
date: 2024-01-01
author: "Your Name"
categories: ["Technology", "Web Development"]
image: "./images/your-image.jpg"
---

Your post content here...
```

### Projects

Add project showcases in `src/content/projects/`:

```markdown
---
title: "Project Name"
date: 2024-01-01
author: "Your Name"
categories: ["Web Development", "React"]
image: "./images/project-screenshot.jpg"
---

Project description and details...
```

## 🎨 Customization

### Site Configuration

Update `src/constants/site.ts` with your information:

```typescript
export const SITE_CONFIG = {
  name: 'Your Blog Name',
  description: 'Your blog description',
  url: 'https://yourdomain.com',
  author: 'Your Name',
  // ... other config
};
```

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs`
- Component-specific styles: Use Tailwind classes directly

## 🚀 Deployment

This project is configured for Cloudflare Pages deployment:

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set build output directory: `dist`
5. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
