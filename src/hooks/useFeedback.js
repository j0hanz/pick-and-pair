import { useState, useEffect } from 'react';

export const useFeedback = () => {
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  return [feedback, setFeedback];
};
