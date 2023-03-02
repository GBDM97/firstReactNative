import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function InsertName() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.txInput}/>
      <Button title='Login' onPress={}/>
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
  txInput: {
    height: 40,
    borderWidth: 1,
    minWidth: 100,
    padding: 10
  },
});
