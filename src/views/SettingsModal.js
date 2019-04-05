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
                  <Text style={styles.description}>
                    {[
                      'A native modal is easy enough to implement but the risk is that ',
                      "the user can feel trapped if they can't close the Modal. \n\n",
                      'The only way they can is by clicking on:'
                    ]}
                  </Text>
                  <TouchableOpacity onPress = { () => { Alert.alert('Hey') }}>
                    <Text>Button</Text>
                  </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    borderRadius: 4,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    position: 'absolute',
    top: HEIGHT * 0.50,
    right: WIDTH * 0.40
  },
  description: {
    padding: 20,
    fontSize: 18
  },
  exitTouch: {
    width: '100%',
    height: '100%'
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    opacity: 0.35
  },
  settingsButton: {
    height: 29,
    width: 29
  }
})
