import React from 'react';
import {StatusBar, StyleSheet, FlatList, Text} from 'react-native';
import colors from '../constants/colors';
import currencies from '../data/currencies';
import {RowItem, RowSeparator} from '../components/RowItem';

const CurrencyList = ({navigation, route = {}}) => {
  const {activeCurrency, onSetCurrency} = route.params;
  const renderItem = ({item}) => {
    return (
      <RowItem
        title={item}
        onPress={() => {
          onSetCurrency && onSetCurrency(item);
          navigation.pop();
        }}
        icon={activeCurrency === item && 'check'}
      />
    );
  };
  return (
    <FlatList
      data={currencies}
      renderItem={renderItem}
      keyExtractor={item => item}
      ItemSeparatorComponent={() => <RowSeparator />}
    />
  );
};

export default CurrencyList;
