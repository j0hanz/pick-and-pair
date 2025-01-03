import '../feedback.css';

const showFeedback = (type, message, duration = 3000, callback) => {
  const existingToasts = document.querySelectorAll('.feedback-toast');
  existingToasts.forEach((toast) => toast.remove());

  const feedback = document.createElement('div');
  feedback.className = `feedback-toast ${type}`;
  feedback.textContent = message;
  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
    if (callback) callback();
  }, duration);
};

export const handleRightAnswer = (callback) => {
  showFeedback('correct', 'Correct Match!', 3000, callback);
};

export const handleWrongAnswer = (callback) => {
  showFeedback('wrong', 'Wrong Match!', 3000, callback);
};
