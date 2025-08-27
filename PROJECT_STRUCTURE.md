# Project Structure Guide

This document explains the organization and purpose of each directory and file in the CodeSplorer Blog project.

## 📁 Root Directory

```
codesplorer-blog-project/
├── public/                 # Static assets served directly
├── src/                    # Source code
├── utils/                  # Utility functions (legacy)
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── .prettierrc           # Prettier configuration
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
└── PROJECT_STRUCTURE.md  # This file
```

## 📁 Source Directory (`src/`)

### 🧩 Components (`src/components/`)

Organized by purpose and functionality:

```
components/
├── ui/                    # Reusable UI components
│   ├── Button.astro      # Generic button component
│   └── ThemeToggle.astro # Theme switching component
├── interactive/           # Interactive components (React)
│   └── ScrollToTopButton.jsx # Scroll-to-top functionality
├── layout/               # Layout-specific components
│   ├── Header.astro      # Site header
│   ├── Footer.astro      # Site footer
│   └── NavBar.astro      # Navigation bar
└── content/              # Content-specific components
    ├── Post.astro        # Blog post display
    ├── Project.astro     # Project showcase
    ├── Card.astro        # Content cards
    ├── PostItem.astro    # Post list items
    └── ProjectCard.astro # Project cards
```

### 📄 Pages (`src/pages/`)

Astro's file-based routing:

```
pages/
├── index.astro           # Homepage
├── blogs.astro           # Blog listing page
├── projects.astro        # Projects listing page
├── author.astro          # About/author page
├── tags.astro            # Tags page
├── [...slug].astro       # Dynamic routes for posts/projects
└── blogs/                # Blog-specific pages
    └── index.astro       # Blog index
```

### 📝 Content (`src/content/`)

Content collections for type-safe content management:

```
content/
├── config.ts             # Content collection schemas
├── posts/                # Blog posts (Markdown)
│   ├── coolify.md
│   ├── docker.md
│   ├── kafka.md
│   ├── redis.md
│   └── images/           # Post-specific images
└── projects/             # Project showcases (Markdown)
    ├── consistent-hashing-project.md
    ├── rag-chatbot-project.md
    └── images/           # Project-specific images
```

### 🎨 Layouts (`src/layouts/`)

Page layout templates:

```
layouts/
└── Layout.astro          # Main layout with navigation, footer, and theme
```

### 🛠️ Utilities (`src/lib/`)

Shared utility functions:

```
lib/
└── utils.ts              # Common utility functions (cn, formatDate, slugify)
```

### 📋 Types (`src/types/`)

TypeScript type definitions:

```
types/
└── index.ts              # Common interfaces (Post, Project, NavItem, etc.)
```

### ⚙️ Constants (`src/constants/`)

Site-wide configuration:

```
constants/
└── site.ts               # Site metadata, navigation, social links
```

### 📜 Scripts (`src/scripts/`)

Client-side JavaScript:

```
scripts/
├── themeToggle.js        # Theme switching functionality
└── utils.ts              # Utility functions
```

### 🎨 Styles (`src/styles/`)

Global stylesheets:

```
styles/
├── global.css            # Global styles and Tailwind imports
└── grid.css              # Grid background patterns
```

### 🖼️ Assets (`src/assets/`)

Static assets processed by Astro:

```
assets/
├── about-astro.png
├── accenture_logo.png
├── astro_icon.png
├── aws_logo.png
├── coming-soon.png
├── consistent.png
├── docker.jpg
├── gsu_logo.jpg
├── rag.png
├── sppu.jpg
└── swan.jpg
```

## 🔧 Configuration Files

### `astro.config.mjs`
- Astro framework configuration
- Integrations (Tailwind, React, Cloudflare)
- Output mode and adapter settings

### `tailwind.config.mjs`
- Tailwind CSS configuration
- Custom theme settings
- Plugin configurations

### `tsconfig.json`
- TypeScript compiler options
- Path mappings
- Strict type checking settings

### `.prettierrc`
- Code formatting rules
- Consistent style across the project

## 🚀 Best Practices

### Component Organization
1. **UI Components**: Reusable, generic components in `ui/`
2. **Interactive Components**: React components with client-side behavior in `interactive/`
3. **Layout Components**: Site structure components in `layout/`
4. **Content Components**: Content-specific display components in `content/`

### Naming Conventions
- **Files**: PascalCase for components, camelCase for utilities
- **Components**: PascalCase (e.g., `Button.astro`, `ScrollToTopButton.jsx`)
- **Utilities**: camelCase (e.g., `formatDate`, `slugify`)
- **Constants**: UPPER_SNAKE_CASE for values, camelCase for objects

### Import Organization
1. External libraries
2. Internal utilities and types
3. Components
4. Relative imports

### Content Management
- Use Content Collections for type-safe content
- Organize images with their content
- Use consistent frontmatter schemas
- Separate posts and projects for different content types

## 🔄 Migration Notes

If you're migrating from the old structure:

1. **Move components** to their appropriate subdirectories
2. **Update imports** to reflect new paths
3. **Consolidate duplicate components** (Button vs ButtonComp)
4. **Update Layout.astro** to use new component paths
5. **Install new dev dependencies** for linting and formatting

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/)
