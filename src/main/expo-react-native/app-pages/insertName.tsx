import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import { store } from '../redux/store';
import { person, personSlice } from '../redux/slices';
import { useSelector, useDispatch } from "react-redux";
import { changeName, selectName } from "../redux/slices";
import getPersonAttributes from "../services/getPersonAttributes";
import { useQuery } from "@apollo/client";
import { NAME_QUERY } from "../gql/Query";


export default function InsertName() {
  let data;
  const query = () => { data = useQuery(NAME_QUERY); console.log(data)}
  const { currentPage, changePage } = React.useContext(MainContext);
  const name = useSelector(selectName);
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <TextInput style={styles.txInput} onChange={(n)=>{
        dispatch(changeName(n))
      }}/>
      <Button title='Login' onPress={()=>{query()}}/>
      <Text style={{color: 'white'}}>{data}</Text>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    minWidth: 100,
    padding: 10,
    color: 'white',
    textAlign: "center",
    margin: 10
  },
});
