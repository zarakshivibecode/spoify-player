import React from 'react';
import { motion } from 'framer-motion';
import useAudioPlayer from '../hooks/useAudioPlayer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Player from './Player';

const App = () => {
  useAudioPlayer();

  return (
    <motion.div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainContent />
      </div>

      {/* Player */}
      <Player />
    </motion.div>
  );
};

export default App;