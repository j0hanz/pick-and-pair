import '../feedback.css';

// Removes all feedback toasts
function clearExistingToasts() {
  console.log('Clearing existing toasts');
  document
    .querySelectorAll('.feedback-toast')
    .forEach((toast) => toast.remove());
}

// Creates and appends a new toast
function createToastElement(type, message) {
  console.log(`Creating toast of type: ${type} with message: ${message}`);
  const feedback = document.createElement('div');
  feedback.className = `feedback-toast ${type}`;
  feedback.textContent = message;
  document.body.appendChild(feedback);
  return feedback;
}

// Displays a feedback toast
export function showFeedback(type, message, duration = 3000, callback) {
  console.log(
    `Showing feedback of type: ${type} with message: ${message} for duration: ${duration}`
  );
  clearExistingToasts();

  const toast = createToastElement(type, message);

  setTimeout(() => {
    console.log('Removing toast');
    toast.remove();
    if (callback) callback();
  }, duration);
}

export const handleRightAnswer = (callback) =>
  showFeedback('correct', 'Correct Match!', 3000, callback);

export const handleWrongAnswer = (callback) =>
  showFeedback('wrong', 'Wrong Match!', 3000, callback);
