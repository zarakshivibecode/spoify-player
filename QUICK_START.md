# 🎵 Qidz Player - Quick Start Guide

**© 2026 Khadiq Zarkasy (Qidz). All rights reserved.**

## ✅ Installation Complete!

Your premium Spotify-like music player is ready to use. Follow these simple steps to get started.

---

## 🚀 Getting Started (3 Steps)

### Step 1: Start the App

Open PowerShell in the project directory and run:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173/`

The browser should automatically open. If not, visit `http://localhost:5173/` manually.

### Step 2: Import Your Music

1. Click the **"Import Music"** button in the sidebar (left panel)
2. Select a folder containing your music files (MP3, WAV, OGG)
3. All songs will be automatically scanned and imported

### Step 3: Start Playing!

1. Click any song in the library
2. Use the player controls at the bottom to play, pause, skip
3. Adjust volume and create playlists as needed

---

## 🎮 Main Features

### Navigation (Left Sidebar)
- **Home**: Recently played and your music library
- **Search**: Find songs by title, artist, or album
- **Your Library**: Manage playlists
- **Liked Songs**: Favorite tracks (ready for implementation)
- **Import Music**: Add songs from your computer
- **Playlists**: Create and manage custom playlists

### Player Controls (Bottom Bar)

| Control | Action |
|---------|--------|
| ▶️ Play/Pause | Start or pause playback |
| ⏭️ Next | Skip to next song |
| ⏮️ Previous | Go to previous song |
| 🔀 Shuffle | Randomize playback order |
| 🔁 Repeat | Cycle repeat modes (off/all/one) |
| 🔊 Volume | Adjust volume level |
| 📊 Progress Bar | Seek to specific time |

### Keyboard Shortcuts

- **Space**: Play/Pause
- **→ Arrow**: Next song
- **← Arrow**: Previous song

---

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── App.jsx          # Main application
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── Player.jsx       # Player bar
│   ├── MainContent.jsx  # Content area
│   └── views/           # Page views
│       ├── HomeView.jsx
│       ├── SearchView.jsx
│       └── LibraryView.jsx
├── store/
│   └── useMusicStore.js # Zustand state management
├── hooks/
│   └── useAudioPlayer.js # Audio playback hook
└── utils.js             # Utility functions

public/
├── electron.js          # Electron main process
└── preload.js           # Electron preload script
```

---

## 🎨 UI/UX Features

✨ **Modern Dark Theme** - Spotify-inspired black background with green accents
🎬 **Smooth Animations** - Powered by Framer Motion
🎨 **Glassmorphism** - Modern frosted glass effect panels
🎵 **Album Hover** - Play button appears on album hover
📱 **Responsive** - Works on different screen sizes

---

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React | UI Framework |
| Vite | Build Tool |
| TailwindCSS | Styling |
| Zustand | State Management |
| Framer Motion | Animations |
| Lucide Icons | Icons |
| Electron | Desktop App |

---

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
npm run dev
```

### No sound playing
- Check browser volume (not muted)
- Verify audio file format is supported (MP3, WAV, OGG)
- Check browser console for errors (F12)

### Import not working
- Ensure files have supported extensions (.mp3, .wav, .ogg)
- Try a smaller folder first
- Check file permissions

---

## 📦 Supported Audio Formats

- **MP3** (.mp3) - Most common
- **WAV** (.wav) - Lossless
- **OGG** (.ogg) - Free format
- **M4A** (.m4a) - iTunes format
- **FLAC** (.flac) - Lossless compression

---

## 🌟 Next Steps

### Enable Electron (Desktop App)
```bash
npm run dev:electron
```

This will launch the app as a standalone desktop window with file system access.

### Build for Production
```bash
npm run build
```

Creates optimized build in the `dist/` folder.

---

## ⌨️ Development Commands

```bash
# Start dev server (web)
npm run dev

# Start with Electron
npm run dev:electron

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🎯 Future Features (Coming Soon)

- 🎤 Mini Player Mode
- 🖱️ Drag & Drop Playlist Management
- 🎨 Theme Customization
- 📊 Visualizer
- 🔊 Equalizer
- ☁️ Cloud Sync

---

## 💡 Tips & Tricks

1. **Create Playlists**: Click "Playlists" → "New Playlist" in sidebar
2. **Search**: Use the Search view to find songs
3. **Keyboard Control**: Use Space to play/pause without clicking
4. **Volume Memory**: Your volume setting is saved automatically
5. **Recently Played**: App tracks your listening history

---

## 📞 Support

For issues or questions:
1. Check the browser console (F12) for errors
2. Try clearing browser cache
3. Restart the dev server
4. Review the full README.md for detailed documentation

---

## ✨ Credits

Built by **Khadiq Zarkasy (Qidz)**

© 2026 All rights reserved.

---

**Enjoy your music! 🎵**
