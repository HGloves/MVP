import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

const ScreenDim = Dimensions.get("window");

class HomeComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeComponent;