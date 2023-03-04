import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { CONTINENT_QUERY } from "../gql/Query"
import { useQuery } from '@apollo/client';
import { MainContext } from '../context/mainContext';
import { selectUsers, changeSelectedUser } from '../redux/usersSlice';
import { changeImagesInfo, selectImages } from '../redux/imagesSlice';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ListPage() {
  const data = useQuery(CONTINENT_QUERY);
  const { currentPage, changePage } = React.useContext(MainContext);
  const usersState = useSelector(selectUsers).usersReducer;
  const imagesState = useSelector(selectImages).imagesReducer;
  const dispatch = useDispatch();
 
  useEffect(()=>{
    if(usersState.selectedUser){
        if (usersState.selectedUser.name === usersState.users[0].name) {
          dispatch(changeSelectedUser({...usersState.selectedUser, availableImages:[
            data.data.continents[0].code,
            data.data.continents[1].code,
          ]}));
          dispatch(changeImagesInfo(
            [
              {id: data.data.continents[0].code, desc: data.data.continents[0].name},
              {id: data.data.continents[1].code, desc: data.data.continents[1].name}
            ]
          ))
        }

        if (usersState.selectedUser.name === usersState.users[1].name) {
          dispatch(changeSelectedUser({...usersState.selectedUser, availableImages:[
            data.data.continents[2].code,
            data.data.continents[3].code,
          ]}));
          dispatch(changeImagesInfo(
            [
              {id: data.data.continents[2].code, desc: data.data.continents[2].name},
              {id: data.data.continents[3].code, desc: data.data.continents[3].name}
            ]
          ))
        }
        if (usersState.selectedUser.name === usersState.users[2].name) {
          dispatch(changeSelectedUser({...usersState.selectedUser, availableImages:[
            data.data.continents[4].code,
            data.data.continents[5].code,
            data.data.continents[6].code,
          ]}))
          dispatch(changeImagesInfo(
            [
              {id: data.data.continents[4].code, desc: data.data.continents[4].name},
              {id: data.data.continents[5].code, desc: data.data.continents[5].name},
              {id: data.data.continents[6].code, desc: data.data.continents[6].name}
            ]
          ))
        }
  }},[currentPage])

  if (currentPage === 2) return (
    <View style={styles.container}>

      <FlatList renderItem={({item})=><Text>{item}</Text>} data={usersState.selectedUser.availableImages}></FlatList>
      <Pressable onPress={()=>console.log(imagesState.images)}>
        <Text>Test</Text>
      </Pressable>
    </View>
  )
  else return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
