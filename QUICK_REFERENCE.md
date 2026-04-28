# Quick Reference Card

## 🚀 Quick Start (Copy & Paste)

```bash
cd "spotify player"
npm install
npm run dev
```

Then:
1. Click "Import Music Folder"
2. Select folder with .mp3/.wav files
3. Click any song to play
4. Use controls at bottom

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Space** | Play / Pause |
| **→** | Next Song |
| **←** | Previous Song |

---

## 🎮 Player Controls

```
┌─────────────────────────────────────────────────────┐
│ Song Title & Artist  │ [Progress Bar] │ Duration    │
├─────────────────────────────────────────────────────┤
│ 🔀 ◀️ ⏯️ ▶️ 🔁  [Volume Slider: 70%]                │
└─────────────────────────────────────────────────────┘
```

- 🔀 = Shuffle (randomize order)
- ◀️ = Previous song
- ⏯️ = Play/Pause
- ▶️ = Next song
- 🔁 = Repeat (Off → All → One → Off)

---

## 📂 Supported Formats

✅ MP3 | ✅ WAV | ✅ OGG | ✅ M4A | ✅ FLAC

---

## 📁 Navigation

| Tab | What It Does |
|-----|-------------|
| **Home** | Recently played + all songs |
| **Search** | Find songs by title/artist |
| **Library** | Manage playlists |

---

## 🎵 Playback States

```
🔀 OFF    → Play in order
🔀 ON     → Shuffle (random order)

🔁 OFF    → No repeat
🔁 ALL    → Repeat all songs
🔁 ONE    → Repeat current song
```

---

## 📦 File Structure (Key Files)

```
src/
├── components/    (UI components)
├── hooks/        (useAudio hook)
├── store.js      (State management)
├── utils.js      (Helpers)
└── index.css     (Styles)
```

---

## 🛠️ Commands

```bash
npm run dev       # Start dev server
npm run build     # Create production build
npm run preview   # Preview production build
```

---

## 🔧 Dependencies

- **React**: UI framework
- **Vite**: Build tool (fast!)
- **TailwindCSS**: Styling
- **Zustand**: State management
- **Lucide React**: Icons
- **HTML5 Audio API**: Music playback

---

## 📊 Import Music

**Step 1**: Click "Import Music Folder" button  
**Step 2**: Select folder with music files  
**Step 3**: Wait for import to complete  
**Step 4**: Songs appear in Home tab  

**Supported Formats**: .mp3, .wav, .ogg, .m4a, .flac

---

## 🎯 Common Tasks

### Play a Song
Click on song in list

### Search for Songs
1. Click "Search" tab
2. Type song name/artist
3. Results appear instantly

### Create Playlist
1. Click "+" next to "Playlists"
2. Enter playlist name
3. Playlist ready to use

### Adjust Volume
Drag slider at bottom right (0-100%)

### Skip Song
Click "Next" button or press Arrow Right

### Go Back
Click "Previous" button or press Arrow Left

---

## 🐛 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| No sound | Check volume slider not at 0% |
| Can't import | Use .mp3 files, not other formats |
| App frozen | Refresh page (F5 or Ctrl+R) |
| Files not found | Ensure files are in supported format |

---

## 📚 Full Documentation

- **README.md** - Main docs & features
- **SETUP_GUIDE.md** - Installation & development
- **FILE_STRUCTURE.md** - Code organization
- **FEATURES_GUIDE.md** - Detailed features
- **QUICK_REFERENCE.md** - This file!

---

## 🌐 Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  

**Note**: Some features like File System Access API may have limited support in Safari.

---

## 🚀 Next Steps

1. Install: `npm install`
2. Start: `npm run dev`
3. Import: Add music files
4. Play: Click any song
5. Enjoy: 🎵

---

## 💡 Pro Tips

- ⌨️ Use **Space** for quick play/pause
- 🔍 Use **Search** to find songs fast
- 🎲 Try **Shuffle** to discover music
- 📋 Create **Playlists** for organization
- 🎨 **Recently Played** shows your favorites

---

**Happy Listening! 🎶**

Last Updated: 2024
