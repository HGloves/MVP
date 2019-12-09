import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenDim = Dimensions.get("window");
const imageWidth = ScreenDim.width * 18 / 100;
const imageHeight = Math.round(imageWidth * 487 / 579);

class ExerciseListComponent extends React.Component {

    state = {
        exercises: [
            { name: 'Bonjour', image: require('../../assets/images/exercises/hello.png') },
            { name: 'Merci', image: require('../../assets/images/exercises/thanks.png') },
            { name: 'Manger', image: require('../../assets/images/exercises/eat.png') },
            { name: 'Dormir', image: require('../../assets/images/exercises/sleep.png') },
            { name: 'Jouer', image: require('../../assets/images/exercises/play.png') },
            { name: 'Travailler', image: require('../../assets/images/exercises/work.png') },
            { name: 'Conduire', image: require('../../assets/images/exercises/drive.png') },
            { name: 'Marcher', image: require('../../assets/images/exercises/walk.png') },
            { name: 'Demander', image: require('../../assets/images/exercises/ask.png') },
        ]
    }

    handleNavigation = exercise => {
        const { handleClose, navigation } = this.props;
        navigation.navigate('Exercise', {...exercise, callback: () => {
            handleClose(true);
            navigation.navigate('Main');
        }});
        handleClose(false);
    }

    render() {
        const { status, handleClose } = this.props;
        const { exercises } = this.state;

        return (
            <View>
                <Portal>
                    <Dialog
                        visible={status}
                        onDismiss={() => handleClose(false)}>
                        <Dialog.Title style={{ color: '#1c3956', fontFamily: 'open-sans-bold' }}>Exercices</Dialog.Title>
                        <Dialog.Content>
                            <View style={styles.container}>
                                {exercises.map((exercise, key) => {
                                    return (
                                        <TouchableOpacity
                                            key={key}
                                            style={{ ...styles.exContainer, marginBottom: (exercises.length - key <= 3 ? '0%' : '10%')}}
                                            onPress={() => this.handleNavigation(exercise)}
                                            >
                                            <Image
                                                key={key}
                                                source={exercise.image}
                                                style={{ width: imageWidth, height: imageHeight }}
                                            />
                                            <Text style={styles.exText}>{exercise.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button icon="arrow-left" color='#1c3956' onPress={() => handleClose(false)}>
                                Retour
                            </Button>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    exContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exText: {
        color: '#1c3956',
        fontFamily: 'open-sans-bold'
    },
});

export default ExerciseListComponent;