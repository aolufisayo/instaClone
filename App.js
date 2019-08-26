/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width

import AppNavigator from './src/navigators/AppNavigator';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH
  }
});

export default App;
