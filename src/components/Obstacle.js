import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

class Obstacle extends PureComponent {
  render () {
    const width = 30
    const height = 30
    const x = this.props.position[0] - (width / 2)
    const y = this.props.position[1] - (height / 2)
    return (
      <View style={[styles.obstacle, { width, height, left: x, bottom: y }]}/>
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

Obstacle.propTypes = {
  position: PropTypes.node
}

export { Obstacle }
