import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors, FontSize, FontStyle, Sizes } from '../../../constant/app_config';
import HeaderNavHome from '../components/HeaderNavHome';
import Lottie from 'lottie-react-native';

const Explores = () => {
  return (
    <View style={styles.root}> 
      <SafeAreaView style={styles.safearea}>
        <HeaderNavHome
          headerTitle="Explore"
          icons={<Entypo 
            name="magnifying-glass" 
            size={Sizes.sm} 
            color={Colors.white}
            />
          } 
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
             <Lottie
                source={require('../../../json/51382-astronaut-light-theme.json')}
                loop={true}
                autoPlay   
             />
             <View style={{
              flex: 0.35,  
              alignItems: 'center',
             }}>
              <Text style={{
                fontFamily: FontStyle.primaryBold,
                fontSize: FontSize.md,
                color: Colors.gray
              }}>Sorry! Not Found</Text>
             </View>
          </View>
        </ScrollView>
      </SafeAreaView> 
    </View>
  );
}

export default Explores

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
    backgroundColor: Colors.white, 
    justifyContent: 'flex-end'
  }
});