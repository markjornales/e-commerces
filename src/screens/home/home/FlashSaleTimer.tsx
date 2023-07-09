import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config'; 

const {width} = Dimensions.get('screen');

const FlashSaleTimer = () => {
    const hours = useRef<number>(1);
    const minutes = useRef<number>(30);
    const seconds = useRef<number>(59);
    const [isHours, setHours] = useState<string|number>('00');
    const [isMinutes, setMinutes] = useState<string|number>('00');
    const [isSeconds, setSeconds] = useState<string|number>('00'); 

    useEffect(() => {
        const output = setTimeout(() => {
            const hrs = hours.current < 10 ? `0${hours.current}`:hours.current;
            const m = minutes.current < 10 ? `0${minutes.current}`: minutes.current;
            const s = seconds.current < 10 ? `0${seconds.current}`: seconds.current;
            setHours(hrs);
            setMinutes(m);
            setSeconds(s); 
            if(seconds.current <= 0){
                if(minutes.current > 0) {
                    seconds.current = 59;
                    minutes.current --; 
                }else { 
                    if(hours.current > 0) {
                        seconds.current = 59;
                        minutes.current = 59;
                        hours.current --;
                    }else {
                        clearInterval(output);
                    }
                }
            } else {
                seconds.current --;
            }
        }, 1000);
    },[isSeconds]);

  return (
    <View style={styles.container}>
        <LinearGradient 
            style={styles.gradient} 
            colors={[Colors.black, Colors.white, Colors.black]}>
          <Image 
            style={styles.imageStyle}
            source={require('../../../images/flashsales.jpg')}
            resizeMode="cover"
            /> 
            <View style={styles.textContainer}>
              <View style={styles.textGap}>
                <Text style={styles.textStyle}>Super Flash Sales</Text>
                <Text style={styles.textStyle}>50 % Off</Text>
              </View>
                <View style={styles.textGap}>
                    <View style={styles.timerContainer}>
                        <View style={styles.panelTimer}>
                            <Text style={styles.timerText}>{isHours}</Text>
                        </View>
                        <Text style={styles.dotStyle}>:</Text>
                        <View style={styles.panelTimer}>
                            <Text style={styles.timerText}>{isMinutes}</Text>
                        </View>
                        <Text style={styles.dotStyle}>:</Text>
                        <View style={styles.panelTimer}>
                            <Text style={styles.timerText}>{isSeconds}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient> 
      </View>
  );
}

export default FlashSaleTimer

const styles = StyleSheet.create({
    container: {
        height: width*.65, 
        width: Sizes.fwidth, 
        padding: 15,
    },
    gradient: {
        flex: 1, 
        borderRadius: 10
    },
    imageStyle: {
        width: Sizes.fwidth, 
        height: Sizes.fheight,  
        borderRadius: 10, 
        opacity: 0.8
    },
    textContainer: {
        position: 'absolute', 
        height: Sizes.fheight, 
        width: Sizes.fwidth
    },
    textGap: {
        padding: 20
    },
    textStyle: {
        fontFamily: FontStyle.primaryBold, 
        fontSize: FontSize.lg, 
        color: Colors.white
    }, 
    timerContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        gap: 8
    },
    panelTimer: {
        borderRadius: 10,
        width: Sizes.lg,
        height: Sizes.lg,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: Colors.white
    },
    timerText: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.md
    },
    dotStyle: {
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.md,
        color: Colors.white
    }
});