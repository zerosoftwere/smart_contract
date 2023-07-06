import { StyleSheet, Text, View } from 'react-native';
import { weekdays } from '../utils/calendar';

export default function Weekdays() {
  return (
    <View style={styles.weekdays}>
    {weekdays.map((weekday, i) => (
      <View style={styles.weekday} key={i}>
        <Text style={styles.weekdayText}>{weekday}</Text>
      </View>
    ))}
  </View>
  );
}

const styles = StyleSheet.create({
  weekdays: {
    flexDirection: 'row',
  },
  weekday: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});