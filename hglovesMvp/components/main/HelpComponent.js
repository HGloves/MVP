import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenDim = Dimensions.get("window");
const screenRatio = ScreenDim.width / ScreenDim.height;
const imageWidth = ScreenDim.width * 18 / 100;
const imageHeight = Math.round(imageWidth * 683 / 546);

class HelpComponent extends React.Component {

    state = {
        letters: [
            { name: 'A', image: require('../../assets/images/letters/A.png') },
            { name: 'B', image: require('../../assets/images/letters/B.png') },
            { name: 'C', image: require('../../assets/images/letters/C.png') },
            { name: 'Ç', image: require('../../assets/images/letters/Ç.png') },
            { name: 'D', image: require('../../assets/images/letters/D.png') },
            { name: 'E', image: require('../../assets/images/letters/E.png') },
            { name: 'F', image: require('../../assets/images/letters/F.png') },
            { name: 'G', image: require('../../assets/images/letters/G.png') },
            { name: 'H', image: require('../../assets/images/letters/H.png') },
            { name: 'I', image: require('../../assets/images/letters/I.png') },
            { name: 'J', image: require('../../assets/images/letters/J.png') },
            { name: 'K', image: require('../../assets/images/letters/K.png') },
            { name: 'L', image: require('../../assets/images/letters/L.png') },
            { name: 'M', image: require('../../assets/images/letters/M.png') },
            { name: 'N', image: require('../../assets/images/letters/N.png') },
            { name: 'O', image: require('../../assets/images/letters/O.png') },
            { name: 'P', image: require('../../assets/images/letters/P.png') },
            { name: 'Q', image: require('../../assets/images/letters/Q.png') },
            { name: 'R', image: require('../../assets/images/letters/R.png') },
            { name: 'S', image: require('../../assets/images/letters/S.png') },
            { name: 'T', image: require('../../assets/images/letters/T.png') },
            { name: 'U', image: require('../../assets/images/letters/U.png') },
            { name: 'V', image: require('../../assets/images/letters/V.png') },
            { name: 'W', image: require('../../assets/images/letters/W.png') },
            { name: 'X', image: require('../../assets/images/letters/X.png') },
            { name: 'Y', image: require('../../assets/images/letters/Y.png') },
            { name: 'Z', image: require('../../assets/images/letters/Z.png') },
            { name: 'Espace', image: require('../../assets/images/letters/SPACE.png') },
        ],
        legends: [
            { image: require('../../assets/images/legend/1Touch.png'), description: 'Toucher 1x' },
            { image: require('../../assets/images/legend/2Touch.png'), description: 'Toucher 2x' },
            { image: require('../../assets/images/legend/4Touch.png'), description: 'Toucher 4x' },
            { image: require('../../assets/images/legend/arrow.png'), description: 'Appuyer avec l\'index dans le sens des flèches' },
        ],
    }

    render() {
        const { letters, legends } = this.state;
        const { status, handleClose } = this.props;

        return (
            <View>
                <Portal>
                    <Dialog
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <Dialog.Title style={{ color: '#1c3956', fontFamily: 'open-sans-bold' }}>Alphabet</Dialog.Title>
                        <Dialog.Content>
                            <ScrollView style={styles.letterScrollContainer}>
                                <View style={styles.container}>
                                    {letters.map((letter, key) => {
                                        return (
                                            <View key={key} style={styles.letterContainer}>
                                                <Image
                                                    style={{ width: imageWidth, height: imageHeight }}
                                                    key={key}
                                                    source={letter.image}
                                                />
                                                <Text style={letter.name === "Espace" ? letterStyle.letterTextMobile : styles.letterText}>{letter.name}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            </ScrollView>
                            <ScrollView style={styles.legendContainer}>
                                {legends.map((legend, key) => {
                                    return (
                                        <View key={key} style={styles.legendDiv}>
                                            <Image
                                                key={key}
                                                source={legend.image}
                                                style={{ width: 30, height: 30 }}
                                                resizeMode='contain'
                                            />
                                            <Text style={styles.legendText}>{legend.description}</Text>
                                        </View>
                                    );
                                })}
                            </ScrollView>
                            <Button
                                onPress={() => handleClose(false)}
                                color={'#1C3956'}
                            >J'ai compris</Button>
                        </Dialog.Content>
                    </Dialog>
                </Portal>
            </View>
        );
    }
}

let letterStyle = null;

if (screenRatio > 0.6) {
    letterStyle = StyleSheet.create({
        letterTextMobile: {
            textAlign: 'center',
            color: '#1c3956',
            fontFamily: 'open-sans-bold',
            fontSize: 25,
        }
    });
} else {
    letterStyle = StyleSheet.create({
        letterTextMobile: {
            textAlign: 'center',
            color: '#1c3956',
            fontFamily: 'open-sans-bold',
            marginTop: 10,
            fontSize: 15,
        }
    });
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '2%',
        paddingBottom: '15%',
    },
    letterScrollContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '60%',
    },
    letterContainer: {
        display: 'flex',
        width: '20%',
        height: '20%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    letterText: {
        textAlign: 'center',
        color: '#1c3956',
        fontFamily: 'open-sans-bold',
        fontSize: 25,
    },
    letterTextMobile: {
        textAlign: 'center',
        color: '#1c3956',
        fontFamily: 'open-sans-bold',
        fontSize: 15,
    },
    legendContainer: {
        display: 'flex',
        width: '100%',
        height: '20%',
        marginVertical: '5%',
        flexDirection: 'column',
    },
    legendDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendText: {
        color: '#1c3956',
        fontFamily: 'open-sans',
        fontSize: 20,
        marginLeft: '5%',
    },
});

export default HelpComponent;