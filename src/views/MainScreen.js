import React from 'react'
import { View, StyleSheet, Image, Button, Alert } from 'react-native'

export default class MainScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
        </View>
        <View style={styles.startButtonBox}>
          <Button
            title="Start"
            color="#ffffff"
            onPress={() => {
              Alert.alert('Start the game!')
            }}
          />
        </View>
        <View style={styles.upgradeButtonBox}>
          <Button
            title="Upgrade"
            color="#ffffff"
            onPress={() => {
              Alert.alert('Go to the upgrade screen!!')
            }}
          />
        </View>
        <View style={styles.infoBox}>
          <Button
            title="i"
            color="#ffffff"
            onPress={() => {
              Alert.alert('Info about the game and the app')
            }}
          />
          <Button
            title="Settings"
            color="#ffffff"
            onPress={() => {
              Alert.alert('settings')
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoBox: {
    flex: 5,
    backgroundColor: '#3D9ECF',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  startButtonBox: {
    flex: 1,
    backgroundColor: '#3D9ECF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  upgradeButtonBox: {
    flex: 2,
    backgroundColor: '#3D9ECF',
    alignItems: 'center'
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#3D9ECF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  logo: {
    height: 164,
    width: 164
  }
})
