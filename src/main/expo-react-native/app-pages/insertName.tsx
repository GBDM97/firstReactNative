import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import { store } from '../redux/store';
import { person, personSlice } from '../redux/slices';
import { useSelector, useDispatch } from "react-redux";
import { changeName, selectName } from "../redux/slices";


export default function InsertName() {

  const { currentPage, changePage } = React.useContext(MainContext);

  const name = useSelector(selectName);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput style={styles.txInput} onChange={(n)=>{
        dispatch(changeName(n))
      }}/>
      <Button title='Login' onPress={()=>{changePage(2)}}/>
      <Text>{name}</Text>
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
