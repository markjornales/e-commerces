import {
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    useFonts
} from "@expo-google-fonts/inter";

export default function () {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
        Inter_500Medium 
    });
    
    return {fontsLoaded};
}