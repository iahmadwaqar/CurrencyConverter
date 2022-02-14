import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Entypo} from '@expo/vector-icons';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import ConversionContextProvider from '../util/ConversionContext';

import colors from '../constants/colors';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();
function MainNavigation() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator mode="modal" initialRouteName="Home">
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({route}) => ({
          title: route.params && route.params.title,
          headerBackVisible: false,
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo name="cross" size={30} color={colors.lightGreen} />
            </TouchableOpacity>
          ),
          animation: 'fade',
        })}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{animation: 'slide_from_right'}}
      />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <ConversionContextProvider>
        <MainNavigation />
      </ConversionContextProvider>
    </NavigationContainer>
  );
};

export default Navigation;
