import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,TextInput,
    useColorScheme,
    View,
  } from 'react-native';



const FieldComponenet = ({}) => {
  return (
  <TextInput 
    placeholder='Enter Your First Name'
    style={styles.input}
    multiline={false}
  />

  
  )
}
const styles=StyleSheet.create({
input:{
    borderRadius:20,
    margin:10,
    padding:8,


}


})
export default FieldComponenet;