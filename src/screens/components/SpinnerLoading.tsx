import React from 'react'
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import { Colors, Sizes } from '../../constant/app_config'

type spinnerProps = {
    isVisible: boolean;
}

const SpinnerLoading = (props: spinnerProps) => {
    const {isVisible} = props;
  return (
    <Modal
        role="alert"
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        visible={isVisible}
    >
        <View style={styles.container}>
            <View style={styles.shadowContainer}>
                <View style={styles.boxShape}>
                    <ActivityIndicator size={Sizes.lg} color={Colors.primary}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default SpinnerLoading

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderWidth: 1, 
        backgroundColor: Colors.dimblack040, 
        justifyContent: "center", 
        alignItems: "center"
    },
    shadowContainer: {
        elevation: 5
    },
    boxShape: {
        backgroundColor: Colors.white, 
        borderRadius: 10, 
        padding: Sizes.sm
    }
})