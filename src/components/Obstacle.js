import React, { PureComponent } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { GameLoop } from 'react-native-game-engine'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class Ship extends PureComponent {
  constructor () {
    super()
    this.state = {
      width: 30,
      height: 30,
      x: Math.random() * (WIDTH - 30),
      y: HEIGHT,
      velocityX: 0,
      velocityY: 0,
      accelerationX: 0,
      accelerationY: 0,
      batteryConsumption: 1,
      batteryRecovery: 0,
      fuel: 100,
      battery: 100,
      upgrades: {
        thrusterControl: 0,
        thrusterEfficiency: 0,
        fuelCapacity: 0,
        batteryCapacity: 0,
        batteryEfficiency: 0,
        solarPanels: 0,
        coinBooster: 0
      }
    }
  }

  onUpdate () {
    if (this.state.y === 0) {
      this.setState({
        x: Math.random() * (WIDTH - 30),
        y: HEIGHT
      })
    } else {
      this.setState({
        y: this.state.y - 1
      })
    }
  }

  componentDidMount () {
    console.log('mounted')
  }

  render () {
    return (
      <GameLoop style={styles.container}>
        <View style={[styles.obstacle, { width: this.state.width, height: this.state.height, left: Math.random() * (WIDTH - 30), bottom: HEIGHT - 40 }]}/>
        <View style={[styles.obstacle, { width: this.state.width, height: this.state.height, left: Math.random() * (WIDTH - 30), bottom: HEIGHT - 40 }]}/>
      </GameLoop>
    )
  }
}

const styles = StyleSheet.create({
  obstacle: {
    position: 'absolute',
    backgroundColor: 'grey',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'black'
  }
})
