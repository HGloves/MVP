import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import HomeComponent from './components/home/HomeComponent';
import MainComponent from './components/main/MainComponent';

const ScreenDim = Dimensions.get("window");

class App extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans': require('./assets/fonts/OpenSans.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSansBold.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { fontLoaded } = this.state;

        if (!fontLoaded)
            return (
                <View/>
            );
        return (
            <View style={styles.container}>
                <MainComponent />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: ScreenDim.width,
        height: ScreenDim.height,
    },
});

export default App;