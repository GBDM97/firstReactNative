import React from 'react';
import { Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { selectImages } from '../redux/imagesSlice';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/usersSlice';

export default function ContinentList () {
  const imagesState = useSelector(selectImages).imagesReducer;
  const usersState = useSelector(selectUsers).usersReducer;
  console.log(...imagesState.images.desc)
  console.log(imagesState.images.id)

    return(
      <View style={styles.container}>
        <FlatList style={styles.list} renderItem={({item})=>
          <><Text style={{ color: 'white' }}>{item}</Text><Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{ width: 400, height: 400 }} /></>
        } data={imagesState.images.desc}></FlatList>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      backgroundColor: 'purple'      
    }
  });