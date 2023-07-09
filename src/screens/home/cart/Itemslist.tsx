import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config' 
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';


const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve,time));

const Itemslist = (data: any) => {
    const discount = data.discount/100;
    const tagpricediscounted = data.tagprice * discount;
    const totalprice = data.tagprice - tagpricediscounted;
    
    const removeItem = async () => {  
        data.setLoading(true);
        await sleep(1000);
        data.setLoading(false);
        data.deleteItem(data.id);
    }
  return (
    <View style={styles.root}> 
        <Image 
            source={data.imgsrc}
            style={styles.imagestyle}
        />
        <View style={styles.detailsContainer}>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1}}>
                    <Text style={styles.productname}>{data.productname}</Text>    
                </View>
                <View style={{ flexDirection: "row", gap: 5}}>
                    <TouchableOpacity>
                        <AntDesign name="hearto" color={Colors.gray} size={Sizes.xsm}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeItem}>
                        <Feather name="trash" color={Colors.gray} size={Sizes.xsm}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ 
                flexGrow: 1,
                flexDirection: "row", 
            }}>
                <View style={{
                    flex: 1, 
                    justifyContent: "center",
                }}>
                    <Text style={{
                        fontFamily: FontStyle.primaryBold,
                        fontSize: FontSize.xsm,
                        color: Colors.primary
                    }}>
                        {'\u20B1'} {totalprice.toLocaleString()}
                    </Text>
                </View>
                {/* <ButtonPlusMinus/> */}
            </View>
        </View> 
    </View>
  );
}


const ButtonPlusMinus = () => {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center", 
        }}> 
            <View style={{
                flexDirection: "row",
                backgroundColor: Colors.graylighten,
                padding: 3,
                borderRadius: 10,
                overflow: 'hidden'
            }}> 
                <TouchableOpacity style={{
                    backgroundColor: Colors.white,
                    paddingHorizontal: 7,
                    borderBottomLeftRadius: 7,
                    borderTopLeftRadius: 7,
                    
                }}>
                    <Entypo name="minus" size={Sizes.xsm} color={Colors.gray}/> 
                </TouchableOpacity> 
                <View style={{
                    paddingHorizontal: 15
                }}>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.gray
                    }}>1</Text>
                </View> 
                <TouchableOpacity style={{
                    backgroundColor: Colors.white,
                    paddingHorizontal: 7,
                    borderBottomRightRadius: 7,
                    borderTopRightRadius: 7,
                }}>
                    <Entypo name="plus" size={Sizes.xsm} color={Colors.gray}/> 
                </TouchableOpacity> 
            </View>
        </View>
    )
}

export default connect(null, (dispatch:any) => ({
    deleteItem: (id:any) => dispatch({type: 'delete_item', data: id})
}))(Itemslist)

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row', 
        borderWidth: 1,
        borderColor: Colors.graylighten,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        gap: 10
    },
    imagestyle: {
        width: Sizes.xmd,
        height: Sizes.xmd,
        borderRadius: 5
    },
    detailsContainer: { 
        flex: 1,
        gap: 6
    },
    productname: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.xsm,
        color: Colors.tertiary
    }
})