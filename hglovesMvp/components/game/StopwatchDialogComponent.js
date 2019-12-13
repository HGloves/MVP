import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const stopWatch = require('../../assets/images/icon/stopWatch.gif');

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 50 / 100;
const imageHeight = Math.round(imageWidth * 511 / 558);

class StopwatchDialogComponent extends React.Component {

    render() {
        const { status, handleClose, value } = this.props;

        return (
            <View>
                <Portal>
                    <Dialog
                        style={{width: '60%', marginLeft: '20%'}}
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <TouchableOpacity onPress={() => handleClose(false)} style={styles.container}>
                            <Image source={stopWatch} style={{ width: imageWidth, height: imageHeight }} />
                            <Text style={styles.dialogText}>{'Vous avez mis ' + value + 's'}</Text>
                        </TouchableOpacity>
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
        color: '#175190',
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        paddingBottom: 10,
    }
});

export default StopwatchDialogComponent;