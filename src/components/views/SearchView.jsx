import React from 'react';
import { Search } from 'lucide-react';
import { useMusicStore } from '../../store';
import SongList from '../SongList';

function SearchView() {
  const { searchQuery, setSearchQuery, songs, getFilteredSongs } = useMusicStore();

  const filteredSongs = getFilteredSongs();

  return (
    <div className="p-8">
      {/* Search Input */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-spotify-lightGray border border-spotify-border rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-spotify-darkGray transition-colors"
          />
        </div>
      </div>

      {/* Results */}
      {searchQuery && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Search Results <span className="text-gray-400 text-lg">({filteredSongs.length})</span>
          </h2>
          {filteredSongs.length > 0 ? (
            <SongList songs={filteredSongs} showArtist showAlbum />
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>No songs found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}

      {!searchQuery && songs.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Browse All Songs</h2>
          <SongList songs={songs.slice(0, 50)} showArtist showAlbum />
        </div>
      )}

      {!searchQuery && songs.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No songs available. Import music to get started.</p>
        </div>
      )}
    </div>
  );
}

export default SearchView;
