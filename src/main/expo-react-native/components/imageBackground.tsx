import React from 'react';
import { Button, FlatList, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import getImageUri from '../services/getImageUri';

export type Btype = {
    children: React.ReactNode
    source?: ImageSourcePropType
}

export default function Background ({children}:Btype) {
    const { currentImage, changeImage } = React.useContext(MainContext);

    return(
        <ImageBackground
            source={{uri: getImageUri(currentImage)}}
            style={styles.image}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
  });