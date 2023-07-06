import { useContext, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import CalendarContext from '../context/CalendarContext';

export default function Events() {
  const {
    today: { day, month, year },
    events,
    addEvent,
    removeEvent,
  } = useContext(CalendarContext);
  const todaysEvents = useMemo(
    () =>
      events.filter((event) => {
        return event.day == day && event.month == month && event.year == year;
      }),
    [day, month, year]
  );

  return (
    <View style={styles.events}>
      <View style={styles.eventTitle}>
        <Text>Today's Events</Text>
      </View>
      <ScrollView style={styles.eventList} bounces>
        {todaysEvents.map((event) => (
          <Pressable key={event.id}>
            <View style={styles.eventDetail}>
              <View style={styles.eventTime}>
                <Text style={styles.timeText}>{event.time}</Text>
              </View>
              <View style={styles.eventText}>
                <Text style={styles.contentText}>{event.text}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  events: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    flexDirection: 'column',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
  },
  eventTitle: {
    marginTop: 8,
    marginBottom: 4,
    alignSelf: 'center',
  },
  eventList: {},
  eventDetail: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    padding: 4,
  },
  eventTime: {
    flex: 2,
  },
  timeText: {
    color: 'orangered',
    fontWeight: 600,
  },
  eventText: {
    flex: 7,
  },
});
