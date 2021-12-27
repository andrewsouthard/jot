// https://muffinman.io/javascript-time-ago-function/
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000

function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  let ampm = 'am';
  let hours = parseInt(date.getHours());
  if (hours > 12) {
    ampm = 'pm';
    hours -= 12;
  } else if (hours === 12) {
    ampm = 'pm';
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${minutes}`;
  }
  if (prefomattedDate) {
    // Today at 10:20
    // Yesterday at 10:20
    return `${prefomattedDate} at ${hours}:${minutes}${ampm}`;
  }
  if (hideYear) {
    // 10. January at 10:20
    return `${month} ${day} at ${hours}:${minutes}${ampm}`;
  }
  // 10. January 2017. at 10:20
  return `${month} ${day}, ${year} at ${hours}:${minutes}${ampm}`;
}
export const formatDatetimeToSentence = (epoch) => {
  // --- Main function
  if (!epoch) {
    return null;
  }
  const date = typeof epoch === 'object' ? epoch : new Date(epoch);
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();
  if (seconds < 5) {
    return 'Now';
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return 'About a minute ago';
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, 'Today'); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, false, true); // 10. January at 10:20
  }
  return getFormattedDate(date); // 10. January 2017. at 10:20
};
