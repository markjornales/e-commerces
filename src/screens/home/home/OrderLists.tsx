import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';
const datalists = [
    {
        imgsrc: require('../../../images/picture_nike.jpg'),
        productname: 'Sneakers for men & female',
        stars: 5,
        tagprice: 293,
        discount: 25,
    },
    {
      imgsrc: require('../../../images/nike_white_shoe.jpg'),
      productname: "Nike Men's Blazer Low '77 Premium Shoes - White",
      stars: 5,
      tagprice: 3000,
      discount: 20
    },
    {
        imgsrc: require('../../../images/airmax_white_shoe_.jpg'),
        productname: "NEW ARRIVAL!! air force 1 for men AND WOMEN 36-45",
        stars: 3,
        tagprice: 300,
        discount: 0
    },
    {
        imgsrc: require('../../../images/basketball_nike.jpg'),
        productname: "Nike Men's Air Deldon Basketball Shoes - Summit White",
        tagprice: 4000,
        stars: 4,
        discount: 50,
    },
    {
        imgsrc: require('../../../images/airmax_black_green.jpg'),
        productname: "Nike Men's Air Max 90 Shoes - Black",
        tagprice: 5300,
        stars: 5,
        discount: 50,
    },
    {
        imgsrc: require('../../../images/air_force_2.jpg'),
        productname: "Air Force 2 Running Sneakers shoes For Men And women",
        tagprice: 600,
        stars: 5,
        discount: 50,
    }
]

const {width} = Dimensions.get('screen');

interface OrderListsProps {
    onPress?: (items: any) => void| undefined
}

const OrderLists = (props: OrderListsProps) => {
    const {onPress} = props;
  return (
    <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={datalists}
        renderItem={(props) => <RenderItems onPress={onPress} {...props}/>}
    />
  )
}


const RenderItems = ({item, onPress}:any) => {
    const discount = item.discount/100;
    const tagpricediscounted = item.tagprice * discount;
    const totalprice = item.tagprice - tagpricediscounted;

    return ( 
        <TouchableOpacity style={styles.root} onPress={() => onPress(item)}>
            <View style={styles.imgContainer}>
                <Image 
                    source={item.imgsrc}
                    style={styles.imageStyle}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.contentContainer}>
                <Text numberOfLines={3}
                    style={styles.productName}>{item.productname}</Text>
                <View style={styles.spaces}>
                    {Array.from(new Array(5)).map((_, i) => 
                        <FontAwesome 
                            key={i}
                            name="star" 
                            color={i < item.stars? Colors.yellow : Colors.graylighten}
                            size={Sizes.xxxsm}
                    />)}
                </View>
                <Text style={styles.tagprice}>{'\u20B1'} {totalprice.toLocaleString()}</Text>
                {item.discount > 0 &&
                    <View style={styles.textAlignment}>
                        <Text style={styles.discountedlabel}>{'\u20B1'} {item.tagprice.toLocaleString()} </Text>
                        <Text style={styles.discount}> {item.discount}% Off</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>  
    );
}


export default OrderLists

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: Colors.graylighten,
        width: width*.4,
        minHeight: width*.56,
        margin: 10,
        borderRadius: 8
    },
    imgContainer: { 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    imageStyle: {
        width: Sizes.xxlg,
        height: Sizes.xxlg,
        borderRadius: 5
    },
    contentContainer: {
        paddingHorizontal: 15,
        gap: 4,
        paddingBottom: 10
    },
    productName: {
        fontFamily: FontStyle.primaryBold,
        color: Colors.tertiary,
        fontSize: FontSize.sm
    },
    spaces: {
        flexDirection: 'row',
        gap: 2
    },
    tagprice: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.sm,
        color: Colors.primary
    },
    textAlignment: {
        flexDirection: 'row'
    },
    discountedlabel: {
        fontFamily: FontStyle.primary,
        fontSize: FontSize.xsm,
        color: Colors.gray,
        textDecorationLine: 'line-through'
    },
    discount: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.sm,
        color: Colors.red
    }
})