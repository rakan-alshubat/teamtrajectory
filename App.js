import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from './src/views/MainScreen'
import UpScreen from './src/views/UpScreen'
import EndScreen from './src/views/EndScreen'
import Gameplay from './src/views/Gameplay'

const RootStack = createStackNavigator(
  {
    Home: MainScreen,
    Upgrades: UpScreen,
    End: EndScreen,
    Game: Gameplay
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render () {
    return (
      <AppContainer/>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
