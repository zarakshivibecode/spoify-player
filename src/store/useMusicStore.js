import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useMusicStore = create(
  persist(
    (set, get) => ({
      // Library & Songs
      songs: [],
      playlists: [],
      currentPlaylist: null,
      
      // Player State
      currentSong: null,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 0.8,
      shuffle: false,
      repeat: 'off', // 'off', 'one', 'all'
      
      // Queue & History
      queue: [],
      queueIndex: 0,
      recentlyPlayed: [],
      
      // UI State
      currentView: 'home', // 'home', 'search', 'library'
      searchQuery: '',
      
      // Actions: Library Management
      setSongs: (songs) => set({ songs }),
      
      addSong: (song) => set((state) => ({
        songs: [...state.songs, { ...song, id: Date.now() }]
      })),
      
      removeSong: (songId) => set((state) => ({
        songs: state.songs.filter(s => s.id !== songId)
      })),
      
      // Actions: Playlists
      createPlaylist: (name) => set((state) => {
        const newPlaylist = {
          id: Date.now(),
          name,
          songs: [],
          createdAt: new Date().toISOString()
        };
        return { playlists: [...state.playlists, newPlaylist] };
      }),
      
      deletePlaylist: (playlistId) => set((state) => ({
        playlists: state.playlists.filter(p => p.id !== playlistId),
        currentPlaylist: state.currentPlaylist?.id === playlistId ? null : state.currentPlaylist
      })),
      
      addSongToPlaylist: (playlistId, song) => set((state) => ({
        playlists: state.playlists.map(p =>
          p.id === playlistId ? { ...p, songs: [...p.songs, song] } : p
        )
      })),
      
      removeSongFromPlaylist: (playlistId, songId) => set((state) => ({
        playlists: state.playlists.map(p =>
          p.id === playlistId ? { ...p, songs: p.songs.filter(s => s.id !== songId) } : p
        )
      })),
      
      setCurrentPlaylist: (playlistId) => set({ currentPlaylist: playlistId }),
      
      // Actions: Player Control
      play: () => set({ isPlaying: true }),
      pause: () => set({ isPlaying: false }),
      togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
      
      setCurrentSong: (song) => set((state) => {
        // Find the index of the song in the queue or songs array
        const playlist = state.queue.length > 0 ? state.queue : state.songs;
        const songIndex = playlist.findIndex(s => s.id === song.id);
        
        // Add to recently played if it's a new song
        if (song && state.currentSong?.id !== song.id) {
          const updated = [...state.recentlyPlayed];
          if (updated.length > 0 && updated[0].id === song.id) {
            // Already at top
          } else {
            updated.unshift(song);
            updated.slice(0, 50); // Keep last 50
          }
          return {
            currentSong: song,
            isPlaying: true,
            currentTime: 0,
            queueIndex: songIndex >= 0 ? songIndex : 0,
            recentlyPlayed: updated
          };
        }
        return { currentSong: song, isPlaying: true, queueIndex: songIndex >= 0 ? songIndex : 0 };
      }),
      
      setCurrentTime: (time) => set({ currentTime: time }),
      setDuration: (duration) => set({ duration }),
      setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
      
      // Actions: Queue
      setQueue: (queue) => set({ queue, queueIndex: 0 }),
      addToQueue: (song) => set((state) => ({
        queue: [...state.queue, song]
      })),
      removeFromQueue: (index) => set((state) => {
        const newQueue = state.queue.filter((_, i) => i !== index);
        return { queue: newQueue };
      }),
      
      playNext: () => set((state) => {
        // Use queue if available, otherwise use songs array
        const playlist = state.queue.length > 0 ? state.queue : state.songs;
        if (playlist.length === 0) return state;
        
        const nextIndex = Math.min(state.queueIndex + 1, playlist.length - 1);
        return {
          queueIndex: nextIndex,
          currentSong: playlist[nextIndex],
          isPlaying: true
        };
      }),
      
      playPrevious: () => set((state) => {
        // Use queue if available, otherwise use songs array
        const playlist = state.queue.length > 0 ? state.queue : state.songs;
        if (playlist.length === 0) return state;
        
        const prevIndex = Math.max(0, state.queueIndex - 1);
        return {
          queueIndex: prevIndex,
          currentSong: playlist[prevIndex],
          isPlaying: true
        };
      }),
      
      // Actions: Shuffle & Repeat
      toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
      
      setRepeat: (mode) => set({ repeat: mode }),
      
      cycleRepeat: () => set((state) => {
        const modes = ['off', 'all', 'one'];
        const currentIndex = modes.indexOf(state.repeat);
        const nextMode = modes[(currentIndex + 1) % modes.length];
        return { repeat: nextMode };
      }),
      
      // Actions: UI
      setCurrentView: (view) => set({ currentView: view }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      // Actions: Search
      searchSongs: (query) => {
        const state = get();
        if (!query.trim()) return state.songs;
        
        const q = query.toLowerCase();
        return state.songs.filter(song =>
          song.title?.toLowerCase().includes(q) ||
          song.artist?.toLowerCase().includes(q) ||
          song.album?.toLowerCase().includes(q)
        );
      },
      
      // Actions: Recently Played
      clearRecentlyPlayed: () => set({ recentlyPlayed: [] })
    }),
    {
      name: 'qidz-player-store',
      partialize: (state) => ({
        playlists: state.playlists,
        volume: state.volume,
        shuffle: state.shuffle,
        repeat: state.repeat,
        recentlyPlayed: state.recentlyPlayed
      })
    }
  )
);

export default useMusicStore;
