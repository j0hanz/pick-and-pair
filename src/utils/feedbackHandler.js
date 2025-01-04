import '../feedback.css';

function showFeedback(type, message, duration = 3000, callback) {
  // Function to clear existing toasts
  function clearExistingToasts() {
    document
      .querySelectorAll('.feedback-toast')
      .forEach((toast) => toast.remove());
  }

  clearExistingToasts();

  // Create a new toast element
  const toast = document.createElement('div');
  toast.className = `feedback-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Remove the toast after the specified duration
  setTimeout(() => {
    toast.remove();
    if (callback) callback();
  }, duration);
}

// Handle correct answer feedback
export const handleRightAnswer = (callback) =>
  showFeedback('correct', 'Correct Match!', 3000, callback);

// Handle wrong answer feedback
export const handleWrongAnswer = (callback) =>
  showFeedback('wrong', 'Wrong Match!', 3000, callback);
