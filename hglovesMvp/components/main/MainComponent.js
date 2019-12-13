import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View, Text, Platform } from 'react-native';
import RecordButton from './RecordButton'
import { IconButton, TextInput, Switch } from 'react-native-paper';
import HelpComponent from './HelpComponent';
import ExerciseListComponent from '../exercise/ExerciseListComponent';
import HandComponent from './HandComponent';
import textToSpeech from '../speaker/speaker';
import TextBeat from '../common/TextBeat';
import Animation from '../annimation/AnnimationComponent'

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height;
let styles = null;
let stylesHand = null;
let imageWidth = null;
let imageHeight = null;

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            helpStatus: false,
            exerciseStatus: false,
            input: '',
            lastLetter: '',
            timeoutId: undefined,
            imageSize: undefined,
            imagePos: undefined,
            schemaStatus: false,
        }
    }

    componentWillUnmount() {
        if (this.state.timeoutId)
            clearTimeout(this.state.timeoutId);
    }

    helpStatusHandler = status => {
        this.setState({
            helpStatus: status,
        });
    };

    exerciseStatusHandler = status => {
        this.setState({
            exerciseStatus: status,
        })
    };

    handleSchemaStatus = () => {
        this.setState({
            schemaStatus: !this.state.schemaStatus
        });
    };

    handleInputEnd = () => {
        const { input } = this.state;

        textToSpeech(input.toLowerCase(), 'FR');
        this.setState({
            timeoutId: undefined,
            input: '',
            lastLetter: '',
        });
    };

    handleGame = () => {
        const { navigation } = this.props;
        navigation.navigate('Game');
    };

    updateInput = newLetter => {
        this.setState({
            input: this.state.input + newLetter,
            lastLetter: newLetter,
        }, () => {
            if (this.state.timeoutId)
                clearTimeout(this.state.timeoutId);
            let id = setTimeout(this.handleInputEnd, 4000);
            this.setState({
                timeoutId: id,
            });
        });
    };

    inputHandler = status => {
        var result = status.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").replace(/\s{2,}/g," ").replace('ç', '.').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace('.', 'ç')
        this.setState({ input: result, googleSpeech: true });
    };

    stopAnimation = () => {
        this.setState({ googleSpeech: false, input: '' })
    };

    recupImageSize = (imageWidth, imageHeigth, imagePosX, imagePosY) => {
        this.setState({
            imageSize: { width: imageWidth, height: imageHeigth },
            imagePos: { x: imagePosX, y: imagePosY }
        })
    };

    render() {
        const { helpStatus, exerciseStatus, input, schemaStatus } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.handContainer}>
                    {this.state.googleSpeech === true ?
                        <Animation text={this.state.input} stopAnimation={this.stopAnimation}
                        imageSize={this.state.imageSize} imagePos={this.state.imagePos} style={stylesHand.hand}/>
                        :
                        null
                    }
                    <HandComponent style={stylesHand.hand} updateInput={this.updateInput} recupImageSize={this.recupImageSize} schemaStatus={schemaStatus} />
                </View>
                <View style={styles.lormContainer}>
                    <TextBeat beat={500} size={2} textStyle={{ ...styles.lormLetter, fontFamily: 'open-sans-bold' }}>{(this.state.lastLetter === ' ') ? 'ESPACE' : this.state.lastLetter}</TextBeat>
                </View>
                <View style={styles.actionsContainer}>
                    <RecordButton input={input} func={this.inputHandler} />
                    <View style={styles.inputContainer}>
                        <View style={styles.inputView}>
                            <TextInput value={input} disabled style={{ ...styles.input, fontFamily: 'open-sans-bold', backgroundColor: 'transparent' }} />
                        </View>
                        <IconButton
                            style={styles.exButton}
                            icon="book-open"
                            color={'#1C3956'}
                            onPress={() => this.exerciseStatusHandler(true)}
                        />
                        <IconButton
                            style={styles.vsButton}
                            icon="timer"
                            color={'#1C3956'}
                            onPress={this.handleGame}
                        />
                    </View>
                </View>
                <View style={styles.helpButtonContainer}>
                    <IconButton
                        icon="alphabetical"
                        color={'#1C3956'}
                        size={50}
                        onPress={() => this.helpStatusHandler(true)}
                    />
                    <Switch
                        style={{marginTop: '40%'}}
                        value={schemaStatus}
                        onValueChange={this.handleSchemaStatus}
                        color='#1c3956'
                    />
                </View>
                <HelpComponent status={helpStatus} handleClose={this.helpStatusHandler} />
                <ExerciseListComponent status={exerciseStatus} handleClose={this.exerciseStatusHandler} {...this.props} />
            </View>
        );
    }
}

