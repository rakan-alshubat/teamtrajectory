import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

class Obstacle extends PureComponent {
  render () {
    const width = 30
    const height = 30
    const x = this.props.position[0] - (width / 2)
    const y = this.props.position[1] - (height / 2)
    return (
      <Image
        style={{ height: height, width: width, left: x, bottom: y }}
        source={require('../assets/bonus-coin.png')}
      />
    )
  }
}

Obstacle.propTypes = {
  position: PropTypes.node
}

export { Obstacle }
