import React, { useMemo } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, NativeSyntheticEvent, Pressable, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedUser, selectUsers } from "../redux/usersSlice";
import Test from "../components/testComponent";
import StyledButton from "../components/styledComponent";



export default function InsertName() {

  const { currentPage, changePage } = React.useContext(MainContext);
  const [userExists, setExists] = React.useState("");
  const usersState = useSelector(selectUsers).usersReducer;
  const dispatch = useDispatch();

  console.log('insertName Component is rendering'); 

  const handleInsertUser = (n: string) => {
    
    if (n === usersState.users[0].name){dispatch(changeSelectedUser(usersState.users[0])); setExists('existing user'); return}else{setExists("")}
    if (n === usersState.users[1].name){dispatch(changeSelectedUser(usersState.users[1])); setExists('existing user'); return}else{setExists("")}
    if (n === usersState.users[2].name){dispatch(changeSelectedUser(usersState.users[2])); setExists('existing user'); return}else{setExists("")}
  }

  const handleLoginPress = () => {
    console.log("Login")
    setExists("");
    changePage(2);
  }


  if (currentPage === 1) return (
    <>
    <View style={styles.container}>
      <Test tx={userExists}/>
      <Text style={{color: 'lime', position: "absolute", top: 100}}>{userExists}</Text>
      <TextInput style={styles.txInput} onChange={(n)=>{handleInsertUser(n.nativeEvent.text)}}/>
      <StyledButton onPress={()=>{userExists === "existing user" ? handleLoginPress() :''}}></StyledButton>
      <StatusBar/>
    </View>
    </>
  ) 
  else return null;
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
    margin: 10,
  }

});
