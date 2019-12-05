import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 80 / 100;
const imageHeight = Math.round(imageWidth * 363 / 293);

class HomeComponent extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={{ ...styles.headerText, fontFamily: 'open-sans-bold' }}>Ceci est un MVP</Text>
                    <Text style={{ ...styles.headerText, fontFamily: 'open-sans' }}>Veuillez cliquer sur Communiquer pour démarrer la simulation</Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image
                        style={{ width: imageWidth, height: imageHeight }}
                        source={require('../../assets/images/home/logo.png')}
                    />
                </View>
                <View style={styles.footerContainer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#1c3956',
    },
    headerContainer: {
        display: 'flex',
        width: '80%',
        height: '20%',
        marginLeft: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        color: 'white'
    },
    logoContainer: {
        display: 'flex',
        width: '80%',
        marginLeft: '10%',
        height: '100%',
    },
    footerContainer: {
        display: 'flex',
        width: '100%',
        height: '10%',
    },
});

export default HomeComponent;