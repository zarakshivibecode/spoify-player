# Development & Setup Guide

## Quick Start

### 1. Initial Setup

```bash
# Navigate to project directory
cd "spotify player"

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open automatically at `http://localhost:5173`

---

## Prerequisites

- **Node.js**: Version 16.x or higher
  - Download: https://nodejs.org/
  - Check version: `node --version`

- **npm**: Comes with Node.js
  - Check version: `npm --version`

---

## Installation Steps (Detailed)

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Visit https://nodejs.org/
2. Download LTS version
3. Follow installation prompts
4. Restart your terminal/computer

### Step 2: Navigate to Project
```bash
cd "path/to/spotify player"
```

### Step 3: Install Dependencies
```bash
npm install
```
This installs all required packages listed in `package.json`:
- react & react-dom
- vite (build tool)
- tailwindcss (styling)
- zustand (state management)
- lucide-react (icons)
- postcss & autoprefixer

### Step 4: Start Development
```bash
npm run dev
```

Expected output:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

---

## Available Commands

### Development
```bash
npm run dev
```
- Starts development server with hot reload
- Auto-opens browser to localhost:5173
- Changes to code automatically reflect in browser

### Production Build
```bash
npm run build
```
- Creates optimized production build
- Output goes to `dist/` folder
- Minified and ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Useful for testing before deployment

---

## Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
# Windows: Find and kill process using port 5173
netstat -ano | findstr :5173
taskkill /PID [PID] /F

# Mac/Linux:
lsof -i :5173
kill -9 [PID]
```

Or modify `vite.config.js`:
```javascript
server: {
  port: 3000, // Change to different port
  open: true
}
```

### Dependencies Installation Failed
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules

# Reinstall
npm install
```

### Module Not Found Errors
Ensure you're in the correct directory with `package.json`:
```bash
ls package.json  # Should show the file
```

### Hot Reload Not Working
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
- Clear browser cache
- Restart dev server: Press `Ctrl+C` and run `npm run dev` again

---

## Project Customization

### Changing Theme Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      spotify: {
        dark: '#121212',      // Main background
        darkGray: '#1DB954',  // Green accent
        lightGray: '#282828', // Secondary bg
        border: '#404040',    // Borders
      }
    },
  },
},
```

### Changing Port
Edit `vite.config.js`:
```javascript
server: {
  port: 3000,  // Your port here
  open: true
}
```

### Adding New Dependencies
```bash
npm install package-name
```

Then import in your files:
```javascript
import { SomethingUseful } from 'package-name';
```

---

## Building for Production

### Create Optimized Build
```bash
npm run build
```

### Deployment Options

#### 1. **Netlify** (Recommended for beginners)
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### 2. **Vercel**
```bash
npm install -g vercel
vercel --prod
```

#### 3. **GitHub Pages**
```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

#### 4. **Traditional Hosting**
```bash
npm run build
# Upload dist/ folder to your web host
```

---

## Development Workflow

### 1. Start Dev Server
```bash
npm run dev
```

### 2. Make Changes
- Edit files in `src/` folder
- Browser auto-reloads changes
- Errors show in browser console

### 3. Test Features
- Use "Import Music Folder" to add test songs
- Test playback controls
- Try search functionality
- Create test playlists

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Before Deployment
```bash
npm run preview
```

---

## File Editing Tips

### VS Code Extensions (Recommended)
- **Tailwind CSS IntelliSense**: Autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets**: React shortcuts
- **Prettier**: Code formatter

### Editor Configuration
Create `.prettierrc` for consistent formatting:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## Common Development Tasks

### Adding a New Component
1. Create file in `src/components/`
2. Write React component
3. Import in parent component
4. Add to JSX

Example:
```javascript
// src/components/MyNewComponent.jsx
function MyNewComponent() {
  return <div>Hello World</div>;
}

export default MyNewComponent;
```

### Updating Store
1. Open `src/store.js`
2. Add new state field
3. Add setter function
4. Use in component: `const { state, setState } = useMusicStore();`

### Adding Styles
- Use Tailwind classes in JSX
- Or add CSS to `src/index.css`
- Or create CSS module

---

## Performance Optimization

### Code Splitting
Vite automatically handles code splitting for optimal loading.

### Image Optimization
Use local SVGs (Lucide React) instead of image files.

### Bundle Analysis
```bash
npm run build
# Check dist/ folder size
```

---

## Debugging

### Browser DevTools
- Open: `F12` or `Right-click → Inspect`
- **Console**: Check for errors
- **Network**: Monitor file loads
- **React DevTools**: Browser extension for React debugging

### Terminal Logs
```javascript
console.log('Debug info:', variable);
console.error('Error message:', error);
console.warn('Warning:', info);
```

### React Query DevTools
For advanced debugging (optional):
```bash
npm install @tanstack/react-query-devtools
```

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Import some music files
4. ✅ Test all features
5. ✅ Customize as needed
6. ✅ Build for production
7. ✅ Deploy to your hosting

---

## Getting Help

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Zustand Docs**: https://github.com/pmndrs/zustand

---

## Tips & Best Practices

✨ **Performance**
- Use React DevTools Profiler to find slow components
- Memoize expensive computations with `useMemo`
- Lazy load components with `React.lazy()`

✨ **Code Quality**
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic

✨ **Styling**
- Use Tailwind utility classes
- Avoid inline styles
- Maintain consistent spacing

✨ **Testing**
- Test on different devices/browsers
- Try importing different music formats
- Test keyboard shortcuts

---

**Happy coding! 🎵**
