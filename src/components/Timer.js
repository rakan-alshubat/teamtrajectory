import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

export default class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      months: [
        'Jan',
        'Feb',
        ' Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        ' Sep',
        'Oct',
        'Nov',
        'Dec',
        'Game Over'
      ],
      year: 2022,
      month: 8,
      dot: '/',
      displayTimer: true
    }
  }

  render () {
    /*
    if (this.props.reset) {
      console.log('resetting')
      this.props.reset = false
      this.setState({
        months: [
          'Jan',
          'Feb',
          ' Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          ' Sep',
          'Oct',
          'Nov',
          'Dec',
          'Game Over'
        ],
        year: 2022,
        month: 8,
        dot: '/',
        displayTimer: true
      })
    }
    const { year, month, dot } = this.state
    var m = this.state.months[month - 1]
    const width = 68
    const height = 19
    return (
      <View
        style={[styles.container, { width, height, top: '7.27%', left: '16.27%' }]}
      >
        <Text style={styles.instructions}>
          {m}
          {dot}
          {year}
        </Text>
        <Text style={styles.gameOver} />
      </View>
    )
    */
    return (
      <View />
    )
  }

  yearIncrement = value => (value === 12 ? this.state.year + 1 : this.state.year)
  monthIncrement = value => (value > 11 ? (value = 1) : value + 1)

  componentDidMount () {
    this.myInterval = setInterval(() => {
      if (this.state.year !== 2026) {
        if (this.state.displayTimer === true) {
          this.setState({
            month: this.monthIncrement(this.state.month),
            year: this.yearIncrement(this.state.month)
          })
        }
      } else {
        this.setState({
          month: 13,
          dot: '',
          year: null,
          displayTimer: false
        })
      }
    }, 1000)
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#0a0c21'
  },
  gameOver: {
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 13
  }
})

Timer.propTypes = {
  reset: PropTypes.bool
}

export { Timer }
