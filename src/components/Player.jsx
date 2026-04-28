import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useMusicStore } from '../store';
import { formatTime } from '../utils';

function Player({ onSeek, onNext, onPrev }) {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    repeat,
    shuffle,
    setIsPlaying,
    setVolume,
    toggleRepeat,
    toggleShuffle,
  } = useMusicStore();

  const handleProgressClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    onSeek(newTime);
  };

  if (!currentSong) {
    return (
      <div className="h-24 bg-spotify-lightGray border-t border-spotify-border flex items-center justify-center">
        <p className="text-gray-400">No song selected</p>
      </div>
    );
  }

  return (
    <div className="bg-spotify-lightGray border-t border-spotify-border">
      {/* Progress Bar */}
      <div className="px-4 py-2">
        <div
          onClick={handleProgressClick}
          className="w-full h-1 bg-spotify-border rounded cursor-pointer hover:bg-spotify-darkGray transition-colors group"
        >
          <div
            className="h-full bg-spotify-darkGray rounded transition-all"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          >
            <div className="float-right w-3 h-3 bg-white rounded-full -mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Player Bar */}
      <div className="px-4 py-4 flex items-center justify-between gap-4">
        {/* Song Info */}
        <div className="w-72 flex-shrink-0">
          <p className="font-bold text-white truncate">{currentSong.title}</p>
          <p className="text-sm text-gray-400 truncate">{currentSong.artist}</p>
        </div>

        {/* Controls */}
        <div className="flex-1 flex items-center justify-center gap-6">
          {/* Shuffle */}
          <button
            onClick={toggleShuffle}
            className={`p-2 rounded transition-colors ${
              shuffle ? 'text-spotify-darkGray' : 'text-gray-400 hover:text-white'
            }`}
            title="Shuffle"
          >
            <Shuffle className="w-5 h-5" />
          </button>

          {/* Previous */}
          <button
            onClick={onPrev}
            className="p-3 rounded-full bg-spotify-darkGray text-black hover:scale-110 transition-transform"
            title="Previous"
          >
            <SkipBack className="w-5 h-5" fill="currentColor" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 rounded-full bg-white text-black hover:scale-110 transition-transform"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            )}
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            className="p-3 rounded-full bg-spotify-darkGray text-black hover:scale-110 transition-transform"
            title="Next"
          >
            <SkipForward className="w-5 h-5" fill="currentColor" />
          </button>

          {/* Repeat */}
          <button
            onClick={toggleRepeat}
            className={`p-2 rounded transition-colors relative ${
              repeat !== 'off' ? 'text-spotify-darkGray' : 'text-gray-400 hover:text-white'
            }`}
            title={`Repeat: ${repeat}`}
          >
            <Repeat className="w-5 h-5" />
            {repeat === 'one' && (
              <span className="absolute -bottom-2 -right-2 text-xs font-bold bg-spotify-darkGray text-black w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            )}
          </button>
        </div>

        {/* Volume */}
        <div className="w-40 flex-shrink-0 flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 h-1 bg-spotify-border rounded accent-spotify-darkGray cursor-pointer"
            title="Volume"
          />
          <span className="text-xs text-gray-400 w-8 text-right">{volume}%</span>
        </div>
      </div>
    </div>
  );
}

export default Player;
