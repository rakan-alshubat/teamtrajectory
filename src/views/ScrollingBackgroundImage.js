import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScrollingBackground from 'react-native-scrolling-images'

export default class ScrollingBackgroundImage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollingBackground
          style={styles.scrollingBackgroundStyle}
          speed={0.7}
          direction={'down'}
          images={[require('../assets/background-stars-1.png'), require('../assets/background-stars-2.png')]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  scrollingBackgroundStyle: {
    backgroundColor: '#0B7483'
  }
})
