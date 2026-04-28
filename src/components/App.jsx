import React, { useRef } from 'react'; // tambahin useRef
import { motion } from 'framer-motion';
import useMusicStore from '../store/useMusicStore';
import useAudioPlayer from '../hooks/useAudioPlayer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Player from './Player';

const App = () => {
  const { setSongs } = useMusicStore();
  useAudioPlayer();

  // ✅ TARUH DI SINI (dalam component)
  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    console.log("🎵 buka file explorer");
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("FILE DIPILIH:", files);
  };

  return (
    <motion.div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar onImportClick={handleImportClick} />

        {/* Main Content */}
        <MainContent />
      </div>

      {/* Player */}
      <Player />

      {/* ✅ TARUH DI PALING BAWAH RETURN */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*"
        multiple
        style={{ display: "none" }}
      />
    </motion.div>
  );
};

export default App;