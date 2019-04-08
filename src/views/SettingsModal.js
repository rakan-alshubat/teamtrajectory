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

class SettingsModal extends Component {
    state = {
      modalVisible: false
    };

    openModal = () => this.setState({ modalVisible: true });
    closeModal = () => this.setState({ modalVisible: false });

    render () {
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

                  <View style={styles.textBox}>
                    <Text style={styles.description}>
                      {[
                        'Team Trajectory!\n',
                        'Development Team:\n'
                      ]}
                    </Text>
                    <Text style={styles.description}>
                      {[
                        'Fatima Alburaikan\t\t\t\t Yazeed Almazroa\n',
                        'Rakan Alshubat\t\t\t\t Saeed Alteneiji\n',
                        'Tristan Kimball\t\t\t\t Rudy Trigueros\n'
                      ]}
                    </Text>
                  </View>

                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity onPress={ () => { this.openModal() }}>
            <Image style={styles.settingsButton} source={require('../assets/settings-icon.png')} />
          </TouchableOpacity>
        </Fragment>
      )
    }
}

export default SettingsModal

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#301e41',
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
  settingsButton: {
    height: 29,
    width: 29
  }
})
