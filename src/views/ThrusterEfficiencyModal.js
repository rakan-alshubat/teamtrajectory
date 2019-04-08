import React, { Fragment, Component } from 'react'
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

class ThrusterEfficiencyModal extends Component {
  state = {
    modalVisible: false,
    x: 1
  };

  press = () => {
    this.setState({ x: this.state.x + 1 })
  }

    openModal = () => this.setState({ modalVisible: true });
    closeModal = () => this.setState({ modalVisible: false });

    render () {
      const level1 = <Image style={{ width: '3%', height: '4.5%', position: 'absolute', top: '76.25%', right: '80.75%' }} source={require('../assets/upgrade-dot.png')} />
      const level2 = <Image style={{ width: '3%', height: '4.5%', position: 'absolute', top: '76.25%', right: '74.75%' }} source={require('../assets/upgrade-dot.png')} />
      const level3 = <Image style={{ width: '3%', height: '4.5%', position: 'absolute', top: '76.25%', right: '68.75%' }} source={require('../assets/upgrade-dot.png')} />
      const level4 = <Image style={{ width: '3%', height: '4.5%', position: 'absolute', top: '76.25%', right: '62.75%' }} source={require('../assets/upgrade-dot.png')} />
      const level5 = <Image style={{ width: '3%', height: '4.5%', position: 'absolute', top: '76.25%', right: '56.75%' }} source={require('../assets/upgrade-dot.png')} />

      const level1Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 1/5</Text>
      const level2Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 2/5</Text>
      const level3Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 3/5</Text>
      const level4Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 4/5</Text>
      const level5Text = <Text style={{ color: '#fff', position: 'absolute', top: '65%', left: '15%', fontSize: 12 }}> Level 5/5</Text>

      let level
      let levelState = this.state.x

      if (levelState === 1) {
        level = [level1Text, level1]
      } else if (levelState === 2) {
        level = [level2Text, level1, level2]
      } else if (levelState === 3) {
        level = [level3Text, level1, level2, level3]
      } else if (levelState === 4) {
        level = [level4Text, level1, level2, level3, level4]
      } else {
        level = [level5Text, level1, level2, level3, level4, level5]
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
                  <TouchableOpacity style={styles.ButtonUpgrade} onPress = { () => this.press() }>
                    <Image style={styles.coins} source={require('../assets/coin.png')} />
                    <Text style={{ color: '#f7a01d' }}>  200</Text>
                  </TouchableOpacity>

                  <Image style={{ width: '4.7%', height: '7.2%', position: 'absolute', top: '75%', right: '80%' }} source={require('../assets/upgrade-square.png')} />
                  <Image style={{ width: '4.7%', height: '7.2%', position: 'absolute', top: '75%', right: '74%' }} source={require('../assets/upgrade-square.png')} />
                  <Image style={{ width: '4.7%', height: '7.2%', position: 'absolute', top: '75%', right: '68%' }} source={require('../assets/upgrade-square.png')} />
                  <Image style={{ width: '4.7%', height: '7.2%', position: 'absolute', top: '75%', right: '62%' }} source={require('../assets/upgrade-square.png')} />
                  <Image style={{ width: '4.7%', height: '7.2%', position: 'absolute', top: '75%', right: '56%' }} source={require('../assets/upgrade-square.png')} />

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
  }
})
