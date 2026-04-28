import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Play } from 'lucide-react';
import useMusicStore from '../../store/useMusicStore';

const SearchView = () => {
  const { searchQuery, setSearchQuery, songs, searchSongs, setCurrentSong, play } = useMusicStore();
  const [filteredSongs, setFilteredSongs] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchSongs(query);
      setFilteredSongs(results);
    } else {
      setFilteredSongs([]);
    }
  };

  const handleSongClick = (song) => {
    setCurrentSong(song);
    play();
  };

  return (
    <div className="p-8">
      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
            autoFocus
          />
        </div>
      </motion.div>

      {/* Results */}
      {searchQuery && filteredSongs.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Search Results <span className="text-gray-400 text-lg">({filteredSongs.length})</span>
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {filteredSongs.map((song, idx) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02 }}
                whileHover={{ x: 4 }}
                onClick={() => handleSongClick(song)}
                className="group cursor-pointer bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg p-3 flex items-center gap-3 transition-all"
              >
                {song.coverArt ? (
                  <img
                    src={song.coverArt}
                    alt={song.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">♫</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">{song.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {searchQuery && filteredSongs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-400"
        >
          <p className="text-lg">No songs found matching "{searchQuery}"</p>
        </motion.div>
      )}

      {!searchQuery && songs.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Browse All Songs</h2>
          <div className="grid grid-cols-1 gap-2">
            {songs.slice(0, 50).map((song, idx) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02 }}
                whileHover={{ x: 4 }}
                onClick={() => handleSongClick(song)}
                className="group cursor-pointer bg-gray-900/40 backdrop-blur-sm hover:bg-gray-800/60 rounded-lg p-3 flex items-center gap-3 transition-all"
              >
                {song.coverArt ? (
                  <img
                    src={song.coverArt}
                    alt={song.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">♫</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">{song.title}</h3>
                  <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-green-500 text-black opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {!searchQuery && songs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-400"
        >
          <p className="text-lg">No songs available. Import music to get started.</p>
        </motion.div>
      )}
    </div>
  );
};

export default SearchView;
