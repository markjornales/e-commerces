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
    lg: width*.07,
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
    dimblack040: "rgba(0,0,0,0.4)",
    yellow: "#FFD700"
}
export const LogoSize = {
    medium: {width: width*.22, height: width*.22},
    radius: 20
}
export const Sizes = {
    fwidth: '100%',
    fwidth90: '90%',
    fwidth80: '80%',
    fwidth70: '70%',
    fwidth60: '60%',
    fwidth50: '50%',
    fwidth40: '40%',
    fwidth30: '30%',
    fwidth20: '20%',
    fwidth10: '10%',
    fheight: '100%',
    fheight90: '90%',
    fheight80: '80%',
    fheight70: '70%',
    fheight60: '60%',
    fheight50: '50%',
    fheight40: '40%',
    fheight30: '30%',
    fheight20: '20%',
    fheight10: '10%',
    sm:width*.065,
    xsm: width*.058,
    xxsm: width*.048,
    xxxsm: width*.038,
    md:width*.09,
    xmd: width*.18,
    xm:0,
    xxm:0,
    xxxm:0,
    lg:width*.13,
    xlg:width*.25,
    xxlg:width*.3,
    xxxlg:0
}