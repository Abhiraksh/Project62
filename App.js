import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import MarkScreen from './screens/marking';
import SumScreen from './screens/summary';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
      
        <AppHeader/>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  MarkScreen: MarkScreen,
  SumScreen: SumScreen,
});

const AppContainer = createAppContainer(AppNavigator);