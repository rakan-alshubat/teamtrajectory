import React, { PureComponent } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import { Ship } from '../components/Ship'
import { Obstacle } from '../components/Obstacle'
import { Battery } from '../components/Battery'
import { Fuel } from '../components/Fuel'
import { Score } from '../components/Score'
import { Timer } from '../components/Timer'
import { Tick } from '../systems'
import ScrollingBackgroundImage from './ScrollingBackgroundImage'

const entities = {
  1: { renderer: <ScrollingBackgroundImage /> },
  2: { paused: false, dimensions: [32, 84], position: [200, 160], rotate: new Animated.Value(0.5), renderer: <Ship /> },
  3: { update: true, obstacles: [], collectables: [], renderer: <Obstacle /> },
  4: { renderer: <Battery /> },
  5: { fuelAmount: 80, renderer: <Fuel /> },
  6: { renderer: <Score /> },
  7: { renderer: <Timer /> }
}

export default class Gameplay extends PureComponent {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <GameEngine
        style={styles.container}
        systems={[Tick]}
        entities={entities}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
