import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 50 / 100;
const imageHeight = Math.round(imageWidth * 511 / 558);

class ResultDialogComponent extends React.Component {

    render() {
        const { status, handleClose, value } = this.props;

        return (
            <View>
                <Portal>
                    <Dialog
                        style={{width: '60%', height: '80%', marginLeft: '20%'}}
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <View style={styles.container}>
                            <View style={styles.firstPlayerContainer}>

                            </View>
                            <View style={styles.secondPlayerContainer}>

                            </View>
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
});

export default ResultDialogComponent;