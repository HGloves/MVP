import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import HelpComponent from './HelpComponent';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 80 / 100;
const imageHeight = Math.round(imageWidth * 363 / 293);

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onRecord: false,
            helpStatus: false,
        }
    }

    onPress = () => {
        this.setState({ onRecord: !this.state.onRecord });
    };

    helpStatusHandler = status => {
        this.setState({
            helpStatus: status,
        });
    }

    render() {
        const { helpStatus } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.handContainer}>
                    <Image style={styles.hand} source={require('../../assets/hand.png')} />
                </View>
                <View style={styles.lormContainer}>
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.recordContainer}
                        onPress={this.onPress}>
                        {!this.state.onRecord ?
                            <>
                                <View style={{ ...styles.buttonActionContainer, width: '70%' }}>
                                    <Text style={{ ...styles.recordText, fontFamily: 'open-sans-bold' }}>Parler</Text>
                                </View>
                                <View style={{ ...styles.buttonActionContainer, width: '30%' }}>
                                    <Image style={styles.buttonAction} source={require('../../assets/microphone.png')} />
                                </View>
                            </>
                            :
                            <>
                                <View style={{ ...styles.buttonActionContainer, width: '70%' }}>
                                    <Text style={{ ...styles.recordText, fontFamily: 'open-sans-bold' }}>En cours</Text>
                                </View>
                                <View style={{ ...styles.buttonActionContainer, width: '30%' }}>
                                    <Image style={styles.buttonAction} source={require('../../assets/record.png')} />
                                </View>
                            </>
                        }
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder={"Bonjour"} />
                        <IconButton
                            style={styles.helpButton}
                            icon="book-open"
                            color={'#1C3956'}
                            onPress={() => this.helpStatusHandler(true)}
                        />
                    </View>
                </View>
                <HelpComponent status={helpStatus} handleClose={this.helpStatusHandler} />
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

    },
    hand: {
        marginTop: '20%',
        width: '100%',
        height: '60%',
    },
    lormContainer: {

    },
    actionsContainer: {
        position: 'absolute',
        flex: 1,
        flexDirection: 'row',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8%',
    },
    recordContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1C3956',
        borderTopRightRadius: 30,
        height: '100%',
        width: '30%',
    },
    recordText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    buttonActionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonAction: {
        width: 32,
        height: 32,
    },
    inputContainer: {
        display: 'flex',
        height: '100%',
        width: '60%',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        // backgroundColor: 'green',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        display: 'flex',
        width: '80%',
        backgroundColor: 'red'
    },
    helpButton: {
        display: 'flex',
        width: '10%',
    },
});

export default MainComponent;