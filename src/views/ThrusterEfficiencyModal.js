import React, { Fragment, Component } from 'react'
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import { Storage } from '../storage'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

class ThrusterEfficiencyModal extends Component {
  constructor () {
    super()
    this.state = {
      modalVisible: false,
      level: '1',
      totalCoins: '0',
      shipLevel: '1'
    }
    this.costs = {
      1: 100,
      2: 175,
      3: 250,
      4: 400
    }
    this.limit = {
      1: 2,
      2: 4,
      3: 5
    }
  }

  press = () => {
    let totalCoins = Number(this.state.totalCoins)
    const modalVisible = this.state.modalVisible
    const shipLevel = this.state.shipLevel

    if (totalCoins >= this.costs[this.state.level]) {
      const level = `${(Number(this.state.level) + 1)}`

      totalCoins = `${totalCoins - this.costs[this.state.level]}`
      totalCoins = totalCoins.length > 3 ? totalCoins : totalCoins.length > 2 ? '0' + totalCoins : totalCoins.length > 1 ? '00' + totalCoins : '000' + totalCoins

      this.setState({ modalVisible, level, totalCoins, shipLevel })
      Storage.setThrusterEfficiencyLevel(level)
      Storage.setCoins(totalCoins)
    }
  }

  openModal = () => {
    let self = this
    Storage.getCoins().then(totalCoins => {
      Storage.getThrusterEfficiencyLevel().then(level => {
        Storage.getShipLevel().then(shipLevel => {
          self.setState({
            modalVisible: true,
            level,
            totalCoins,
            shipLevel
          })
        })
      })
    })
  }
  closeModal = () => {
    this.setState({
      modalVisible: false,
      level: this.state.level,
      totalCoins: this.state.totalCoins,
      shipLevel: this.state.shipLevel
    })
  }

