import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';
import { useValidation } from '../../../hooks/useValidatation';
import FlatButtons from '../../components/FlatButtons';
import InputFields from '../../components/InputFields';
import LabelButton from '../../components/LabelButton';
import SpinnerLoading from '../../components/SpinnerLoading';
import { HeadIcon } from '../login';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve,time));

const Regisration = (props: any):JSX.Element => {
    const {navigation, register} = props; 
    const [isLoading, setLoading] = useState<boolean>(false);
    const isValidation = useValidation();

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
        isValidation.clearInput();
        Alert.alert('Message Alert', 'Successful registered. Please login your account', [{
            text: "CLOSE",
        },{text: "SIGN IN", onPress: () => navigation.goBack()}])
    }

  return (
      <View style={styles.root}>
        <SpinnerLoading isVisible={isLoading}/>
          <SafeAreaView style={styles.safearea}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                <View style={styles.headerContainer}>
                    <HeadIcon 
                        headTitle="Let's Get Started"
                        subTitle="Create an new account"
                    />
                </View>
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
                        <FlatButtons onPress={validate} label="Sign up"/>
                    </View>
                    <View style={styles.containerBottom}>
                        <Text style={styles.textBottom}>Have an Account?</Text>
                        <LabelButton label="Sign in" onPress={() =>  navigation.goBack()}/>
                    </View>
                </View>
            </ScrollView>
          </SafeAreaView>
      </View>
  );
}

const mapTodispatch = (dispatch: any) => ({
    register: (props: any) => dispatch({  type: "registered", data: props})
});

export default connect(null, mapTodispatch)(Regisration)

const styles = StyleSheet.create({
    root: {
        flex: 1, 
        backgroundColor: Colors.white
    },
    safearea: {
        flex: 1
    },
    scrollStyle: {
        flexGrow: 1,
        paddingBottom: 20
    },
    headerContainer: {
        flex: 0.6, 
        justifyContent: "center", 
        alignItems: "center", 
        gap: 12,
        marginVertical: 20
    },
    bodyContainer: {
        gap: 10, 
        flexGrow: 1, 
        paddingHorizontal: 20
    },
    buttonSpace: {
        marginVertical: 15
    },
    containerBottom: {
        flexDirection: "row", 
        justifyContent: "center", 
        gap: 6
    },
    textBottom: {
        fontFamily: FontStyle.primary, 
        color: Colors.gray, 
        fontSize: FontSize.sm
    }
});