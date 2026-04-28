import React from 'react';
import { FolderOpen } from 'lucide-react';
import { useMusicStore } from '../../store';
import SongList from '../SongList';
import AlbumGrid from '../AlbumGrid';
import ImportButton from '../ImportButton';

function HomeView() {
  const { songs, recentlyPlayed } = useMusicStore();

  return (
    <div className="p-8 space-y-12">
      {/* Import Section */}
      <div className="bg-gradient-to-r from-spotify-darkGray to-green-600 rounded-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome to Spotify Player</h1>
            <p className="text-lg opacity-90">Import music from your computer and start playing</p>
          </div>
          <ImportButton />
        </div>
      </div>

      {/* Recently Played */}
      {recentlyPlayed.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <AlbumGrid songs={recentlyPlayed.slice(0, 6)} />
        </div>
      )}

      {/* All Songs */}
      {songs.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">All Songs</h2>
          <SongList songs={songs} showArtist showAlbum />
        </div>
      )}

      {/* Empty State */}
      {songs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <FolderOpen className="w-16 h-16 mb-4 opacity-50" />
          <p className="text-lg">No songs imported yet</p>
          <p className="text-sm mt-2">Click "Import Music Folder" to get started</p>
        </div>
      )}
    </div>
  );
}

export default HomeView;
