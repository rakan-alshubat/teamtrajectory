import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
import Sound from 'react-native-sound'

const entities = {
  1: { navigation: {}, renderer: <ScrollingBackgroundImage /> },
  2: { paused: false, dimensions: [32, 84], position: [200, 160], rotate: new Animated.Value(0.5), renderer: <Ship /> },
  3: { update: true, obstacles: [], collectables: [], renderer: <Obstacle /> },
  4: { battery: 80, renderer: <Battery /> },
  5: { fuelAmount: 95, renderer: <Fuel /> },
  6: { coins: 0, renderer: <Score /> },
  7: { reset: false, renderer: <Timer /> }
}

export default class Gameplay extends PureComponent {
  static navigationOptions = {
    header: null
  }

  render () {
    entities['1'].navigation = this.props.navigation

    let gameMusic = new Sound('game_music.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error)
        return
      }
      gameMusic.play()
      gameMusic.setNumberOfLoops(-1)
      Sound.setCategory('Ambient')
    })

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

Gameplay.propTypes = {
  navigation: PropTypes.object
}
