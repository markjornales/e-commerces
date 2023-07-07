
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useFontsList from './src/hooks/useFontsList';
import Navigation from './src/routes/Navigation';

export default function App() { 
  const {fontsLoaded} = useFontsList();

  if(!fontsLoaded) {
      return null;
  } 

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

 