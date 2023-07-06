import { useContext, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import CalendarContext from '../../context/CalendarContext';

export default function EventList({ day, month, year }) {
  const { events } = useContext(CalendarContext);

  const daysEvents = useMemo(
    () =>
      events.filter((event) => {
        return event.day == day && event.month == month && event.year == year;
      }),
    [day, month, year, events]
  );

  return (
    <View style={styles.events}>
      <View style={styles.eventTitle}>
        <Text style={{fontWeight: 600}}>Events for {day}/{month}/{year}</Text>
      </View>
      <ScrollView style={styles.eventList} bounces>
        {daysEvents.map((event) => (
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
        {!daysEvents.length && (
          <View style={styles.noEvent}>
            <Text>No events</Text>
          </View>
        )}
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
  noEvent: {
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'dotted',
    borderColor: '#333',
    borderWidth: 1,
  },
});
