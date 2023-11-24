import React, { FC, useRef } from "react";
import { TextInput, StyleSheet,Keyboard } from "react-native";

interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType:any,
    secureText:boolean,
    
    // value:any,
}



const InputText: FC<InputProps> = (props): JSX.Element => {
    // console.log(props.ChangeText);
    console.log(props.placeholder,":",props.secureText);
    return (
        <TextInput
            placeholder={props.placeholder}
            onChangeText={
                (text: string) => {
                    props.ChangeText(text)
                }


            }
            style={styles.TextInputs}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureText}
           // onPressOut={Keyboard.dismiss}
           
        //value={props.value}
        />
    );
};
const styles = StyleSheet.create({
    TextInputs: {
        borderRadius: 5,
        borderColor: '#91A3B0',
        borderWidth: 2,
        width: '70%',
        margin: 15,
        backgroundColor: '#FFFFFF',
    }
});
export default InputText;