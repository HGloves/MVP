import React from 'react';
import { Dimensions, Platform } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native';
import { IconButton, Button, Card } from 'react-native-paper';
import MySound from '../common/MySound';
import HandComponent from '../main/HandComponent';
import AppearSide from '../common/Appear';
import ComponentZoom from '../common/Zoom';
import MoveComponent from '../common/Move';
import Animation from '../annimation/AnnimationComponent'
import TextWink from '../common/TextWink';
import CheckDialogComponent from './CheckDialogComponent';

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height
let styles = null;
let handWidth = null;
let handHeight = null;
let imageWidth = null;
let imageHeight = null;

let imageTutoWidth = ScreenDim.width * 15 / 100;
let imageTutoHeight = Math.round(imageTutoWidth * 683 / 546);
let imageTutoTop = ScreenDim.height / 3;

const tutoImages = {
    'a': require('../../assets/images/letters/A.png'),
    'b': require('../../assets/images/letters/B.png'),
    'c': require('../../assets/images/letters/C.png'),
    'd': require('../../assets/images/letters/D.png'),
    'e': require('../../assets/images/letters/E.png'),
    'f': require('../../assets/images/letters/F.png'),
    'g': require('../../assets/images/letters/G.png'),
    'h': require('../../assets/images/letters/H.png'),
    'i': require('../../assets/images/letters/I.png'),
    'j': require('../../assets/images/letters/J.png'),
    'k': require('../../assets/images/letters/K.png'),
    'l': require('../../assets/images/letters/L.png'),
    'm': require('../../assets/images/letters/M.png'),
    'n': require('../../assets/images/letters/N.png'),
    'o': require('../../assets/images/letters/O.png'),
    'p': require('../../assets/images/letters/P.png'),
    'q': require('../../assets/images/letters/Q.png'),
    'r': require('../../assets/images/letters/R.png'),
    's': require('../../assets/images/letters/S.png'),
    't': require('../../assets/images/letters/T.png'),
    'u': require('../../assets/images/letters/U.png'),
    'v': require('../../assets/images/letters/V.png'),
    'w': require('../../assets/images/letters/W.png'),
    'x': require('../../assets/images/letters/X.png'),
    'y': require('../../assets/images/letters/Y.png'),
    'z': require('../../assets/images/letters/Z.png'),
};

class ExerciseComponent extends React.Component {
    state = {
        playWin: false,
        sequenceStatus: false,
        sentence: [],
        index: 0,
        checkStatus: false,
        imageSize: undefined,
        imagePos: undefined
    }

    componentDidMount() {
        const { navigation } = this.props;

        const seq = navigation.getParam('name').toLowerCase().split('');
        let tmp = [...seq];
        for (let i = 0; i !== seq.length; i += 1)
            tmp[i] = ' ';
        this.setState({
            sentence: tmp,
        });
    }

    stopAnimation = () => {
        this.setState({ sequenceStatus: false, input: '' })
    };

    recupImageSize = (imageWidth, imageHeigth, imagePosX, imagePosY) => {
        this.setState({imageSize: {width: imageWidth, height: imageHeigth},
        imagePos: {x: imagePosX, y: imagePosY}, sequenceStatus: true})
    }

    handleCheckStatus = status => {
        this.setState({
            checkStatus: status
        });
    }

    handleReset = () => {
        const { navigation } = this.props;

        const seq = navigation.getParam('name').toLowerCase().split('');
        let tmp = [...seq];
        for (let i = 0; i !== seq.length; i += 1)
            tmp[i] = ' ';
        this.setState({
            sequenceStatus: true,
            sentence: tmp,
            index: 0,
            playWin: false
        });
    }

    updateInput = newLetter => {
        const { sentence, index } = this.state;
        const { navigation } = this.props;

        if (index === sentence.length || newLetter === ' ')
            return;
        let tmp = [...sentence];
        tmp[index] = newLetter.toLowerCase();
        let newIndex = index + (tmp[index] === navigation.getParam('name').toLowerCase().split('')[index] ? 1 : 0);
        
        if ((tmp[index] === navigation.getParam('name').toLowerCase().split('')[index]) == false) {

            this.setState({
                playFailure: true
            }, () => setTimeout(() => {
                {
                    this.setState({
                        playFailure: false
                    })
                }
            }, 400))
        }
        
        if (newIndex === sentence.length && this.state.playWin == false) {
            this.setState({
                playWin: true,
                sentence: tmp,
                index: newIndex,
            });
            this.handleCheckStatus(true);
        } else {
            this.setState({
                sentence: tmp,
                index: newIndex,
            });
        }
    }

    renderTutoSeqLetters = () => {
        const { navigation } = this.props;

        return (
            <View style={styles.lettersContainer}>
                {navigation.getParam('name').split('').map((letter, key) => {
                    let width = (100 / navigation.getParam('name').split('').length - 2).toString() + '%';
                    let fontSize = Math.min(ScreenDim.width * 55 / 100 * (100 / navigation.getParam('name').split('').length - 2) * 0.01, (screenRatio > 0.6) ? 35 : 25);
                    return (
                        <Card style={{ ...styles.letterCard, width: width }}
                            key={key}>
                            <Text key={key} style={{ fontFamily: 'open-sans-bold', color: '#1C3956', fontSize: fontSize, textAlign: 'center' }}>{letter}</Text>
                        </Card>
                    );
                })}
            </View>
        );
    }

