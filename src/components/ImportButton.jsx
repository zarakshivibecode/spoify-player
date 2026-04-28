import React, { useRef } from 'react';
import { FolderOpen } from 'lucide-react';
import { useMusicStore } from '../store';
import { createSongObject, SUPPORTED_FORMATS } from '../utils';

function ImportButton() {
  const fileInputRef = useRef(null);
  const { addSongs } = useMusicStore();

  const handleFolderSelect = async () => {
    try {
      // Try using the File System Access API
      const dirHandle = await window.showDirectoryPicker();
      const files = [];

      const processDirectory = async (handle) => {
        for await (const entry of handle.values()) {
          if (entry.kind === 'file') {
            const file = await entry.getFile();
            const ext = '.' + file.name.split('.').pop().toLowerCase();

            if (SUPPORTED_FORMATS.includes(ext)) {
              const song = createSongObject(file);
              // Try to get duration
              try {
                const arrayBuffer = await file.arrayBuffer();
                const audio = new Audio();
                audio.onloadedmetadata = () => {
                  song.duration = audio.duration;
                };
                audio.src = URL.createObjectURL(new Blob([arrayBuffer], { type: file.type }));
              } catch (e) {
                console.warn('Could not extract duration:', e);
              }
              files.push(song);
            }
          } else if (entry.kind === 'directory') {
            await processDirectory(entry);
          }
        }
      };

      await processDirectory(dirHandle);

      if (files.length > 0) {
        addSongs(files);
        alert(`Imported ${files.length} songs!`);
      } else {
        alert('No supported audio files found in selected folder.');
      }
    } catch (e) {
      // Fall back to file input
      if (e.name !== 'NotAllowedError') {
        console.warn('File System Access API not available:', e);
      }
      fileInputRef.current?.click();
    }
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files || []);
    const songs = files
      .filter((file) => {
        const ext = '.' + file.name.split('.').pop().toLowerCase();
        return SUPPORTED_FORMATS.includes(ext);
      })
      .map((file) => {
        const song = createSongObject(file);
        // Try to get duration
        const audio = new Audio();
        audio.onloadedmetadata = () => {
          song.duration = audio.duration;
        };
        audio.src = URL.createObjectURL(file);
        return song;
      });

    if (songs.length > 0) {
      addSongs(songs);
      alert(`Imported ${songs.length} songs!`);
    }

    // Reset input
    event.target.value = '';
  };

  return (
    <>
      <button
        onClick={handleFolderSelect}
        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
      >
        <FolderOpen className="w-5 h-5" />
        <span>Import Music Folder</span>
      </button>

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
}

export default ImportButton;
