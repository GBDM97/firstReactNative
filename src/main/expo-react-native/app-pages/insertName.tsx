import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import React from "react";


export default function InsertName() {

  const { name, changeName } = React.useContext(MainContext);

  const changePage = () => {}

  return (
    <View style={styles.container}>
      <TextInput style={styles.txInput} onChangeText={changeName}/>
      <Button title='Login' onPress={changePage}/>
      <StatusBar/>
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
