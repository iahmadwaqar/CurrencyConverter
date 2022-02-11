import React from 'react';
import {SafeAreaView, StatusBar, Platform, StyleSheet} from 'react-native';
import Navigation from './config/Navigation';
import colors from './constants/colors';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
      <Navigation />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
