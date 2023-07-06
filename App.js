import { StatusBar } from 'expo-status-bar';
import CalendarContext from './context/CalendarContext';
import { useCallback, useEffect, useState } from 'react';
import { getCurrentMonthAndYear } from './utils/calendar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import EventFormScreen from './screens/EventFormScreen';

const [currentDay, currentMonth, currentYear] = getCurrentMonthAndYear();

const EVENTS = [
  {
    id: 0,
    day: currentDay,
    month: currentMonth,
    year: currentYear,
    time: '11:45am',
    text: 'Physics lab practical examination',
  },
  {
    id: 1,
    day: currentDay,
    month: currentMonth,
    year: currentYear,
    time: '4:30pm',
    text: 'Deadline for COCS 402 assignment collection',
  },
];

const Stack = createNativeStackNavigator();

export default function App() {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [events, setEvents] = useState(EVENTS);
  const [today, setToday] = useState({
    day: currentDay,
    month: currentDay,
    year: currentYear,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const [day, month, year] = getCurrentMonthAndYear();
      setToday({ day, month, year });
    }, 30);
    return () => clearInterval(interval);
  });

  const handleNext = useCallback(() => {
    setMonth((month) => {
      if (month == 12) {
        setYear((year) => year + 1);
        return 1;
      }
      return month + 1;
    });
  }, [month, year]);

  const handlePrevious = useCallback(() => {
    setMonth((month) => {
      if (month == 1) {
        setYear((year) => year - 1);
        return 12;
      }
      return month - 1;
    });
  }, [month, year]);

  const handleAddEvent = ({day, month, year, time, text}) => {
    setEvents(events => {
      const id = events.length;
      return [...events, {id, day, month, year, time, text}]
    })
  };

  const handleEditEvent = (event) => {};

  const handleRemoveEvent = (id) => {};

  return (
    <CalendarContext.Provider
      value={{
        month: month,
        year: year,
        next: handleNext,
        previous: handlePrevious,
        today: today,
        events: events,
        addEvent: handleAddEvent,
        removeEvent: handleRemoveEvent,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="events" component={EventScreen} />
          <Stack.Screen name="form" component={EventFormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </CalendarContext.Provider>
  );
}
