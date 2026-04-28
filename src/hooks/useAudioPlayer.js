import { useEffect, useRef } from 'react';
import useMusicStore from '../store/useMusicStore';

const useAudioPlayer = () => {
  const audioRef = useRef(new Audio());
  const {
    currentSong,
    isPlaying,
    volume,
    currentTime,
    setCurrentTime,
    setDuration,
    playNext,
    repeat,
    shuffle,
    queue,
    queueIndex
  } = useMusicStore();

  const audio = audioRef.current;

  // Initialize audio element
  useEffect(() => {
    audio.volume = volume;
  }, [volume, audio]);

  // Handle song changes
  useEffect(() => {
    // Try both 'file' (ObjectURL) and 'path' for compatibility
    const audioSource = currentSong?.file || currentSong?.path;
    if (audioSource) {
      audio.src = audioSource;
      if (isPlaying) {
        audio.play().catch(err => console.error('Playback error:', err));
      }
    }
  }, [currentSong, audio, isPlaying]);

  // Handle play/pause
  useEffect(() => {
    const audioSource = currentSong?.file || currentSong?.path;
    if (!audioSource) return;

    if (isPlaying) {
      audio.play().catch(err => console.error('Playback error:', err));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong?.file, currentSong?.path, audio]);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateTime);
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, [audio, setCurrentTime]);

  // Update duration
  useEffect(() => {
    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);

    return () => {
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
    };
  }, [audio, setDuration]);

  // Handle song end
  useEffect(() => {
    const handleEnded = () => {
      if (repeat === 'one') {
        audio.currentTime = 0;
        audio.play().catch(err => console.error('Playback error:', err));
      } else {
        playNext();
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [audio, repeat, playNext]);

  // Seek
  const seek = (time) => {
    if (audio) {
      // Pause before seeking to prevent duplicate playback
      const wasPlaying = !audio.paused;
      audio.pause();
      audio.currentTime = time;
      setCurrentTime(time);
      
      // Resume playback if it was playing
      if (wasPlaying) {
        audio.play().catch(err => console.error('Playback error:', err));
      }
    }
  };

  return {
    seek,
    audio
  };
};

export default useAudioPlayer;
