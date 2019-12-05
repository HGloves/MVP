import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 80 / 100;
const imageHeight = Math.round(imageWidth * 363 / 293);

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onRecord: false,
        }
    }

    onPress = () => {
        this.setState({onRecord: !this.state.onRecord});
    };

    render() {
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
                                <Text style={{ ...styles.recordText, fontFamily: 'open-sans-bold' }}>
                                    Parler
                                </Text>
                                <Image style={styles.microphone} source={require('../../assets/microphone.png')} />
                            </>
                            :
                            <>
                                <Text style={{ ...styles.recordText, fontFamily: 'open-sans-bold' }}>
                                    En cours
                                </Text>
                                <Image style={styles.microphone} source={require('../../assets/record.png')} />
                            </>
                        }
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder={"Bonjour"}/>
                    </View>
                </View>
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
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 50,
        height: '100%',
        width: '30%',
    },
    inputContainer: {
        height: '100%',
        width: '60%',
    },
    recordText: {
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: '12%',
        marginLeft: '10%'
    },
    microphone: {
        width: 32,
        height: 32,
        marginTop: '12%',
        marginLeft: '7%'
    },
});

export default MainComponent;