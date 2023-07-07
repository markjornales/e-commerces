import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, FontSize, FontStyle, Sizes } from '../../constant/app_config';

interface inputFieldsProps {
    value?: string;
    onChangeText?: (text: string) => void | undefined;
    error?: boolean;
    errorMessage?: string;
    secureTextEntry?:boolean
    placeHolder?: string;
    icon?: JSX.Element
}

const InputFields = (props: inputFieldsProps):JSX.Element => {
    const {error, errorMessage, onChangeText, value, secureTextEntry, placeHolder, icon} = props;
    const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
    return (
        <View style={styles.root}>
            <View style={[styles.container, {borderColor: error? Colors.red : Colors.gray}]}>
                {icon}
                <View style={styles.textContainer}>
                    <TextInput      
                        secureTextEntry={secureTextEntry && !isEyeOpen}
                        selectionColor={Colors.primary}
                        style={styles.textStyle}
                        placeholder={placeHolder}
                        onChangeText={onChangeText}
                        value={value}
                    />
                </View>
                {secureTextEntry && <TouchableOpacity onPress={()=> setEyeOpen(init=> !init)}>
                    <Ionicons name={isEyeOpen? "eye" : "eye-off"} size={Sizes.sm} color={Colors.gray}/>
                </TouchableOpacity>
                }
            </View>
            {error && (<Text style={styles.errorMsgStyle}>{errorMessage}</Text>)}
        </View>
    );
}

export default InputFields

const styles = StyleSheet.create({
    root: {},
    container: {
        gap: 16, 
        paddingHorizontal: 18,
        borderRadius: 5,
        flexDirection:"row", 
        alignItems:"center", 
        borderWidth: 1,  
    },
    textContainer: {
        flex: 1
    },
    textStyle: {
        flex: 1, 
        paddingVertical: 14, 
        fontFamily: FontStyle.primary,
        fontSize: FontSize.sm,
    },
    errorMsgStyle: {
        fontFamily: FontStyle.primary, 
        fontSize: FontSize.xsm, 
        color: Colors.red
    }
});