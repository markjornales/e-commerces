import { StyleSheet } from 'react-native'
import { Colors, FontSize, FontStyle, LogoSize } from '../../../../constant/app_config'
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colors.white,
        borderWidth: 1
    },
    container: {
        flex: 1
    },
    imageStyle: {
        width: LogoSize.medium.width, 
        height: LogoSize.medium.height,
        borderRadius: LogoSize.radius
    },
    bannerContainer: { 
        flex: 0.25, 
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 10
    },
    textTitleStyle: {
        color: Colors.tertiary,
        fontFamily: FontStyle.primaryBold,
        fontSize: FontSize.md
    },
    textSubTitle: {
        fontFamily: FontStyle.primary,
        color: Colors.gray,
        fontSize: FontSize.sm
    },
    scrollStyle: {
        flexGrow: 1,
        paddingBottom: 20
    },
    formContainer: {
        flexGrow: 1, 
        paddingHorizontal: 20,
        gap: 16,
    },
    orContainer: {
        flexDirection:"row", 
        justifyContent: "space-between", 
        alignItems: "center"
    },
    orLine: {
        backgroundColor: Colors.graylighten, 
        paddingVertical: 1, 
        flex: 1
    },
    orTextContainer: {
        paddingHorizontal: 30
    },
    orTextStyle: {
        fontFamily: FontStyle.primaryBold, 
        color: Colors.gray, 
        fontSize: FontSize.sm
    },
    smallGap: {
        gap: 10
    },
    bottomContainer: {
        alignItems: 'center', 
        gap: 10
    },
    donthaveStyle: {
        fontFamily: FontStyle.primary, 
        color: Colors.gray
    },
    groupText: {
        flexDirection: 'row', 
        gap: 5
    }
})