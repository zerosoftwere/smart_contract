import { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CalendarContext from '../context/CalendarContext';
import { getMonth } from '../utils/calendar';

export default function Month() {
  const { month, year, next, previous} = useContext(CalendarContext);

  return (
    <View style={styles.header}>
      <Pressable onPress={previous}>
        <View style={styles.navigation}>
          <Text style={styles.navigationText}>{'<'}</Text>
        </View>
      </Pressable>
      <View style={styles.month}>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>
          {getMonth(month)} - {year}
        </Text>
      </View>
      <Pressable onPress={next}>
        <View style={styles.navigation}>
          <Text style={styles.navigationText}>{'>'}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginBottom: 8,
  },
  month: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    backgroundColor: '#888',
    borderColor: '#fff',
    borderRadius: 4,
    width: 40,
    height: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationText: {
  },
});
