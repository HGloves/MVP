import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class RecordButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onRecord: false,
        }
    }

    handleRecord = () => {
        this.setState({ onRecord: !this.state.onRecord });
    };

    render() {
        return (
            <TouchableOpacity style={styles.recordContainer}
                onPress={() => this.handleRecord()}>
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
        );
    }
}

const styles = StyleSheet.create({
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
});

export default RecordButton;