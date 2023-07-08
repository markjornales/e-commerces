import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';

interface headerNavHomeProps {
    icons: JSX.Element;
    headerTitle: string;
    notif?: boolean;
    bellNotif?: boolean;
    bellClick?: () => void| undefined
}

const HeaderNavHome = (props: headerNavHomeProps) => {
    const {headerTitle, icons, notif, bellClick, bellNotif} = props;
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary}/>
      {icons}
      <Text style={styles.titleHeaderStyle}>{headerTitle}</Text>
      {bellNotif && <View style={styles.bellContainer}>
        <TouchableOpacity onPress={bellClick}>
          <View accessibilityRole="button">
            {notif && <View style={styles.smallDot}/>}
            <Fontisto name="bell" size={Sizes.sm} color={Colors.white}/>
          </View>
        </TouchableOpacity>
      </View>}
    </View>
  )
}

export default HeaderNavHome

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 15, 
        minHeight: 60,
        gap: 15
    },
    titleHeaderStyle: {
        fontFamily: FontStyle.primaryBold, 
        color: Colors.white, 
        fontSize: FontSize.md
    },
    smallDot: {
      backgroundColor: Colors.red, 
      width: 10, 
      height: 10, 
      borderRadius: 20, 
      position: 'absolute', 
      zIndex: 999, 
      right: 0
    },
    bellContainer: {
      flex: 1, 
      justifyContent: 'flex-end', 
      flexDirection: 'row'
    }
});