import { useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NetworkLoggerFAB } from 'react-native-netlog-fab';

export default function App() {
  const sendSampleRequest = useCallback(async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1');
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>react-native-netlog-fab</Text>
        <Text style={styles.subtitle}>
          Tap the purple FAB to open network logs. Drag it anywhere on screen.
        </Text>
        <Pressable style={styles.button} onPress={sendSampleRequest}>
          <Text style={styles.buttonText}>Send sample request</Text>
        </Pressable>
        <NetworkLoggerFAB icon="network-check" theme="dark" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
