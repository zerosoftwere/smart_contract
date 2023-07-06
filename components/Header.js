import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Smart Calendar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800'
  }
});