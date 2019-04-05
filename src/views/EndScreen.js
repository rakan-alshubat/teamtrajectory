import React, { Component } from 'react'
import { TouchableOpacity, Dimensions, Text, View, Alert, Image, StyleSheet } from 'react-native'

let devHeight = Dimensions.get('window').height
let devWidth = Dimensions.get('window').width
const shipMessage = 'This upgrade will replace your ship with a more powerful one.'

export default class EndScreen extends Component {
    static navigationOptions = {
      header: null
    }

    render () {
      return (
        <View>
          <Image
            source = {require('../assets/mainScreenBackground.png')}
            style = {{ width: devWidth, height: devHeight }}
          >
          </Image>

          <View style={styles.titleBox2}>
            <Text style ={styles.titleText2}>{'\n\nScore'}</Text>

            <View style ={styles.scoreBox}>
              <Text style ={styles.titleText3}>{'0020 AU'}</Text>
            </View>

            <View style ={styles.lineBox}></View>

            <Text style ={styles.titleText2}>{'\n\nHigh Score'}</Text>

            <View style ={styles.scoreBox2}>
              <Text style ={styles.titleText3}>{'0450 AU'}</Text>
            </View>

            <View style ={styles.lineBox2}></View>

            <Text style ={styles.titleText2}>{'\n\nTotal Coins'}</Text>

            <Image
              source={require('../assets/coin4.png')}
              style ={styles.coinICon}
            >
            </Image>

            <View style ={styles.goldBox}>
              <Text style ={styles.titleText4}>{'0700'}</Text>
            </View>

            <View style ={styles.buttonBox}>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('EndScreen')}
                style ={styles.repButton}
              >
                <Image
                  source={require('../assets/replay.png')}
                >
                </Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}
                style ={styles.homeButton}
              >
                <Image
                  source={require('../assets/home.png')}
                >
                </Image>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Upgrades')}
              style ={styles.upButton}
            >
              <Image
                source={require('../assets/upgrade.png')}
              >
              </Image>
            </TouchableOpacity>

          </View>

          <View style={styles.titleBox}>
            <Text style ={styles.titleText}>{'Game Over'}</Text>
          </View>

        </View>

      )
    }
}

const styles = StyleSheet.create({

  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 37,
    textAlign: 'center',
    fontFamily: 'TradeGothicLTStd'
  },
  titleText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'TradeGothicLTStd'
  },
  titleText3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'

  },
  titleText4: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'

  },
  titleBox: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.77,
    height: devHeight * 0.08,
    backgroundColor: '#ffffff',
    marginHorizontal: '11%',
    marginVertical: '32%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  titleBox2: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.77,
    height: devHeight * 0.53,
    backgroundColor: '#301e41',
    marginHorizontal: '11%',
    marginVertical: '38%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15

  },
  goldBox: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.18,
    height: devHeight * 0.03,
    backgroundColor: '#0a0c21',
    marginHorizontal: '38%',
    marginVertical: '70%'
  },
  scoreBox: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.18,
    height: devHeight * 0.03,
    backgroundColor: '#0a0c21',
    marginHorizontal: '38%',
    marginVertical: '24%'
  },
  scoreBox2: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.18,
    height: devHeight * 0.03,
    backgroundColor: '#0a0c21',
    marginHorizontal: '38%',
    marginVertical: '47%'
  },
  lineBox: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.38,
    height: devHeight * 0.015,
    backgroundColor: '#ffffff',
    marginHorizontal: '28%',
    marginVertical: '34%'
  },
  lineBox2: {
    flex: 1,
    position: 'absolute',
    width: devWidth * 0.38,
    height: devHeight * 0.025,
    backgroundColor: '#ffffff',
    marginHorizontal: '28%',
    marginVertical: '57%'
  },
  repButton: {
    width: devWidth * 0.31,
    height: devHeight * 0.04
  },
  upButton: {
    width: devWidth * 0.31,
    height: devHeight * 0.04,
    marginHorizontal: '30%',
    marginVertical: '0.1%'
  },
  homeButton: {
    width: devWidth * 0.31,
    height: devHeight * 0.04
  },
  buttonBox: {
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginVertical: '8%'
  },
  coinICon: {
    marginHorizontal: '30%',
    marginVertical: '0%'
  }
})
