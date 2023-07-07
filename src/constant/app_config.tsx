import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const FontStyle = {
    primary: "Inter_400Regular",
    primaryBold: "Inter_700Bold",
    primaryMedium: "Inter_500Medium"
}
export const FontSize = {
    sm: width*.035,
    xsm: width*.030,
    md: width*.045,
    lg: 0,
}
export const Colors = {
    primary: "#1469BF",
    scondary: "#3ebffe",
    tertiary: "#223063",
    white: "#ffffff",
    gray: "#9097b1", 
    graylighten: "#eaefff",
    red: "#Ff4249",
    black: "#000000",
    dimblack040: "rgba(0,0,0,0.4)"
}
export const LogoSize = {
    medium: {width: width*.22, height: width*.22},
    radius: 20
}
export const Sizes = {
    sm:width*.065,
    xsm: width*.058,
    xxsm: 0,
    xxxsm: 0,
    md:width*.09,
    xm:0,
    xxm:0,
    xxxm:0,
    lg:width*.13,
    xlg:0,
    xxlg:0,
    xxxlg:0
}