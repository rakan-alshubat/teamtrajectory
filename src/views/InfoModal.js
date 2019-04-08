import React, { Fragment, Component } from 'react'
import { Modal, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

class InfoModal extends Component {
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
                  <Image
                    style={{ width: 290, height: 432 }}
                    source={require('../assets/info-modal.png')}
                  />
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity onPress={ () => { this.openModal() }}>
            <Image style={styles.infoButton} source={require('../assets/info-icon.png')} />
          </TouchableOpacity>
        </Fragment>
      )
    }
}

export default InfoModal

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: HEIGHT * 0.15,
    right: WIDTH * 0.15
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    opacity: 0.35
  },
  exitTouch: {
    width: '100%',
    height: '100%'
  },
  infoButton: {
    height: 29,
    width: 29
  }
})
