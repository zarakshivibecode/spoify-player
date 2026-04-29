import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus } from 'lucide-react';
import useMusicStore from '../../store/useMusicStore';
import AddToPlaylistMenu from '../AddToPlaylistMenu';

const HomeView = () => {
  const { songs, recentlyPlayed, setCurrentSong, play, setQueue } = useMusicStore();
  const [openPlaylistMenu, setOpenPlaylistMenu] = useState(null);

  const handleSongClick = (song) => {
    setQueue(songs);
    setCurrentSong(song);
    play();
  };

  const SongCard = ({ song, idx }) => (
    <motion.div
      key={song.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={() => handleSongClick(song)}
      className="group cursor-pointer bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg p-4 transition-all"
    >
      <div className="relative mb-4">
        {song.coverArt ? (
          <img
            src={song.coverArt}
            alt={song.title}
            className="w-full aspect-square rounded-lg object-cover"
          />
        ) : (
          <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-4xl">♫</span>
          </div>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              handleSongClick(song);
            }}
            className="p-2 rounded-full bg-green-500 text-black"
          >
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
          </motion.button>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setOpenPlaylistMenu(openPlaylistMenu === song.id ? null : song.id);
              }}
              className="p-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Plus className="w-4 h-4" />
            </motion.button>
            <AnimatePresence>
              {openPlaylistMenu === song.id && (
                <AddToPlaylistMenu song={song} onClose={() => setOpenPlaylistMenu(null)} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-white truncate">{song.title}</h3>
      <p className="text-sm text-gray-400 truncate">{song.artist}</p>
    </motion.div>
  );

  return (
    <div className="p-8 space-y-12">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">Welcome to Qidz Player</h1>
        <p className="text-gray-400 text-lg">Your personal music collection, beautifully organized</p>
      </motion.div>

      {/* Recently Played */}
      {recentlyPlayed.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Recently Played</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentlyPlayed.slice(0, 8).map((song, idx) => (
              <SongCard key={song.id} song={song} idx={idx} />
            ))}
          </div>
        </div>
      )}

      {/* All Songs */}
      {songs.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Your Music</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {songs.slice(0, 12).map((song, idx) => (
              <SongCard key={song.id} song={song} idx={idx} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {songs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="text-6xl mb-4">🎵</div>
          <h3 className="text-2xl font-bold text-white mb-2">No Songs Yet</h3>
          <p className="text-gray-400 mb-4">Import your music collection to get started</p>
          <p className="text-gray-500 text-sm">Use the "Import Music" button in the sidebar</p>
        </motion.div>
      )}
    </div>
  );
};

export default HomeView;
