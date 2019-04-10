import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground, Linking, StatusBar } from 'react-native'
import Sound from 'react-native-sound'
import InfoModal from './InfoModal'
import SettingsModal from './SettingsModal'
import { Storage } from '../storage'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    Storage.setGameOver('0')

    let menuMusic = new Sound('menu_music.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log(error)
        return
      }
      menuMusic.play()
      menuMusic.setNumberOfLoops(-1)
      Sound.setCategory('Ambient')
    })

    //hard reset all levels for testing purposes
    /*
    Storage.setShipLevel('1')
    Storage.setFuelLevel('1')
    Storage.setCoinBoostLevel('1')
    Storage.setThrusterEfficiencyLevel('1')
    Storage.setThrusterControlLevel('1')
    Storage.setSolarPanelsLevel('1')
    Storage.setBatteryCapacityLevel('1')

    */
    return (
      <ImageBackground source={require('../assets/mainScreenBackground.png')} style={{ width: '100%', height: '100%' }}>
        <StatusBar hidden = {true} />
        <View style={styles.psycheBox}>
          <TouchableOpacity onPress={ () => Linking.openURL('https://psyche.asu.edu')}>
            <Image style={styles.psycheLogo} source={require('../assets/psychelogo.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.logoBox}>
          <Image style={styles.gameLogo} source={require('../assets/gameLogo.png')} />
        </View>
        <View style={styles.nasaBox}>
          <Image style={styles.nasaLogo} source={require('../assets/nasa-insignia.png')}/>
        </View>
        <View style={styles.playButtonBox}>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Game') && menuMusic.stop()}>
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
    top: '90%',
    right: '45%',
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
  nasaBox: {
    top: '5%',
    right: '5%',
    position: 'absolute'
  },
  nasaLogo: {
    height: 61,
    width: 61
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
