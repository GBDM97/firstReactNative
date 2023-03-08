import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import Dropdown from '../components/dropDownMenu';
import { useSelector } from 'react-redux';
import { selectImages } from '../redux/imagesSlice';
import Background from '../components/imageBackground';

export default function Select () {
    const { currentPage, changePage } = React.useContext(MainContext);
    const { currentImage, changeImage } = React.useContext(MainContext);
    const imagesState = useSelector(selectImages).imagesReducer;
    console.log(imagesState.images.desc)

  if (currentPage === 3) return (
    <>
    <View style={styles.container}>
      <Background children={<>
        <Dropdown data={imagesState.images.desc} />
        <Pressable style={{ paddingBottom: 40, paddingTop: 20, backgroundColor: 'white', width: 400, position: 'absolute', bottom: 0}}onPress={()=>{
            changePage(1); changeImage('Select the image')}}>
            <Text style={{color: 'black', textAlign: 'center'}}>Return</Text>
        </Pressable>
      </>}></Background>
    </View>
    </>
  )
  else return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
  },
});