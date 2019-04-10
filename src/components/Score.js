import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Score extends Component {
  render () {
    let coins = String(this.props.coins)
    coins = coins.length === 4 ? coins : coins.length === 3 ? '0' + coins : coins.length === 2 ? '00' + coins : '000' + coins

    return (
      <View style={styles.score}>
        <Image
          style={{ height: 18, width: 18 }}
          source={require('../assets/collectable-1.png')}
        />
        <Text style={{ color: '#f7a01d' }}>
          {
            coins
          }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    color: '#f7a01d',
    top: '10.47%',
    left: '16.27%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#0a0c21',
    paddingRight: 5
  }
})

Score.propTypes = {
  coins: PropTypes.number
}

export { Score }
