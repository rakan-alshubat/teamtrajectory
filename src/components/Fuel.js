import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import PropTypes from 'prop-types'

export default class Fuel extends Component {
  render () {
    const width = this.props.fuelAmount
    // const height = 20
    // bot = 145
    return (
      <View style={{ position: 'absolute', height: 12.4, width: 101, top: '3.69%', left: '7.47%' }}>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../assets/fuelBar.png')}
        />

        <View
          style={[
            styles.square,
            { position: 'absolute', width, height: 6.7, top: 2.5, left: 3 }
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'white'
  }
})

Fuel.propTypes = {
  fuelAmount: PropTypes.node
}

export { Fuel }
