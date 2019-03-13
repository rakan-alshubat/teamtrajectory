import React, { PureComponent } from 'react'
import { Obstacle } from './src/components/Obstacle'
import { AppRegistry, StyleSheet, Dimensions } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import { Ship } from './src/components/Ship'
import { MoveBackground, MoveShip, MoveObstacles } from './src/systems'
import ScrollingBackgroundImage from './src/views/ScrollingBackgroundImage'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const entities = {
  1: { renderer: <ScrollingBackgroundImage /> },
  2: { position: [200, 130], renderer: <Ship /> },
  3: { position: [Math.random() * (WIDTH - 30), HEIGHT - 30], renderer: <Obstacle /> }
}

export default class App extends PureComponent {
  render () {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveBackground, MoveShip, MoveObstacles]}
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
