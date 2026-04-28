# Architecture & System Design

## Application Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Spotify Player App                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   React App      │
                    │   (App.jsx)      │
                    └──────────────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
            ┌────────┐  ┌──────────┐  ┌────────┐
            │Sidebar │  │Main      │  │Player  │
            │        │  │Content   │  │Bar     │
            └────────┘  └──────────┘  └────────┘
                │             │             │
                │      ┌──────┼──────┐      │
                │      ▼      ▼      ▼      │
                │    Home Search Library    │
                │                          │
                └──────────────┬───────────┘
                               ▼
                        ┌─────────────┐
                        │Zustand Store│
                        │  (store.js) │
                        └─────────────┘
                               │
                    ┌──────────┼──────────┐
                    ▼          ▼          ▼
                 Songs   Playback    UI State
                                │
                                ▼
                        ┌─────────────────┐
                        │useAudio Hook    │
                        │ (useAudio.js)   │
                        └─────────────────┘
                                │
                                ▼
                        ┌─────────────────┐
                        │HTML5 Audio API  │
                        │ (Audio Element) │
                        └─────────────────┘
```

## Data Flow Architecture

```
USER INTERACTIONS
    │
    ├─────────────────────────────────┐
    │                                 │
    ▼                                 ▼
Click Song                     Import Music
    │                                 │
    ▼                                 ▼
setCurrentSong()              addSongs()
    │                                 │
    └─────────────────┬───────────────┘
                      ▼
            ZUSTAND STORE UPDATE
                      │
                ┌─────┴─────┐
                ▼           ▼
        Re-render       Update Store
        Components      State
                │           │
                └─────┬─────┘
                      ▼
            COMPONENT RE-RENDER
                      │
            ┌─────────┼─────────┐
            ▼         ▼         ▼
          UI       Audio      Props
        Updates   Updates     Pass
            │         │         │
            └─────────┼─────────┘
                      ▼
            useAudio Hook Reactions
                      │
            ┌─────────┼─────────┐
            ▼         ▼         ▼
        Load    Play/Pause  Volume
        Audio   Toggle      Adjust
            │         │         │
            └─────────┼─────────┘
                      ▼
            HTML5 Audio API
                      │
                      ▼
                PLAYBACK
```

## Component Hierarchy

```
App (Root)
│
├── Sidebar
│   ├── Navigation Items
│   │   ├── Home
│   │   ├── Search
│   │   └── Library
│   └── Playlists
│       └── Playlist List
│
├── MainContent
│   ├── HomeView
│   │   ├── ImportButton
│   │   ├── RecentlyPlayed (AlbumGrid)
│   │   └── AllSongs (SongList)
│   │
│   ├── SearchView
│   │   ├── Search Input
│   │   └── Results (SongList)
│   │
│   └── LibraryView
│       ├── PlaylistGrid OR
│       └── PlaylistSongs (SongList)
│
└── Player
    ├── SongInfo
    ├── ProgressBar
    ├── Controls
    │   ├── Shuffle
    │   ├── Previous
    ├── Play/Pause
    ├── Next
    └── Repeat
    └── VolumeControl
```

## State Management Structure

```
Zustand Store (store.js)
│
├─ Songs Array
│  ├─ id
│  ├─ title
│  ├─ artist
│  ├─ album
│  ├─ duration
│  ├─ url
│  └─ ...
│
├─ Playlists Array
│  ├─ id
│  ├─ name
│  ├─ description
│  └─ songs[]
│
├─ Playback State
│  ├─ currentSong
│  ├─ isPlaying
│  ├─ currentTime
│  ├─ duration
│  └─ volume
│
├─ Playback Modes
│  ├─ repeat ('off'|'one'|'all')
│  └─ shuffle (boolean)
│
├─ UI State
│  ├─ activeTab ('home'|'search'|'library')
│  ├─ searchQuery
│  ├─ currentPlaylist
│  └─ recentlyPlayed[]
│
└─ Store Actions
   ├─ setSongs()
   ├─ setCurrentSong()
   ├─ setIsPlaying()
   ├─ setVolume()
   ├─ addPlaylist()
   ├─ toggleRepeat()
   └─ ...
```

## Audio Playback Flow

```
User Clicks Play
    │
    ▼
setCurrentSong(song)
    │
    ▼
useAudio Hook Triggered
    │
    ├─ audioRef.current.src = song.url
    ├─ setDuration(audio.duration)
    └─ setCurrentTime(0)
    │
    ▼
setIsPlaying(true)
    │
    ▼
audioRef.current.play()
    │
    ▼
Song Plays! 🎵
    │
    ├─ timeupdate → setCurrentTime()
    ├─ volume changes → audio.volume = vol
    ├─ seek → audioRef.current.currentTime = time
    └─ ended → playNextSong()
```

## File Import Flow

```
User Clicks "Import Music Folder"
    │
    ▼
