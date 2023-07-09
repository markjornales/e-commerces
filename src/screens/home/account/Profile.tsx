import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Colors, Sizes } from '../../../constant/app_config';
import { useValidation } from '../../../hooks/useValidatation';
import FlatButtons from '../../components/FlatButtons';
import InputFields from '../../components/InputFields';
import SpinnerLoading from '../../components/SpinnerLoading';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve,time));

const Profile = ({register, registered}:any) => {

    const isValidation = useValidation({
        fullname: registered.fullname,
        email: registered.email,
        password: registered.password
    });
    const [isLoading, setLoading] = useState<boolean>(false);

    const validate = async () => {
        setLoading(true);
        await sleep(1000);
        setLoading(false);  
        if(isValidation.validate()) {
          return;
        }
        register({
            fullname: isValidation.isFullName,
            email: isValidation.isEmail,
            password: isValidation.isPassword
        });  
        Alert.alert('Message Alert', 'Successful Updated', [{
            text: "OK",
        }]);
    }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1,}}>
        <SpinnerLoading isVisible={isLoading}/>
        <View style={styles.bodyContainer}>
            <InputFields 
                icon={<Feather name="user" color={Colors.gray} size={Sizes.sm}/>}
                placeHolder="Full Name"
                value={isValidation.isFullName}
                onChangeText={isValidation.setFullName}
                error={isValidation.isErrorFullname.error}
                errorMessage={isValidation.isErrorFullname.message}
            />
            <InputFields 
                icon={<FontAwesome name="envelope-o" color={Colors.gray} size={Sizes.sm}/>}
                placeHolder="Your Email"
                value={isValidation.isEmail}
                onChangeText={isValidation.setEmail}
                error={isValidation.isErrorEmail.error}
                errorMessage={isValidation.isErrorEmail.message}
            />
            <InputFields 
                icon={<Feather name="lock" size={Sizes.sm} color={Colors.gray}/>}
                placeHolder="Password"
                secureTextEntry={true}
                value={isValidation.isPassword}
                onChangeText={isValidation.setPassword} 
                error={isValidation.isErrorPassword.error}
                errorMessage={isValidation.isErrorPassword.message}
            />
            <InputFields 
                icon={<Feather name="lock" size={Sizes.sm} color={Colors.gray}/>}
                placeHolder="Password Again"
                secureTextEntry={true}
                value={isValidation.isPasswordConf}
                onChangeText={isValidation.setPasswordConf}
                error={isValidation.isErrorPasswordConfi.error}
                errorMessage={isValidation.isErrorPasswordConfi.message}
            />
            <View style={styles.buttonSpace}>
                <FlatButtons 
                    onPress={validate}
                label="Update Information"/>
            </View>
        </View>
    </ScrollView>
  )
}
const mapToStates = (state: any) => ({
    registered: state.registered,
}); 

const mapTodispatch = (dispatch: any) => ({
    register: (props: any) => dispatch({
        type: "registered", 
        fullname: props.fullname,
        email: props.email,
        password: props.password
    })
});


export default connect(mapToStates, mapTodispatch)(Profile)

const styles = StyleSheet.create({
    bodyContainer: {
        gap: 10, 
        flexGrow: 1, 
        paddingHorizontal: 20, 
        marginVertical: 30
    },
    buttonSpace: { 
        flex: 1, 
        justifyContent: 'flex-end',
        marginVertical: 15
    }
})