import React from 'react';
import { Play } from 'lucide-react';
import { useMusicStore } from '../store';

function AlbumGrid({ songs }) {
  const { currentSong, isPlaying, setCurrentSong, setIsPlaying } = useMusicStore();

  const handlePlaySong = (song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {songs.map((song) => {
        const isCurrentSong = currentSong?.id === song.id;

        return (
          <div
            key={song.id}
            className="bg-spotify-lightGray hover:bg-spotify-border rounded-lg overflow-hidden cursor-pointer transition-colors group"
            onClick={() => handlePlaySong(song)}
          >
            {/* Album Art */}
            <div className="relative aspect-square bg-gradient-to-br from-spotify-darkGray to-green-600 flex items-center justify-center overflow-hidden">
              <span className="text-4xl opacity-50">♪</span>

              {/* Play Button Overlay */}
              <button
                className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-spotify-darkGray text-black flex items-center justify-center hover:scale-110 transition-transform ${
                  isCurrentSong && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <Play className="w-5 h-5 ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className={`font-bold truncate ${isCurrentSong ? 'text-spotify-darkGray' : 'text-white'}`}>
                {song.title}
              </h3>
              <p className="text-sm text-gray-400 truncate mt-1">{song.artist}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumGrid;
