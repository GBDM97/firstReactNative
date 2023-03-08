import React from 'react';
import { ActivityIndicator, Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { selectImages } from '../redux/imagesSlice';
import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/usersSlice';
import { RefreshControl } from 'react-native';
import getImageUri from '../services/getImageUri';

export default function ContinentList () {
  const imagesState = useSelector(selectImages).imagesReducer;
  const usersState = useSelector(selectUsers).usersReducer;
  const [refreshing, setRefreshing] = React.useState(false);
  const [userData, setUserData] = React.useState([]);

  const refreshMock= () => {
    setRefreshing(true);
    setTimeout(()=>setRefreshing(false), 3000);
  }

    return(
      <View style={styles.container}>
        <FlatList style={styles.list} renderItem={({item})=>
          <><Text style={{ color: 'white', textAlign: 'center', fontWeight: '300', paddingTop: 50, paddingBottom: 5}}>{item}</Text>
          <Image source={{uri: getImageUri(item)}} style={{width: 400, height: 400}}/></>} data={imagesState.images.desc}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshMock} tintColor={'yellow'}/>}
          ></FlatList>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: 30
    },
    list: {
      backgroundColor: 'black'      
    }
  });