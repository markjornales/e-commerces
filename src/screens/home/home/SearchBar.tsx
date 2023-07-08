import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors, Sizes } from '../../../constant/app_config';
import InputFields from '../../components/InputFields';

const SearchBar = () => {
  return (
    <View style={styles.root}>
        <View style={{flex: 1}}>
        <InputFields
            icon={<Entypo 
                name="magnifying-glass" 
                size={Sizes.sm}
                color={Colors.scondary}
            />}
            editable={false}
            placeHolder="Search Product"
        />
        </View>
        <View style={styles.spacing}/>
        <View style={styles.containerIcon}>
            <TouchableOpacity>
                <AntDesign name="hearto" color={Colors.gray} size={Sizes.sm}/>
            </TouchableOpacity>
        </View>
        <View style={styles.containerIcon}>
            <TouchableOpacity>
                <View style={styles.smallDot}/>
                <Fontisto name="bell" size={Sizes.sm} color={Colors.gray}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export default SearchBar

const styles = StyleSheet.create({
    root: {
        padding: 10, 
        flexDirection: 'row'
    },
    spacing: {
        marginHorizontal: 5
    },
    containerIcon: {
        justifyContent: 'center', marginHorizontal: 5
    },
    smallDot: {
        backgroundColor: Colors.red, 
        width: 10, 
        height: 10, 
        borderRadius: 20, 
        position: 'absolute', 
        zIndex: 999, 
        right: 0
      }
})