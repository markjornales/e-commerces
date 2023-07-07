import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {BaseButton} from 'react-native-gesture-handler';
import { Colors, FontSize, FontStyle } from '../../constant/app_config';

interface labelButtonProps {
    label: string;
    onPress?: () => void | undefined
}

const LabelButton = (props: labelButtonProps):JSX.Element => {
    const {label, onPress} = props;
  return (
    <BaseButton onPress={onPress}>
      <Text style={styles.textStyle}>
            {label}
      </Text>
    </BaseButton>
  )
}

export default LabelButton

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: FontStyle.primaryBold,
        color: Colors.primary,   
        fontSize: FontSize.sm
    }
})