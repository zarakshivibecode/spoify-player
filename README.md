# Qidz Player

A premium Spotify-like music player desktop application with a modern, polished UI and full feature set.

**© 2026 Khadiq Zarkasy (Qidz). All rights reserved.**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-Proprietary-red)
![React](https://img.shields.io/badge/react-18.2.0-blue)
![Vite](https://img.shields.io/badge/vite-5.0.0-purple)

## 🎵 Overview

Qidz Player is a feature-rich music player that brings the sophistication of Spotify to your desktop. Built with cutting-edge web technologies and optimized for performance, it provides a seamless music listening experience with support for local file playback.

## ✨ Features

### 🎶 Core Playback
- Play, Pause, Next, Previous controls
- Seek bar with interactive progress tracking
- Volume control with memory (saves last volume level)
- Shuffle and Repeat modes (off/all/one)
- Queue system with reordering capability

### 📁 Music Management
- Import music folders (recursive scan)
- Supported formats: MP3, WAV, OGG
- Auto-extract metadata: Title, Artist, Album, Duration, Cover Art
- Recently Played history
- Create and manage custom playlists
- Add/remove songs from playlists

### 🔍 Navigation & Search
- Home view with recently played and music library
- Search songs by title, artist, or album
- Library view with playlist management
- Smooth view transitions

### 🎨 User Interface
- **Spotify-inspired design** with dark theme and green accents
- Smooth animations powered by Framer Motion
- Glassmorphism panels for modern look
- Album hover overlays with play buttons
- Dynamic gradient backgrounds
- Responsive layout for various screen sizes

### ⌨️ Keyboard Shortcuts
- **Space**: Play/Pause
- **→ (Arrow Right)**: Next song
- **← (Arrow Left)**: Previous song

### 🎯 Advanced Features
- Mini Player Mode (ready for implementation)
- Drag & Drop support (ready for implementation)
- Local storage persistence
- Dark mode optimized
- Performance optimized with lazy loading

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI Framework |
| Vite | 5.0.0 | Build Tool |
| TailwindCSS | 3.3.5 | Styling |
| Zustand | 4.4.1 | State Management |
| Framer Motion | 10.16.4 | Animations |
| Lucide React | 0.294.0 | Icons |
| Electron | 27.0.0 | Desktop App |
| music-metadata | 8.1.3 | Audio Metadata |

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- 100MB disk space

### Quick Start

```bash
# 1. Navigate to project directory
cd d:\my-projects\spotify-player

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Electron Desktop App

```bash
# Install all dependencies including Electron
npm install

# Run Electron app in development mode
npm run dev:electron
```

## 🚀 Usage Guide

### Importing Music
1. Click **"Import Music"** button in the sidebar
2. Select a folder containing your music files
3. App will recursively scan and import all supported formats
4. Metadata will be automatically extracted

### Playing Music
1. Click any song to start playback
2. Use player controls at the bottom
3. Adjust volume with the volume slider
4. Use seek bar to jump to any point in the song

### Managing Playlists
1. Click **"Playlists"** section in sidebar
2. Click **"+ New Playlist"** to create
3. Enter playlist name
4. Add songs by clicking the add button when hovering
5. Remove songs from playlists in the library view

### Searching Music
1. Go to **"Search"** tab
2. Type song title, artist name, or album
3. Results update in real-time
4. Click any result to play

## 📁 Project Structure

```
qidz-player/
├── src/
│   ├── components/
│   │   ├── App.jsx                 # Main application component
│   │   ├── Sidebar.jsx             # Navigation sidebar
│   │   ├── Player.jsx              # Bottom player bar
│   │   ├── MainContent.jsx         # Main content area
│   │   ├── views/
│   │   │   ├── HomeView.jsx        # Home page
│   │   │   ├── SearchView.jsx      # Search page
│   │   │   └── LibraryView.jsx     # Playlists page
│   ├── hooks/
│   │   └── useAudioPlayer.js       # Audio playback hook
│   ├── store/
│   │   └── useMusicStore.js        # Global state management
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
│
├── public/
│   ├── electron.js                 # Electron main process
│   └── preload.js                  # Electron preload script
│
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies
```

## 🎨 Design System

### Color Palette
```
Primary Background:    #121212 (Black)
Secondary Background:  #181818 (Dark Gray)
Accent Color:          #1DB954 (Spotify Green)
Text Primary:          #FFFFFF (White)
Text Secondary:        #B3B3B3 (Gray)
```

### Typography
- Font Family: System UI (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Headings: Bold weight (font-weight: 700)
- Body: Regular weight (font-weight: 400)
- Small text: Medium weight (font-weight: 500)

## 🔧 Configuration

### Environment Setup
```javascript
// Vite uses .env files for configuration
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_VERSION=1.0.0
```

### TailwindCSS Customization
Edit `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Breakpoints

## 📊 State Management

Zustand store (`useMusicStore`) manages:
- Songs library
- Current playing song
- Player state (playing, time, duration)
- Volume and playback modes
- Playlists
- Recently played history
- UI state (current view, search query)

## 🎵 Audio Formats Supported

| Format | Extension | Notes |
|--------|-----------|-------|
| MP3 | .mp3 | Most widely supported |
| WAV | .wav | Lossless audio |
| OGG | .ogg | Free audio format |
| M4A | .m4a | iTunes format |
| FLAC | .flac | Lossless compression |

## ⚡ Performance Optimization

- **Lazy Loading**: Metadata extracted on demand
- **Virtualized Lists**: Handle large music libraries efficiently
- **CSS-in-JS**: Optimized with TailwindCSS
- **Code Splitting**: Vite automatic code splitting
- **Caching**: Local storage for playlists and settings

## 🐛 Troubleshooting

### Audio not playing
- Check browser audio permissions
- Verify file format is supported
- Check console for detailed errors
- Ensure speakers/headphones are connected

### Import not working
- Verify folder contains supported audio files
- Check file permissions
- Ensure sufficient disk space
- Try with a smaller folder first

### UI not loading properly
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check browser console for errors
- Update browser to latest version

### Slow performance
- Close other applications
- Reduce library size by removing old playlists
- Clear browser cache
- Update to latest version

## 🔐 Security

- Sandbox Electron process
- Context isolation enabled
- No node integration in renderer
- Preload script for secure IPC
- No external scripts

## 📝 License & Copyright

© 2026 Khadiq Zarkasy (Qidz). All rights reserved.

This application is provided for personal use. Unauthorized copying, reproduction, modification, or distribution is strictly prohibited without explicit written permission.

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [Electron Documentation](https://www.electronjs.org)

## 👨‍💻 Author

**Khadiq Zarkasy** (Qidz)
- Email: [your-email@example.com]
- GitHub: [@qidz](https://github.com/qidz)

## 🙏 Acknowledgments

Inspired by Spotify's beautiful interface and user experience.

---

**Made with ❤️ using cutting-edge web technologies**

Last Updated: January 2026

   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open in browser**
   The app will automatically open at `http://localhost:5173`

## 🚀 Usage

### Importing Music

1. Click the **"Import Music Folder"** button in the hero section
2. Select a folder containing your music files
3. The app will scan for supported audio formats and import them
4. Songs will appear in your library with extracted metadata

**Supported Formats**: .mp3, .wav, .ogg, .m4a, .flac

### Navigation

- **Home**: View recently played songs and all imported music
- **Search**: Find songs by title, artist, or album name
- **Your Library**: Access saved playlists and manage your collection

### Playback Controls

- Click any song to start playing
- Use the player bar at the bottom to control playback
- Drag the progress bar to seek through the current song
- Adjust volume with the slider on the right
- Click shuffle and repeat buttons to change playback behavior

### Creating Playlists

1. Click the **+** icon next to "Playlists" in the sidebar
2. Enter a playlist name
3. Click on a playlist to view and manage songs

## 🏗️ Project Structure

```
spotify-player/
├── src/
│   ├── components/
│   │   ├── App.jsx              # Main app component
│   │   ├── Sidebar.jsx          # Navigation sidebar
│   │   ├── MainContent.jsx      # Content area router
│   │   ├── Player.jsx           # Bottom player bar
│   │   ├── SongList.jsx         # Song table component
│   │   ├── AlbumGrid.jsx        # Album grid view
│   │   ├── ImportButton.jsx     # File import button
│   │   └── views/
│   │       ├── HomeView.jsx     # Home tab view
│   │       ├── SearchView.jsx   # Search tab view
│   │       └── LibraryView.jsx  # Library/playlist view
│   ├── hooks/
│   │   └── useAudio.js          # Audio handling hook
│   ├── store.js                 # Zustand state management
│   ├── utils.js                 # Utility functions
│   ├── index.css                # Global styles
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # TailwindCSS configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🎨 Color Scheme

- **Background**: #121212 (Dark)
- **Sidebar**: #000000 (Black)
- **Secondary**: #282828 (Light Gray)
- **Accent**: #1DB954 (Spotify Green)
- **Border**: #404040 (Border Gray)

## 📋 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Serves the production build locally for testing.

## 🔄 State Management

The app uses **Zustand** for state management. The main store includes:

- **Songs**: All imported music tracks
- **Playback**: Current song, play state, volume, time
- **Playlists**: User-created playlists
- **UI State**: Active tab, search query, etc.

See [store.js](src/store.js) for full store structure.

## 🎯 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play/Pause |
| `→` | Next Song |
| `←` | Previous Song |

## 🐛 Troubleshooting

### Music files not importing
- Ensure files are in supported formats (.mp3, .wav, .ogg, .m4a, .flac)
- Check browser console for error messages
- Try importing individual files instead of a folder

### No sound during playback
- Check volume level (not muted)
- Verify audio files are valid
- Check browser console for audio errors
- Try a different audio format

### File System Access API not working
- The app will fall back to file input
- Some browsers require user permission
- Check browser privacy settings

## 🚀 Future Enhancements

- [ ] Electron integration for native desktop app
- [ ] Audio visualization/waveform display
- [ ] Metadata editing (title, artist, album art)
- [ ] Export/import playlists (JSON/M3U)
- [ ] Lyrics display
- [ ] Equalizer controls
- [ ] Dark/Light theme toggle
- [ ] Now playing queue management
- [ ] Playlist sharing
- [ ] LastFM integration

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## ⚡ Performance Tips

- Import music in batches for better performance
- Keep playlists organized
- Use search instead of scrolling large lists
- Close unused browser tabs for smoother playback

## 🎬 Getting Started Video

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Click "Import Music Folder"
4. Select a folder with .mp3 files
5. Start playing music!

---

**Made with ❤️ using React, Vite, and TailwindCSS**
