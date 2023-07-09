import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, FontSize, FontStyle, Sizes } from '../../constant/app_config';
import HeaderNavHome from './components/HeaderNavHome';
import FlashSaleTimer from './home/FlashSaleTimer';
import SearchBar from './home/SearchBar';
import CategoryList from './home/CategoryList';
import OrderLists from './home/OrderLists';

type labelcontent = {
  leftlabel: string;
  rightlabel: string;
}
const LabelContents = (props: labelcontent) => {
  const {leftlabel, rightlabel} = props;
  return (
    <View style={styles.labelContainer}>
      <Text style={[styles.labelStyle, {color: Colors.tertiary,}]}>
        {leftlabel}
      </Text>
      <Text style={[styles.labelStyle, {color: Colors.primary,}]}>
        {rightlabel}
      </Text>
    </View>
  )
}

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
        <ScrollView contentContainerStyle={{flexGrow: 1}} nestedScrollEnabled={true}>
          <View style={styles.container}>
            <SearchBar/>
            <FlashSaleTimer/>
            <View>
              <LabelContents 
                leftlabel="Category" 
                rightlabel="More Category"
              />
              <CategoryList/>
            </View> 
            <View style={{
              paddingVertical: 30,
              gap: 10, 
            }}>
              <LabelContents 
                leftlabel="Flash Sale"
                rightlabel="See more"
              />
              <OrderLists
                onPress={(items) => { 
                  
                }}
              /> 
            </View>
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
    flex: 1,
  },
  safearea: {
    flex: 1, 
  },
  container: {
    flex: 1, 
    backgroundColor: Colors.white, 
  },
  smallDot: {
    backgroundColor: Colors.red, 
    width: 10, 
    height: 10, 
    borderRadius: 20, 
    position: 'absolute', 
    zIndex: 999, 
    right: 0
  },
  labelContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelStyle: {
    fontFamily: FontStyle.primaryBold,
    fontSize: FontSize.md,
  }
});