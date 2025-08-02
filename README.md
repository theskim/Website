# Portfolio Website - Next.js

A modern portfolio website built with Next.js, featuring a clean design and smooth animations.

## Features

- **Next.js 14** - Modern React framework with App Router
- **SCSS/Sass** - Advanced styling with variables and mixins
- **Redux Toolkit** - State management
- **React Markdown** - Markdown rendering for content
- **React Scroll** - Smooth scrolling navigation
- **Vertical Timeline** - Experience timeline component
- **Iconify** - Icon library integration
- **Responsive Design** - Mobile-first approach

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── project/[slug]/    # Dynamic project pages
├── src/
│   ├── components/        # React components
│   ├── assets/           # Static assets
│   ├── data/             # JSON data files
│   ├── Redux/            # State management
│   └── global.scss       # Global styles
├── public/               # Static files
└── package.json          # Dependencies
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Changes from React.js

### Migration Highlights

1. **App Router Structure**
   - Moved from React Router to Next.js App Router
   - Dynamic routes using `[slug]` folders
   - Server-side rendering capabilities

2. **Routing Changes**
   - Replaced `useNavigate` with Next.js `useRouter`
   - Updated `Link` components to use Next.js `Link`
   - Removed React Router dependencies

3. **File Structure**
   - Added `app/` directory for Next.js App Router
   - Moved static assets to `public/` directory
   - Updated import paths for better organization

4. **Component Updates**
   - Added `'use client'` directive for client components
   - Updated Redux store exports
   - Fixed image and asset paths

5. **Styling**
   - Maintained SCSS structure
   - Updated global styles for Next.js compatibility
   - Preserved responsive design

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Redux Toolkit** - State management
- **SCSS/Sass** - Styling
- **React Markdown** - Content rendering
- **React Scroll** - Smooth scrolling
- **Iconify** - Icons

## Deployment

The application can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
```

## License

MIT License
