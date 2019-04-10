import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import { Storage } from '../storage'

class PauseModal extends Component {
  state = {
    modalVisible: false
  };

  openModal = () => {
    Storage.setPaused('1')
    this.setState({ modalVisible: true })
  }
  closeModal = () => {
    Storage.setPaused('0')
    this.setState({ modalVisible: false })
  }
  home = () => {
    Storage.setGameOver('1')
    this.props.navigation.navigate('Home')
  }

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
            onPress={ () => { }}
          >
            <Image style={styles.overlay} source={require('../assets/mainScreenBackground.png')} />
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>

                <TouchableOpacity style={styles.resumeBtn} onPress = { () => { this.closeModal() }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ResumeButton.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.homeBtn} onPress = { () => { this.home() }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../assets/homeButton.png')} />
                </TouchableOpacity>

              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>

        <TouchableOpacity style={styles.pauseBtn} onPress={ () => { this.openModal() }}>
          <Image style={{ width: '100%', height: '100%' }}source={require('../assets/pause-button.png')} />
        </TouchableOpacity>
      </Fragment>
    )
  }
}

PauseModal.propTypes = {
  navigation: PropTypes.object
}

export default PauseModal

const styles = StyleSheet.create({
  pauseBtn: {
    position: 'absolute',
    top: '3.32%',
    right: '3.32%',
    width: '10.4%',
    height: '4.8%'
  },
  modalContainer: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    position: 'absolute',
    height: '22%',
    width: '78%',
    top: '37.6%',
    right: '11.2%'
  },
  overlay: {
    width: '100%',
    height: '100%'
  },
  exitTouch: {
    width: '100%',
    height: '100%'
  },
  resumeBtn: {
    width: '40%',
    height: '25%',
    position: 'absolute',
    top: '24%',
    right: '30.38%'
  },
  homeBtn: {
    width: '40%',
    height: '25%',
    position: 'absolute',
    top: '57.7%',
    right: '30.38%'
  }
})
