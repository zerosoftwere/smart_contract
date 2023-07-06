import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getCalendar } from '../utils/calendar';
import { useContext, useMemo } from 'react';
import CalendarContext from '../context/CalendarContext';
import { useNavigation } from '@react-navigation/native';

export default function Calendar() {
  const { today, month, year } = useContext(CalendarContext);
  const navigation = useNavigation();

  const calendar = useMemo(() => {
    return getCalendar(month, year);
  }, [month, year]);

  const isCurrentMonth = month == today.month && year == today.year;

  return (
    <View style={styles.calendar}>
      {calendar.map((week, i) => (
        <View style={styles.week} key={i}>
          {week.map((day, i) => (
            <Pressable
              style={{ flex: 1 }}
              key={i}
              onPress={() => {
                if (day == '') return;
                navigation.push('events', { month, year, day });
              }}
            >
              <View
                style={[
                  styles.day,
                  isCurrentMonth && day == today.day ? styles.today : {},
                  day == '' ? styles.blankDate : {},
                ]}
              >
                <Text>{day}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: '100%',
  },
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
