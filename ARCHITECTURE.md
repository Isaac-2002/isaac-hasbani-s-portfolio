# Architecture Overview

This application follows a **feature-based architecture** for better organization and scalability.

## Project Structure

```
src/
├── features/              # Feature-based modules
│   ├── home/             # Home page feature
│   │   ├── HomePage.tsx
│   │   └── index.ts
│   ├── projects/         # Projects feature
│   │   ├── ProjectsPage.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── index.ts
│   └── blog/             # Blog feature
│       ├── BlogPage.tsx
│       ├── BlogPost.tsx
│       └── index.ts
│
├── shared/               # Shared components and layouts
│   ├── components/       # Shared UI components
│   │   └── NotFound.tsx
│   └── layout/          # Layout components
│       ├── Layout.tsx
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── data/                 # Static data files
│   ├── projects.ts      # Project data
│   └── blog.ts          # Blog post data
│
├── components/           # shadcn/ui components
│   └── ui/
│
├── lib/                  # Utilities
├── hooks/                # Custom React hooks
└── App.tsx              # Main app component
```

## Design Principles

### 1. Feature-Based Organization
- Each feature (home, projects, blog) has its own directory
- All related code for a feature lives together
- Features are self-contained and can be easily modified or removed

### 2. Static Data Files
- Data is separated from components in `/data` directory
- Easy to update content without touching component code
- Centralized data management with typed interfaces

### 3. Shared Resources
- Truly shared components live in `/shared`
- Layout components (Navbar, Footer, Layout) are shared across all features
- Common utilities and helpers are in `/lib`

### 4. Clean Imports
- Each feature exports through an `index.ts` file
- Simplified imports: `@/features/home` instead of `@/features/home/HomePage`
- Consistent import patterns throughout the app

## Key Features

### Routes
- `/` - Home page with featured projects and blog posts
- `/projects` - All projects
- `/projects/:id` - Individual project details
- `/blog` - All blog posts
- `/blog/:id` - Individual blog post

### Data Management
- Projects: `src/data/projects.ts`
- Blog Posts: `src/data/blog.ts`
- Each data file includes TypeScript interfaces and helper functions

## Tech Stack
- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Vite** - Build tool

## Adding New Features

1. Create a new directory in `src/features/`
2. Add your page components
3. Create an `index.ts` for clean exports
4. Add routes in `App.tsx`
5. Add data in `src/data/` if needed

## Benefits of This Architecture

- **Maintainability**: Easy to find and modify feature-specific code
- **Scalability**: New features can be added without affecting existing ones
- **Clarity**: Clear separation between features, shared code, and data
- **Type Safety**: TypeScript interfaces for all data structures
- **Performance**: Only load what you need for each route
