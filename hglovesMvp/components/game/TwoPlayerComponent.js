import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Divider, Card, ProgressBar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import TextWink from '../common/TextWink';
import MySound from '../common/MySound';
import HandComponent from '../main/HandComponent';
import textToSpeech from '../speaker/speaker';

import ResultDialogComponent from './ResultDialogComponent';
import AppearSide from '../common/Appear';
import ComponentZoom from '../common/Zoom';

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height;

let imageTutoWidth = ScreenDim.width * 15 / 100;
let imageTutoHeight = Math.round(imageTutoWidth * 683 / 546);
let imageTutoTop = ScreenDim.height * 10 / 100;

const tutoImages = {
    'a': require('../../assets/images/letters/A.png'),
    'b': require('../../assets/images/letters/B.png'),
    'c': require('../../assets/images/letters/C.png'),
    'ç': require('../../assets/images/letters/Ç.png'),
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

class TwoPlayerComponent extends React.Component {

    state = {
        timer: 3,
        timoutId: undefined,
        stopWatchId: undefined,
        stopWatchValue: [0, 0],
        playWin: false,
        playFailure: false,
        alphabet: ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        gameEnd: false,
        playerIndex: 0,
        index: 0,
        letter: '',
        checkStatus: false,
        imageSize: undefined,
        transitionScreen: false,
        gradientValues: [['#1c3956', '#153f67', '#0c4579', '#034b8b', '#03509d'], ['#561d1d', '#a63635']],
        hitNumber: [0, 0],
    }

    changePlayer = () => {
        this.setState({
            timer: 3,
            timoutId: undefined,
            stopWatchId: undefined,
            playWin: false,
            playFailure: false,
            playerIndex: this.state.playFailure + 1,
            index: 0,
            letter: '',
        });
    }

    handleTimer() {
        let id = setTimeout(() => {
            this.setState({
                timer: this.state.timer - 1,
            }, () => {
                if (this.state.timer !== 0)
                    this.handleTimer();
                else {
                    let id = setInterval(() => {
                        let tmp = [...this.state.stopWatchValue];
                        tmp[this.state.playerIndex] += 1;

                        this.setState({
                            stopWatchValue: tmp,
                        });
                    }, 1000);
                    this.setState({
                        stopWatchId: id,
                    });
                }
            });
        }, 1000);
        this.setState({
            timoutId: id
        });
    }

    componentWillUnmount() {
        if (this.state.stopWatchId)
            clearInterval(this.state.stopWatchId);
    }

    componentDidMount() {
        this.handleTimer();

        let tmp = [...this.state.alphabet];
        tmp.sort(() => Math.random() - 0.5);

        this.setState({
            alphabet: tmp,
        });
    }

    handleCheckStatus = status => {
        const { navigation } = this.props;

        this.setState({
            checkStatus: status
        }, () => {
            if (status === false)
                navigation.navigate("Game")
        });
    }

    handleTransitionScreenClose = () => {
        this.changePlayer();
        this.handleTimer();
        this.setState({
            transitionScreen: false,
        })
    }

    updateInput = newLetter => {
        const { alphabet, index, playWin, playerIndex, hitNumber } = this.state;
        let newIndex = index;

        if (index === alphabet.length || newLetter === ' ')
            return;
        let hitTmp = [...hitNumber];
        hitTmp[playerIndex] += 1;
        this.setState({
            hitNumber: hitTmp,
        })
        if (alphabet[index].toLowerCase() === newLetter.toLowerCase()) {
            newIndex += 1;
            textToSpeech(alphabet[index].toLowerCase(), 'FR');
            if (newIndex === alphabet.length && playWin == false) {
                clearInterval(this.state.stopWatchId);
                if (playerIndex === 0) {
                    this.setState({
                        transitionScreen: true,
                    }, () => setTimeout(() => {
                        this.setState({
                            go: true
                        })
                    }, 500))
                } else {
                    this.setState({
                        playWin: true,
                        gameEnd: true,
                        index: newIndex,
                        stopWatchId: undefined,
                    });
                    this.handleCheckStatus(true);
                }
            } else {
                this.setState({
                    index: newIndex,
                });
            }
        } else {
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
    }

    recupImageSize = (imageWidth, imageHeigth) => {
        this.setState({ imageSize: { width: imageWidth, height: imageHeigth } })
    }

    renderGame() {
        const { gameEnd, index, alphabet, playWin, playFailure, checkStatus, stopWatchValue, playerIndex, hitNumber } = this.state;
        let percent = (gameEnd) ? 1 : (index / alphabet.length)

        return (
            <View style={styles.container}>
                {(!gameEnd) ?
                    <Card style={styles.imageTutoContainer}>
                        <Image style={styles.imageTuto} source={tutoImages[alphabet[index].toLowerCase()]} />
                        <Text style={styles.imageTutoText}>{alphabet[index]}</Text>
                    </Card>
                    : null}
                {
                    playWin &&
                    <MySound source={require('../../assets/sounds/ding-sound-effect.mp3')} play={true} loop={false} />
                }
                {
                    playFailure &&
                    <MySound source={require('../../assets/sounds/fail.m4a')} play={true} loop={false} />
                }
                <View style={styles.handContainer}>
                    <HandComponent style={styles.hand} updateInput={this.updateInput} schemaStatus={false} recupImageSize={this.recupImageSize} />
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.secondText}>{stopWatchValue[playerIndex].toString() + 's'}</Text>
                </View>
                <ResultDialogComponent status={checkStatus} handleClose={this.handleCheckStatus} value={Math.min(stopWatchValue[0], stopWatchValue[1]).toString()} time={[...stopWatchValue]} accuracy={[...hitNumber]} />
                <View style={styles.progressContainer}>
                    <ProgressBar style={styles.progress} color='#1C3956' progress={percent} />
                </View>
            </View>
        );
    }

    renderTransitionScreen() {
        const { gradientValues, stopWatchValue } = this.state;

        return (
            <LinearGradient
                colors={gradientValues[1]}
                style={styles.container}>
                <TouchableOpacity style={styles.container} onPress={this.handleTransitionScreenClose}>
                    <AppearSide play start={"left"} duration={500}>
                        <Text style={{ ...styles.basicText, fontSize: 50 }}>{'Votre adversaire a mis ' + stopWatchValue[0].toString() + 's'}</Text>
                    </AppearSide>
                    <AppearSide play duration={500}>
                        <Text style={{ ...styles.basicText, fontSize: 70 }}>Arrivez-vous à le battre ?</Text>
                    </AppearSide>
                    <ComponentZoom initZoom={10} finalZoom={1} duration={500} play={this.state.go}>
                        <View>
                            <Text style={{ ...styles.basicText, fontSize: 120 }}>GO</Text>
                        </View>
                    </ComponentZoom>
                </TouchableOpacity>
            </LinearGradient>
        )
    }

    render() {
        const { navigation } = this.props;
        const { timer, transitionScreen, gradientValues, playerIndex } = this.state;

        if (transitionScreen)
            return this.renderTransitionScreen();

        if (timer !== 0) {
            return (
                <LinearGradient
                    colors={gradientValues[playerIndex]}
                    style={styles.container}>
                    <TextWink duration={500} textStyle={styles.timerText}>{timer}</TextWink>
                </LinearGradient>
            );
        }
        return (
            <View style={styles.container}>
                <Button
                    icon="arrow-left"
                    color='#1c3956'
                    onPress={() => navigation.navigate("Game")}
                    style={styles.backButton}>
                    Retour
                </Button>
                {this.renderGame()}
            </View>
        );
    }
}

let handWidth = null;
let handHeight = null;
let styles = null;

if (screenRatio > 0.6) {
    handWidth = ScreenDim.width * 90 / 100;
    handHeight = Math.round(handWidth * 2400 / 1920);
} else {
    handWidth = ScreenDim.width;
    handHeight = Math.round(handWidth * 2400 / 1920);
}

if (screenRatio > 0.6) {
    console.log("TABLET");
    styles = StyleSheet.create({
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
        timerText: {
            fontFamily: 'open-sans-bold',
            color: '#FFFFFF',
            fontSize: 300,
            textAlign: 'center'
        },
        imageTutoContainer: {
            display: 'flex',
            width: imageTutoWidth,
            position: 'absolute',
            zIndex: 2,
            top: imageTutoTop,
            left: 0,
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
            justifyContent: 'center',
        },
        hand: {
            width: handWidth,
            height: handHeight,
        },
        progressContainer: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        progress: {
            width: '100%',
            height: 10,
        },
        secondText: {
            fontFamily: 'open-sans-bold',
            color: '#1C3956',
            fontSize: 100,
            textAlign: 'center',
        },
        basicText: {
            fontFamily: 'open-sans-bold',
            color: '#FFFFFF',
            textAlign: 'center'
        },
    })
} else {
    console.log("MOBILE");
    styles = StyleSheet.create({
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
            top: 40,
            zIndex: 1,
        },
        timerText: {
            fontFamily: 'open-sans-bold',
            color: '#FFFFFF',
            fontSize: 300,
            textAlign: 'center'
        },
        imageTutoContainer: {
            display: 'flex',
            width: imageTutoWidth,
            position: 'absolute',
            zIndex: 2,
            top: imageTutoTop,
            left: 10,
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
            justifyContent: 'center',
        },
        hand: {
            width: handWidth,
            height: handHeight,
        },
        progressContainer: {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        progress: {
            width: '100%',
            height: 10,
        },
        secondText: {
            fontFamily: 'open-sans-bold',
            color: '#1C3956',
            fontSize: 50,
            textAlign: 'center',
        },
        basicText: {
            fontFamily: 'open-sans-bold',
            color: '#FFFFFF',
            textAlign: 'center'
        },
    })
}

export default TwoPlayerComponent;