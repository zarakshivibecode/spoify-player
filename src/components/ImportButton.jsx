import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import useMusicStore from '../store/useMusicStore';
import { createSongObject, SUPPORTED_FORMATS } from '../utils';

const ImportButton = () => {
  const fileInputRef = useRef(null);
  const { setSongs, songs } = useMusicStore();

  const handleFolderSelect = async () => {
    try {
      // Try using the File System Access API (Chrome/Edge)
      const dirHandle = await window.showDirectoryPicker();
      const files = [];

      const processDirectory = async (handle) => {
        for await (const entry of handle.values()) {
          if (entry.kind === 'file') {
            const file = await entry.getFile();
            const ext = '.' + file.name.split('.').pop().toLowerCase();

            if (SUPPORTED_FORMATS.includes(ext)) {
              const song = createSongObject(file);
              song.path = file;
              files.push(song);
            }
          } else if (entry.kind === 'directory') {
            await processDirectory(entry);
          }
        }
      };

      await processDirectory(dirHandle);

      if (files.length > 0) {
        setSongs([...songs, ...files]);
        alert(`Imported ${files.length} songs!`);
      } else {
        alert('No supported audio files found in selected folder.');
      }
    } catch (e) {
      if (e.name !== 'NotAllowedError') {
        console.warn('File System Access API not available, using file input fallback');
      }
      fileInputRef.current?.click();
    }
  };

  const handleFileSelect = (event) => {
    const fileList = event.target.files || [];
    const newFiles = Array.from(fileList);
    const importedSongs = newFiles
      .filter((file) => {
        const ext = '.' + file.name.split('.').pop().toLowerCase();
        return SUPPORTED_FORMATS.includes(ext);
      })
      .map((file) => createSongObject(file));

    if (importedSongs.length > 0) {
      setSongs([...songs, ...importedSongs]);
      alert(`Imported ${importedSongs.length} songs!`);
    } else {
      alert('No supported audio files found.');
    }

    event.target.value = '';
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFolderSelect}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold rounded-full hover:from-green-300 hover:to-green-400 transition-all shadow-lg"
      >
        <FolderOpen className="w-5 h-5" />
        <span>Import Music</span>
      </motion.button>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".mp3,.wav,.ogg,.m4a,.flac"
        onChange={handleFileSelect}
        className="hidden"
      />
    </>
  );
};

export default ImportButton;
