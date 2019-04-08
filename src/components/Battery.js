import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, View } from 'react-native'

export default class Battery extends PureComponent {
  render () {
    const battery = this.props.battery

    const x = 0
    const y = 0

    const one = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 8 }}
        source={require('../assets/bar.png')}
      />
    )
    const two = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 18 }}
        source={require('../assets/bar.png')}
      />
    )
    const three = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 28 }}
        source={require('../assets/bar.png')}
      />
    )
    const four = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 38 }}
        source={require('../assets/bar.png')}
      />
    )
    const five = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 48 }}
        source={require('../assets/bar.png')}
      />
    )
    const six = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 58 }}
        source={require('../assets/bar.png')}
      />
    )
    const seven = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 68 }}
        source={require('../assets/bar.png')}
      />
    )
    const eight = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 78 }}
        source={require('../assets/bar.png')}
      />
    )

    let arr
    if (battery > 70) {
      arr = [one, two, three, four, five, six, seven, eight]
    } else if (battery > 60) {
      arr = [one, two, three, four, five, six, seven]
    } else if (battery > 50) {
      arr = [one, two, three, four, five, six]
    } else if (battery > 40) {
      arr = [one, two, three, four, five]
    } else if (battery > 30) {
      arr = [one, two, three, four]
    } else if (battery > 20) {
      arr = [one, two, three]
    } else if (battery > 10) {
      arr = [one, two]
    } else if (battery > 0) {
      arr = [one]
    }

    return (
      <View style={{ position: 'absolute', top: '6.53%', left: '7.33%' }}>
        <Image
          style={{ height: 57, width: 21.1 }}
          source={require('../assets/BatteryFrame.png')}
        />
        {
          arr
        }
        <View style={{ position: 'absolute', width: 80, height: 20 }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  },
  gameOver: {
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20
  }
})

Battery.propTypes = {
  battery: PropTypes.number
}

export { Battery }
