import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, CheckCircle } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';
import { createSongObject, SUPPORTED_FORMATS } from '../utils';

const ImportButton = () => {
  const fileInputRef = useRef(null);
  const { setSongs, songs } = useMusicStore();
  const [selectedFileName, setSelectedFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle file input click - opens file explorer
  const handleButtonClick = () => {
    console.log('🎵 Import Music button clicked - opening file explorer');
    fileInputRef.current?.click();
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const fileList = event.target.files;
    
    if (!fileList || fileList.length === 0) {
      console.log('❌ No files selected');
      return;
    }

    setIsLoading(true);
    const newFiles = Array.from(fileList);
    
    console.log(`📂 Files selected: ${newFiles.length}`);
    console.log('📋 File details:', newFiles.map(f => ({
      name: f.name,
      size: (f.size / 1024 / 1024).toFixed(2) + ' MB',
      type: f.type
    })));

    // Filter supported audio formats
    const importedSongs = newFiles
      .filter((file) => {
        const ext = '.' + file.name.split('.').pop().toLowerCase();
        const isSupported = SUPPORTED_FORMATS.includes(ext);
        console.log(`${isSupported ? '✅' : '❌'} ${file.name} (${ext})`);
        return isSupported;
      })
      .map((file) => {
        const song = createSongObject(file);
        console.log(`🎶 Created song object:`, {
          title: song.title,
          artist: song.artist,
          filename: song.filename
        });
        return song;
      });

    if (importedSongs.length > 0) {
      // Display file names in UI
      const fileNames = importedSongs.map(s => s.filename).join(', ');
      setSelectedFileName(fileNames);
      
      // Add to store
      setSongs([...songs, ...importedSongs]);
      console.log(`✨ Successfully imported ${importedSongs.length} song(s)`);
      
      // Show success message
      setTimeout(() => {
        alert(`✅ Imported ${importedSongs.length} song(s)!\n\nFiles: ${fileNames}`);
      }, 300);
    } else {
      console.log('⚠️ No supported audio files found in selection');
      setSelectedFileName('No supported files found');
      alert('❌ No supported audio files found. Supported formats: MP3, WAV, OGG, M4A, FLAC');
    }

    // Reset input
    event.target.value = '';
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
        disabled={isLoading}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold rounded-full hover:from-green-300 hover:to-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
      >
        <FolderOpen className="w-5 h-5" />
        <span>{isLoading ? 'Importing...' : 'Import Music'}</span>
      </motion.button>

      {/* Hidden file input - triggered by button click */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="audio/*"
        onChange={handleFileSelect}
        style={{
        position: 'absolute',
        opacity: 1,
        width: '1px',
         height: '1px',
         pointerEvents: 'none'
}}
        aria-label="Import audio files"
      />

      {/* Display selected file name */}
      {selectedFileName && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-2 text-sm text-green-400"
        >
          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-semibold">Files imported:</p>
            <p className="text-gray-300 break-words max-w-xs">{selectedFileName}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImportButton;
