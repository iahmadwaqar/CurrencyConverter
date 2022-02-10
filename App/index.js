import React from 'react';
import {SafeAreaView, StatusBar, Platform, StyleSheet} from 'react-native';
import Options from './screens/Options';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
