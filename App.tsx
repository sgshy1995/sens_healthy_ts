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

export const ThemContext = React.createContext({
  index: 0,
  dispatch: (index: number) => {}
});

const App = () => {

  const [index, setIndex] = React.useState(0);

  const handleChangeIndex = (index: number) => {
    setIndex(index);
  }

  return (
    <ThemContext.Provider value={{index, dispatch: handleChangeIndex}}>
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
            title: route.name === 'Home' ? '??????' : route.name === 'Recovery' ? '??????' : route.name === 'Store' ? '??????' : route.name === 'Mine' ? '??????' : '',
            tabBarActiveTintColor: '#4F68B0',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" children={()=><Home />} />
          <Tab.Screen name="Recovery" component={Recovery} />
          <Tab.Screen name="Store" component={Store} />
          <Tab.Screen name="Mine" component={Mine} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemContext.Provider>

  );
};

export default App;
