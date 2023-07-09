import React, {useState} from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config'
import FlatButtons from '../../components/FlatButtons'
import HeaderNavHome from '../components/HeaderNavHome'
import {connect} from 'react-redux';
import SpinnerLoading from '../../components/SpinnerLoading'
const {width} = Dimensions.get('screen');


const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve,time));

const Products = (props:any) => {
    const {route, navigation, addToCart, id} = props;  
    const [isLoading, setLoading] = useState<boolean>(false);
    const discount = route.params.discount/100;
    const tagpricediscounted = route.params.tagprice * discount;
    const totalprice = route.params.tagprice - tagpricediscounted;
    const handlePressButton = async () => {
        setLoading(true);
        await sleep(2000);
        setLoading(false);
        route.params.user_id = id;
        addToCart(route.params);
        Alert.alert('Message Alert', 'Successful Add to Cart');
    }

  return (
    <View style={styles.root}> 
        <SpinnerLoading isVisible={isLoading}/>
        <SafeAreaView style={styles.safearea}>
            <HeaderNavHome
                headerTitle={route.params.productname}
                icons={<MaterialIcons name='arrow-back-ios' size={Sizes.sm}  color={Colors.white}/>}
                isIconClick={false}
                iconCliick={()=> navigation.goBack()}
            />
            <View style={styles.container}>
                <View style={{}}>
                    <Image 
                        source={route.params.imgsrc}
                        style={styles.imgBanner}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.brandname}>{route.params.productname}</Text>
                    </View>
                    <View style={{paddingHorizontal: 10}}>
                        <TouchableOpacity>
                            <AntDesign name="hearto" color={Colors.gray} size={Sizes.sm}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{paddingHorizontal: 15, gap: 10}}>
                    <View style={{flexDirection: 'row', gap: 4}}>
                        {Array.from(new Array(5)).map((_, i) => 
                            <FontAwesome 
                                key={i}
                                name="star" 
                                color={i < route.params.stars? Colors.yellow : Colors.graylighten}
                                size={Sizes.xxxsm}
                        />)}
                    </View>
                    <Text style={styles.priceContainer}>{'\u20B1'} {totalprice.toLocaleString()}</Text>
                    {route.params.discount > 0 &&
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.tagdis}>{'\u20B1'} {route.params.tagprice.toLocaleString()} </Text>
                            <Text style={styles.discount}> {route.params.discount}% Off</Text>
                        </View>
                    }
                    <Text style={styles.specsLabel}>Specification</Text>
                    <Text style={styles.specsDesc}>
                        N/A
                    </Text>
                </View>
                <View style={{
                    flexGrow: 1, 
                    paddingHorizontal: 15, 
                    justifyContent: 'flex-end'
                }}>
                    <FlatButtons
                        enabled={!isLoading}
                        label="Add to Cart"
                        onPress={handlePressButton}
                    />
                </View>
            </View>
        </SafeAreaView>
    </View>
  )
}

const mapToDispatch = (dispatch:any) => ({
    addToCart: (props:any) => dispatch({type: "add_to_cart", data: props}) 
})
export default connect((state:any) => ({
    id: state.login.id
}), mapToDispatch)(Products)

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary, 
        flex: 1,
    },
    safearea: {
        flex: 1, 
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 5
    },
    imgBanner: {
        width: Sizes.fwidth,
        height: width*.65
    },
    titleContainer:{
        flexDirection: 'row', 
        padding: 15, 
        alignItems: 'center'
    },
    brandname: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.md,
        color: Colors.tertiary
    },
    priceContainer: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.md,
        color: Colors.primary
    },
    tagdis: {
        fontFamily: FontStyle.primary,
        fontSize: FontSize.xsm,
        color: Colors.gray,
        textDecorationLine: 'line-through'
    },
    discount: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.sm,
        color: Colors.red
    },
    specsLabel:{
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.sm,
        color: Colors.tertiary
    },
    specsDesc: {
        fontSize: FontSize.sm,
        fontFamily: FontStyle.primary,
        color: Colors.tertiary
    }
})