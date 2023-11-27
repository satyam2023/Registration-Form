import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
 
function Footer(): JSX.Element{
    
    return(
        <View 
        style={Styles.FooterContainer}>
       <TouchableOpacity style={Styles.btn}>
        <Text>Edit</Text>
       </TouchableOpacity>
       <TouchableOpacity style={Styles.btn}>
        <Text>Proceed</Text>
       </TouchableOpacity>
            
        </View>
    );
}

const Styles= StyleSheet.create({
    FooterContainer:{
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'space-evenly',
        Height:100,
        

    },
    btn:{
        margin:10,
       padding:10,
      borderWidth:2,
      borderColor:'#0000FF',
      borderRadius:15,
    }
});

export default Footer;