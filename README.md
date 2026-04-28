# Spotify Player - Desktop Music App

A modern, fully-featured music player desktop application inspired by Spotify. Built with React, Vite, and TailwindCSS with support for local music file import and playback.

## ✨ Features

- 🎵 **Audio Playback**: Play, pause, skip, and seek through your music
- 📁 **Local File Import**: Import music folders from your computer (supports .mp3, .wav, .ogg, .m4a, .flac)
- 🔍 **Search**: Search songs by title, artist, or album
- 📋 **Playlists**: Create and manage custom playlists
- 🎚️ **Volume Control**: Adjust volume with visual slider
- ⏱️ **Progress Bar**: Seekable progress bar with current time display
- 🔁 **Repeat Modes**: Off, Repeat One, Repeat All
- 🔀 **Shuffle**: Randomize playback order
- ⌨️ **Keyboard Shortcuts**:
  - **Space**: Play/Pause
  - **Arrow Right**: Next song
  - **Arrow Left**: Previous song
- 📊 **Recently Played**: Track your listening history
- 🎨 **Dark Theme**: Spotify-inspired dark UI with green accents
- 📱 **Responsive Design**: Works on desktop and tablet sizes

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **State Management**: Zustand
- **Audio API**: HTML5 Audio API
- **Node.js**: 16+ required

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd "spotify player"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
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
