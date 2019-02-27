import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

class Ship extends PureComponent {
  render () {
    const width = 100
    const height = 50
    const x = this.props.position[0] - (width / 2)
    const y = this.props.position[1] - (height / 2)
    return (
      <View style={[styles.ship, { width, height, left: x, bottom: y }]} />
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

Ship.propTypes = {
  position: PropTypes.node
}

export { Ship }