if (screenRatio > 0.6) {
    console.log("TABLET");
    imageWidth = ScreenDim.width * 90 / 100;
    imageHeight = Math.round(imageWidth * 2400 / 1920);
    if (Platform.OS === 'ios') {
        stylesHand = StyleSheet.create({
            hand: {
                width: imageWidth,
                height: imageHeight,
                zIndex: 1,
            }
        });
    } else {
        stylesHand = StyleSheet.create({
            hand: {
                width: imageWidth,
                height: imageHeight,
            }
        });
    }
    styles = StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
        },
        handContainer: {
            width: '100%',
            height: '78%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        lormContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '15%'
        },
        lormLetter: {
            color: '#1C3956',
            fontSize: 50
        },
        actionsContainer: {
            position: 'absolute',
            flex: 1,
            flexDirection: 'row',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '7%',
        },
        inputContainer: {
            display: 'flex',
            height: '100%',
            width: '70%',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
        },
        inputView: {
            marginLeft: '8%',
            height: '75%',
            width: '70%',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#F1F0FF',
            justifyContent: 'space-around',
        },
        input: {
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%',
            color: '#1C3956'
        },
        helpButtonContainer: {
            position: 'absolute',
            right: 6,
            top: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2,
        },
        exButton: {
            display: 'flex',
            width: '5%',
        },
        vsButton: {
            display: 'flex',
            width: '5%',
        },
        rectangle: {
            position: 'absolute',
            zIndex: 1,
        },
    });
} else {
    console.log("MOBILE");
    imageWidth = ScreenDim.width;
    imageHeight = Math.round(imageWidth * 2400 / 1920);
    if (Platform.OS === 'ios') {
        stylesHand = StyleSheet.create({
            hand: {
                width: imageWidth,
                height: imageHeight,
                zIndex: 1,
            }
        });
    } else {
        stylesHand = StyleSheet.create({
            hand: {
                width: imageWidth,
                height: imageHeight,
            }
        });
    }
    styles = StyleSheet.create({
        container: {
            display: 'flex',
            width: '100%',
            height: '100%',
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
            zIndex: 1,
        },
        lormContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '15%'
        },
        lormLetter: {
            color: '#1C3956',
            fontSize: 50
        },
        actionsContainer: {
            position: 'absolute',
            flex: 1,
            flexDirection: 'row',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '7%',
        },
        inputContainer: {
            display: 'flex',
            height: '100%',
            width: '70%',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
        },
        inputView: {
            marginLeft: '5%',
            height: '75%',
            width: '60%',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#F1F0FF',
            justifyContent: 'space-around',
        },
        input: {
            width: '80%',
            marginLeft: '10%',
            color: '#1C3956'
        },
        exButton: {
            width: 32,
            height: 32,
            marginRight: -10
        },
        vsButton: {
            width: 32,
            height: 32,
        },
        helpButtonContainer: {
            position: 'absolute',
            right: 6,
            top: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2,
        },
        rectangle: {
            position: 'absolute',
            zIndex: 1,
        },
    });
}

export default MainComponent;