    renderExLetters = () => {
        const { sentence, index } = this.state;
        const { navigation } = this.props;

        return (
            <View style={styles.lettersContainer}>
                {sentence.map((letter, key) => {
                    let width = (100 / sentence.length - 2).toString() + '%';
                    let fontSize = Math.min(ScreenDim.width * 55 / 100 * (100 / sentence.length - 2) * 0.01, (screenRatio > 0.6) ? 35 : 25);
                    return (
                        <Card style={{ ...styles.letterCard, width: width }}
                            key={key}>
                            {key === index ?
                            (sentence[key] === ' ' ?
                            <TextWink key={key} duration={500} textStyle={{ fontFamily: 'open-sans-bold', color: '#1C3956', fontSize: fontSize, textAlign: 'center' }}>{navigation.getParam('name')[key]}</TextWink>
                            : <TextWink key={key} duration={500} textStyle={{ fontFamily: 'open-sans-bold', color: '#c62828', fontSize: fontSize, textAlign: 'center' }}>{letter}</TextWink> )
                            : (key < index ?
                            <Text key={key} style={{ fontFamily: 'open-sans-bold', color: '#1C3956', fontSize: fontSize, textAlign: 'center' }}>{navigation.getParam('name')[key]}</Text>
                            : <Text key={key} style={{ fontFamily: 'open-sans-bold', color: 'rgba(28, 57, 86, 0.397)', fontSize: fontSize, textAlign: 'center' }}>{navigation.getParam('name')[key]}</Text> )}
                        </Card>
                    );
                })}
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        const { sequenceStatus, index, sentence, checkStatus } = this.state;

        return (
            <View style={styles.container}>
                {(!sequenceStatus && index !== sentence.length) ?
                    <Card style={styles.imageTutoContainer}>
                        <Image style={styles.imageTuto} source={tutoImages[navigation.getParam('name').toLowerCase()[index]]} />
                        <Text style={styles.imageTutoText}>{navigation.getParam('name').toUpperCase()[index]}</Text>
                    </Card>
                    : null}
                {
                    this.state.playWin &&
                    <MySound source={require('../../assets/sounds/ding-sound-effect.mp3')} play={true} loop={false} />
                }
                {
                    this.state.playFailure &&
                    <MySound source={require('../../assets/sounds/fail.m4a')} play={true} loop={false}/>
                }
                <Button
                    icon="arrow-left"
                    color='#1c3956'
                    onPress={navigation.getParam('callback')}
                    style={styles.backButton}>
                    Retour
                </Button>
                <View style={styles.handContainer}>
                    {sequenceStatus === true ?
                        <Animation text={navigation.getParam('name').toLowerCase()} stopAnimation={this.stopAnimation}
                        imageSize={this.state.imageSize} imagePos={this.state.imagePos} style={stylesHand.hand}/>
                        :
                        null
                    }
                    <HandComponent style={stylesHand.hand} updateInput={this.updateInput} schemaStatus={false} recupImageSize={this.recupImageSize} />
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
                        {sequenceStatus ? this.renderTutoSeqLetters() : this.renderExLetters()}
                        <View style={styles.gameButtonContainer}>
                            <IconButton
                                icon="refresh"
                                color={'#1C3956'}
                                onPress={this.handleReset}
                            />
                            <IconButton
                                icon="check"
                                disabled={index !== sentence.length}
                                color={'#1C3956'}
                                onPress={navigation.getParam('callback')}
                            />
                        </View>
                    </View>
                </View>
                <CheckDialogComponent status={checkStatus} handleClose={this.handleCheckStatus} />
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
    if (Platform.OS == 'ios') {
        stylesHand = StyleSheet.create({
            hand: {
                width: handWidth,
                height: handHeight,
                zIndex: 1,
            }
        });
    } else {
        stylesHand = StyleSheet.create({
            hand: {
                width: handWidth,
                height: handHeight,
            }
        });
    }
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
        imageTutoContainer: {
            display: 'flex',
            width: imageTutoWidth,
            position: 'absolute',
            zIndex: 2,
            top: imageTutoTop,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        imageTuto: {
            width: imageTutoWidth,
            height: imageTutoHeight,
            zIndex: 2,
        },
        imageTutoText: {
            display: 'flex',
            width: '100%',
            fontFamily: 'open-sans-bold',
            color: '#1C3956',
            fontSize: 20,
            textAlign: 'center',
        },
    });
} else {
    console.log("MOBILE");
    handWidth = ScreenDim.width;
    handHeight = Math.round(handWidth * 2400 / 1920);
    imageWidth = ScreenDim.width * 30 / 100;
    imageHeight = Math.round(imageWidth * 487 / 579);
    if (Platform.OS == 'ios') {
        stylesHand = StyleSheet.create({
            hand: {
                width: handWidth,
                height: handHeight,
                zIndex: 1,
            }
        });
    } else {
        stylesHand = StyleSheet.create({
            hand: {
                width: handWidth,
                height: handHeight,
            }
        });
    }
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
        imageTutoContainer: {
            display: 'flex',
            width: imageTutoWidth,
            position: 'absolute',
            zIndex: 2,
            top: imageTutoTop / 4,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        imageTuto: {
            width: imageTutoWidth,
            height: imageTutoHeight,
            zIndex: 2,
        },
        imageTutoText: {
            display: 'flex',
            width: '100%',
            fontFamily: 'open-sans-bold',
            color: '#1C3956',
            fontSize: 20,
            textAlign: 'center',
        },
    });
}

export default ExerciseComponent;