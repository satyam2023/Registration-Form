import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


interface Props {
  heading: string;
}

const Dropdown: FC<Props> = ({ heading }) => {
  const [visible, setVisible] = useState(false);
/* 


*/


  const DropdownVisible = () => {
    if (visible) {
      return (
        <View style={styles.dropdown}>
          <Text style={styles.optionDropdown} onPress={() => { heading = "Android Developer" }}>Android Developer</Text>
          <Text style={styles.optionDropdown} onPress={() => { heading = "Android Developer" }}>IOS Developer</Text>
          <Text style={styles.optionDropdown} onPress={() => { heading = "Android Developer" }}>React Native Developer</Text>
        </View>
      );
    }
  };

  console.log(heading);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => { setVisible(!visible); }}
    >
      {DropdownVisible()}
      <Text style={styles.buttonText}>{heading}</Text>
      <Text>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '70%',
    paddingHorizontal: 10,
    zIndex: 1,
    borderRadius: 5,
    borderColor: '#91A3B0',
    borderWidth: 2,
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    flex: 1,

  },
  dropdown: {
    flexDirection: 'column',
    position: 'absolute',
    top: 50,
    fontSize: 14,
    width: '106%',
    backgroundColor: '#E6E6E6',
  },
  optionDropdown: {
    margin: 5,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#91A3B0',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    padding: 8,
  }
});

export default Dropdown;