import React from 'react';
import { useMusicStore } from '../../store';
import SongList from '../SongList';

function LibraryView() {
  const { currentPlaylist, playlists } = useMusicStore();

  if (!currentPlaylist) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Your Library</h1>
        {playlists.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p>No playlists created yet</p>
            <p className="text-sm mt-2">Create a playlist to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-spotify-lightGray hover:bg-spotify-border p-4 rounded-lg cursor-pointer transition-colors"
              >
                <div className="bg-gradient-to-br from-spotify-darkGray to-green-600 w-full aspect-square rounded mb-4 flex items-center justify-center">
                  <span className="text-2xl">♪</span>
                </div>
                <h3 className="font-bold truncate">{playlist.name}</h3>
                <p className="text-sm text-gray-400">{playlist.songs?.length || 0} songs</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{currentPlaylist.name}</h1>
      {currentPlaylist.songs && currentPlaylist.songs.length > 0 ? (
        <SongList songs={currentPlaylist.songs} showArtist showAlbum />
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p>No songs in this playlist</p>
        </div>
      )}
    </div>
  );
}

export default LibraryView;
