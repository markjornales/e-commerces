import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors, Sizes } from '../../../constant/app_config';
import HeaderNavHome from '../components/HeaderNavHome';

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
            {/* body list */}
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
    backgroundColor: Colors.white
  }
});