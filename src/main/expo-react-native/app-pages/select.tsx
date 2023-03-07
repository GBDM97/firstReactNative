import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MainContext } from '../context/mainContext';
import Dropdown from '../components/dropDownMenu';
import { useSelector } from 'react-redux';
import { selectImages } from '../redux/imagesSlice';
import { selectUsers } from '../redux/usersSlice';

export default function Select () {
    const { currentPage, changePage } = React.useContext(MainContext);
    const [selected, setSelected] = useState(undefined);
    const imagesState = useSelector(selectImages).imagesReducer;
    console.log(imagesState.images.desc)

  if (currentPage === 3) return (

    <View style={styles.container}>
      {selected && (
        <Text>
          {/* Selected: label = {selected.label} and value = {selected.value} */}
        </Text>
      )}
      <Text>Select the image</Text>
      <Dropdown label="Select Item" data={imagesState.images.desc} onSelect={()=>setSelected} />
      <Pressable style={{ paddingBottom: 40, paddingTop: 20, backgroundColor: 'white', width: 400, position: 'absolute', bottom: 0}}onPress={()=>{
        changePage(1)}}>
        <Text style={{color: 'black', textAlign: 'center'}}>Return</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});