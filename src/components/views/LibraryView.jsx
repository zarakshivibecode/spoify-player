import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Trash2, Plus } from 'lucide-react';
import useMusicStore from '../../store/useMusicStore';

const LibraryView = () => {
  const { currentPlaylist, playlists, setCurrentSong, play, removeSongFromPlaylist, songs, setQueue, addSongToPlaylist, setCurrentPlaylist } = useMusicStore();
  const [showAddToPlaylist, setShowAddToPlaylist] = useState(false);
  const [selectedSongToAdd, setSelectedSongToAdd] = useState(null);

  const handleSongClick = (song) => {
    // Set queue to playlist songs or all songs
    const queueToSet = currentPlaylist ? currentPlaylist.songs : songs;
    setQueue(queueToSet);
    setCurrentSong(song);
    play();
  };

  const handleAddSongToPlaylist = (song, playlistId) => {
    addSongToPlaylist(playlistId, song);
    setShowAddToPlaylist(false);
    setSelectedSongToAdd(null);
  };

  if (!currentPlaylist && playlists.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Your Library</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-gray-400"
        >
          <div className="text-6xl mb-4">📚</div>
          <p className="text-lg">No playlists created yet</p>
          <p className="text-sm mt-2">Create a playlist from the sidebar to get started</p>
        </motion.div>
      </div>
    );
  }

  if (!currentPlaylist) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Your Library</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlists.map((playlist, idx) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setCurrentPlaylist(playlist.id)}
              className="group cursor-pointer bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg p-6 transition-all"
            >
              <div className="relative mb-4">
                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-4xl">🎵</span>
                </div>
              </div>
              <h3 className="font-semibold text-white truncate">{playlist.name}</h3>
              <p className="text-sm text-gray-400">{playlist.songs?.length || 0} songs</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const playlistSongs = currentPlaylist.songs || [];

  return (
    <div className="p-8">
      {/* Playlist Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 space-y-4"
      >
        <div className="flex items-end gap-6">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
            <span className="text-5xl">🎵</span>
          </div>
          <div>
            <p className="text-gray-400 text-sm">PLAYLIST</p>
            <h1 className="text-4xl font-bold text-white">{currentPlaylist.name}</h1>
            <p className="text-gray-400 mt-2">{playlistSongs.length} songs</p>
          </div>
        </div>

        {/* Add Songs to Playlist */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddToPlaylist(!showAddToPlaylist)}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Songs
          </motion.button>

          {showAddToPlaylist && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-12 left-0 bg-gray-800 rounded-lg border border-gray-700 z-10 max-h-96 overflow-y-auto w-80"
            >
              {songs.length > 0 ? (
                songs.map((song) => {
                  const isAlreadyInPlaylist = playlistSongs.some(s => s.id === song.id);
                  return (
                    <motion.div
                      key={song.id}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors border-b border-gray-700 last:border-b-0"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-white truncate text-sm">{song.title}</p>
                        <p className="text-gray-400 truncate text-xs">{song.artist}</p>
                      </div>
                      {!isAlreadyInPlaylist ? (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleAddSongToPlaylist(song, currentPlaylist.id)}
                          className="p-1 rounded bg-green-500 text-black hover:bg-green-600 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.button>
                      ) : (
                        <span className="text-xs text-green-400">✓ Added</span>
                      )}
                    </motion.div>
                  );
                })
              ) : (
                <div className="p-4 text-gray-400 text-sm">No songs to add</div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Songs */}
      {playlistSongs.length > 0 ? (
        <div className="space-y-2">
          {playlistSongs.map((song, idx) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.02 }}
              whileHover={{ x: 4 }}
              className="group cursor-pointer bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg p-3 flex items-center gap-3 transition-all"
            >
              <div className="w-12 h-12 text-center text-gray-500 font-semibold flex-shrink-0 flex items-center justify-center">
                {idx + 1}
              </div>
              {song.coverArt ? (
                <img
                  src={song.coverArt}
                  alt={song.title}
                  className="w-12 h-12 rounded object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">♫</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSongClick(song)}
                  className="p-2 rounded-full bg-green-500 text-black"
                >
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeSongFromPlaylist(currentPlaylist.id, song.id)}
                  className="p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-gray-400"
        >
          <div className="text-5xl mb-4">🎶</div>
          <p className="text-lg">No songs in this playlist</p>
          <p className="text-sm mt-2">Click "Add Songs" button above to add songs</p>
        </motion.div>
      )}
    </div>
  );
};

export default LibraryView;
