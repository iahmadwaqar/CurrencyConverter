import React from 'react';
import {SafeAreaView, StatusBar, Platform, StyleSheet} from 'react-native';
import Options from './screens/Options';
import Home from './screens/Home';
import colors from './constants/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.lightGreen} />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
