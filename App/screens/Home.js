import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import ConversionInput from '../components/ConversionInput';
import colors from '../constants/colors';
import {format} from 'date-fns';
import Button from '../components/Button';

const Home = () => {
  const [text, setText] = useState('');
  const baseCurrency = 'USD';
  const targetCurrency = 'PKR';
  const conversionRate = '175.00';
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.header}>Currency Converter</Text>
      <ConversionInput
        text={baseCurrency}
        onPress={() => alert('Conversion Button')}
        value={text}
        keyboardType={'numeric'}
        onChangeText={text => setText(text)}
        placeholder={'Enter Amount'}
      />
      <ConversionInput
        text={targetCurrency}
        onPress={() => alert('Conversion Button')}
        value={text}
        placeholder={'Result'}
        editable={false}
      />
      <Text style={styles.note}>
        {`1 ${baseCurrency} is equal to ${conversionRate} ${targetCurrency} as of ${format(
          new Date(),
          'MMMM do, yyyy',
        )}`}
      </Text>
      <Button
        onPress={() => alert('Conversion Button')}
        text={'Swap Currency'}
      />
    </View>
  );
}; // end of Home

const screen = Dimensions.get('window'); // get the screen dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    position: 'absolute',
    resizeMode: 'contain',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.5,
    height: screen.width * 0.5,
    resizeMode: 'contain',
  },
  note: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
export default Home; // end of export default Home
