import '../feedback.css';

const handleRightAnswer = (callback) => {
  // Remove any existing feedback toasts
  const existingToasts = document.querySelectorAll('.feedback-toast');
  existingToasts.forEach((toast) => toast.remove());

  const feedback = document.createElement('div');
  feedback.className = 'feedback-toast correct';
  feedback.textContent = 'Correct Match!';
  document.body.appendChild(feedback);

  // Remove the feedback after animation completes
  feedback.addEventListener('animationend', () => {
    feedback.remove();
    if (callback) callback();
  });
};

export default handleRightAnswer;
