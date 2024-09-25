export type Time = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const milisecondsInSecond = 1000;
const secondsInDay = 86400;
const secondsInHour = 3600;
const secondsInMinute = 60;

const toMilliseconds = ({ days, hours, minutes, seconds }: Time): number => {
  let result = 0;
  if (days) {
    result += secondsInDay * days;
  }

  if (hours) {
    result += secondsInHour * hours;
  }

  if (minutes) {
    result += secondsInMinute * minutes;
  }

  if (seconds) {
    result += seconds;
  }

  return result * milisecondsInSecond;
};

export default toMilliseconds;
