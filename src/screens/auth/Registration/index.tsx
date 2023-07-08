import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';
import FlatButtons from '../../components/FlatButtons';
import InputFields from '../../components/InputFields';
import LabelButton from '../../components/LabelButton';
import { HeadIcon } from '../login';

const Regisration = (props: any):JSX.Element => {
    const {navigation} = props; 
  return (
      <View style={styles.root}>
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
                    />
                    <InputFields 
                        icon={<FontAwesome name="envelope-o" color={Colors.gray} size={Sizes.sm}/>}
                        placeHolder="Your Email"
                    />
                    <InputFields 
                        icon={<Feather name="lock" size={Sizes.sm} color={Colors.gray}/>}
                        placeHolder="Password"
                        secureTextEntry={true}
                    />
                    <InputFields 
                        icon={<Feather name="lock" size={Sizes.sm} color={Colors.gray}/>}
                        placeHolder="Password Again"
                        secureTextEntry={true}
                    />
                    <View style={styles.buttonSpace}>
                        <FlatButtons 
                            label="Sign up"
                        />
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

export default Regisration

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
        flexGrow: 1, 
        gap: 10, 
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