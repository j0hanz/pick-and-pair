const handleRightAnswer = (callback) => {
  const feedback = document.createElement('div');
  feedback.className = 'feedback-toast correct';
  feedback.textContent = '✅ Correct Match!';
  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.remove();
    if (callback) callback();
  }, 1000);
};

export default handleRightAnswer;
