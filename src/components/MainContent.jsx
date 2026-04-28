import React from 'react';
import { useMusicStore } from '../store';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';
import LibraryView from './views/LibraryView';

function MainContent() {
  const { activeTab } = useMusicStore();

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-spotify-lightGray to-spotify-dark">
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'search' && <SearchView />}
      {activeTab === 'library' && <LibraryView />}
    </div>
  );
}

export default MainContent;
