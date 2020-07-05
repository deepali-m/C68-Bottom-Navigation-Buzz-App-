import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import FB from './screens/fb'
import IN from './screens/in'

export default class App extends React.Component {
  render(){
    return(
      
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: FB,
  Instagram: IN
}
  )

const AppContainer = createAppContainer(TabNavigator);


