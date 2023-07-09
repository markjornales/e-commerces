import Lottie from 'lottie-react-native';
import React, { Fragment, useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';
import FlatButtons from '../../components/FlatButtons';
import HeaderNavHome from '../components/HeaderNavHome';
import Checkout from './Checkout';
import Itemslist from './Itemslist';
import SpinnerLoading from '../../components/SpinnerLoading';

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve,time));

const Carts = ({cartlist, userid, checkoutNow, removeItemAll}:any) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const totalCheckouts = useRef<any>('');
  const handleCheckoutbutton = () => {
      Alert.alert('Message Confirmation', 'Are you sure, do want to checkout?', [
        {text: "No"},
        {text: "YES", onPress: async () => { 
            setLoading(true); 
            await sleep(1000);
            setLoading(false);
            totalCheckouts.current.userid = userid;
            checkoutNow(totalCheckouts.current);
            removeItemAll();
        }}
      ]);
  }

  return (
    <View style={styles.root}> 
    <SpinnerLoading isVisible={isLoading}/>
      <SafeAreaView style={styles.safearea}>
        <HeaderNavHome
          headerTitle="Your Cart"
          icons={<AntDesign 
            name="shoppingcart" 
            size={Sizes.sm} 
            color={Colors.white}
            />
          } 
          bellNotif={true}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={[styles.container, {justifyContent: cartlist.length > 0? 'flex-start': 'flex-end'}]}>
            {cartlist.length > 0? 
            <Fragment>
              {cartlist.map((data:any, index:number) => 
                <Itemslist key={index} {...data} {...{setLoading}}/>
              )}
              <Checkout ref={totalCheckouts} data={cartlist}/>
              <View style={{
                marginVertical: 15
              }}>
                <FlatButtons
                  label="Check Out"
                  onPress={handleCheckoutbutton}
                />
              </View>
            </Fragment>
            :<Fragment>
                <Lottie
                  source={require('../../../json/629-empty-box.json')}
                  autoPlay
                  loop={true}
                />
                <View style={{ 
                    flex: 0.35,
                    paddingVertical: 10,
                    alignItems: 'center'
                  }}>
                  <Text 
                    style={{
                      fontFamily: FontStyle.primaryBold,
                      fontSize: FontSize.md,
                      color: Colors.gray
                    }}
                  >Empty Cart</Text>
                </View>
            </Fragment>}
          </View>
        </ScrollView>
      </SafeAreaView> 
    </View>
  )
}

const mapToStates = (state:any) => ({
  cartlist: state.carts.filter((data:any) => data.user_id == state.login.id),
  userid: state.login.id, 
});

const mapToDispatch = (dispatch:any) => ({
  checkoutNow: (props: any) => dispatch({type: "checkout_now", data: props}),
  removeItemAll: () => dispatch({type: "remove_all_item"})
})

export default connect(mapToStates, mapToDispatch)(Carts)

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
    padding: 10
  }
});