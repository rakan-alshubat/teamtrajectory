import React, { PureComponent } from 'react'
import Obstacle from './src/components/Obstacle'
import { AppRegistry, StyleSheet, Dimensions } from 'react-native'
import { AppRegistry, StyleSheet, Dimensions } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import { Ship } from './src/components/Ship'
import { MoveShip } from './src/systems'

const { width: WIDTH } = Dimensions.get('window')

export default class App extends PureComponent {
  render () {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveShip]}
        entities={{
          1: { position: [200, 100], renderer: <Ship /> }
        }}>
      </GameEngine>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})

AppRegistry.registerComponent('App', () => App)
