import React, { Component } from 'react'
import { TouchableOpacity, Dimensions, Text, View, Image, StyleSheet } from 'react-native'
import { Storage } from '../storage'
import PropTypes from 'prop-types'

let devHeight = Dimensions.get('window').height
let devWidth = Dimensions.get('window').width

export default class EndScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)
    this.state = {
      coins: '0000',
      score: '000m km',
      highScore: '000m km'
    }
  }

  componentDidMount () {
    console.log('END SCREEN MOUNTED')
    let self = this
    let coins = this.state.coins
    let score = this.state.score
    let highScore = this.state.highScore

    Storage.getCoins().then(totalCoins => {
      coins = totalCoins.length === 4 ? totalCoins : totalCoins.length === 3 ? '0' + totalCoins : totalCoins.length === 2 ? '00' + totalCoins : '000' + totalCoins
      Storage.getLastScore().then(lastScore => {
        score = lastScore.length === 3 ? lastScore + 'm km' : lastScore.length === 2 ? '0' + lastScore + 'm km' : '00' + lastScore + 'm km'
        Storage.getHighScore().then(hScore => {
          highScore = hScore.length === 3 ? hScore + 'm km' : hScore.length === 2 ? '0' + hScore + 'm km' : '00' + hScore + 'm km'
          self.setState({
            coins,
            score,
            highScore
          })
        })
      })
    })
  }

  newGame () {
    Storage.setGameOver('0').then(x => {
      this.props.navigation.navigate('Game')
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <View>
        <Image
          source = {require('../assets/mainScreenBackground.png')}
          style = {{ width: '100%', height: '100%' }}
        >
        </Image>

        <View style={styles.titleBox2}>
          <Text style ={styles.titleText2}>{'\n\nScore'}</Text>

          <View style ={styles.scoreBox}>
            <Text style ={styles.titleText3}>{this.state.score}</Text>
          </View>

          <View style ={styles.lineBox}></View>

          <Text style ={styles.titleText2}>{'\n\nHigh Score'}</Text>

          <View style ={styles.scoreBox2}>
            <Text style ={styles.titleText3}>{this.state.highScore}</Text>
          </View>

          <View style ={styles.lineBox2}></View>

          <Text style ={styles.titleText2}>{'\n\nTotal Coins'}</Text>

          <Image
            source={require('../assets/coin4.png')}
            style ={styles.coinICon}
          >
          </Image>

          <View style ={styles.goldBox}>
            <Text style ={styles.titleText4}>{this.state.coins}</Text>
          </View>

          <View style ={styles.buttonBox}>
            <TouchableOpacity onPress={ () => this.newGame() }
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

EndScreen.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({

  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 37,
    textAlign: 'center'
  },
  titleText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
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
    position: 'absolute',
    width: '77%',
    height: '8%',
    backgroundColor: '#ffffff',
    marginHorizontal: '11%',
    marginVertical: '32%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  titleBox2: {
    position: 'absolute',
    width: '77%',
    height: '53%',
    backgroundColor: '#301e41',
    marginHorizontal: '11%',
    marginVertical: '38%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15

  },
  goldBox: {
    position: 'absolute',
    width: '18%',
    height: '3%',
    backgroundColor: '#0a0c21',
    marginHorizontal: '38%',
    marginVertical: '70%'
  },
  scoreBox: {
    position: 'absolute',
    width: '18%',
    height: '8%',
    backgroundColor: '#0a0c21',
    marginHorizontal: '38%',
    marginVertical: '24%'
  },
  scoreBox2: {
    flex: 1,
    position: 'absolute',
    width: '18%',
    height: '3%',
    backgroundColor: '#0a0c21',
    marginHorizontal: '38%',
    marginVertical: '47%'
  },
  lineBox: {
    position: 'absolute',
    width: devWidth * 0.38,
    height: devHeight * 0.015,
    backgroundColor: '#ffffff',
    marginHorizontal: '28%',
    marginVertical: '34%'
  },
  lineBox2: {
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
