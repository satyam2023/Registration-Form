import { SelectList } from 'react-native-dropdown-select-list'

import React, { useState} from 'react';
import { TextInput,StyleSheet,View ,Text} from "react-native";

const DropdownComponent= ({submitted}) => {

  const [selected, setSelected] = useState("");

  function errorshow(){
    if(selected==-1 && submitted){
      return(
        <Text style={styles.errormsg}>
          !!! Please Select your job type
        </Text>
      )
    }
  }
  
  
  const data = [
    {key:'1',value:'IOS Developer'},
    {key:'2',value:'Android Developer'},
    {key:'3',value:'FullStack Developer'},
    {key:'4',value:'Web Developer'},
  ];
  

  return(
<View style={styles.TextInputs}>
    <SelectList 
      //onSelect={() => alert(selected)}
      setSelected={setSelected} 
     // fontFamily='lato'
      data={data} 
     // arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
     // searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={false} 
      boxStyles={{borderWidth:0,}} 
      defaultOption={{ key:'-1', value:'Select Job Type' }}  
    />
    {
      errorshow()
    }
    </View>
  )

};
const styles = StyleSheet.create({
 
  TextInputs:{
   borderColor:'red',
   width:'89%',
   marginBottom:3,
  },
  errormsg:{
    color:'red',
    textAlign:'left',
    backgroundColor:'#E6E6E6'
  
   }
 });
export default DropdownComponent;