import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScrollingBackground from 'react-native-scrolling-images'

export default class ScrollingBackgroundImage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollingBackground
          style={styles.scrollingBackgroundStyle}
          speed={1.5}
          direction={'down'}
          images={[require('../assets/mainScreenBackground.png'), require('../assets/mainScreenBackground.png')]}
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
