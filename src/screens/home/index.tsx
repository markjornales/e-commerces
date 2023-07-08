import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Sizes } from '../../constant/app_config';
import HeaderNavHome from './components/HeaderNavHome';
import SearchBar from './home/SearchBar';

const Home = () => {
  return (
    <View style={styles.root}> 
      <SafeAreaView style={styles.safearea}>
        <HeaderNavHome
          headerTitle="Dashboard"
          icons={<Ionicons 
            name="ios-home-outline" 
            size={Sizes.sm} 
            color={Colors.white}
            />
          }
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <SearchBar/>
          </View>
        </ScrollView>
      </SafeAreaView> 
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.primary, 
    flex: 1
  },
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1, 
    backgroundColor: Colors.white
  },
  smallDot: {
    backgroundColor: Colors.red, 
    width: 10, 
    height: 10, 
    borderRadius: 20, 
    position: 'absolute', 
    zIndex: 999, 
    right: 0
  }
});