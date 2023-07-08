
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useFontsList from './src/hooks/useFontsList';
import Navigation from './src/routes/Navigation';
import { Provider } from 'react-redux';
import {StoreProvider} from 'easy-peasy';
import store from './src/redux/store';

export default function App() { 
  const {fontsLoaded} = useFontsList();

  if(!fontsLoaded) {
      return null;
  } 

  return (
    <Provider store={store}>
      <StoreProvider store={store}> 
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Navigation/>
          </NavigationContainer>
        </GestureHandlerRootView>
      </StoreProvider>
    </Provider>
  );
}

 