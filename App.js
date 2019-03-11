import React, { PureComponent } from 'react'
import { Obstacle } from './src/components/Obstacle'
import { AppRegistry, StyleSheet, Dimensions } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import { Ship } from './src/components/Ship'
import { MoveObstacles, MoveShip } from './src/systems'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const entities = {
  1: { position: [200, 100], renderer: <Ship /> },
  2: { position: [Math.random() * (WIDTH - 30), HEIGHT - 30], renderer: <Obstacle /> }
}

export default class App extends PureComponent {
  render () {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveShip, MoveObstacles]}
        entities={entities}>
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
