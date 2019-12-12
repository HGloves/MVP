import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const checked = require('../../assets/images/icon/check.gif');

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 60 / 100;
const imageHeight = Math.round(imageWidth * 600 / 800);

class CheckDialogComponent extends React.Component {

    render() {
        const { status, handleClose } = this.props;

        return (
            <View>
                <Portal>
                    <Dialog
                        style={{width: '60%', marginLeft: '20%'}}
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <View style={styles.container}>
                            <Image source={checked} style={{ width: imageWidth, height: imageHeight }} />
                            <Text style={styles.dialogText}>Bien joué</Text>
                        </View>
                    </Dialog>
                </Portal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogText: {
        textAlign: 'center',
        color: '#00D37C',
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        paddingBottom: 10,
    }
});

export default CheckDialogComponent;