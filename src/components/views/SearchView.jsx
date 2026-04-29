import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Plus } from 'lucide-react';
import useMusicStore from '../../store/useMusicStore';
import AddToPlaylistMenu from '../AddToPlaylistMenu';

const SearchView = () => {
  const { searchQuery, setSearchQuery, songs, searchSongs, setCurrentSong, play, setQueue } = useMusicStore();
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [openPlaylistMenu, setOpenPlaylistMenu] = useState(null);

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
    setQueue(songs);
    setCurrentSong(song);
    play();
  };

  const SongListItem = ({ song, idx }) => (
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
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            handleSongClick(song);
          }}
          className="p-2 rounded-full bg-green-500 text-black"
        >
          <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
        </motion.button>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenPlaylistMenu(openPlaylistMenu === song.id ? null : song.id);
            }}
            className="p-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
          <AnimatePresence>
            {openPlaylistMenu === song.id && (
              <AddToPlaylistMenu song={song} onClose={() => setOpenPlaylistMenu(null)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

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
              <SongListItem key={song.id} song={song} idx={idx} />
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
              <SongListItem key={song.id} song={song} idx={idx} />
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
