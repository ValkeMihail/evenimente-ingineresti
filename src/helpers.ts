export function formatDateAndTime(dateTimeString : string) {
  const dateTime = new Date(dateTimeString);
  
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return `${formattedDate} | ${formattedTime}`;
}
