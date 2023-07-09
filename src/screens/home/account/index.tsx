import React, {useState, Fragment, useEffect, useRef} from 'react';
import { ScrollView, StyleSheet, View, Alert, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Colors, Sizes } from '../../../constant/app_config';
import HeaderNavHome from '../components/HeaderNavHome';
import ButtonSimple from './components/ButtonSimple';
import {connect} from 'react-redux';
import Profile from './Profile';
import Orders from './Orders';

const Accounts = ({navigation, isLogin}:any) => {
  const [isProfile, setProfile] = useState<boolean>(false);
  const [isOrders, setOrders] = useState<boolean>(false);
  const isBackKey = useRef<any>();

  useEffect(() => {
    if(isProfile){
      isBackKey.current = BackHandler.addEventListener('hardwareBackPress', () => {
        setProfile(false);
        setOrders(false);
        return true;
      })
      return () => {
        isBackKey.current.remove();
      }
    }
  }, [isProfile, isOrders]);

  return (
    <View style={styles.root}> 
      <SafeAreaView style={styles.safearea}>
        <HeaderNavHome
          headerTitle={isProfile? "Profile": isOrders? "Orders": "Account"}
          icons={
            isProfile || isOrders? 
            <MaterialIcons
              name='arrow-back-ios'
              size={Sizes.sm} 
              color={Colors.white}
            />:
            <Feather 
            name="user" 
            size={Sizes.sm} 
            color={Colors.white}
            />
          } 
          bellNotif={true}
          isIconClick={!isProfile && !isOrders}
          iconCliick={() => {
            if(isProfile){
              setProfile(false);
            }
            if(isOrders) {
              setOrders(false);
            }
          }}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            {!isProfile && !isOrders?
            <Fragment>
            <ButtonSimple
                icon={<Feather 
                  name="user" 
                  size={Sizes.md} 
                  color={Colors.scondary}
                  />
              }
                label="Profile"
                onPress={() => {
                  setProfile(true)
                }}
            />
            <ButtonSimple
                icon={<Octicons 
                  name="tag" 
                  size={Sizes.md} 
                  color={Colors.scondary}
                  />
              }
                label="Orders"
                onPress={() => {
                  setOrders(true)
                }}
            />
            <ButtonSimple
                icon={<Feather 
                  name="log-out" 
                  size={Sizes.md} 
                  color={Colors.scondary}
                />}
                label="Sign out"
                onPress={() => {
                  Alert.alert('Confirm Message', 'Do you want to sign out?', [
                    {text: 'No'},
                    {text: 'YES', onPress: () => {
                      isLogin();
                      navigation.navigate('login');
                    }}
                  ])
                }}
            />
            </Fragment>
            : 
              isProfile? 
              <Profile/>: 
              <Orders/>
            }
          </View>
        </ScrollView>
      </SafeAreaView> 
    </View>
  );
}

const mapToDispatch = (dispatch:any) => ({
  isLogin: () => dispatch({type: 'is_logout'})
})

export default connect(null, mapToDispatch)(Accounts)

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.primary, 
    flex: 1
  },
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1, 
    backgroundColor: Colors.white,
    paddingVertical: 8
  }
});