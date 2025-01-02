import { useState, useEffect, useCallback } from 'react';

export const useFeedback = (displayTime = 1000) => {
  const [feedback, setFeedback] = useState({ status: null, visible: false });

  const clearFeedback = useCallback(() => {
    setFeedback({ status: null, visible: false });
  }, []);

  const showFeedback = useCallback(
    (status) => {
      if (status === null) {
        clearFeedback();
        return;
      }
      setFeedback({ status, visible: true });
    },
    [clearFeedback]
  );

  useEffect(() => {
    let timer;
    if (feedback.visible) {
      timer = setTimeout(clearFeedback, displayTime);
    }
    return () => timer && clearTimeout(timer);
  }, [feedback.visible, displayTime, clearFeedback]);

  return [feedback.status, showFeedback];
};
