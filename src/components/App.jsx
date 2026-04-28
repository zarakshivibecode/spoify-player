import React, { useEffect } from 'react';
import { useMusicStore } from '../store';
import { useAudio } from '../hooks/useAudio';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Player from './Player';

function App() {
  const { songs, addSongs } = useMusicStore();
  const { handleSeek, playNextSong, playPreviousSong } = useAudio();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        const { isPlaying, setIsPlaying } = useMusicStore.getState();
        setIsPlaying(!isPlaying);
      }
      if (e.code === 'ArrowRight') {
        playNextSong();
      }
      if (e.code === 'ArrowLeft') {
        playPreviousSong();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-spotify-dark text-white overflow-hidden">
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainContent />
      </div>

      {/* Player Bar */}
      <Player onSeek={handleSeek} onNext={playNextSong} onPrev={playPreviousSong} />
    </div>
  );
}

export default App;
