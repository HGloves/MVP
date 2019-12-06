import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View, Image, TextInput } from 'react-native';
import RecordButton from './RecordButton'

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 80 / 100;
const imageHeight = Math.round(imageWidth * 363 / 293);

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.handContainer}>
                    <Image style={styles.hand} source={require('../../assets/hand.png')} />
                </View>
                <View style={styles.lormContainer}>
                </View>
                <View style={styles.actionsContainer}>
                    <RecordButton/>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder={"Bonjour"} />
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
    inputContainer: {
        height: '100%',
        width: '60%',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: 'green'
    },
    input: {
        backgroundColor: 'red'
    }
});

export default MainComponent;