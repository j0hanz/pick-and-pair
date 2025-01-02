import { useEffect } from 'react';

export const useSound = (url) => {
  useEffect(() => {
    const audio = new Audio(url);
    return () => audio.pause();
  }, [url]);

  const play = () => {
    const audio = new Audio(url);
    audio.play();
  };

  return play;
};
