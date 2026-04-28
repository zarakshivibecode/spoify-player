import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useMusicStore } from '../store';
import { formatTime } from '../utils';

function SongList({ songs, showArtist = false, showAlbum = false }) {
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
    <div className="space-y-1 border border-spotify-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="hidden md:grid grid-cols-[50px_1fr_200px_100px_100px] bg-spotify-lightGray px-6 py-3 text-sm text-gray-400 border-b border-spotify-border">
        <div></div>
        <div>Title</div>
        {showArtist && <div>Artist</div>}
        {showAlbum && <div>Album</div>}
        <div className="text-right">Duration</div>
      </div>

      {/* Songs */}
      <div className="divide-y divide-spotify-border max-h-96 overflow-y-auto">
        {songs.map((song, index) => {
          const isCurrentSong = currentSong?.id === song.id;

          return (
            <div
              key={song.id}
              onClick={() => handlePlaySong(song)}
              className={`grid grid-cols-[50px_1fr_200px_100px_100px] items-center px-6 py-3 hover:bg-spotify-lightGray cursor-pointer transition-colors ${
                isCurrentSong ? 'bg-spotify-lightGray' : ''
              }`}
            >
              {/* Play Button */}
              <div className="flex justify-center">
                <button className="p-2 hover:bg-spotify-darkGray rounded-full transition-colors text-gray-400 hover:text-white">
                  {isCurrentSong && isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Title */}
              <div className="truncate">
                <p className={`truncate ${isCurrentSong ? 'text-spotify-darkGray font-bold' : 'text-white'}`}>
                  {song.title}
                </p>
              </div>

              {/* Artist */}
              {showArtist && (
                <div className="hidden md:block truncate">
                  <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                </div>
              )}

              {/* Album */}
              {showAlbum && (
                <div className="hidden lg:block truncate">
                  <p className="text-gray-400 text-sm truncate">{song.album}</p>
                </div>
              )}

              {/* Duration */}
              <div className="text-right">
                <p className="text-gray-400 text-sm">{formatTime(song.duration)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SongList;
