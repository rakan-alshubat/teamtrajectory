import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native'
import FuelTankModal from './FuelTankModal'
import ThrusterControlModal from './ThrusterControlModal'
import ThrusterEfficiencyModal from './ThrusterEfficiencyModal'
import SolarPanelsModal from './SolarPanelsModal'
import BatteryCapacityModal from './BatteryCapacityModal'
import CoinBoostModal from './CoinBoostModal'
import { Storage } from '../storage'

export default class UpScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor () {
    super()
    this.state =
    {
      shipLevel: '1',
      totalCoins: '0000'
    }
    this.cost = {
      1: 600,
      2: 1750
    }
  }

  press = () => {
    let totalCoins = Number(this.state.totalCoins)

    if (totalCoins >= this.cost[this.state.shipLevel]) {
      const shipLevel = `${(Number(this.state.shipLevel) + 1)}`

      totalCoins = `${totalCoins - this.cost[this.state.shipLevel]}`
      totalCoins = totalCoins.length > 3 ? totalCoins : totalCoins.length > 2 ? '0' + totalCoins : totalCoins.length > 1 ? '00' + totalCoins : '000' + totalCoins

      this.setState({ shipLevel, totalCoins })
      Storage.setShipLevel(shipLevel)
      Storage.setCoins(totalCoins)
    }
  }

  componentDidMount () {
    let self = this

    Storage.getCoins().then(totalCoins => {
      totalCoins = totalCoins.length > 3 ? totalCoins : totalCoins.length > 2 ? '0' + totalCoins : totalCoins.length > 1 ? '00' + totalCoins : '000' + totalCoins
      Storage.getShipLevel().then(shipLevel => {
        self.setState({ shipLevel, totalCoins })
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    let upgradeLevel
    let upgradeCost
    let upgradeCoin
    let upgradable

    if (this.state.shipLevel === '1') {
      upgradeLevel = <Image style={{ width: '85%', height: '80%', top: '2%' }} source={require('../assets/Upgrade1.png')}/>
      upgradeCost = <Text style={styles.shipCostText}> 0600 </Text>
      upgradeCoin = <Image style={styles.shipCostCoin} source={require('../assets/coin.png')}/>
      upgradable = <TouchableOpacity style={{ width: '30%', height: '30%', top: '20%', left: '60%' }} onPress={ () => this.press() }>
        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/upgrade-ship-button.png')}/>
      </TouchableOpacity>
    } else if (this.state.shipLevel === '2') {
      upgradeLevel = <Image style={{ width: '85%', height: '80%', top: '2%' }} source={require('../assets/Upgrade2.png')}/>
      upgradeCost = <Text style={styles.shipCostText}> 1750 </Text>
      upgradeCoin = <Image style={styles.shipCostCoin} source={require('../assets/coin.png')}/>
      upgradable = <TouchableOpacity style={{ width: '30%', height: '30%', top: '20%', left: '60%' }} onPress={ () => this.press() }>
        <Image style={{ width: '100%', height: '100%' }} source={require('../assets/upgrade-ship-button.png')}/>
      </TouchableOpacity>
    } else {
      upgradeLevel = <Image style={{ width: '85%', height: '80%', top: '2%' }} source={require('../assets/Upgrade3.png')}/>
      upgradable = <TouchableWithoutFeedback>
        <Image style={{ width: '30%', height: '30%', top: '20%', left: '60%', backgroundColor: 'gray', opacity: 0.2, borderRadius: 20 }} source={require('../assets/upgrade-ship-button.png')}/>
      </TouchableWithoutFeedback>
    }
    return (

      <View style={{ flex: 1 }}>

        <View style={{ backgroundColor: '#ffffff', width: '100%', height: '6.7734%', marginTop: '0%' }}/>

        <View style={{ backgroundColor: '#10102c', width: '100%', height: '14.5197%', marginTop: '0%' }}>
          {upgradable}
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

        <Text style={styles.totalCoinsText}> { this.state.totalCoins } </Text>

        <TouchableOpacity style={styles.Xbutton} onPress={ () => this.props.navigation.navigate('Home')}>
          <Image style={{ width: '100%', height: '100%' }} source={require('../assets/backX.png')}/>
        </TouchableOpacity>

        <Image style={styles.upgradeTitle} source={require('../assets/upgrade-title.png')}/>

        {upgradeCoin}
        {upgradeCost}

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
    width: '8.2%',
    position: 'absolute',
    top: '1.7%',
    left: '8.133%'
  },
  totalCoinsText: {
    position: 'absolute',
    top: '3%',
    left: '17.6%',
    color: 'gold'
  },
  upgradeTitle: {
    width: '31.4%',
    height: '4.5%',
    position: 'absolute',
    top: '2.5%',
    left: '36%'
  },
  Xbutton: {
    position: 'absolute',
    top: '3%',
    left: '86.88%',
    height: '2.5%',
    width: '4.5%'
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
    top: '15.5%',
    left: '63%',
    height: '3.2%',
    width: '6.4%'
  },
  shipCostText: {
    position: 'absolute',
    top: '16%',
    left: '70%',
    color: 'gold',
    fontSize: 16
  }
})

UpScreen.propTypes = {
  navigation: PropTypes.object
}
