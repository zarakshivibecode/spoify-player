# Project File Structure

## Complete File Tree

```
spotify-player/
│
├── src/
│   ├── components/
│   │   ├── App.jsx                 # Main application component
│   │   ├── Sidebar.jsx             # Left sidebar with navigation
│   │   ├── MainContent.jsx         # Main content area router
│   │   ├── Player.jsx              # Bottom music player bar
│   │   ├── SongList.jsx            # Song table list component
│   │   ├── AlbumGrid.jsx           # Album card grid component
│   │   ├── ImportButton.jsx        # Import music folder button
│   │   └── views/
│   │       ├── HomeView.jsx        # Home tab - shows recently played & all songs
│   │       ├── SearchView.jsx      # Search tab - search functionality
│   │       └── LibraryView.jsx     # Library tab - playlists and saved songs
│   │
│   ├── hooks/
│   │   └── useAudio.js             # Custom hook for audio playback logic
│   │
│   ├── store.js                    # Zustand state management store
│   ├── utils.js                    # Utility functions (formatTime, parsing, etc)
│   ├── index.css                   # Global styles and tailwind imports
│   └── main.jsx                    # React entry point
│
├── index.html                      # HTML template
├── vite.config.js                  # Vite bundler configuration
├── tailwind.config.js              # TailwindCSS configuration
├── postcss.config.js               # PostCSS for TailwindCSS
├── package.json                    # Node.js dependencies and scripts
├── .gitignore                      # Git ignore rules
├── README.md                       # Main project documentation
└── FILE_STRUCTURE.md               # This file

```

## File Descriptions

### src/components/
Core React components for the UI

- **App.jsx**: Root component that sets up the layout and keyboard shortcuts
- **Sidebar.jsx**: Left navigation sidebar with Home/Search/Library tabs and playlist list
- **MainContent.jsx**: Content router that displays different views based on active tab
- **Player.jsx**: Bottom player control bar with progress, volume, and playback controls
- **SongList.jsx**: Table-style song list component with play buttons
- **AlbumGrid.jsx**: Grid layout showing songs as album cards
- **ImportButton.jsx**: Button component for importing music from folders/files

### src/components/views/
Tab-specific view components

- **HomeView.jsx**: Shows recently played, featured albums, and all songs
- **SearchView.jsx**: Search interface and results display
- **LibraryView.jsx**: Playlist management and selection

### src/hooks/
Custom React hooks for shared logic

- **useAudio.js**: Manages HTML5 Audio API, playback state, and song navigation

### src/ Root Files
Core utilities and state

- **store.js**: Zustand store for global state (songs, playlists, playback state)
- **utils.js**: Helper functions for time formatting, file parsing, and metadata extraction
- **index.css**: Global styles with Tailwind directives and custom CSS
- **main.jsx**: React 18 root render point

### Configuration Files

- **vite.config.js**: Vite build tool configuration
- **tailwind.config.js**: TailwindCSS theme customization
- **postcss.config.js**: PostCSS plugins configuration
- **package.json**: Project metadata, dependencies, and npm scripts
- **index.html**: HTML template that loads the React app
- **.gitignore**: Git files to ignore

---

## Adding New Features

### Adding a New Component
1. Create file in `src/components/` or appropriate subfolder
2. Import necessary dependencies and hooks
3. Use Zustand store with `useMusicStore()` for state
4. Export the component

### Adding a New Store Action
1. Open `src/store.js`
2. Add new state and setter function to the store
3. Use destructuring in components: `const { action, setAction } = useMusicStore();`

### Adding a New Utility Function
1. Add function to `src/utils.js`
2. Export the function
3. Import in components: `import { functionName } from '../utils';`

### Adding a New View
1. Create file in `src/components/views/`
2. Create corresponding tab case in `MainContent.jsx`
3. Update `Sidebar.jsx` navigation if needed

---

## Component Dependencies

```
App
├── Sidebar
├── MainContent
│   ├── HomeView
│   │   ├── SongList
│   │   ├── AlbumGrid
│   │   └── ImportButton
│   ├── SearchView
│   │   └── SongList
│   └── LibraryView
│       └── SongList
└── Player
```

## State Flow

```
Zustand Store (store.js)
  ├── Songs & Playlists
  ├── Playback State (current song, is playing, time, etc.)
  ├── UI State (active tab, search query)
  └── Actions (setSongs, setCurrentSong, etc.)
        ↓
    Components use useMusicStore()
        ↓
    useAudio Hook manages Audio API
        ↓
    HTML5 Audio Element
```

## Styling Architecture

- **Tailwind**: Utility classes for responsive, consistent styling
- **Custom CSS**: In `index.css` for complex styles and animations
- **Color System**: Defined in `tailwind.config.js` custom colors
- **Responsive**: Mobile-first breakpoints using Tailwind (md:, lg:, xl:)
