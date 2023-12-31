import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList,StyleSheet } from 'react-native';

interface CustomDropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  selectedValue: string;
 // submitted:boolean
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect, selectedValue, }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (item: string) => {
    setModalVisible(false);
    onSelect(item);
  };

  /*function errorshow(){
    if(!modalVisible && submitted){
      return(
        <Text style={styles.errormsg}>
          !!! Please Select your job type
        </Text>
      )
    }
  }*/

  return (
    <View>
        <View style={{
            borderRadius:5,
            backgroundColor:'#FFFFFF',
            paddingVertical:14,
            paddingHorizontal:77,
            margin:12,
        }}>
      <TouchableOpacity
        
       onPress={() => setModalVisible(true)}>
        <Text style={{ fontSize:14}}>{selectedValue}</Text>
      </TouchableOpacity>
     
      </View>

      <Modal
       animationType="slide"
      transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View >
          <View style={{ width: '70%', backgroundColor: 'white', borderRadius: 5,marginLeft:58,marginTop:500,borderWidth:2,  borderColor:'#91A3B0', }}>
            <FlatList
              data={options}
             
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};




interface DropdownListProps {
 //submitted:boolean,
}
const DropdownList: React.FC = () => {
  const options = ['IOS Developer', 'Android Developer', 'React Developer','OTHER Developer'];
  const [selectedValue, setSelectedValue] = useState('Select Job Type');
  
  return (
    <CustomDropdown
      options={options}
      onSelect={(value) => setSelectedValue(value)}
      selectedValue={selectedValue}
      //submitted={props.submitted}
    />
   
  );
};
const styles = StyleSheet.create({
 
  errormsg:{
    color:'red',
    textAlign:'left',
    backgroundColor:'#E6E6E6'
  
   }
 });
export default DropdownList;

