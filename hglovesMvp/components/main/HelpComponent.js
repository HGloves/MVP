import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 80 / 100;
const imageHeight = Math.round(imageWidth * 363 / 293);

class HelpComponent extends React.Component {

    render() {
        const { status, handleClose } = this.props;

        return (
            <View>
                <Portal>
                    <Dialog
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <Dialog.Title>Alphabet</Dialog.Title>
                        <Dialog.Content>
                            <View style={styles.container}>

                            </View>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                onPress={() => handleClose(false)}
                                color={'#1C3956'}
                            >Fermer</Button>
                        </Dialog.Actions>
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
        height: '100%',
    },
});

export default HelpComponent;