import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';

const AddToPlaylistMenu = ({ song, onClose }) => {
  const { playlists, addSongToPlaylist } = useMusicStore();

  const handleAddToPlaylist = (playlistId) => {
    addSongToPlaylist(playlistId, song);
    onClose();
  };

  if (playlists.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="absolute bottom-12 right-0 bg-gray-800 rounded-lg border border-gray-700 z-50 w-56"
      >
        <div className="p-4 text-center text-gray-400 text-sm">
          <p>No playlists created yet</p>
          <p className="text-xs mt-2">Create a playlist from the sidebar first</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute bottom-12 right-0 bg-gray-800 rounded-lg border border-gray-700 z-50 max-h-64 overflow-y-auto w-56"
    >
      {playlists.map((playlist) => {
        const isAlreadyInPlaylist = playlist.songs?.some(s => s.id === song.id);
        return (
          <motion.button
            key={playlist.id}
            whileHover={{ x: 4 }}
            onClick={() => handleAddToPlaylist(playlist.id)}
            className="w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0 flex items-center justify-between disabled:opacity-50"
            disabled={isAlreadyInPlaylist}
          >
            <span className="text-white text-sm">{playlist.name}</span>
            {isAlreadyInPlaylist ? (
              <span className="text-xs text-green-400">✓</span>
            ) : (
              <Plus className="w-4 h-4 text-gray-400" />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default AddToPlaylistMenu;
