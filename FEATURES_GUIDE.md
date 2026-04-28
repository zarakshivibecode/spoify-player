# Features & Usage Guide

## 🎵 Complete Feature List

### Audio Playback
- ✅ Play, pause, resume songs
- ✅ Skip to next song
- ✅ Go to previous song
- ✅ Seek through songs (drag progress bar)
- ✅ Volume control with slider
- ✅ Mute/unmute
- ✅ Real-time progress display

### Music Library
- ✅ Import local music folders
- ✅ Supported formats: MP3, WAV, OGG, M4A, FLAC
- ✅ Automatic metadata extraction (artist, title)
- ✅ Display song duration
- ✅ Browse all songs in grid or list view

### Organization
- ✅ Create custom playlists
- ✅ Add songs to playlists
- ✅ View playlist contents
- ✅ Recently played tracking (up to 50 songs)
- ✅ Search functionality

### Playback Modes
- ✅ Normal playback
- ✅ **Repeat One**: Repeat current song continuously
- ✅ **Repeat All**: Repeat entire playlist
- ✅ **Shuffle**: Randomize playback order
- ✅ Auto-advance to next song

### User Interface
- ✅ Dark theme (Spotify-inspired)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Album art placeholder with music icon
- ✅ Visual feedback for current playing song
- ✅ Clean, intuitive navigation

### Search & Discovery
- ✅ Search by song title
- ✅ Search by artist name
- ✅ Search by album name
- ✅ Real-time search results
- ✅ Recently played history

### Keyboard Shortcuts
- ✅ Space: Play/Pause
- ✅ Arrow Right: Next Song
- ✅ Arrow Left: Previous Song

### Advanced Features
- ✅ Global state management with Zustand
- ✅ HTML5 Audio API for playback
- ✅ File System Access API for folder imports
- ✅ Persistent UI state
- ✅ Error handling and fallbacks

---

## 📖 Detailed Usage Guide

### Getting Started

#### 1. Launch the Application
```bash
npm run dev
```
Browser opens to `http://localhost:5173`

#### 2. Import Your Music
**Option A: Folder Import (Recommended)**
- Click "Import Music Folder" button
- Select a folder with music files
- App scans folder and imports all supported audio files

**Option B: Individual Files**
- Falls back to file picker if folder API not available
- Select multiple .mp3, .wav, or .ogg files
- Files are imported immediately

#### 3. Start Playing
- Click any song in the list
- Use player controls at bottom
- Enjoy the music! 🎵

---

## 🎮 Player Controls Guide

### Main Player Bar (Bottom)

#### Song Display (Left)
- Shows current song title
- Shows current artist
- Updates in real-time

#### Progress Bar
- **Click anywhere** to jump to that time
- **Drag** the white dot to seek
- Shows current time / total duration below

#### Playback Controls (Center)
1. **Shuffle** (Left icon)
   - Gray when off
   - Green when enabled
   - Randomizes song order

2. **Previous** (Green button)
   - Plays previous song
   - Hover to see preview

3. **Play/Pause** (Large white button)
   - Big button in center
   - Shows play icon when paused
   - Shows pause icon when playing

4. **Next** (Green button)
   - Plays next song
   - Hover to see preview

5. **Repeat** (Right icon)
   - Click once: Repeat all songs
   - Click twice: Repeat current song only
   - Click thrice: Turn off repeat
   - Shows mode indicator

#### Volume Control (Right)
- Volume slider (0-100%)
- Shows current volume percentage
- Click and drag to adjust
- Hover for precise control

---

## 🔍 Search & Filter

### Using Search

1. Click **Search** tab in sidebar
2. Type in search box at top
3. Results appear in real-time

#### Search Filters By
- **Title**: Song name
- **Artist**: Artist name
- **Album**: Album name
- Case-insensitive (searches ignore uppercase/lowercase)

#### Example Searches
- "love" → finds all songs with "love" in title/artist/album
- "indie" → finds indie artists and songs
- "2024" → finds recent songs tagged as 2024

---

## 📋 Playlist Management

### Create Playlist
1. Click **+** icon next to "Playlists" in sidebar
2. Enter playlist name (e.g., "Workout", "Chill", "2024 Hits")
3. Click OK
4. Playlist appears in sidebar

### Add Songs to Playlist
1. Select a song by clicking it
2. (Currently: Manual selection in playlist view)
3. Songs can be re-added to multiple playlists

### View Playlist
1. Click playlist name in sidebar
2. Playlist contents show in main area
3. All playback features work normally

### Delete Playlist
1. Find playlist in sidebar
2. Right-click or long-press (implementation detail)
3. Confirm deletion

---

## 🏠 Navigation Tabs

