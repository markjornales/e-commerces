import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react';
import {connect} from 'react-redux';
import { Colors, FontSize, FontStyle } from '../../../constant/app_config';

const Orders = ({checkouts}:any) => {
    
  return (
    <View style={{
        flex: 1,
        paddingHorizontal: 15,
        gap: 16,
    }}>
       {checkouts.map((data:any, index:number) => 
        <View key={index} style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: Colors.gray
        }}>
            <View style={{
                padding: 10
            }}>
                <Text 
                    style={{
                        fontFamily: FontStyle.primaryBold,
                        color: Colors.tertiary,
                        fontSize: FontSize.sm
                    }}
                >{data.reference_number}</Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.gray
                    }}>Order at Ecommerce: </Text>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.gray
                    }}>{data.date}</Text>
                </View>
            </View>
            <View style={{
                borderWidth: 0.3,
                borderColor: Colors.gray
            }}/>
            <View style={{
                padding: 10,
                gap: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.gray
                    }}>Order Status</Text>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.tertiary
                    }}>Shipping</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.gray
                    }}>Items</Text>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.tertiary
                    }}>{data.total_items} items purchased</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm,
                        color: Colors.gray
                    }}>Price</Text>
                    <Text style={{
                        fontFamily: FontStyle.primaryBold,
                        fontSize: FontSize.sm,
                        color: Colors.primary
                    }}>{'\u20B1'} {data.total_checkout.toLocaleString()}</Text>
                </View>
            </View>
        </View>
       )}
    </View>
  )
}


const mapToState = (state:any) => ({
    checkouts: state.checkout
});

export default connect(mapToState)(Orders)

const styles = StyleSheet.create({})