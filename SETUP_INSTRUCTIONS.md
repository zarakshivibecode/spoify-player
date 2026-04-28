# Qidz Player

A premium Spotify-like music player desktop application built with React, Vite, TailwindCSS, and Electron.

**© 2026 Khadiq Zarkasy (Qidz). All rights reserved.**

## Features

### 🎵 Core Features
- **Import Music Folder**: Recursively scan and import music files
- **Supported Formats**: MP3, WAV, OGG
- **Metadata Extraction**: Automatically extracts title, artist, album, duration, and cover art
- **Music Controls**: Play, Pause, Next, Previous, Seek bar, Volume control
- **Playback Modes**:
  - Shuffle mode
  - Repeat (off/all/one)
- **Queue System**: Add to queue, reorder queue
- **Recently Played**: Auto-updated history
- **Playlists**: Create, manage, and save playlists locally

### 🎨 UI/UX Features
- **Spotify-inspired Design**: Premium dark theme with green accents
- **Smooth Animations**: Framer Motion animations for polished feel
- **Responsive Layout**: Works on various screen sizes
- **Glassmorphism Panels**: Modern frosted glass effect
- **Album Hover Overlay**: Play button appears on hover
- **Dynamic Colors**: Gradient backgrounds for visual appeal
- **Search Functionality**: Search songs by title, artist, or album

### ⌨️ Keyboard Shortcuts
- **Space**: Play/Pause
- **Arrow Right**: Next song
- **Arrow Left**: Previous song

### 🎯 Advanced Features
- **Mini Player Mode**: Compact player view (future enhancement)
- **Drag & Drop**: Drag songs into playlists (future enhancement)
- **Volume Memory**: Saves last volume level
- **Local Storage**: Persist playlists and settings

## Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: TailwindCSS 3.3.5
- **State Management**: Zustand 4.4.1
- **Desktop**: Electron 27.0.0
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.294.0
- **Metadata**: music-metadata 8.1.3

## Installation

### Prerequisites
- Node.js 16+ and npm

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd d:\my-projects\spotify-player
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   This will start the Vite dev server at `http://localhost:5173`

## Development

### Web Version (Development)
```bash
npm run dev
```

### Electron Version (Desktop)
```bash
npm run dev:electron
```

This will start both Vite dev server and Electron window in parallel.

### Build

#### Web Build
```bash
npm run build
```

#### Electron Build (Coming Soon)
You can package Electron with electron-builder or electron-packager.

## Project Structure

```
src/
├── components/
│   ├── App.jsx                 # Main app component
│   ├── Sidebar.jsx             # Sidebar navigation
│   ├── Player.jsx              # Bottom player bar
│   ├── MainContent.jsx         # Main content area
│   ├── views/
│   │   ├── HomeView.jsx        # Home/Recently Played view
│   │   ├── SearchView.jsx      # Search view
│   │   └── LibraryView.jsx     # Library/Playlists view
│
├── hooks/
│   └── useAudioPlayer.js       # Audio playback hook
│
├── store/
│   └── useMusicStore.js        # Zustand state management
│
├── main.jsx                    # React entry point
└── index.css                   # TailwindCSS styles

public/
├── electron.js                 # Electron main process
└── preload.js                  # Electron preload script
```

## Configuration Files

- **vite.config.js**: Vite configuration
- **tailwind.config.js**: TailwindCSS configuration
- **postcss.config.js**: PostCSS configuration
- **package.json**: Dependencies and scripts

## Color Scheme

- **Primary Background**: #121212 (Black)
- **Secondary Background**: #181818 (Dark Gray)
- **Accent Color**: #1DB954 (Spotify Green)
- **Text**: White / Gray tones
- **Hover States**: Semi-transparent overlays

## Usage

### Importing Music
1. Click "Import Music" button in the sidebar
2. Select a folder containing music files
3. Songs will be automatically scanned and imported

### Playing Music
1. Click any song to start playing
2. Use player controls (play/pause, next, previous)
3. Adjust volume with volume slider
4. Seek through song using progress bar

### Managing Playlists
1. Click "Playlists" in sidebar
2. Click "New Playlist" to create
3. Right-click songs to add to playlist
4. Click playlist to view and manage songs

### Searching
1. Go to "Search" view
2. Type to search songs, artists, or albums
3. Click any result to play

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Space | Play/Pause |
| → | Next Song |
| ← | Previous Song |

## Future Enhancements

- [ ] Mini player mode
- [ ] Drag & drop playlist management
- [ ] Visualizer
- [ ] Equalizer
- [ ] Theme customization
- [ ] Music recommendations
- [ ] Sync with cloud storage
- [ ] Album/Artist views

## Performance Optimizations

- Lazy loading of song metadata
- Optimized re-renders with Zustand
- CSS-in-JS minification via TailwindCSS
- Efficient scroll handling

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### No Sound Playing
- Check volume level in player
- Verify audio files are supported format (MP3, WAV, OGG)
- Check browser console for errors

### Songs Not Importing
- Ensure folder contains supported audio formats
- Check file permissions
- Verify music-metadata can read files

### UI Not Responsive
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check TailwindCSS is loaded properly

## License

© 2026 Khadiq Zarkasy (Qidz). All rights reserved.

This project is provided as-is for personal use. Unauthorized copying, reproduction, or distribution is prohibited.

## Support

For issues, feature requests, or contributions, please contact the author.

---

**Made with ❤️ by Khadiq Zarkasy**
