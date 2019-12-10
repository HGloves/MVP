import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av'
import * as Permissions from 'expo-permissions'
import * as FileSystem from 'expo-file-system';
//import apiKey from '../../apiKey.json'

const recordingOptions = {
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB,
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
}

class RecordButton extends React.Component {
    constructor(props) {
        super(props);
        this.recorder = null
        this.fileEncoded = null
        this.state = {
            onRecord: false,
            isFetching: false,
            transcript: undefined
        }
    }

    getAudio = async () => {
        this.setState({ isFetching: true })

        try {
            const info = await FileSystem.getInfoAsync(this.recorder.getURI())
            await FileSystem.readAsStringAsync(info.uri, { encoding: FileSystem.EncodingType.Base64 })
                .then((res) => {
                    this.fileEncoded = res
                })

            const response = await fetch("https://speech.googleapis.com/v1/speech:recognize?key=" + apiKey.key, {
                method: "POST",
                contentType: "application/json",
                body: JSON.stringify({
                    config: {
                        encoding: "AMR_WB",
                        sampleRateHertz: 16000,
                        languageCode: "fr-FR"
                    },
                    audio: {
                        content: this.fileEncoded
                    }
                })
            })

            const data = await response.json()
            if (data.results != undefined && data.results[0].alternatives[0] != undefined) {
                this.props.func(data.results[0].alternatives[0].transcript)
            }
        } catch (err) {
            console.log(err)
        }
        this.setState({ isFetching: false })
    }

    startRecording = async () => {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
        if (status != 'granted')
            return
        this.setState({ onRecord: true })

        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        }).catch(() => {
            return
        })
        const recording = new Audio.Recording()

        try {
            await recording.prepareToRecordAsync(recordingOptions)
            await recording.startAsync()
        } catch (error) {
            console.log(error)
            this.stopRecording()
        }

        this.recorder = recording
    }

    stopRecording = async () => {
        this.setState({ onRecord: false })

        try {
            await this.recorder.stopAndUnloadAsync().catch(() => {
                return
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleRecord = () => {
        if (this.state.onRecord == false) {
            this.startRecording()
        } else {
            this.stopRecording()
            // this.getAudio()
            this.props.func("bab")
        }
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