  render () {
    const level2Empty = <Image style={{ width: '5%', height: '7.5%', position: 'absolute', top: '76.25%', right: '74.75%' }} source={require('../assets/thruster-efficiency-box-empty.png')} />
    const level3Empty = <Image style={{ width: '5%', height: '7.5%', position: 'absolute', top: '76.25%', right: '68.75%' }} source={require('../assets/thruster-efficiency-box-empty.png')} />
    const level4Empty = <Image style={{ width: '5%', height: '7.5%', position: 'absolute', top: '76.25%', right: '62.75%' }} source={require('../assets/thruster-efficiency-box-empty.png')} />
    const level5Empty = <Image style={{ width: '5%', height: '7.5%', position: 'absolute', top: '76.25%', right: '56.75%' }} source={require('../assets/thruster-efficiency-box-empty.png')} />

    const level1Filled = <Image style={{ width: '6%', height: '7.5%', position: 'absolute', top: '76.25%', right: '80.75%' }} source={require('../assets/thruster-efficiency-box-filled.png')} />
    const level2Filled = <Image style={{ width: '6%', height: '7.5%', position: 'absolute', top: '76.25%', right: '74.75%' }} source={require('../assets/thruster-efficiency-box-filled.png')} />
    const level3Filled = <Image style={{ width: '6%', height: '7.5%', position: 'absolute', top: '76.25%', right: '68.75%' }} source={require('../assets/thruster-efficiency-box-filled.png')} />
    const level4Filled = <Image style={{ width: '6%', height: '7.5%', position: 'absolute', top: '76.25%', right: '62.75%' }} source={require('../assets/thruster-efficiency-box-filled.png')} />
    const level5Filled = <Image style={{ width: '6%', height: '7.5%', position: 'absolute', top: '76.25%', right: '56.75%' }} source={require('../assets/thruster-efficiency-box-filled.png')} />

    const level1Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 1/5</Text>
    const level2Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 2/5</Text>
    const level3Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 3/5</Text>
    const level4Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 4/5</Text>
    const level5Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 5/5</Text>

    const buttonActive = <TouchableOpacity style={styles.ButtonUpgrade} onPress={() => this.press()}>
      <Image style={styles.coins} source={require('../assets/coin.png')}/>
      <Text style={{ color: '#f7a01d' }}>{this.costs[this.state.level]}</Text>
    </TouchableOpacity>

    const buttonInactive = <TouchableWithoutFeedback><View style={styles.ButtonUpgradeInactive}>
      <Image style={styles.coins} source={require('../assets/coin.png')}/>
      <Text style={{ color: '#f7a01d' }}>{this.costs[this.state.level]}</Text>
    </View></TouchableWithoutFeedback>

    let totalCoins = Number(this.state.totalCoins)
    let upgradeLevel = Number(this.state.level)
    let level
    let button
    let inactiveText

    if (totalCoins >= this.costs[this.state.level] && this.limit[this.state.shipLevel] > upgradeLevel) {
      button = buttonActive
    } else if (this.limit[this.state.shipLevel] === upgradeLevel) {
      button = buttonInactive
      inactiveText = <Text style={styles.inactiveText}>Upgrade your ship to unlock more levels</Text>
    } else if (totalCoins < this.costs[this.state.level]) {
      button = buttonInactive
      inactiveText = <Text style={styles.inactiveText}>You dont have enough coins</Text>
    }

    if (this.state.level === '1') {
      level = [level1Text, level1Filled, level2Empty, level3Empty, level4Empty, level5Empty]
    } else if (this.state.level === '2') {
      level = [level2Text, level1Filled, level2Filled, level3Empty, level4Empty, level5Empty]
    } else if (this.state.level === '3') {
      level = [level3Text, level1Filled, level2Filled, level3Filled, level4Empty, level5Empty]
    } else if (this.state.level === '4') {
      level = [level4Text, level1Filled, level2Filled, level3Filled, level4Filled, level5Empty]
    } else {
      level = [level5Text, level1Filled, level2Filled, level3Filled, level4Filled, level5Filled]
      inactiveText = <Text/>
    }

    return (
      <Fragment>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <TouchableOpacity
            style={styles.exitTouch}
            activeOpacity={1}
            onPress={ () => { this.closeModal() }}
          >
            <View style={styles.overlay} />
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <View style={styles.symbolBox}>
                  <Image style={styles.symbol} source={require('../assets/thurster-efficiency-symbol.png')} />
                </View>
                <View style={styles.upgradeNameBox}>
                  <Text style={styles.fuelTank}>THRUSTER EFFICIENCY</Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.description}>
                    {[
                      'Reduces the amount of battery your ships thrusters use'
                    ]}
                  </Text>
                </View>

                {inactiveText}
                {button}
                {level}

              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>

        <TouchableOpacity onPress={ () => { this.openModal() }}>
          <Image style={styles.TEbutton} source={require('../assets/up-thruster-efficiency.png')} />
        </TouchableOpacity>
      </Fragment>
    )
  }
}

export default ThrusterEfficiencyModal

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#a3405c',
    borderRadius: 12,
    position: 'absolute',
    height: HEIGHT * 0.30,
    width: WIDTH * 0.80,
    top: HEIGHT * 0.25,
    right: WIDTH * 0.09
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 250,
    top: HEIGHT * 0.125,
    right: WIDTH * 0.1
  },
  description: {
    fontSize: 12,
    color: '#ffffff'
  },
  exitTouch: {
    width: '100%',
    height: '100%'
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#c0c0c0',
    opacity: 0.35
  },
  TEbutton: {
    height: '100%',
    width: '100%'
  },
  symbolBox: {
    position: 'absolute',
    top: HEIGHT * 0.03,
    right: WIDTH * 0.65
  },
  symbol: {
    height: 52,
    width: 37.1
  },
  upgradeNameBox: {
    position: 'absolute',
    top: HEIGHT * 0.05,
    right: WIDTH * 0.43
  },
  fuelTank: {
    color: '#ffffff',
    left: '45%'
  },
  ButtonUpgrade: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    height: 42,
    width: 87,
    backgroundColor: '#fff',
    top: HEIGHT * 0.20,
    right: WIDTH * 0.1,
    borderRadius: 40
  },
  coins: {
    height: 19,
    width: 19
  },
  inactiveText: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    height: 50,
    width: 87,
    top: HEIGHT * 0.25,
    right: WIDTH * 0.1,
    color: 'red',
    fontSize: 12
  },
  ButtonUpgradeInactive: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    height: 42,
    width: 87,
    backgroundColor: 'grey',
    top: HEIGHT * 0.20,
    right: WIDTH * 0.1,
    borderRadius: 40,
    opacity: 0.5
  }
})
