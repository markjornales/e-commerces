import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Colors, FontSize, FontStyle, Sizes } from '../constant/app_config';
import Home from '../screens/home';
import Accounts from '../screens/home/account';
import Carts from '../screens/home/cart';
import Explores from '../screens/home/explore';
import Offers from '../screens/home/offer';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle: {height: 75, backgroundColor: Colors.white}}}>
        <Tab.Group screenOptions={{headerShown: false}}>
            <Tab.Screen name="home" component={Home}
                options={{
                    tabBarIcon: ({focused}: any) => (
                        <TabBarIconComponent 
                            icon={<Ionicons 
                                name="ios-home-outline" 
                                size={Sizes.sm} 
                                color={focused? Colors.primary: Colors.gray}
                            />}
                            iconlabel="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="explore"
                component={Explores}
                options={{
                    tabBarIcon: ({focused}: any) => (
                        <TabBarIconComponent
                            icon={<Entypo
                                name="magnifying-glass"
                                size={Sizes.sm}
                                color={focused? Colors.primary: Colors.gray}
                            />}
                            iconlabel="Explore"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="carts"
                component={Carts}
                options={{ 
                    tabBarIcon: ({focused}: any) => (
                        <TabBarIconComponent
                            icon={<AntDesign
                                name="shoppingcart"
                                size={Sizes.sm}
                                color={focused? Colors.primary: Colors.gray}
                            />}
                            iconlabel="Cart"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="offers"
                component={Offers}
                options={{
                    tabBarIcon: ({focused}: any) => (
                        <TabBarIconComponent
                            icon={<Octicons
                                name="tag"
                                size={Sizes.sm}
                                color={focused? Colors.primary: Colors.gray}
                            />}
                            iconlabel="Offer"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Account"
                component={Accounts}
                options={{
                    tabBarIcon: ({focused}: any) => (
                        <TabBarIconComponent
                            icon={<Feather
                                name="user"
                                size={Sizes.sm}
                                color={focused? Colors.primary: Colors.gray}
                            />}
                            iconlabel="Account"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tab.Group>
    </Tab.Navigator>
  );
}

interface tabBariconProps {
    focused: boolean;
    iconlabel: string;
    icon: JSX.Element
}

const TabBarIconComponent = (props: tabBariconProps) => {
    const {focused, iconlabel, icon} = props;
    return (
        <View style={styles.container}>
            {icon}
            <Text style={[styles.textStyle, {color: focused? Colors.primary: Colors.gray}]}>
                {iconlabel}
            </Text>
        </View>
    );
}

export default TabNavigation;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: FontStyle.primaryBold, 
        fontSize: FontSize.sm, 
    }
})