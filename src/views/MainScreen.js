import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Alert, ImageBackground, Dimensions, Linking } from 'react-native'
import InfoModal from './InfoModal'
import SettingsModal from './SettingsModal'
import PauseModal from './PauseModal'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <ImageBackground source={require('../assets/mainScreenBackground.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.psycheBox}>
          <TouchableOpacity onPress={ () => Linking.openURL('https://psyche.asu.edu')}>
            <Image style={styles.psycheLogo} source={require('../assets/psychelogo.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.logoBox}>
          <Image style={styles.gameLogo} source={require('../assets/gameLogo.png')} />
        </View>
        <View style={styles.playButtonBox}>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('End')}>
            <Image style={styles.playButton} source={require('../assets/play-button.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.upgradeButtonBox}>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Upgrades')}>
            <Image style={styles.upgradeButton} source={require('../assets/upgrade-button.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoBox}>
          <InfoModal />
        </View>
        <View style={styles.settingsBox}>
          <InfoModal />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  psycheBox: {
    top: HEIGHT * 0.043,
    right: WIDTH * 0.80,
    position: 'absolute'
  },
  logoBox: {
    top: HEIGHT * 0.22,
    right: WIDTH * 0.15,
    position: 'absolute'
  },
  playButtonBox: {
    top: HEIGHT * 0.58,
    right: WIDTH * 0.292,
    position: 'absolute'
  },
  upgradeButtonBox: {
    top: HEIGHT * 0.69,
    left: WIDTH * 0.292,
    position: 'absolute'
  },
  infoBox: {
    top: HEIGHT * 0.90,
    right: WIDTH * 0.85,
    position: 'absolute'
  },
  settingsBox: {
    top: HEIGHT * 0.90,
    right: WIDTH * 0.05,
    position: 'absolute'
  },
  gameLogo: {
    height: 229.7,
    width: 293.8
  },
  psycheLogo: {
    height: 49,
    width: 49
  },
  playButton: {
    height: 60,
    width: 175
  },
  upgradeButton: {
    height: 60,
    width: 175
  }
})
