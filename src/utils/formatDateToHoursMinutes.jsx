export const formatDateToHoursMinutes = (date) => {
  const hoursMinutesSeconds = date.toTimeString().split(" ")[0];
  const hoursMinutesArray = hoursMinutesSeconds.split(':');
  const hoursMinutes = hoursMinutesArray[0] + ":" + hoursMinutesArray[1];
  return hoursMinutes;

}