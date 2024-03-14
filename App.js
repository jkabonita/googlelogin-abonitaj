import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//expo go: 461279521695-d950a0pe0u67uk9gg0lugqrp7rlhsh5d.apps.googleusercontent.com
//android: 461279521695-70qgvnsnut382het7sqou9mguq53lv4j.apps.googleusercontent.com
//ios: 461279521695-18bapf3g14uakj0thprbkf8eh7g51blq.apps.googleusercontent.com
//web: 461279521695-5cd784mqptv60d4jrba2fhp4v5eorinu.apps.googleusercontent.com
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
