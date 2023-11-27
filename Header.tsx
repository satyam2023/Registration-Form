import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icone from 'react-native-vector-icons/MaterialIcons' ;
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
function Header(): JSX.Element{
    
    return(
        <View style={Styles.HeaderContainer}>
         <View style={Styles.firstCircle}> 
             <Text style={{textAlign:'center', fontSize:30,}} >1</Text>
         </View> 
        
        <View style={Styles.firstline}>
          <Text></Text>
        </View>
         
         
         <View style={Styles.SecondCircle}> 
             <Text style={{textAlign:'center', fontSize:30,}}>2</Text>
         </View> 

         <View style={Styles.firstline}>
          <Text></Text>
        </View>

         <View style={Styles.thirdCircle}> 
             <Text style={{textAlign:'center', fontSize:30,}}>3</Text>
         </View> 
     
        </View>
    );
}

const Styles= StyleSheet.create({
    HeaderContainer:{
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        Height:100,
    },
    firstCircle:{
          marginLeft:40,
          marginTop:10,
          marginRight:0,
          marginBottom:10,
          height:50,
          width:50,
          backgroundColor:'#E6E6E6',
          borderRadius:50,
          color:'black',
        
          

    },
    SecondCircle:{
        marginLeft:0,
        marginTop:10,
        marginBottom:10,
        height:50,
        width:50,
        backgroundColor:'#E6E6E6',
        borderRadius:50,
    },
    thirdCircle:{
        marginLeft:0,
        marginTop:10,
        marginBottom:10,
        height:50,
        width:50,
        backgroundColor:'#E6E6E6',
        borderRadius:50,
    },
    firstline:{
        backgroundColor:'#E6E6E6', 
        height:5,
        width:70,
        marginTop:30,
    }

});

export default Header;