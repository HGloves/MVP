import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View, Image, Text } from 'react-native';
import RecordButton from './RecordButton'
import { IconButton } from 'react-native-paper';
import HelpComponent from './HelpComponent';
import ExerciseListComponent from '../exercise/ExerciseListComponent';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 90 / 100;
const imageHeight = Math.round(imageWidth * 2400 / 1920);

class MainComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            helpStatus: false,
            exerciseStatus: false,
        }
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

    render() {
        const { helpStatus, exerciseStatus } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.handContainer}>
                    <Image style={styles.hand} source={require('../../assets/hand.png')} />
                </View>
                <View style={styles.lormContainer}>
                    <Text style={{ ...styles.lormLetter, fontFamily: 'open-sans-bold' }}>H</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <RecordButton/>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputView}>
                            <Text style={{ ...styles.input, fontFamily: 'open-sans-bold' }}>HELLO TEST</Text>
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
        justifyContent: 'center'
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
});

export default MainComponent;