### Home
- **Recently Played**: Your last 6 listened songs
- **Album Grid**: Visual grid of recently played
- **All Songs**: Complete list of imported music
- **Import Button**: Hero section to import new music

### Search
- **Search Bar**: Find songs by title/artist/album
- **Results**: Dynamic filtering as you type
- **Browse**: View all songs if no search query

### Your Library
- **Playlists**: Grid of all created playlists
- **Playlist View**: Click playlist to see songs
- **Playlist Info**: Number of songs displayed

---

## ⌨️ Keyboard Shortcuts Reference

| Shortcut | Action |
|----------|--------|
| `Space` | Play / Pause current song |
| `→` | Skip to next song |
| `←` | Go to previous song |
| `Ctrl+F` | Open browser search |

### Future Shortcuts (Can be added)
- `Ctrl+N`: New playlist
- `Ctrl+Shift+D`: Toggle dark/light mode
- `Ctrl+L`: Focus search
- `Ctrl+,`: Open settings

---

## 📂 Supported Audio Formats

### Currently Supported
- ✅ **.MP3** - MPEG-3 Audio (Most common)
- ✅ **.WAV** - Waveform Audio Format
- ✅ **.OGG** - Ogg Vorbis
- ✅ **.M4A** - MPEG-4 Audio
- ✅ **.FLAC** - Free Lossless Audio Codec

### Unsupported (Will be ignored)
- ❌ .MIDI, .MID (MIDI files)
- ❌ .AIFF (Apple's audio format)
- ❌ .WMA (Windows Media Audio)
- ❌ .OPUS, .AAC (Some variants)
- ❌ Video files (.mp4, .mkv)

### Tips for Compatibility
- Convert unsupported formats to MP3 using:
  - FFmpeg (command line)
  - Audacity (free software)
  - Online converters
- Most modern music is MP3 compatible

---

## 🎨 UI/UX Features

### Visual Indicators
- **Current Song**: Highlighted in green in lists
- **Playing Status**: Show pause icon when active
- **Hover Effects**: Buttons scale and change color
- **Progress**: Visual bar shows position in song

### Responsive Behavior
- **Mobile**: Single column layout
- **Tablet**: 2-3 columns for album grid
- **Desktop**: Full 4-5 column grid
- **Auto-scaling**: Elements resize with window

### Smooth Animations
- Button hover scales (1.0 → 1.1)
- Color transitions over 200ms
- Progress bar follows music smoothly
- Volume slider responsive

---

## 🔧 Troubleshooting Features

### If Music Won't Play
1. **Check format**: Is it an .mp3, .wav, .ogg, .m4a, or .flac?
2. **Check volume**: Is volume slider all the way down?
3. **Check file**: Try playing same file in another app
4. **Check browser**: Update to latest version
5. **Reload app**: Press F5 or Ctrl+R

### If Import Not Working
1. **Try File Input**: Folder picker might fallback to file picker
2. **Select individual files**: Instead of entire folder
3. **Check file format**: See supported formats above
4. **Check file access**: Folder permissions might block access
5. **Try different folder**: Some folders may be restricted

### If Audio Quality is Poor
1. **Check original file**: Not an app issue
2. **Update browser**: Latest browsers have better audio support
3. **Check system volume**: Set to 100% for best quality
4. **Restart app**: Clear any audio buffer issues

---

## 📊 Performance Tips

### For Large Music Libraries (100+ songs)
- Import in batches (50 at a time)
- Use search instead of scrolling
- Organize into playlists
- Close unused tabs for better performance

### For Better Playback
- Use wired connection if on WiFi
- Close other apps using audio
- Update audio drivers
- Use MP3 format (most optimized)

### For Faster Loading
- Import local files only (not network drives)
- Clear browser cache regularly
- Reduce browser extensions
- Use modern browser (Chrome, Firefox, Edge)

---

## 🎯 Pro Tips

1. **Create Themed Playlists**: Workout, Study, Sleep, Party, etc.
2. **Use Recently Played**: Check what you liked recently
3. **Keyboard Shortcuts**: Space to play/pause is fastest
4. **Shuffle Mode**: Great for discovering music
5. **Search**: Fastest way to find songs
6. **Organize Folder**: Sort music by artist before importing

---

## 🚀 What's Coming

Planned features for future versions:
- Desktop Electron app for deeper file system access
- Lyrics display
- Audio visualization
- Metadata editor
- Playlist export/import
- Dark/Light theme toggle
- Equalizer controls
- Queue management
- Now playing details

---

## 📞 Need Help?

- **Check README.md**: General information
- **Check SETUP_GUIDE.md**: Installation & development
- **Check FILE_STRUCTURE.md**: Code organization
- **Browser Console**: Press F12, check Console tab for errors
- **GitHub Issues**: Report bugs or request features

---

**Enjoy your music! 🎵**
