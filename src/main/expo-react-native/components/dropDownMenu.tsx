import React, { FC, ReactElement, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import { MainContext } from '../context/mainContext';

interface Props {
  data: Array<string>;
}

const Dropdown: FC<Props> = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(50);
  const { currentImage, changeImage } = React.useContext(MainContext);


  const openDropdown = () => {
    setDropdownTop((Dimensions.get('window').height /2)+30);
    console.log(dropdownTop);
    setVisible(true);
  };

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };


  const onItemPress = (item:any): void => {
    changeImage(item);
    setVisible(false);
  };

  const renderItem = ({ item }:any) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.overlay}>{item}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}>
    <Text style={{paddingHorizontal: 20}}>{currentImage}</Text>
      {renderDropdown()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    height: 40
  },
});

export default Dropdown;