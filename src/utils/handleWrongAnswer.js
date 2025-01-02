import '../feedback.css';

const handleWrongAnswer = (callback) => {
  // Remove any existing feedback toasts
  const existingToasts = document.querySelectorAll('.feedback-toast');
  existingToasts.forEach((toast) => toast.remove());

  const feedback = document.createElement('div');
  feedback.className = 'feedback-toast wrong';
  feedback.textContent = 'Wrong Match!';
  document.body.appendChild(feedback);

  // Remove the feedback after animation completes
  feedback.addEventListener('animationend', () => {
    feedback.remove();
    if (callback) callback();
  });
};

export default handleWrongAnswer;
