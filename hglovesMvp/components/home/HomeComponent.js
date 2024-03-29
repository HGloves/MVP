import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height;
let imageWidth = null;
let imageHeight = null;
let iconWidth = null;
let iconHeight = null;
let fontSize = null;
let style = null;

class HomeComponent extends React.Component {

    handleNavigation = () => {
        this.props.navigation.navigate('Main')
    };

    render() {
        return (
            <LinearGradient
            colors={['#1c3956', '#153f67', '#0c4579', '#034b8b', '#03509d']}
            style={styles.container}>
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
                    <TouchableOpacity style={styles.footerButton}
                        onPress={() => this.handleNavigation()}>
                        <Text style={{ ...styles.footerText }}>Communiquer</Text>
                        <Image
                            style={{ width: iconWidth, height: iconHeight }}
                            source={require('../../assets/images/icon/mic.png')}
                        />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

if (screenRatio > 0.6) {
    console.log("TABLET");
    imageWidth = ScreenDim.width * 60 / 100;
    imageHeight = Math.round(imageWidth * 363 / 293);
    iconWidth = ScreenDim.width * 5 / 100;
    iconHeight = ScreenDim.width * 5 / 100;
    fontSize = ScreenDim.width * 40 / 100 * (100 / 11) * 0.01;
    styles = StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        headerContainer: {
            display: 'flex',
            width: '80%',
            height: '25%',
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
            width: '90%',
            marginLeft: '10%',
            height: '67%',
        },
        footerContainer: {
            display: 'flex',
            width: '100%',
            height: '8%',
            flexDirection: 'row-reverse',
        },
        footerButton: {
            display: 'flex',
            width: '40%',
            height: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        footerText: {
            textAlign: 'center',
            color: '#1c3956',
            fontFamily: 'open-sans-bold',
            fontSize: fontSize,
        },
    });
} else {
    console.log("MOBILE");
    imageWidth = ScreenDim.width * 81 / 100;
    imageHeight = Math.round(imageWidth * 363 / 293);
    iconWidth = ScreenDim.width * 5 / 100;
    iconHeight = ScreenDim.width * 5 / 100;
    fontSize = ScreenDim.width * 40 / 100 * (100 / 11) * 0.01;
    styles = StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        headerContainer: {
            display: 'flex',
            width: '80%',
            height: '25%',
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
            width: '90%',
            marginLeft: '10%',
            height: '67%',
        },
        footerContainer: {
            display: 'flex',
            width: '100%',
            height: '8%',
            flexDirection: 'row-reverse',
        },
        footerButton: {
            display: 'flex',
            width: '40%',
            height: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        footerText: {
            textAlign: 'center',
            color: '#1c3956',
            fontFamily: 'open-sans-bold',
            fontSize: fontSize,
        },
    });
}

export default HomeComponent;