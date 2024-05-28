import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const placeHolderImage = require('./assets/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff'}}>Open up App.js to start working on your app!</Text>
      <Image source={placeHolderImage} style={styles.image}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
