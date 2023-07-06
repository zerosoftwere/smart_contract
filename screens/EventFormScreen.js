import { useContext, useState } from 'react';
import { Pressable, StyleSheet, View, Text, TextInput } from 'react-native';
import { TimePicker } from 'react-native-simple-time-picker';
import CalendarContext from '../context/CalendarContext';
import { useNavigation } from '@react-navigation/native';

export default function EventFormScreen({navigation, route}) {
  const { id, day, month, year } = route.params;
  const [time, setTime] = useState({hours: 12, minutes: 0, ampm: 'am'});
  const [text, setText] = useState('');
  const context = useContext(CalendarContext);
  
  const handleBack = () => {
    navigation.pop();
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime)
  };

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleSave = () => {
    const _time = `${time.hours}:${time.minutes}${time.ampm}`;
    if (!id) context.addEvent({day, month, year, time: _time, text})
    navigation.pop();
  };

  const handleDelete = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Pressable onPress={handleBack}>
          <View style={styles.back}>
            <Text>Cancel</Text>
          </View>
        </Pressable>
        {id && (
          <Pressable onPress={handleDelete}>
          <View style={styles.delete}>
            <Text>Delete</Text>
          </View>
        </Pressable>
        )}
        <Pressable onPress={handleSave}>
          <View style={styles.save}>
            <Text>Save</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.form}>
        <View style={styles.formTime}>
          <TimePicker
            value={time}
            onChange={handleTimeChange}
            isAmpm
          />
        </View>
        <View style={styles.formText}>
          <TextInput multiline={true} style={styles.textInput} onChangeText={handleTextChange}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    flexDirection: 'column',
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
  save: {
    backgroundColor: '#8c8',
    borderColor: '#ddf',
    borderRadius: 4,
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    backgroundColor: '#c88',
    borderColor: '#ddf',
    borderRadius: 4,
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    marginTop: 30,
  },
  formTime: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 4,
  },
  textInput: {
    borderWidth: 1,
    padding: 12,
    borderColor: '#bbb',
  }
});
