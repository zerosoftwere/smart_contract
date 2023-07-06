import { StyleSheet, Text, View } from 'react-native';
import { getCalendar } from '../utils/calendar';
import { useContext, useMemo } from 'react';
import CalendarContext from '../context/CalendarContext';

export default function Calendar({ month, year }) {
  const { today } = useContext(CalendarContext);

  const calendar = useMemo(() => {
    return getCalendar(month, year);
  }, [month, year]);

  const isCurrentMonth = month == today.month && year == today.year;

  return (
    <View style={styles.calendar}>
      {calendar.map((week, i) => (
        <View style={styles.week} key={i}>
          {week.map((day, i) => (
            <View
              style={[
                styles.day,
                isCurrentMonth && day == today.day ? styles.today : {},
                day == '' ? styles.blankDate : {},
              ]}
              key={i}
            >
              <Text>{day}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {},
  week: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(190, 190, 190)',
    borderColor: '#fff',
    borderRadius: 4,
    margin: 2,
  },
  today: {
    backgroundColor: '#cfc',
  },
  blankDate: {
    backgroundColor: 'rgb(213, 213, 213)',
  },
});
