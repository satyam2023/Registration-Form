import React, { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomerDetails from './CustomerDetails';
import Footer from './Footer';
import Header from './Header';







function App(): JSX.Element {
 

  

  return (
   <ScrollView style={{backgroundColor:'#E6E6E6'}}>
   <Header></Header>
    <CustomerDetails/>
    <Footer></Footer>

   </ScrollView>

    
    
  );
}



export default App;
