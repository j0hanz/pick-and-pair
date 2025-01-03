import '../feedback.css';

const showFeedback = (type, message, callback) => {
  // Remove any existing feedback toasts
  const existingToasts = document.querySelectorAll('.feedback-toast');
  existingToasts.forEach((toast) => toast.remove());

  const feedback = document.createElement('div');
  feedback.className = `feedback-toast ${type}`;
  feedback.textContent = message;
  document.body.appendChild(feedback);

  // Remove the feedback after animation completes
  feedback.addEventListener('animationend', () => {
    feedback.remove();
    if (callback) callback();
  });
};

export const handleRightAnswer = (callback) => {
  showFeedback('correct', 'Correct Match!', callback);
};

export const handleWrongAnswer = (callback) => {
  showFeedback('wrong', 'Wrong Match!', callback);
};
