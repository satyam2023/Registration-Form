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
import InputText from './InputText';
import DropdownComponent from './DropdownComponent';

function App(): JSX.Element {
  const [datavalid, setValidData] = useState({
    validname: true,
    validphone: true,
    validpassword: true,
    validemail: true,
  });

  const [submitvar, setSubmitVar] = useState<boolean>(false);

  const details = {
    fullname: useRef(""),
    email: useRef(""),
    phoneNumber: useRef(""),
    jobType: useRef(""),
    password: useRef(""),
    confirmpassword: useRef(""),
  };

  function errorVisibleName() {
    if (!datavalid.validname) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid name</Text>
        </View>
      );
    }
  }

  function errorVisibleEmail() {
    if (!datavalid.validemail) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid email</Text>
        </View>
      );
    }
  }

  function errorVisiblePhone() {
    if (!datavalid.validphone) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid Phone</Text>
        </View>
      );
    }
  }

  function errorVisiblePassword() {
    if (!datavalid.validpassword) {
      return (
        <View style={styles.outer}>
          <Text style={styles.errormsg}>!!! Invalid Pass</Text>
        </View>
      );
    }
  }

  function handlePassword() {
    console.log("password length:", details.password.current.length);
    if (details.password.current.length <= 0) {
      setValidData((prevData) => ({
        ...prevData,
        validpassword: false,
      }));
    } else if (details.password.current !== details.confirmpassword.current) {
      setValidData((prevData) => ({
        ...prevData,
        validpassword: false,
      }));
    } else {
      setValidData((prevData) => ({
        ...prevData,
        validpassword: true,
      }));
    }
  }

  function handleEmail() {
    let mailIndex = details.email.current.indexOf('@');
    let length = details.email.current.length;
    if (length <= 0 || mailIndex === -1 || length - mailIndex < 3) {
      setValidData((prevData) => ({
        ...prevData,
        validemail: false,
      }));
    } else {
      setValidData((prevData) => ({
        ...prevData,
        validemail: true,
      }));
    }
  }

  function handleName() {
    let fullNameLength = details.fullname.current.length;
    if (fullNameLength === 0) {
      setValidData((prevData) => ({
        ...prevData,
        validname: false,
      }));
    } else {
      let valid = true;
      for (let i = 0; i < fullNameLength; i++) {
        if (details.fullname.current[i] > '0' && details.fullname.current[i] <= '9') {
          valid = false;
          break;
        }
      }
      setValidData((prevData) => ({
        ...prevData,
        validname: valid,
      }));
    }
  }

  function handlePhone() {
    let phoneNumberLength = details.phoneNumber.current.length;
    if (phoneNumberLength <= 0 || phoneNumberLength > 10) {
      setValidData((prevData) => ({
        ...prevData,
        validphone: false,
      }));
    } else if (phoneNumberLength === 10) {
      setValidData((prevData) => ({
        ...prevData,
        validphone: true,
      }));
    }

    for (let i = 0; i < phoneNumberLength; i++) {
      if (details.phoneNumber.current[i] > '0' && details.phoneNumber.current[i] <= '9') {
        setValidData((prevData) => ({
          ...prevData,
          validphone: true,
        }));
      } else {
        setValidData((prevData) => ({
          ...prevData,
          validphone: false,
        }));
        break;
      }
    }
  }

  function handleSubmit() {
    setSubmitVar(true);
    handlePassword();
    handleEmail();
    handleName();
    handlePhone();
  }

  return (
    <SafeAreaView style={styles.container}>
      <InputText
        placeholder="Full name"
        ChangeText={(text: string) => {
          details.fullname.current = text;
        }}
        keyboardType="default"
        secureText={false}
      />
      {errorVisibleName()}

      <InputText
        placeholder="Email Address"
        ChangeText={(text: string) => {
          details.email.current = text;
        }}
        keyboardType="email-address"
        secureText={false}
      />
      {errorVisibleEmail()}

      <InputText
        placeholder="Phone Number"
        ChangeText={(text: string) => {
          details.phoneNumber.current = text;
        }}
        keyboardType="numeric"
        secureText={false}
      />
      {errorVisiblePhone()}

      
      <DropdownComponent submitted={submitvar}></DropdownComponent>
      <InputText
        placeholder="Create Password"
        ChangeText={(text: string) => {
          details.password.current = text;
        }}
        keyboardType="visible-password"
        secureText={true}
      />
      {errorVisiblePassword()}

      <InputText
        placeholder="Repeat Password"
        ChangeText={(text: string) => {
          details.confirmpassword.current = text;
        }}
        keyboardType="visible-password"
        secureText={true}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.accountBtn}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    height: '100%',
  },
  accountBtn: {
    marginTop: 20,
    fontSize: 20,
    backgroundColor: '#0096FF',
    color: '#FFFFFF',
    padding: 8,
    borderRadius: 5,
    paddingHorizontal: 72,
  },
  TextInputs: {
    borderRadius: 5,
    borderColor: '#91A3B0',
    borderWidth: 2,
    width: '70%',
    margin: 15,
    backgroundColor: '#FFFFFF',
  },
  errormsg: {
    color: 'red',
    marginRight: 170,
  },
  outer: {
    //  marginRight:170,
  },
});

export default App;
