import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import { Colors, FontSize, FontStyle } from '../../constant/app_config';

interface flatbuttonProps {
    label: string;
    onPress?: any
    enabled?: boolean;
}

const FlatButtons = (props: flatbuttonProps):JSX.Element => {
    const {label, onPress, enabled = true} = props;
  return ( 
    <RectButton enabled={enabled} onPress={onPress} style={[styles.container, {opacity: enabled ? 1: 0.5}]} >
        <View accessibilityRole="button" style={styles.textContainer}>
            <Text style={styles.textStyle}>{label}</Text>
        </View>
    </RectButton> 
  )
}

export default FlatButtons

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary, 
        paddingVertical: 20, 
        borderRadius: 6
    },
    textContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    textStyle: {
        fontFamily: FontStyle.primaryBold, 
        color: Colors.white, 
        fontSize: FontSize.md
    }
})