import { View, StyleSheet } from 'react-native';
import { NetworkLoggerFAB } from 'react-native-netlog-fab';

export default function App() {
  return (
    <View style={styles.container}>
      <NetworkLoggerFAB />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
