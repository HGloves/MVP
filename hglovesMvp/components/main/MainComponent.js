import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

const ScreenDim = Dimensions.get("window");

class MainComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default MainComponent;