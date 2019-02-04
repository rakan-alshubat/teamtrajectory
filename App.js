import React from 'react'
import { Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MainScreen from './src/views/MainScreen'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class App extends React.Component {
  render () {
    return (
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})
