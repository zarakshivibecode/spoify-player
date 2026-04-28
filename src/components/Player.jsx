import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Maximize2 } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';
import useAudioPlayer from '../hooks/useAudioPlayer';

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const Player = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    repeat,
    shuffle,
    togglePlayPause,
    setVolume,
    cycleRepeat,
    toggleShuffle,
    playNext,
    playPrevious
  } = useMusicStore();

  const { seek } = useAudioPlayer();

  const handleProgressClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    seek(newTime);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        togglePlayPause();
      } else if (e.code === 'ArrowRight') {
        playNext();
      } else if (e.code === 'ArrowLeft') {
        playPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [togglePlayPause, playNext, playPrevious]);

  if (!currentSong) {
    return (
      <div className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800 h-28 flex items-center justify-center">
        <p className="text-gray-500">No song selected</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800"
    >
      {/* Progress Bar */}
      <div className="px-4 py-2 bg-black/40">
        <div
          onClick={handleProgressClick}
          className="w-full h-1 bg-gray-700 rounded cursor-pointer hover:h-1.5 transition-all group"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded relative"
            initial={{ width: 0 }}
            animate={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            transition={{ type: 'tween', ease: 'linear' }}
          >
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2 }}
            />
          </motion.div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="px-6 py-4 flex items-center justify-between gap-6">
        {/* Song Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-80 flex-shrink-0 flex gap-4"
        >
          {currentSong.coverArt ? (
            <img
              src={currentSong.coverArt}
              alt={currentSong.title}
              className="w-16 h-16 rounded-lg object-cover shadow-lg"
            />
          ) : (
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-2xl">♫</span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white truncate">{currentSong.title}</p>
            <p className="text-sm text-gray-400 truncate">{currentSong.artist}</p>
            <p className="text-xs text-gray-500 truncate">{currentSong.album}</p>
          </div>
        </motion.div>

        {/* Center Controls */}
        <div className="flex-1 flex items-center justify-center gap-4">
          {/* Shuffle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleShuffle}
            className={`p-2 rounded-lg transition-colors ${
              shuffle
                ? 'bg-green-500/20 text-green-400'
                : 'text-gray-400 hover:text-white'
            }`}
            title="Shuffle"
          >
            <Shuffle className="w-5 h-5" />
          </motion.button>

          {/* Previous */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={playPrevious}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            title="Previous"
          >
            <SkipBack className="w-6 h-6" fill="currentColor" />
          </motion.button>

          {/* Play/Pause */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlayPause}
            className="p-4 rounded-full bg-gradient-to-br from-green-400 to-green-500 text-black hover:from-green-300 hover:to-green-400 shadow-lg transition-all"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
            )}
          </motion.button>

          {/* Next */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={playNext}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            title="Next"
          >
            <SkipForward className="w-6 h-6" fill="currentColor" />
          </motion.button>

          {/* Repeat */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={cycleRepeat}
            className={`p-2 rounded-lg relative transition-colors ${
              repeat !== 'off'
                ? 'bg-green-500/20 text-green-400'
                : 'text-gray-400 hover:text-white'
            }`}
            title={`Repeat: ${repeat}`}
          >
            <Repeat className="w-5 h-5" />
            {repeat === 'one' && (
              <span className="absolute -bottom-1 -right-1 text-xs font-bold bg-green-400 text-black w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
            )}
          </motion.button>
        </div>

        {/* Volume & Queue */}
        <div className="w-72 flex-shrink-0 flex items-center justify-end gap-4">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 h-1 bg-gray-700 rounded accent-green-500 cursor-pointer"
            title="Volume"
          />
          <span className="text-xs text-gray-400 w-8 text-right">
            {Math.round(volume * 100)}%
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            title="Queue"
          >
            <Maximize2 className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Player;
