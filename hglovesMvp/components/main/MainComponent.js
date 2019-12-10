import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View, Text } from 'react-native';
import RecordButton from './RecordButton'
import { IconButton } from 'react-native-paper';
import HelpComponent from './HelpComponent';
import ExerciseListComponent from '../exercise/ExerciseListComponent';
import HandComponent from './HandComponent';

import textToSpeech from '../speaker/speaker';
import { speak } from 'expo-speech';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 90 / 100;
const imageHeight = Math.round(imageWidth * 2400 / 1920);

class MainComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            helpStatus: false,
            exerciseStatus: false,
            input: '',
            lastLetter: '',
            timeoutId: undefined,
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
    }

    exerciseStatusHandler = status => {
        this.setState({
            exerciseStatus: status,
        })
    }

    handleInputEnd = () => {
        const { input } = this.state;

        textToSpeech(input.toLowerCase(), 'FR');
        this.setState({
            timeoutId: undefined,
            input: '',
            lastLetter: '',
        });
    }

    updateInput = newLetter => {
        this.setState({
            input: this.state.input + newLetter,
        }, () => {
            if (this.state.timeoutId)
                clearTimeout(this.state.timeoutId);
            let id = setTimeout(this.handleInputEnd, 4000);
            this.setState({
                timeoutId: id,
            });
        });
    }

    inputHandler = status => {
        this.setState({
            input: status,
        })
        this.setState({googleSpeech: true})
    }

    stopAnimation = () => {
        this.setState({googleSpeech: false, input: ''})
    }

    render() {
        const { helpStatus, exerciseStatus, input } = this.state;

        return (
            <View style={styles.container}>
                {this.state.googleSpeech === true ?
                    <Animation text={this.state.input} index={this.state.index} stopAnimation={this.stopAnimation}/>
                    :
                    null
                }
                <View style={styles.handContainer}>
                    <HandComponent style={styles.hand} updateInput={this.updateInput}/>
                </View>
                <View style={styles.lormContainer}>
                    <Text style={{ ...styles.lormLetter, fontFamily: 'open-sans-bold' }}>{(this.state.lastLetter === ' ') ? 'ESPACE' : this.state.lastLetter }</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <RecordButton input={input} func={this.inputHandler}/>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputView}>
                            <Text style={{ ...styles.input, fontFamily: 'open-sans-bold' }}>{input}</Text>
                        </View>
                        <IconButton
                            style={styles.exButton}
                            icon="book-open"
                            color={'#1C3956'}
                            onPress={() => this.exerciseStatusHandler(true)}
                        />
                    </View>
                </View>
                <IconButton
                    style={styles.helpButton}
                    icon="alphabetical"
                    color={'#1C3956'}
                    size={50}
                    onPress={() => this.helpStatusHandler(true)}
                />
                <HelpComponent status={helpStatus} handleClose={this.helpStatusHandler} />
                <ExerciseListComponent status={exerciseStatus} handleClose={this.exerciseStatusHandler} {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    hand: {
        width: imageWidth,
        height: imageHeight
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
        width: '80%',
        marginLeft: '10%',
        color: '#1C3956'
    },
    helpButton: {
        position: 'absolute',
        right: 6,
        top: 6,
    },
    exButton: {
        display: 'flex',
        width: '10%',
    },
    rectangle: {
        position: 'absolute',
        zIndex: 1,
    },
});

export default MainComponent;



{/* <View top={this.state.debugLastY0} left={(ScreenDim.width - imageWidth) / 2 + this.state.debugLastX0}
width={this.state.debugLastX1 - this.state.debugLastX0}
height={this.state.debugLastY1 - this.state.debugLastY0}
backgroundColor='salmon' style={styles.rectangle}></View>

                    <Image style={styles.hand} source={require('../../assets/hand.png')}
                        ref={view => { this.mainComponent = view; }}
                        {...this._panResponder.panHandlers} />


*/}
