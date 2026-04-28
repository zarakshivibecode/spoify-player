// Utility function to format time
export const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

// Extract filename without extension
export const getFilenameWithoutExtension = (filename) => {
  return filename.replace(/\.[^/.]+$/, '');
};

// Supported audio formats
export const SUPPORTED_FORMATS = ['.mp3', '.wav', '.ogg', '.m4a', '.flac'];

// Parse metadata from filename
export const parseMetadataFromFilename = (filename) => {
  const nameWithoutExt = getFilenameWithoutExtension(filename);
  // Try to parse "Artist - Title" format
  const parts = nameWithoutExt.split(' - ');
  
  if (parts.length >= 2) {
    return {
      artist: parts[0].trim(),
      title: parts.slice(1).join(' - ').trim(),
    };
  }
  
  return {
    artist: 'Unknown Artist',
    title: nameWithoutExt,
  };
};

// Generate unique ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Create song object
export const createSongObject = (file, path = '') => {
  const metadata = parseMetadataFromFilename(file.name || file);
  
  return {
    id: generateId(),
    title: metadata.title,
    artist: metadata.artist,
    album: 'Unknown Album',
    duration: 0,
    path: path,
    filename: file.name || file,
    url: file instanceof File ? URL.createObjectURL(file) : file,
  };
};
