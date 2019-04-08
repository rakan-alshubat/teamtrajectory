import React, { Component } from 'react'
import { TouchableOpacity, Dimensions, Text, View, Alert, Image, StyleSheet } from 'react-native'
import { Storage } from '../storage'

let devHeight = Dimensions.get('window').height
let devWidth = Dimensions.get('window').width
const shipMessage = 'This upgrade will replace your ship with a more powerful one.'

export default class EndScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)
    this.state = {
      coins: '0000',
      score: '000M KM',
      highScore: '000M KM'
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
        score = lastScore.length === 3 ? lastScore + 'M KM' : lastScore.length === 2 ? '0' + lastScore + 'M KM' : '00' + lastScore + 'M KM'
        Storage.getHighScore().then(hScore => {
          highScore = hScore.length === 3 ? hScore + 'M KM' : hScore.length === 2 ? '0' + hScore + 'M KM' : '00' + hScore + 'M KM'
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
          style = {{ width: devWidth, height: devHeight }}
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
