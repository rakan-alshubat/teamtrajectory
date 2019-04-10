import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'
import { Storage } from '../storage'

let lastXPosition = null
let lastMotion = 'still'

class Ship extends PureComponent {
  constructor (props) {
    super(props)
    this.shipLevel = 1
  }

  componentDidMount () {
    let self = this
    Storage.getShipLevel().then(level => { self.shipLevel = Number(level) })
  }

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
            duration: 500,
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
            duration: 500,
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

    if (this.shipLevel === 1) {
      switch (this.props.color) {
        case 1:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-grey.png')}
            />
          )
        case 2:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-light-purple.png')}
            />
          )
        case 3:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-orange.png')}
            />
          )
        case 4:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-pink.png')}
            />
          )
        case 5:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-purple.png')}
            />
          )
        case 6:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-yellow.png')}
            />
          )
        case 7:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-dark-purple.png')}
            />
          )
        default:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl1-grey.png')}
            />
          )
      }
    } else if (this.shipLevel === 2) {
      switch (this.props.color) {
        case 1:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-grey.png')}
            />
          )
        case 2:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-light-purple.png')}
            />
          )
        case 3:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-orange.png')}
            />
          )
        case 4:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-pink.png')}
            />
          )
        case 5:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-purple.png')}
            />
          )
        case 6:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-yellow.png')}
            />
          )
        case 7:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-dark-purple.png')}
            />
          )
        default:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl2-grey.png')}
            />
          )
      }
    } else {
      switch (this.props.color) {
        case 1:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-grey.png')}
            />
          )
        case 2:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-light-purple.png')}
            />
          )
        case 3:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-orange.png')}
            />
          )
        case 4:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-pink.png')}
            />
          )
        case 5:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-purple.png')}
            />
          )
        case 6:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-yellow.png')}
            />
          )
        case 7:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-dark-purple.png')}
            />
          )
        default:
          return (
            <Animated.Image
              style={{ height: height, width: width, left: x, bottom: y, transform: [{ rotate }] }}
              source={require('../assets/lvl3-grey.png')}
            />
          )
      }
    }
  }
}

Ship.propTypes = {
  dimensions: PropTypes.node,
  position: PropTypes.node,
  rotate: PropTypes.object,
  update: PropTypes.bool,
  pause: PropTypes.bool,
  color: PropTypes.number
}

export { Ship }
