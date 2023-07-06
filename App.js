import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Month from './components/Month';
import Weekdays from './components/Weekdays';
import Calendar from './components/Calendar';
import Header from './components/Header';
import CalendarContext from './context/CalendarContext';
import { useCallback, useEffect, useState } from 'react';
import { getCurrentMonthAndYear } from './utils/calendar';
import Events from './components/Events';

const [currentDay, currentMonth, currentYear] = getCurrentMonthAndYear();

const events = [
  {
    id: 1,
    day: currentDay,
    month: currentMonth,
    year: currentYear,
    time: '11:45am',
    text: 'Physics lab practical examination'
  },
  {
    id: 2,
    day: currentDay,
    month: currentMonth,
    year: currentYear,
    time: '4:30pm',
    text: 'Deadline for COCS 402 assignment collection'
  }
]

export default function App() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [today, setToday] = useState({day: currentDay, month: currentDay, year: currentYear});

  useEffect(() => {
    const interval = setInterval(() => {
      const [day, month, year] = getCurrentMonthAndYear();
      setToday({day, month, year});
    }, 30);
    return () => clearInterval(interval);
  });

  const handleNext = useCallback(() => {
    setMonth(month => {
      if (month == 12) {
        setYear(year => year + 1)
        return 1;
      }
      return month + 1
    })
  }, [month, year]);

  const handlePrevious = useCallback(() => {
    setMonth (month => {
      if (month == 1) {
        setYear(year => year - 1)
        return 12
      }
      return month - 1;
    })
  }, [month, year]);

  const handleAddEvent = (event) => {

  }

  const handleRemoveEvent = (id) => {

  }

  return (
    <CalendarContext.Provider value={{
      month: month,
      year: year,
      next: handleNext,
      previous: handlePrevious,
      today: today,
      events: events,
      addEvent: handleAddEvent,
      removeEvent: handleRemoveEvent
    }}>
      <View style={styles.container}>
        <Header />
        <Month />
        <Weekdays />
        <Calendar month={month} year={year} />
        <Events today={today}/>
        <StatusBar />
      </View>
    </CalendarContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    padding: 24,
    marginTop: 32,
  },
});
