import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Search, Music, Heart, Plus, ChevronDown } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';

const Sidebar = ({ onImportClick }) => {
  const { playlists, createPlaylist, currentView, setCurrentView, currentPlaylist, setCurrentPlaylist } = useMusicStore();
  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);

  const handleCreatePlaylist = () => {
    const name = prompt('Playlist name:');
    if (name?.trim()) {
      createPlaylist(name);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'library', label: 'Your Library', icon: Music },
    { id: 'liked', label: 'Liked Songs', icon: Heart }
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-64 bg-black/90 backdrop-blur-md border-r border-gray-800 h-screen overflow-y-auto flex flex-col"
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Qidz Player</h1>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-500/20 text-green-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}

        {/* Import Button */}
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={onImportClick}
          className="w-full flex items-center gap-3 px-4 py-3 mt-4 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 transition-colors border border-blue-800/50"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Import Music</span>
        </motion.button>
      </nav>

      {/* Playlists Section */}
      <div className="border-t border-gray-800 p-4">
        <button
          onClick={() => setShowPlaylistMenu(!showPlaylistMenu)}
          className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:text-white transition-colors"
        >
          <span className="font-semibold text-sm">Playlists</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showPlaylistMenu ? 'rotate-180' : ''}`}
          />
        </button>

        {showPlaylistMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 space-y-1"
          >
            <button
              onClick={handleCreatePlaylist}
              className="w-full text-left px-3 py-2 text-gray-400 hover:text-green-400 text-sm flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Playlist
            </button>

            <div className="space-y-1 max-h-48 overflow-y-auto">
              {playlists.map((playlist) => (
                <motion.button
                  key={playlist.id}
                  whileHover={{ x: 2 }}
                  onClick={() => setCurrentPlaylist(playlist.id)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors truncate ${
                    currentPlaylist === playlist.id
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {playlist.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 p-4 text-xs text-gray-500">
        <p>© 2026 Khadiq Zarkasy (Qidz)</p>
        <p>All rights reserved</p>
      </div>
    </motion.div>
  );
};

export default Sidebar;
