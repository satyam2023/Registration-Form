import React, { useRef, useState } from 'react'
import {
  Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';


  
const InputFields = () => {
  //const[mail,setmail]=useState();
  const mailDetails=useRef("");
  const firstname=useRef("");
  const Lastname=useRef("");
  const handleclick=()=>{
    let mailIndex=mailDetails.current.indexOf('@');
     let length=mailDetails.current.length;
     if(length <=0 || mailIndex==-1 || (length-mailIndex)<3 ){
        Alert.alert("Invalid E-Mail Id");
     }

     let FirstnameLength =firstname.current.length;
    for(let i=0;i<FirstnameLength;i++){
           if((65firstname.current[i].charCodeAt(0)<=90) &&(firstname.current[i]) ){
                        
           }
    }


  }
  return (
    < ScrollView style={styles.largeContainer}>
  <TextInput 
    placeholder='Full Name'
    style={styles.input}
    multiline={false}
    onChangeText={(text)=>{  firstname.current=text }}
  />
  <TextInput 
    placeholder='Enter Your Email Id....'
    style={styles.input}
    multiline={false}
    onChangeText={(text)=>{  mailDetails.current=text; }}
  />
  <TextInput 
    placeholder='Phone Number'
    style={styles.input}
    multiline={false}
   // onChangeText={(text)=>{  mailDetails.current=text; }
   keyboardType="numeric"
  />
  <TouchableOpacity style={styles.btncontainer} onPress={handleclick}>
    <Text style={styles.SubmitButton}>Submit</Text>
  </TouchableOpacity>

  </ScrollView>


  
  )
}
const styles=StyleSheet.create({
input:{
    borderRadius:10,
    margin:10,
    padding:8,
    fontSize:18,
    borderColor:'#00CCCC',
    borderWidth:2,


},
largeContainer:{
  margin:10,
  borderColor:'#00CCCC',
    borderWidth:2,
    borderRadius:5,
},
SubmitButton:{
   //color:
   textAlign:'center',
    borderRadius:20,
    padding:10,
    borderWidth:2,
    borderColor:'#00aaaa',
    margin:10,
    fontSize:20,
    backgroundColor:'#8cedff',
    textShadowColor:'#8c9cff',
    color:'#f25a16',
},
btncontainer:{
  justifyContent:'center',
  alignItems:'center',
 
}


})
export default InputFields