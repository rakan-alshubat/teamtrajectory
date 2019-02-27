import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

export default class MainScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.psycheBox}>
          <Image style={styles.psycheLogo} source={require('../assets/psyche-logo.png')} />
        </View>
        <View style={styles.logoBox}>
          <Image style={styles.gameLogo} source={require('../assets/logo-placeholder.png')} />
        </View>
        <View style={styles.startButtonBox}>
          <TouchableOpacity onPress={ () => { Alert.alert('Start the game') }}>
            <Image style={styles.startButton} source={require('../assets/play-button.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.upgradeButtonBox}>
          <TouchableOpacity onPress={ () => { Alert.alert('Upgrade your ship!') }}>
            <Image style={styles.upgradeButton} source={require('../assets/upgrades-button.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoBox}>
          <TouchableOpacity onPress={ () => { Alert.alert('info about the game') }}>
            <Image style={styles.infoButton} source={require('../assets/info-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => { Alert.alert('mess with the settings') }}>
            <Image style={styles.settingsButton} source={require('../assets/settings-icon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  psycheBox: {
    flex: 2,
    backgroundColor: '#11112c',
    alignItems: 'flex-start'
  },
  logoBox: {
    flex: 6,
    backgroundColor: '#11112c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  startButtonBox: {
    flex: 1,
    backgroundColor: '#11112c',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  upgradeButtonBox: {
    flex: 1,
    backgroundColor: '#11112c',
    alignItems: 'center'
  },
  infoBox: {
    flex: 3,
    backgroundColor: '#11112c',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  gameLogo: {
    height: 247,
    width: 247
  },
  psycheLogo: {
    height: 60,
    width: 130
  },
  startButton: {
    height: 50,
    width: 200
  },
  upgradeButton: {
    height: 50,
    width: 195
  },
  infoButton: {
    height: 35,
    width: 35
  },
  settingsButton: {
    height: 35,
    width: 35
  }
})
