import React, { PureComponent } from 'react'
import { AppRegistry, StyleSheet, View, Dimensions } from 'react-native'
import { GameLoop } from 'react-native-game-engine'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      x: WIDTH / 2,
      y: HEIGHT / 2
    }
  }

  onUpdate ({ touches }) {
    let move = touches.find(x => x.type === 'move')
    if (move) {
      this.setState({
        x: this.state.x + move.delta.pageX,
        y: this.state.y + move.delta.pageY
      })
      console.log(this.state)
    }
  }

  render () {
    const x = this.state.x - 20
    const y = this.state.y - 20
    return (
      <GameLoop style={styles.container} onUpdate={this.onUpdate.bind(this)}>
        <View style={[styles.finger, { top: y, left: x }]} />
      </GameLoop>
    )
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: '#CCC',
    borderWidth: 4,
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: 'black',
    position: 'absolute'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})

AppRegistry.registerComponent('App', () => App)
