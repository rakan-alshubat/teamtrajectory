import React, { PureComponent } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { GameLoop } from 'react-native-game-engine'

const { width: WIDTH } = Dimensions.get('window')

export default class Ship extends PureComponent {
  constructor () {
    super()
    this.state = {
      width: 100,
      height: 50,
      x: (WIDTH / 2) - 50,
      y: 100,
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

  onUpdate ({ touches }) {
    const lastTouch = touches.find(x => x.type === 'start')
    if (!lastTouch) return
    console.log(lastTouch.event.pageX > (WIDTH / 2))
    //if (lastTouch && lastTouch.event.pageX > WIDTH / 2) console.log('GREATER')
  }

  componentDidMount () {
    console.log('mounted')
  }

  render () {
    return (
      <GameLoop style={styles.container} onUpdate={this.onUpdate.bind(this)}>
        <View style={[styles.ship, { width: this.state.width, height: this.state.height, left: this.state.x, bottom: this.state.y }]} />
      </GameLoop>
    )
  }
}

const styles = StyleSheet.create({
  ship: {
    position: 'absolute',
    backgroundColor: 'grey',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'black'
  }
})
