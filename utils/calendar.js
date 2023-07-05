export function weekDay(month, day, year) {
  const y = year - ((14 - month) / 12) | 0;
  const x = y + ((y / 4) | 0) - ((y / 100) | 0) + ((y / 400) | 0);
  const m = month + 12 * (((14 - month) / 12 | 0)) - 2;
  const d = (day + x + ((31 * m / 12) | 0) ) % 7;
  return d;
}

export function isLeapYear(year) {
  if  ((year % 4 == 0) && (year % 100 != 0)) return true;
  if  (year % 400 == 0) return true;
  return false;
}

export const months = [
  "",
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const weekDays = [
  "Monday", "Tuesday", "Wednessday", "Thursday", "Firday", "Saturday", "Sunday"
]

export const monthsDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export function calendar(month, year) {
  const monthStartDay = weekDay(month, 1, year);

  console.log(monthStartDay);
  
  let weeks = [];
  let days = [];

  const monthDays = monthsDays[month];
  if (month == 2 && isLeapYear) monthDays = 29;
  
  for (let d = 0; d < monthStartDay; d++) {
    days.push("");
  }

  for (let d = 1; d <= monthDays; d++) {
    days.push(d)
    if ((d + monthStartDay) % 7 == 0) {
      weeks.push(days);
      days = [];
    }
  }

  while (days.length && days.length < 7) {
    days.push("")
  }

  if (days.length) weeks.push(days)

  return weeks;
}