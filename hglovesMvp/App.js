import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

import HomeComponent from './components/home/HomeComponent';

const ScreenDim = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
        <HomeComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ScreenDim.width,
    height: ScreenDim.height,
  },
});
