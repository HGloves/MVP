import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { IconButton, Button, Card } from 'react-native-paper';
import HandComponent from '../main/HandComponent';

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height;
let styles = null;
let handWidth = null;
let handHeight = null;
let imageWidth = null;
let imageHeight = null;

class ExerciseComponent extends React.Component {

    updateInput = newLetter => {
        console.log(newLetter)
    };

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Button
                    icon="arrow-left"
                    color='#1c3956'
                    onPress={navigation.getParam('callback')}
                    style={styles.backButton}>
                    Retour
                </Button>
                <View style={styles.handContainer}>
                    <HandComponent style={styles.hand} updateInput={this.updateInput}/>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.footerImageContainer}>
                        <View>
                            <Image
                                style={{ width: imageWidth, height: imageHeight }}
                                source={navigation.getParam('image')}
                            />
                        </View>
                    </View>
                    <View style={styles.footerRightContainer}>
                        <View style={styles.lettersContainer}>
                            {navigation.getParam('name').split('').map((letter, key) => {
                                let width = (100 / navigation.getParam('name').split('').length - 2).toString() + '%';
                                let fontSize = Math.min(ScreenDim.width * 55 / 100 * (100 / navigation.getParam('name').split('').length - 2) * 0.01, 35);
                                return (
                                    <Card style={{ ...styles.letterCard, width: width }}
                                        key={key}>
                                        <Text key={key} style={{ fontFamily: 'open-sans-bold', color: '#1C3956', fontSize: fontSize, textAlign: 'center' }}>{letter}</Text>
                                    </Card>
                                );
                            })}
                        </View>
                        <View style={styles.gameButtonContainer}>
                            <IconButton
                                icon="refresh"
                                color={'#1C3956'}
                                onPress={() => {}}
                            />
                            <IconButton
                                icon="check"
                                disabled
                                color={'#1C3956'}
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

if (screenRatio > 0.6) {
    console.log("TABLET");
    handWidth = ScreenDim.width * 90 / 100;
    handHeight = Math.round(handWidth * 2400 / 1920);
    imageWidth = ScreenDim.width * 30 / 100;
    imageHeight = Math.round(imageWidth * 487 / 579);
    styles = StyleSheet.create({
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
        handContainer: {
            width: '100%',
            height: '78%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        hand: {
            width: handWidth,
            height: handHeight,
        },
        footerContainer: {
            display: 'flex',
            width: '100%',
            marginTop: '4%',
            height: '18%',
            flexDirection: 'row',
        },
        footerImageContainer: {
            display: 'flex',
            width: '30%',
            marginLeft: '5%',
            marginRight: '5%',
            height: '100%',
            justifyContent: 'center',
        },
        footerRightContainer: {
            display: 'flex',
            width: '55%',
            height: '100%',
            marginRight: '5%',
            flexDirection: 'column',
        },
        lettersContainer: {
            display: 'flex',
            width: '100%',
            height: '30%',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        letterCard: {
            display: 'flex',
            marginRight: '1%',
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        gameButtonContainer: {
            display: 'flex',
            width: '100%',
            height: '70%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
} else {
    console.log("MOBILE");
    handWidth = ScreenDim.width;
    handHeight = Math.round(handWidth * 2400 / 1920);
    imageWidth = ScreenDim.width * 30 / 100;
    imageHeight = Math.round(imageWidth * 487 / 579);
    styles = StyleSheet.create({
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
        handContainer: {
            width: '100%',
            height: '78%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            paddingTop: '25%',
        },
        hand: {
            width: handWidth,
            height: handHeight,
        },
        footerContainer: {
            display: 'flex',
            width: '100%',
            marginTop: '4%',
            height: '18%',
            flexDirection: 'row',
        },
        footerImageContainer: {
            display: 'flex',
            width: '30%',
            marginLeft: '5%',
            marginRight: '5%',
            height: '100%',
            justifyContent: 'center',
        },
        footerRightContainer: {
            display: 'flex',
            width: '55%',
            height: '100%',
            marginRight: '5%',
            flexDirection: 'column',
        },
        lettersContainer: {
            display: 'flex',
            width: '100%',
            height: '30%',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        letterCard: {
            display: 'flex',
            marginRight: '1%',
            textAlign: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        gameButtonContainer: {
            display: 'flex',
            width: '100%',
            height: '70%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
}

export default ExerciseComponent;