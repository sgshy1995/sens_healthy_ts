/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from "./src/pages/Home";
import Mine from "./src/pages/Mine";
import Recovery from "./src/pages/Recovery";
import Store from "./src/pages/Store";
import Header from "./src/pages/Header";
import { View, Text } from "react-native";

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = focused
                ? 'planet'
                : 'planet-outline';
            } else if (route.name === 'Recovery') {
              iconName = focused ? 'heart-circle' : 'heart-circle-outline';
            } else if (route.name === 'Store') {
              iconName = focused ? 'basket' : 'basket-outline';
            } else if (route.name === 'Mine') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          header: route.name === 'Home' ? (props)=>(<Header title={props.route.name} />) : undefined,
          headerShown: route.name === 'Home',
          title: route.name === 'Home' ? '首页' : route.name === 'Recovery' ? '康复' : route.name === 'Store' ? '商城' : route.name === 'Mine' ? '我的' : '',
          tabBarActiveTintColor: '#4F68B0',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Recovery" component={Recovery} />
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Mine" component={Mine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
