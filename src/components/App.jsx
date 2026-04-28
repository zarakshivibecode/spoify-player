import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMusicStore from '../store/useMusicStore';
import useAudioPlayer from '../hooks/useAudioPlayer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Player from './Player';

const App = () => {
  const { setSongs } = useMusicStore();
  useAudioPlayer(); // Initialize audio player

  const handleImportClick = async () => {
    // Since we're in a web environment, we'll simulate file selection
    // In Electron, this would use the file system API
    try {
      // This is a placeholder for Electron integration
      // In the actual Electron version, this would open a file dialog
      console.log('Import music feature - ready for Electron integration');
      
      // Simulate adding some demo songs for now
      const demoSongs = [
        {
          id: 1,
          title: 'Sample Song 1',
          artist: 'Demo Artist',
          album: 'Demo Album',
          duration: 180,
          path: null,
          coverArt: null
        },
        {
          id: 2,
          title: 'Sample Song 2',
          artist: 'Demo Artist',
          album: 'Demo Album',
          duration: 220,
          path: null,
          coverArt: null
        }
      ];
      
      // Uncomment to add demo songs
      // setSongs(demoSongs);
    } catch (error) {
      console.error('Error importing music:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-screen bg-black text-white overflow-hidden"
    >
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar onImportClick={handleImportClick} />

        {/* Main Content */}
        <MainContent />
      </div>

      {/* Player Bar */}
      <Player />
    </motion.div>
  );
};

export default App;
