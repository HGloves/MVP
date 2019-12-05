import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet, View } from 'react-native';

import Navigation from './navigation/Navigation';

const ScreenDim = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
        <Navigation/>
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
