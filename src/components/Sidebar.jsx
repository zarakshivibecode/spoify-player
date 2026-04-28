import React from 'react';
import { Music, Home, Search, Library, Plus } from 'lucide-react';
import { useMusicStore } from '../store';

function Sidebar() {
  const { playlists, activeTab, setActiveTab, addPlaylist, setCurrentPlaylist } = useMusicStore();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Library },
  ];

  const handleCreatePlaylist = () => {
    const name = prompt('Enter playlist name:');
    if (name) {
      addPlaylist({ name, description: '' });
    }
  };

  return (
    <div className="w-64 bg-black border-r border-spotify-border flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2 border-b border-spotify-border">
        <div className="w-8 h-8 bg-spotify-darkGray rounded flex items-center justify-center">
          <Music className="w-5 h-5 text-black" />
        </div>
        <span className="text-xl font-bold">Spotify</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-spotify-darkGray text-black'
                  : 'text-gray-400 hover:text-white hover:bg-spotify-lightGray'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Playlists */}
      <div className="border-t border-spotify-border p-6 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase">Playlists</h3>
          <button
            onClick={handleCreatePlaylist}
            className="p-1 hover:bg-spotify-lightGray rounded transition-colors text-gray-400 hover:text-white"
            title="Create Playlist"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => {
                setCurrentPlaylist(playlist);
                setActiveTab('library');
              }}
              className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-spotify-lightGray rounded transition-colors truncate"
              title={playlist.name}
            >
              {playlist.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
