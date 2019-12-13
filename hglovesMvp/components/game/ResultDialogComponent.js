import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import MoveComponent from '../common/Move';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 60 / 100;
const imageHeight = Math.round(imageWidth * 800 / 600);

const backgroundImage = require('../../assets/images/game/backgroundResult.png');
const playerOneImage = require('../../assets/images/game/p1Icon.png');
const playerTwoImage = require('../../assets/images/game/p2Icon.png');
const trophyImage = require('../../assets/images/game/trophy.png');

const playerImageWidth = ScreenDim.width * 7 / 100;
const playerImageHeight = Math.round(playerImageWidth * 150 / 150);

const trophyImageWidth = ScreenDim.width * 10 / 100;
const trophyImageHeight = Math.round(trophyImageWidth * 128 / 128);
const trophyImageTop = ScreenDim.height * 80 / 100 / 2 - (trophyImageHeight / 2) - (ScreenDim.height * 0.5 / 100);
const trophyImageLeft = ScreenDim.width * 60 / 100 / 2 - (trophyImageWidth / 2);

class ResultDialogComponent extends React.Component {

    render() {
        const { status, handleClose, time, accuracy } = this.props;

        return (
            <View>
                <Portal>
                    <Dialog
                        style={{ width: '60%', height: '80%', marginLeft: '20%' }}
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.container}>
                            <TouchableOpacity onPress={() => handleClose(false)} style={styles.firstPlayerContainer}>
                                <View style={{ ...styles.nameContainer, marginBottom: '10%' }}>
                                    <Image source={playerOneImage} style={styles.playerImage} />
                                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <Text style={{ ...styles.whiteText, marginLeft: '5%' }}>Joueur 1</Text>
                                        <Text style={{ ...styles.whiteText, fontSize: 15 }}>{time[0] < time[1] ? 'Gagnant' : 'Perdant'}</Text>
                                    </View>
                                </View>
                                <View style={styles.statsContainer}>
                                    <View style={styles.statTextContainer}>
                                        <Text style={styles.numberStatText}>{time[0]}</Text>
                                        <Text style={styles.nameStatText}>Secondes</Text>
                                    </View>
                                    <View style={styles.statTextContainer}>
                                        <Text style={styles.numberStatText}>{(27 / accuracy[0] * 100).toFixed(2).toString() + '%'}</Text>
                                        <Text style={styles.nameStatText}>Précision</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleClose(false)} style={styles.secondPlayerContainer}>
                                <View style={styles.statsContainer}>
                                    <View style={styles.statTextContainer}>
                                        <Text style={styles.numberStatText}>{time[1]}</Text>
                                        <Text style={styles.nameStatText}>Secondes</Text>
                                    </View>
                                    <View style={styles.statTextContainer}>
                                        <Text style={styles.numberStatText}>{(27 / accuracy[1] * 100).toFixed(2).toString() + '%'}</Text>
                                        <Text style={styles.nameStatText}>Précision</Text>
                                    </View>
                                </View>
                                <View style={{ ...styles.nameContainer, marginTop: '10%' }}>
                                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Text style={{ ...styles.whiteText, marginRight: '5%' }}>Joueur 2</Text>
                                        <Text style={{ ...styles.whiteText, fontSize: 15 }}>{time[0] > time[1] ? 'Gagnant' : 'Perdant'}</Text>
                                    </View>
                                    <Image source={playerTwoImage} style={styles.playerImage} />
                                </View>
                            </TouchableOpacity>
                            <MoveComponent play={true} style={{ position: 'absolute', left: trophyImageLeft, top: trophyImageTop }} dest={{ x: 0, y: ScreenDim.height * 40 / 100 / 3.5 * (time[0] < time[1] ? -1 : 1)}}>
                                <Image source={trophyImage} style={styles.trophyImage} />
                            </MoveComponent>
                        </ImageBackground>
                    </Dialog>
                </Portal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    firstPlayerContainer: {
        display: 'flex',
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    secondPlayerContainer: {
        display: 'flex',
        width: '100%',
        height: '30%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    playerImage: {
        width: playerImageWidth,
        height: playerImageHeight,
        backgroundColor: '#ffffff',
        borderRadius: 20,
    },
    whiteText: {
        fontFamily: 'open-sans-bold',
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center'
    },
    statsContainer: {
        display: 'flex',
        width: '80%',
        marginLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    numberStatText: {
        fontFamily: 'open-sans-bold',
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center'
    },
    nameStatText: {
        fontFamily: 'open-sans',
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center'
    },
    trophyImage: {
        // position: 'absolute',
        width: trophyImageWidth,
        height: trophyImageHeight,
        // top: trophyImageTop,
        // left: trophyImageLeft,
    },
});

export default ResultDialogComponent;