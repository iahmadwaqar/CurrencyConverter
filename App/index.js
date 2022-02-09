import * as React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import Constants from 'expo-constants';
const DATA = [
  {
    tweet_id: '807811447862468608',
  },
  {
    tweet_id: '80781144786246808',
  },
  {
    tweet_id: '80781144786246860',
  },
];

export default function App() {
  const renderItem = ({item}) => {
    let JS =
      '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';

    let source =
      JS +
      `<blockquote class="twitter-tweet"><a href="https://twitter.com/x/status/${item.tweet_id}"></a></blockquote>`;
    return (
      <View style={styles.container}>
        <WebView style={styles.container} source={{html: source}} />
      </View>
    );
  };
  return (
    <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
      <Text> Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    height: 200,
  },
});
