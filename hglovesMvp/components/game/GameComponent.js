import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Divider } from 'react-native-paper';

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height;

const onePlayer = require('../../assets/images/game/1Player.png');
const twoPlayer = require('../../assets/images/game/2Player.png');

let imageGameWidth = ScreenDim.width * 50 / 100;
let imageGameHeight = Math.round(imageGameWidth * 894 / 1260);

class GameComponent extends React.Component {

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Button
                    icon="arrow-left"
                    color='#1c3956'
                    onPress={() => navigation.navigate("Main")}
                    style={styles.backButton}>
                    Retour
                </Button>
                <TouchableOpacity
                style={{ ...styles.gameImageContainer, marginBottom: '5%' }}
                onPress={() => navigation.navigate('OnePlayer')}
                >
                    <View style={{ ...styles.gameTextContainer, marginRight: '10%' }}>
                        <Text style={{ ...styles.gamePlayerNumber, color: '#1C3956' }}>1</Text>
                        <Text style={{ ...styles.gamePlayerText, color: '#1C3956' }}>Joueur</Text>
                    </View>
                    <Image source={onePlayer} style={styles.gameImage} />
                </TouchableOpacity>
                <Divider style={{ marginBottom: '5%', width: '90%' }} />
                <TouchableOpacity
                style={styles.gameImageContainer}
                onPress={() => navigation.navigate('TwoPlayer')}
                >
                    <Image source={twoPlayer} style={styles.gameImage} />
                    <View style={{ ...styles.gameTextContainer, marginLeft: '10%' }}>
                        <Text style={{ ...styles.gamePlayerNumber, color: '#561c1c' }}>2</Text>
                        <Text style={{ ...styles.gamePlayerText, color: '#561c1c' }}>Joueurs</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = (screenRatio > 0.6 ?
    StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        backButton: {
            position: 'absolute',
            left: 0,
            top: 20,
            zIndex: 1,
        },
        gameImageContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        gameImage: {
            width: imageGameWidth,
            height: imageGameHeight,
            borderRadius: 20,
        },
        gamePlayerNumber: {
            fontFamily: 'open-sans-bold',
            fontSize: 150,
        },
        gamePlayerText: {
            fontFamily: 'open-sans-bold',
            fontSize: 50,
        },
        gameTextContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
    })
    :
    StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        backButton: {
            position: 'absolute',
            left: 0,
            top: 20,
            zIndex: 1,
        },
        gameImageContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        gameImage: {
            width: imageGameWidth,
            height: imageGameHeight,
        },
        gamePlayerNumber: {
            fontFamily: 'open-sans-bold',
            fontSize: 100,
        },
        gamePlayerText: {
            fontFamily: 'open-sans-bold',
            fontSize: 20,
        },
        gameTextContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
    })
);

export default GameComponent;