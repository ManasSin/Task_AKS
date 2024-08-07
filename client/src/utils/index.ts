export const dateDifference = (date1: Date, date2: Date) => {
  const timeDifference = date2.getTime() - date1.getTime();
  const secondsInDay = 86400;

  const daysDifference = Math.floor(timeDifference / secondsInDay);

  const years = Math.floor(daysDifference / 365);
  const months = Math.floor((daysDifference % 365) / 30);
  const days = Math.floor((daysDifference % 365) % 30);

  const hours = Math.floor(
    (timeDifference - daysDifference * secondsInDay) / 3600
  );
  const minutes = Math.floor(
    (timeDifference - daysDifference * secondsInDay - hours * 3600) / 60
  );

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
};
