import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, {forwardRef, useImperativeHandle} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import { Colors, FontSize, FontStyle } from '../../../constant/app_config';
import timeZone from 'moment-timezone';
import generateRef from './reference';

timeZone.tz.setDefault('Asia/Manila');

const Checkout = (props: any, ref:any) => {
    const {data} = props;
    const totalpriceItem = data.map((values:any) => { 
        const discount = values.discount/100;
        const tagpricediscounted = values.tagprice * discount;
        const totalprice = values.tagprice - tagpricediscounted;
        return totalprice * values.quantity;
    })?.reduce((value1:number, value2:number) => value1 + value2);
    
    useImperativeHandle(ref, () => ({
        total_checkout: totalpriceItem,
        total_items: data.length,
        date: timeZone(new Date()).format('MMMM DD, YYYY'),
        reference_number: generateRef()
    }));

  return (
    <View style={{flexGrow: 1}}>
      <View style={{ marginVertical: 25 }}>
        <ButtonCupons/>  
      </View>
      <View style={{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.graylighten,
        padding: 15,
        gap: 10
      }}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Text style={{
                fontFamily: FontStyle.primary,
                fontSize: FontSize.sm,
                color: Colors.gray
            }}>Items ({data.length})</Text>
            <Text style={{
                fontFamily: FontStyle.primary,
                color: Colors.tertiary,
                fontSize: FontSize.sm
            }}>{'\u20B1'} {totalpriceItem.toLocaleString()}</Text>
        </View>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Text style={{
                fontFamily: FontStyle.primary,
                fontSize: FontSize.sm,
                color: Colors.gray
            }}>Shipping</Text>
            <Text style={{
                fontFamily: FontStyle.primary,
                color: Colors.tertiary,
                fontSize: FontSize.sm
            }}>{'\u20B1'} 0.0</Text>
        </View>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Text style={{
                fontFamily: FontStyle.primary,
                fontSize: FontSize.sm,
                color: Colors.gray
            }}>Import Charges</Text>
            <Text style={{
                fontFamily: FontStyle.primary,
                color: Colors.tertiary,
                fontSize: FontSize.sm
            }}>{'\u20B1'} 0.0</Text>
        </View>
        <View style={{
            borderWidth: 0.5,
            borderColor: Colors.graylighten
        }}/>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Text style={{
                fontFamily: FontStyle.primaryBold,
                fontSize: FontSize.sm,
                color: Colors.tertiary
            }}>Total Price</Text>
            <Text style={{
                fontFamily: FontStyle.primary,
                color: Colors.primary,
                fontSize: FontSize.sm
            }}>{'\u20B1'} {totalpriceItem.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  )
}

const ButtonCupons = () => {
    return (
        <View style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 6,
            overflow: "hidden",
            borderColor: Colors.gray
        }}>
            <View style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingVertical: 12
            }}>
                <TextInput
                    placeholder="Enter Cupon Code"
                    selectionColor={Colors.primary}
                    style={{
                        flex: 1,
                        fontFamily: FontStyle.primary,
                        fontSize: FontSize.sm
                    }}
                />
            </View>
            <View style={{ 
            }}>
                <RectButton style={{
                    flex: 1,
                    backgroundColor: Colors.primary,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View accessibilityRole="button"
                        style={{paddingHorizontal: 20}}
                    >
                        <Text
                            style={{
                                fontFamily: FontStyle.primaryBold,
                                fontSize: FontSize.xsm,
                                color: Colors.white
                            }}
                        >
                            Apply
                        </Text>
                    </View>
                </RectButton>
            </View>
        </View>
    )
}

export default forwardRef(Checkout)

const styles = StyleSheet.create({})