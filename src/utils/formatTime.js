// Pads a number with leading zeros
function zeroPad(value, length = 2) {
  return String(value).padStart(length, '0');
}

// Formats seconds into "mm:ss"
export function formatTime(seconds) {
  console.log('Formatting time for seconds:', seconds);
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedTime = `${minutes}:${zeroPad(secs)}`;
  console.log('Formatted time:', formattedTime);
  return formattedTime;
}
