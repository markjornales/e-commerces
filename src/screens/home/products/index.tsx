import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Sizes } from '../../../constant/app_config'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderNavHome from '../components/HeaderNavHome' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Products = (props:any) => {
    const {route, navigation} = props; 
  return (
    <View style={styles.root}> 
        <SafeAreaView style={styles.safearea}>
            <HeaderNavHome
                headerTitle={route.params.productname}
                icons={<MaterialIcons
                    name='arrow-back-ios'
                    size={Sizes.sm} 
                    color={Colors.white}
                />
                }
                isIconClick={false}
                iconCliick={()=> navigation.goBack()}
            />
            <View style={{
                flex: 1,
                backgroundColor: Colors.white
            }}>

            </View>
        </SafeAreaView>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary, 
        flex: 1,
    },
    safearea: {
        flex: 1, 
    }
})