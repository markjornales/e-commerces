import Lottie from 'lottie-react-native';
import React, { Fragment, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';
import FlatButtons from '../../components/FlatButtons';
import HeaderNavHome from '../components/HeaderNavHome';
import Checkout from './Checkout';
import Itemslist from './Itemslist';
import SpinnerLoading from '../../components/SpinnerLoading';

const Carts = ({cartlist}:any) => {
  const [isLoading, setLoading] = useState<boolean>(false);
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
              <Checkout data={cartlist}/>
              <View style={{
                marginVertical: 15
              }}>
                <FlatButtons
                  label="Check Out"
                  
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
  cartlist: state.carts.filter((data:any) => data.user_id == state.login.id) 
});

export default connect(mapToStates)(Carts)

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