import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, FontSize, FontStyle, Sizes } from '../../../../constant/app_config';

interface buttonsimplprop {
    onPress?: any;
    label: string;
    icon: JSX.Element
}

const ButtonSimple = (props: buttonsimplprop) => {
    const {label, onPress, icon} = props;
  return (
    <RectButton onPress={onPress}>
    <View accessibilityRole="button" style={styles.container}>
      {icon}
      <Text style={styles.textButton}>
          {label}
      </Text>
    </View>
  </RectButton>
  )
}

export default ButtonSimple

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center',  
        padding: 10, 
        gap: 20
      },
    textButton: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.md,
        color: Colors.tertiary
      }
});