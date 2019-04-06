import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Score extends Component {
  render () {
    // const score = 50
    return (
      <View style={styles.score}>
        <Image
          style={{
            height: 12,
            width: 12
          }}
          source={require('../assets/coin.png')}
        />
        <Text
          style={{
            color: '#f7a01d'
          }}
        >
          0050
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    color: '#f7a01d',
    top: 115,
    right: 266,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export { Score }
