import React from 'react';
import { motion } from 'framer-motion';
import useMusicStore from '../store/useMusicStore';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';
import LibraryView from './views/LibraryView';

const MainContent = () => {
  const { currentView } = useMusicStore();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'search':
        return <SearchView />;
      case 'library':
        return <LibraryView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto"
    >
      {renderView()}
    </motion.div>
  );
};

export default MainContent;
