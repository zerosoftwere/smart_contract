import { StyleSheet, View } from 'react-native';
import Month from '../components/Month';
import Weekdays from '../components/Weekdays';
import Calendar from '../components/Calendar';
import Header from '../components/Header';
import EventsToday from '../components/EventsToday';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Month />
      <Weekdays />
      <Calendar />
      <EventsToday/>
    </View>
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
