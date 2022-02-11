import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {format} from 'date-fns';
import colors from '../constants/colors';
import Button from '../components/Button';
import ConversionInput from '../components/ConversionInput';

const Home = ({navigation}) => {
  const [text, setText] = useState('');
  const baseCurrency = 'USD';
  const targetCurrency = 'PKR';
  const conversionRate = '175.00';
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.lightGreen} />
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Options')}>
          <Entypo name="menu" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
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
          onPress={() => navigation.navigate('Options')}
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
    </View>
  );
}; // end of Home

const screen = Dimensions.get('window'); // get the screen dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
  },
  content: {
    // justifyContent: 'center',
    paddingTop: screen.height * 0.15,
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
  menuIcon: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
export default Home; // end of export default Home
