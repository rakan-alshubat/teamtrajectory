import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import FuelTankModal from './FuelTankModal'
import ThrusterControlModal from './ThrusterControlModal'
import ThrusterEfficiencyModal from './ThrusterEfficiencyModal'
import SolarPanelsModal from './SolarPanelsModal'
import BatteryCapacityModal from './BatteryCapacityModal'
import CoinBoostModal from './CoinBoostModal'

export default class UpScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor () {
    super()
    this.state =
    {
      x: 1
    }
  }

  press = () => {
    this.setState({ x: this.state.x + 1 })
  }

  render () {
    const level1 = <Image style={{ width: '80%', height: '80%', top: '2%' }} source={require('../assets/Upgrade1.png')}/>
    const level2 = <Image style={{ width: '80%', height: '80%', top: '2%' }} source={require('../assets/Upgrade2.png')}/>
    const level3 = <Image style={{ width: '80%', height: '80%', top: '2%' }} source={require('../assets/Upgrade3.png')}/>

    let upgradeLevel
    let x1 = this.state.x

    if (x1 === 1) {
      upgradeLevel = level1
    } else if (x1 === 2) {
      upgradeLevel = level2
    } else {
      upgradeLevel = level3
    }

    return (

      <View style={{ flex: 1 }}>

        <View style={{ backgroundColor: '#ffffff', width: '100%', height: '6.7734%', marginTop: '0%' }}/>

        <View style={{ backgroundColor: '#10102c', width: '100%', height: '14.5197%', marginTop: '0%' }}>
          <TouchableOpacity style={{ width: '36.2667%', height: '55%', top: '15%', left: '55%' }} onPress={ () => this.press() }>
            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/upgrade-ship-button.png')}/>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: '#301e41', width: '100%', height: '13.1178161%', marginTop: '0%' }}>
          <FuelTankModal/>
        </View>

        <View style={{ backgroundColor: '#592651', width: '100%', height: '13.1178161%', marginTop: '0%' }}>
          <ThrusterControlModal/>
        </View>

        <View style={{ backgroundColor: '#a3405c', width: '100%', height: '13.1178161%', marginTop: '0%' }}>
          <ThrusterEfficiencyModal/>
        </View>

        <View style={{ backgroundColor: '#eb5b66', width: '100%', height: '13.1178161%', marginTop: '0%' }}>
          <SolarPanelsModal/>
        </View>

        <View style={{ backgroundColor: '#f07c2d', width: '100%', height: '13.1178161%', marginTop: '0%' }}>
          <BatteryCapacityModal/>
        </View>

        <View style={{ backgroundColor: '#f69f1e', width: '100%', height: '13.1178161%', marginTop: '0%' }}>
          <CoinBoostModal/>
        </View>

        <Image style={styles.totalCoins} source={require('../assets/coin.png')}/>

        <Text style={styles.totalCoinsText}> 5000 </Text>

        <TouchableOpacity style={styles.Xbutton} onPress={ () => this.props.navigation.navigate('Home')}>
          <Image source={require('../assets/backX.png')}/>
        </TouchableOpacity>

        <Image style={styles.upgradeTitle} source={require('../assets/upgrade-title.png')}/>

        <Image style={styles.shipCostCoin} source={require('../assets/coin.png')}/>

        <Text style={styles.shipCostText}> 5000 </Text>

        <View style={{ position: 'absolute', width: '40%', height: '13%', top: '8%', right: '50%' }}>
          {upgradeLevel}
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  totalCoins: {
    height: '4.3%',
    width: '7.7867%',
    position: 'absolute',
    top: '1.576%',
    left: '8.133%'
  },
  totalCoinsText: {
    position: 'absolute',
    top: '2%',
    left: '17.6%',
    color: 'gold'
  },
  upgradeTitle: {
    width: '25.6267%',
    height: '4.3%',
    position: 'absolute',
    top: '2.0567%',
    left: '37.0667%'
  },
  Xbutton: {
    position: 'absolute',
    top: '2.39%',
    left: '86.88%',
    height: '1.922%',
    width: '4.16%'
  },
  upgradeShipButton: {
    height: '15%',
    width: '50%'
  },
  upgradeShipButtonLoc: {
    position: 'absolute',
    top: '11.2%',
    right: '54.66%'
  },
  shipCostCoin: {
    position: 'absolute',
    top: '17.52%',
    left: '66.53%',
    height: '3.2%',
    width: '5.28%'
  },
  shipCostText: {
    position: 'absolute',
    top: '17.71%',
    left: '72.94%',
    color: 'gold'
  },
  shipLevels: {
    position: 'absolute',
    top: '10.45%',
    left: '6.027%',
    height: '16.91%',
    width: '30.49%'
  }
})

UpScreen.propTypes = {
  navigation: PropTypes.object
}
