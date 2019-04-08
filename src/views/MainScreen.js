import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, Linking } from 'react-native'
import InfoModal from './InfoModal'
import SettingsModal from "./SettingsModal";

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
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Game')}>
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
          <SettingsModal />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  psycheBox: {
    top: '4.3%',
    right: '80%',
    position: 'absolute'
  },
  logoBox: {
    top: '22%',
    right: '15%',
    position: 'absolute'
  },
  playButtonBox: {
    top: '58%',
    right: '29.2%',
    position: 'absolute'
  },
  upgradeButtonBox: {
    top: '70%',
    left: '29.2%',
    position: 'absolute'
  },
  infoBox: {
    top: '90%',
    right: '85%',
    position: 'absolute'
  },
  settingsBox: {
    top: '90%',
    right: '5%',
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

MainScreen.propTypes = {
  navigation: PropTypes.object
}
