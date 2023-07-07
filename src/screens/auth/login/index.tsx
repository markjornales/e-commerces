import React, { Fragment } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors, Sizes } from '../../../constant/app_config';
import BorderedButton from '../../components/BorderedButton';
import FlatButtons from '../../components/FlatButtons';
import InputFields from '../../components/InputFields';
import LabelButton from '../../components/LabelButton';
import SpinnerLoading from '../../components/SpinnerLoading';
import { styles } from './styles';

const HeadIcon = ():JSX.Element => (
    <Fragment>
        <Image 
            source={require('../../../../assets/icon.png')} 
            style={styles.imageStyle}
            resizeMode="contain"
        />
        <Text style={styles.textTitleStyle}>Welcome to Ecommerce</Text>
        <Text style={styles.textSubTitle}>Sign in to continue</Text>
    </Fragment>
);

const OrSparator = ():JSX.Element => (
    <View style={styles.orContainer}>
        <View style={styles.orLine}/>
        <View style={styles.orTextContainer}>
            <Text style={styles.orTextStyle}>OR</Text>
        </View>
        <View style={styles.orLine}/>
    </View>
)

const Login = ():JSX.Element => { 
    
  return (
    <SafeAreaView style={styles.root}>
        <SpinnerLoading isVisible={false}/>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
            <View style={styles.container}>
                <View style={styles.bannerContainer}>
                    <HeadIcon/>
                </View> 
                <View style={styles.formContainer}>
                    <InputFields 
                        icon={<FontAwesome name="envelope-o" size={Sizes.sm} color={Colors.gray}/>}
                        placeHolder="test@gmail.com" 
                    />
                    <InputFields 
                        icon={<Feather name="lock" size={Sizes.sm} color={Colors.gray}/>}
                        placeHolder="*********"
                        secureTextEntry={true}
                    />
                    <FlatButtons label="Sign in" />
                    <OrSparator/>
                    <View style={styles.smallGap}>
                        <BorderedButton
                            label="Login with Google"
                            imageSource={require('../../../images/google_g_icon.png')}
                        />
                        <BorderedButton
                            label="Login with facebook"
                            sizeLogo={{width: Sizes.sm, height: Sizes.xsm}}
                            imageSource={require('../../../images/fb_icon.png')}
                        />
                    </View>
                    <View style={styles.bottomContainer}>
                        <LabelButton label="Forgot Password?"/>
                        <View style={styles.groupText}>
                            <Text style={styles.donthaveStyle}>
                                Don't have an account? 
                            </Text>
                            <LabelButton label="Register"/>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default Login

 