showDirectoryPicker()
    │
    ├─ Success
    │  │
    │  ▼
    │ processDirectory()
    │  │
    │  ├─ Read files recursively
    │  ├─ Filter by format (.mp3, .wav, etc)
    │  ├─ Extract metadata from filename
    │  ├─ Create song objects
    │  └─ Load audio for duration
    │  │
    │  ▼
    │ addSongs(files)
    │  │
    │  ▼
    │ Update Store
    │  │
    │  ▼
    │ Re-render UI
    │
    └─ Fallback (if API not available)
       │
       ▼
      File Input Picker
       │
       ▼
      Same song creation process
```

## Search Filter Flow

```
User Types in Search Box
    │
    ▼
setSearchQuery(query)
    │
    ▼
Store Updates
    │
    ▼
Components Re-render
    │
    ▼
getFilteredSongs()
    │
    ├─ Query toLowerCase()
    └─ Filter songs by:
       ├─ title.includes(query)
       ├─ artist.includes(query)
       └─ album.includes(query)
    │
    ▼
Filtered Results Display
```

## Keyboard Shortcut Flow

```
User Presses Key
    │
    ├─ Space
    │  │
    │  ▼
    │ setIsPlaying(!isPlaying)
    │
    ├─ Arrow Right →
    │  │
    │  ▼
    │ playNextSong()
    │
    └─ Arrow Left ←
       │
       ▼
      playPreviousSong()
```

## Repeat & Shuffle Logic

```
REPEAT MODES
    │
    ├─ 'off' → Play each song once, stop at end
    │
    ├─ 'all' → Loop entire playlist
    │
    └─ 'one' → Loop current song repeatedly


SHUFFLE
    │
    ├─ OFF → Play in order (0→1→2→3...)
    │
    └─ ON → Play random order
       │
       nextIndex = Math.random() * songs.length
```

## Browser Storage

```
Application Memory
    │
    ├─ Zustand Store (RAM)
    │  ├─ Current State
    │  └─ Persists until refresh
    │
    ├─ Audio Objects (RAM)
    │  └─ Created from File API
    │
    └─ Component State (RAM)
       └─ useAudio hook state

Note: No persistent storage (LocalStorage/IndexedDB)
      State resets on page refresh
```

## Component Communication

```
Sidebar ──┐
          │
          ▼
    Zustand Store
          │
          ├─→ MainContent
          │     │
          │     ├─→ HomeView
          │     ├─→ SearchView
          │     └─→ LibraryView
          │
          └─→ Player

All components access same store
No prop drilling needed
Efficient state sharing
```

## Error Handling Flow

```
Try to Play Audio
    │
    ├─ Success
    │  └─ Audio plays normally
    │
    └─ Error
       │
       ├─ audioRef.addEventListener('error')
       │  │
       │  └─ handleSongEnd()
       │
       ├─ Log to console
       │  └─ console.error()
       │
       └─ Skip to next song
          └─ playNextSong()
```

## Responsive Design Flow

```
Window Size
    │
    ├─ Mobile (<640px)
    │  └─ Single column, stacked layout
    │
    ├─ Tablet (640px - 1024px)
    │  └─ md: breakpoint
    │     └─ 2-3 column grid
    │
    └─ Desktop (1024px+)
       └─ lg:/xl: breakpoint
          └─ 4-5 column grid
```

## CSS-in-JS Flow

```
TailwindCSS Classes
    │
    ├─ Utility Classes
    │  └─ bg-spotify-dark, text-white, etc
    │
    ├─ Responsive Prefixes
    │  └─ md:, lg:, xl: for breakpoints
    │
    ├─ Hover/Focus States
    │  └─ hover:, focus:
    │
    └─ Custom CSS
       └─ index.css for animations
          └─ @tailwind directives
             └─ PostCSS processing
                └─ Final CSS output
```

---

## Key Design Principles

### 1. **Separation of Concerns**
- UI components (React)
- State management (Zustand)
- Audio handling (useAudio hook)
- Utilities (helper functions)

### 2. **Single Source of Truth**
- Zustand store as central state
- No duplicate state across components
- One way data flow

### 3. **Reusability**
- Custom hooks (useAudio)
- Utility functions (formatTime, etc.)
- Generic components (SongList, AlbumGrid)

### 4. **Performance**
- Efficient state updates
- Component memoization potential
- Lazy loading ready
- Optimized re-renders

### 5. **Maintainability**
- Clear folder structure
- Consistent naming conventions
- Comments on complex logic
- Easy to extend

---

## Scalability Considerations

### If Adding More Features

1. **More Views**: Add to `src/components/views/`
2. **More Hooks**: Add to `src/hooks/`
3. **More Utilities**: Extend `src/utils.js`
4. **More State**: Extend Zustand store in `store.js`
5. **More Components**: Add to `src/components/`

### Performance at Scale

- Consider virtual scrolling for 1000+ songs
- Implement pagination for playlists
- Add IndexedDB for offline support
- Consider service workers for caching

---

**This architecture ensures clarity, maintainability, and scalability for future enhancements.**
