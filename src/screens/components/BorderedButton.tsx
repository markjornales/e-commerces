import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors, FontSize, FontStyle, Sizes } from '../../constant/app_config';

interface borderedButtonProps {
    imageSource?: any;
    label: string;
    onPress?: () => void;
    sizeLogo?: StyleProp<ImageStyle>
}

const BorderedButton = (props: borderedButtonProps):JSX.Element => {
    const {label, imageSource, onPress, sizeLogo} = props;
  return (
    <View style={styles.root}> 
        <RectButton onPress={onPress}>
            <View
                accessibilityRole="button" 
                style={styles.container}>
                <View style={styles.spacing}>
                    <Image resizeMode="contain" style={[styles.logoSize, sizeLogo]} 
                        source={imageSource}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>
                        {label}
                    </Text>
                </View>
                <View style={styles.spacing}/>
            </View>
        </RectButton>
    </View>
  );
}

export default BorderedButton

const styles = StyleSheet.create({
    root: {
        borderWidth: 1, 
        borderColor: Colors.gray,
        borderRadius: 6,
        overflow: 'hidden'
    },
    container: {
        flexDirection: 'row', 
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 6
    },
    logoSize: {
        width: Sizes.md, 
        height: Sizes.md
    },
    textContainer: {
        flex: 1, 
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: FontStyle.primaryBold, 
        color: Colors.gray,
        fontSize: FontSize.sm
    },
    spacing: {width: Sizes.md, height: Sizes.md, justifyContent: 'center'}
});