import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native';

const ScreenDim = Dimensions.get("window");

class HomeComponent extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.handContainer}>
                    <Image style={styles.hand} source={require('../../assets/hand.png')} />
                </View>
                <View style={styles.lormContainer}>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.recordButton}>
                        <Text style={styles.recordText}>Parler</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    handContainer: {

    },
    hand: {
        marginTop: '20%',
        width: '100%',
        height: '60%',
    },
    lormContainer: {

    },
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        minWidth: '40%',
        height: '8%'
    },
    recordButton: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1C3956',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 50
    },
    recordText: {
        color: '#FFFFFF'
    }
});

export default HomeComponent;