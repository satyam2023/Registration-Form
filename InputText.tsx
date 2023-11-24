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
        
    }
});
export default InputText;