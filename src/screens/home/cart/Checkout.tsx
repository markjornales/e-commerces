import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import { Colors, FontSize, FontStyle } from '../../../constant/app_config';

const Checkout = (props: any) => {
    const {data} = props;
    const totalpriceItem = data.map((values:any) => values.tagprice)?.reduce((value1:number, value2:number) => value1 + value2);
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

export default Checkout

const styles = StyleSheet.create({})