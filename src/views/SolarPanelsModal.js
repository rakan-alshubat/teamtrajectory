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

class SolarPanelsModal extends Component {
    state = {
      modalVisible: false
    };

    openModal = () => this.setState({ modalVisible: true });
    closeModal = () => this.setState({ modalVisible: false });

    render () {
      return (
        <Fragment>
          <Modal
            animationType="slide"
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
                    <Image style={styles.symbol} source={require('../assets/solar-panels-symbol.png')} />
                  </View>
                  <View style={styles.upgradeNameBox}>
                    <Text style={styles.fuelTank}>SOLAR PANELS</Text>
                  </View>
                  <View style={styles.textBox}>
                    <Text style={styles.description}>
                      {[
                        'Increases the rate of your battery regeneration'
                      ]}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.ButtonUpgrade} onPress = { () => { Alert.alert('Hey') }}>
                    <Image style={styles.coins} source={require('../assets/coin.png')} />
                    <Text style={{ color: '#f7a01d' }}>  200</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity onPress={ () => { this.openModal() }}>
            <Image style={styles.SPbutton} source={require('../assets/up-solar-panels.png')} />
          </TouchableOpacity>
        </Fragment>
      )
    }
}

export default SolarPanelsModal

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#eb5b66',
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
  SPbutton: {
    height: '100%',
    width: '100%'
  },
  symbolBox: {
    position: 'absolute',
    top: HEIGHT * 0.06,
    right: WIDTH * 0.65
  },
  symbol: {
    height: 17,
    width: 44
  },
  upgradeNameBox: {
    position: 'absolute',
    top: HEIGHT * 0.05,
    right: WIDTH * 0.43
  },
  fuelTank: {
    color: '#ffffff',
    left: '40%'
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
