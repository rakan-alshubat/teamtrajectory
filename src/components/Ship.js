import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'

let lastXPosition = null
let lastMotion = 'still'

class Ship extends PureComponent {
  render () {
    const width = this.props.dimensions[0]
    const height = this.props.dimensions[1]
    const x = this.props.position[0] - (width / 2)
    const y = this.props.position[1] - (height / 2)

    const rotate = this.props.rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['-15deg', '15deg']
    })

    if (lastXPosition && x > lastXPosition) {
      if (lastMotion === 'still') {
        Animated.timing(
          this.props.rotate,
          {
            toValue: 1,
            duration: 250,
            easing: Easing.linear
          }
        ).start()
      } else if (lastMotion === 'left') {
        Animated.timing(
          this.props.rotate,
          {
            toValue: 1,
            duration: 250,
            easing: Easing.linear
          }
        ).start()
      }

      lastMotion = 'right'
    } else if (lastXPosition && x < lastXPosition) {
      if (lastMotion === 'still') {
        Animated.timing(
          this.props.rotate,
          {
            toValue: 0,
            duration: 250,
            easing: Easing.linear
          }
        ).start()
      } else if (lastMotion === 'right') {
        Animated.timing(
          this.props.rotate,
          {
            toValue: 0,
            duration: 250,
            easing: Easing.linear
          }
        ).start()
      }

      lastMotion = 'left'
    } else {
      if (lastMotion === 'left') {
        Animated.timing(
          this.props.rotate,
          {
            toValue: 0.5,
            duration: 250,
            easing: Easing.linear
          }
        ).start()
      } else if (lastMotion === 'right') {
        Animated.timing(
          this.props.rotate,
          {
            toValue: 0.5,
            duration: 250,
            easing: Easing.linear
          }
        ).start()
      }

      lastMotion = 'still'
    }

    lastXPosition = x

    return (
      <Animated.Image
        style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
        source={require('../assets/lvl3-pink.png')}
      />
    )
  }
}

Ship.propTypes = {
  dimensions: PropTypes.node,
  position: PropTypes.node,
  rotate: PropTypes.object,
  update: PropTypes.bool,
  pause: PropTypes.bool,
  shipLevel: PropTypes.string,
  fuelLevel: PropTypes.string,
  thrusterControlLevel: PropTypes.string,
  thrusterEfficiencyLevel: PropTypes.string,
  solarPanelsLevel: PropTypes.string,
  batteryCapacityLevel: PropTypes.string,
  coinBoostLevel: PropTypes.string
}

export { Ship }
