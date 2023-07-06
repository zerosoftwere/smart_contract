import { createContext } from 'react';

const CalendarContext = createContext({
  year: 0,
  month: 0,
  today: null,
  next: () => {},
  previous: () => {},
  events: [{
    id: 0,
    day: 0,
    year: 0,
    month: 0,
    time: 0,
    text: null,
  }],
  addEvent: ({day, month, year, time, text}) => {},
  removeEvent: (id) => {}
});

export default CalendarContext;