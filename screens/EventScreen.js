import { Pressable, StyleSheet, View, Text } from 'react-native';
import EventList from '../components/events/EventList';

export default function EventScreen({navigation, route}) {
  const {day, month, year} = route.params;
  
  const handleBack = () => {
    navigation.pop();
  };

  const handleAdd = () => {
    navigation.push('form', {day, month, year});
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Pressable onPress={handleBack}>
          <View style={styles.back}>
            <Text>Back</Text>
          </View>
        </Pressable>
        <Pressable onPress={handleAdd}>
          <View style={styles.add}>
            <Text>Add</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.eventList}>
        <EventList day={day} month={month} year={year}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 24,
    marginTop: 32,
    width: '100%',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  back: {
    backgroundColor: '#88c',
    borderColor: '#ddf',
    borderRadius: 4,
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    backgroundColor: '#8c8',
    borderColor: '#ddf',
    borderRadius: 4,
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventList: {
    flex: 1
  }
});
