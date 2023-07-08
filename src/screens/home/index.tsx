import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constant/app_config';

const Home = () => {
  return (
    <View style={{backgroundColor: Colors.primary, flex: 1}}>
      <SafeAreaView style={{flex: 1,}}>
          <Text>Home</Text>
        <View style={{flex: 1, backgroundColor: Colors.white}}>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

});