const handleWrongAnswer = (callback) => {
  const feedback = document.createElement('div');
  feedback.className = 'feedback-toast wrong';
  feedback.textContent = '❌ Wrong Match!';
  document.body.appendChild(feedback);

  // Remove the feedback after animation
  setTimeout(() => {
    feedback.remove();
    if (callback) callback();
  }, 1000);
};

export default handleWrongAnswer;
