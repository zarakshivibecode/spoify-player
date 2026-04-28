import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';

const AlbumGrid = ({ songs }) => {
  const { currentSong, isPlaying, setCurrentSong, play, pause } = useMusicStore();

  const handlePlaySong = (song) => {
    if (currentSong?.id === song.id) {
      isPlaying ? pause() : play();
    } else {
      setCurrentSong(song);
      play();
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {songs.map((song, idx) => {
        const isCurrentSong = currentSong?.id === song.id;

        return (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg overflow-hidden cursor-pointer transition-all group"
            onClick={() => handlePlaySong(song)}
          >
            {/* Album Art */}
            <div className="relative aspect-square bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center overflow-hidden">
              <span className="text-4xl opacity-50">♫</span>

              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}
              >
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </motion.button>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className={`font-semibold truncate ${isCurrentSong ? 'text-green-400' : 'text-white'}`}>
                {song.title}
              </h3>
              <p className="text-sm text-gray-400 truncate mt-1">{song.artist}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AlbumGrid;
