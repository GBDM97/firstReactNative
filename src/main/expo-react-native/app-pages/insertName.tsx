import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import { store } from '../redux/store';
import React from "react";
import { person, personSlice } from '../redux/slices';

export default function InsertName() {

  const { currentPage, changePage } = React.useContext(MainContext);

  const returnName = (state: person) => {
    alert(state.name)
    return state.name;
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.txInput} onChangeText={(n)=>{
        store.dispatch(personSlice.actions.changeName(n))
      }}/>
      <Button title='Login' onPress={()=>{changePage(2)}}/>
      <Text>{returnName(store.getState())}</Text>
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
