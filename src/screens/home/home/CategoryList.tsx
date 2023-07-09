import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';

const datalists = [
    {
        imageicon: require('../../../images/bag.png'),
        labelicon: 'Woman Bag'
    },
    {
        imageicon: require('../../../images/dress_female_gift_icon.png'),
        labelicon: 'Dress'
    },
    {
        imageicon: require('../../../images/pants_icon.png'),
        labelicon: 'Pants'
    },
    {
        imageicon: require('../../../images/shoes_nike_icon.png'),
        labelicon: 'Shoes'
    },
    {
        imageicon: require('../../../images/t_shirt_icon.png'),
        labelicon: 'Shirt'
    },
];

const CategoryList = ():JSX.Element => {
  return (
    <FlatList 
        showsHorizontalScrollIndicator={false}
        renderItem={RenderItems}
        horizontal={true}
        data={datalists}
  />
  );
}

const RenderItems = ({item}:any) => { 
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.circleImage}>
                    <Image source={item.imageicon}
                        style={styles.imageStyle}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.labelImage}>
                    {item.labelicon}
                </Text>
            </View>
        </View>
    )
}

export default CategoryList

const styles = StyleSheet.create({
    root: {
        padding: 5
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
        minHeight: Sizes.xlg,
        minWidth: Sizes.xlg,
        gap: 5
    },
    circleImage: {
        borderWidth: 1,
        height: Sizes.xmd,
        width: Sizes.xmd,
        borderRadius: Sizes.xmd/2,
        borderColor: Colors.graylighten,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: Sizes.sm, 
        width: Sizes.sm,
        tintColor: Colors.scondary
    },
    labelImage: {
        fontFamily: FontStyle.primary,
        fontSize: FontSize.sm,
        color: Colors.gray
    }
})