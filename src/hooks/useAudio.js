import { useEffect, useRef, useState } from 'react';
import { useMusicStore } from '../store';

export const useAudio = () => {
  const audioRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    currentSong,
    isPlaying,
    currentTime,
    volume,
    repeat,
    shuffle,
    songs,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setCurrentSong,
    addToRecentlyPlayed,
  } = useMusicStore();

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.crossOrigin = 'anonymous';
      audioRef.current = audio;
      
      // Time update
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });

      // Duration loaded
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      // Ended
      audio.addEventListener('ended', () => {
        handleSongEnd();
      });

      // Error handling
      audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        handleSongEnd();
      });

      setIsInitialized(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Load current song
  useEffect(() => {
    if (!audioRef.current || !isInitialized) return;

    if (currentSong && currentSong.url) {
      audioRef.current.src = currentSong.url;
      setDuration(0);
      setCurrentTime(0);

      if (isPlaying) {
        audioRef.current.play().catch(e => console.error('Play error:', e));
      }
    }
  }, [currentSong, isInitialized]);

  // Play/Pause
  useEffect(() => {
    if (!audioRef.current || !isInitialized || !currentSong) return;

    if (isPlaying) {
      audioRef.current.play().catch(e => console.error('Play error:', e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isInitialized, currentSong]);

  // Volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Seek
  const handleSeek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Handle song end
  const handleSongEnd = () => {
    if (repeat === 'one' && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error('Play error:', e));
    } else {
      playNextSong();
    }
  };

  // Play next song
  const playNextSong = () => {
    if (!currentSong || songs.length === 0) return;

    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    let nextIndex;

    if (shuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentIndex + 1) % songs.length;
    }

    if (nextIndex !== -1) {
      const nextSong = songs[nextIndex];
      addToRecentlyPlayed(nextSong);
      setCurrentSong(nextSong);
      setIsPlaying(true);
    }
  };

  // Play previous song
  const playPreviousSong = () => {
    if (!currentSong || songs.length === 0) return;

    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;

    if (prevIndex !== -1) {
      const prevSong = songs[prevIndex];
      addToRecentlyPlayed(prevSong);
      setCurrentSong(prevSong);
      setIsPlaying(true);
    }
  };

  return {
    audioRef,
    handleSeek,
    playNextSong,
    playPreviousSong,
  };
};
