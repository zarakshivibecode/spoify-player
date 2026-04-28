import { create } from 'zustand';

export const useMusicStore = create((set, get) => ({
  songs: [],
  playlists: [],
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 70,
  repeat: 'off', // off, one, all
  shuffle: false,
  recentlyPlayed: [],
  currentPlaylist: null,
  searchQuery: '',
  activeTab: 'home', // home, search, library

  // Songs management
  setSongs: (songs) => set({ songs }),
  addSongs: (newSongs) => set((state) => ({
    songs: [...state.songs, ...newSongs]
  })),
  clearSongs: () => set({ songs: [] }),

  // Current song
  setCurrentSong: (song) => set((state) => {
    if (song) {
      const updatedRecent = [song, ...state.recentlyPlayed.filter(s => s.id !== song.id)].slice(0, 50);
      return {
        currentSong: song,
        currentTime: 0,
        recentlyPlayed: updatedRecent
      };
    }
    return { currentSong: song };
  }),

  // Playback controls
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setDuration: (duration) => set({ duration }),
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(100, volume)) }),

  // Repeat and shuffle
  toggleRepeat: () => set((state) => {
    const repeatStates = ['off', 'one', 'all'];
    const currentIndex = repeatStates.indexOf(state.repeat);
    const nextIndex = (currentIndex + 1) % repeatStates.length;
    return { repeat: repeatStates[nextIndex] };
  }),
  toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),

  // Playlists
  addPlaylist: (playlist) => set((state) => ({
    playlists: [...state.playlists, { ...playlist, id: Date.now(), songs: [] }]
  })),
  addSongToPlaylist: (playlistId, song) => set((state) => ({
    playlists: state.playlists.map(p =>
      p.id === playlistId
        ? { ...p, songs: [...p.songs, song] }
        : p
    )
  })),
  removePlaylist: (playlistId) => set((state) => ({
    playlists: state.playlists.filter(p => p.id !== playlistId)
  })),

  // Recently played
  addToRecentlyPlayed: (song) => set((state) => ({
    recentlyPlayed: [song, ...state.recentlyPlayed.filter(s => s.id !== song.id)].slice(0, 50)
  })),

  // UI state
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setCurrentPlaylist: (playlist) => set({ currentPlaylist: playlist }),

  // Get filtered songs
  getFilteredSongs: () => {
    const state = get();
    const query = state.searchQuery.toLowerCase();
    return state.songs.filter(song =>
      song.title?.toLowerCase().includes(query) ||
      song.artist?.toLowerCase().includes(query) ||
      song.album?.toLowerCase().includes(query)
    );
  },
}));
