import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { CONTINENT_QUERY, BOOK_QUERY } from "../gql/Query"
import { useQuery } from '@apollo/client';
import { MainContext } from '../context/mainContext';
import { selectUsers, changeSelectedUser } from '../redux/usersSlice';
import { changeImagesDesc, changeImagesId, selectImages } from '../redux/imagesSlice';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinentList from '../components/continentList';

function ListPage() {
  const data = useQuery(CONTINENT_QUERY);
  // const book = useQuery(BOOK_QUERY);
  // console.log(book);
  const { currentPage, changePage } = React.useContext(MainContext);
  const usersState = useSelector(selectUsers).usersReducer;
  const dispatch = useDispatch();

  console.log('ListPage Component is rendering'); 
 
  useEffect(()=>{
    if(usersState.selectedUser){
      
        if (usersState.selectedUser.name === usersState.users[0].name) {
          dispatch(changeSelectedUser({...usersState.selectedUser, availableImages:[
            data.data.continents[0].code,
            data.data.continents[1].code,
          ]}));
          dispatch(changeImagesId(
            [
              data.data.continents[0].code, data.data.continents[1].code
            ]
          ))
          dispatch(changeImagesDesc(
            [
              data.data.continents[0].name, data.data.continents[1].name
            ]
          ))
        }

        if (usersState.selectedUser.name === usersState.users[1].name) {
          dispatch(changeSelectedUser({...usersState.selectedUser, availableImages:[
            data.data.continents[2].code,
            data.data.continents[3].code,
          ]}));
          dispatch(changeImagesId(
            [
               data.data.continents[2].code, data.data.continents[3].code
            ]
          ))
          dispatch(changeImagesDesc(
            [
              data.data.continents[2].name, data.data.continents[3].name
            ]
          ))
        }
        if (usersState.selectedUser.name === usersState.users[2].name) {
          dispatch(changeSelectedUser({...usersState.selectedUser, availableImages:[
            data.data.continents[4].code,
            data.data.continents[5].code,
            data.data.continents[6].code,
          ]}))
          dispatch(changeImagesId(
            [
              data.data.continents[4].code, data.data.continents[5].code, data.data.continents[6].code
            ]
          ))
          dispatch(changeImagesDesc(
            [
              data.data.continents[4].name, data.data.continents[5].name, data.data.continents[6].name
            ]
          ))
        }
  }},[currentPage])
  if (currentPage === 2) return (
    <View style={styles.container}>
      <ContinentList/>
      <Pressable style={{ paddingBottom: 40, paddingTop: 20, backgroundColor: 'white', width: 400}}onPress={()=>{
        changePage(1)}}>
        <Text style={{color: 'black', textAlign: 'center'}}>Return</Text>
      </Pressable>
    </View>
  )
  else return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default React.memo(ListPage)
