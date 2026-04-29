import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';
import { formatTime } from '../utils';

const SongList = ({ songs, showArtist = false, showAlbum = false }) => {
  const { currentSong, isPlaying, setCurrentSong, play, pause, setQueue } = useMusicStore();

  const handlePlaySong = (song) => {
    // Set the queue with all songs and find the index of clicked song
    setQueue(songs);
    
    if (currentSong?.id === song.id) {
      isPlaying ? pause() : play();
    } else {
      setCurrentSong(song);
      play();
    }
  };

  return (
    <div className="space-y-2">
      {songs.map((song, idx) => {
        const isCurrentSong = currentSong?.id === song.id;

        return (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.02 }}
            whileHover={{ x: 4 }}
            onClick={() => handlePlaySong(song)}
            className="group cursor-pointer bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg p-3 flex items-center gap-3 transition-all"
          >
            {song.coverArt ? (
              <img
                src={song.coverArt}
                alt={song.title}
                className="w-12 h-12 rounded object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-12 h-12 rounded bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">♫</span>
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold truncate ${isCurrentSong ? 'text-green-400' : 'text-white'}`}>
                {song.title}
              </h3>
              <p className="text-sm text-gray-400 truncate">
                {song.artist}
                {showAlbum && song.album && ` • ${song.album}`}
              </p>
            </div>

            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              {song.duration > 0 && <span className="text-sm text-gray-400">{formatTime(song.duration)}</span>}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePlaySong(song)}
                className="p-2 rounded-full bg-green-500 text-black"
              >
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SongList;
