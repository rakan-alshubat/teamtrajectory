import React, { Fragment, Component } from 'react'
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Alert
} from 'react-native'

class PauseModal extends Component {
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

                  <TouchableOpacity style={styles.resumeBtn} onPress = { () => { Alert.alert('Hey') }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../assets/ResumeButton.png')} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.homeBtn} onPress = { () => { this.props.navigation.navigate('Home') }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../assets/homeButton.png')} />
                  </TouchableOpacity>

                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity onPress={ () => { this.openModal() }}>
            <Image source={require('../assets/pause-button.png')} />
          </TouchableOpacity>
        </Fragment>
      )
    }
}

export default PauseModal

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#301e41',
    borderRadius: 12,
    position: 'absolute',
    height: '22%',
    width: '78%',
    top: '37.6%',
    right: '11.2%'
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#c0c0c0',
    opacity: 0.35
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
