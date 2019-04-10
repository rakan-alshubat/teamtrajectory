import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Animated, View, Image } from 'react-native'

const obstacleDimensions = {
  1: [40, 18],
  2: [33, 30],
  3: [31, 30],
  4: [29, 30],
  5: [21, 30],
  6: [33, 32],
  7: [47, 36],
  8: [50, 40],
  9: [36, 25],
  10: [30, 27],
  11: [50, 33],
  12: [49, 49],
  13: [49, 32]
}

const collectableDimensions = {
  1: [30, 30],
  2: [22, 22],
  3: [20, 30],
  4: [30, 30],
  5: [30, 30]
}

class Obstacle extends PureComponent {
  render () {
    return (
      <View>
        {
          this.renderCollectables()
        }
        {
          this.renderObstacles()
        }
      </View>
    )
  }
  renderCollectables () {
    return this.props.collectables.map((obj, key) => {
      let width = collectableDimensions[obj.type][0]
      let height = collectableDimensions[obj.type][1]
      const x = obj.position[0] - (width / 2)
      const y = obj.position[1] - (height / 2)

      if (obj.type) {
        switch (obj.type) {
          case 1:
            return (
              <Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y }}
                source={require('../assets/collectable-1.png')}
              />
            )
          case 2:
            return (
              <Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y }}
                source={require('../assets/collectable-2.png')}
              />
            )
          case 3:
            return (
              <Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y }}
                source={require('../assets/collectable-3.png')}
              />
            )
          case 4:
            return (
              <Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y }}
                source={require('../assets/collectable-4.png')}
              />
            )
          case 5:
            return (
              <Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y }}
                source={require('../assets/collectable-5.png')}
              />
            )
        }
      } else {
        return (
          <View />
        )
      }
    })
  }
  renderObstacles () {
    return this.props.obstacles.map((obs, key) => {
      let width = obstacleDimensions[obs.type][0]
      let height = obstacleDimensions[obs.type][1]
      const x = obs.position[0] - (width / 2)
      const y = obs.position[1] - (height / 2)

      // Interpolate beginning and end values
      const spin = obs.spin.interpolate({
        inputRange: [0, 1],
        outputRange: obs.rotation === 1 ? ['0deg', '2160deg'] : ['2160deg', '0deg']
      })

      if (obs.type) {
        switch (obs.type) {
          case 1:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-1.png')}
              />
            )
          case 2:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-2.png')}
              />
            )
          case 3:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-3.png')}
              />
            )
          case 4:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-4.png')}
              />
            )
          case 5:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-5.png')}
              />
            )
          case 6:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-6.png')}
              />
            )
          case 7:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-7.png')}
              />
            )
          case 8:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-8.png')}
              />
            )
          case 9:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-9.png')}
              />
            )
          case 10:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height: height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-10.png')}
              />
            )
          case 11:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-11.png')}
              />
            )
          case 12:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-12.png')}
              />
            )
          case 13:
            return (
              <Animated.Image
                key={key}
                style={{ position: 'absolute', height, width, left: x, bottom: y, transform: [{ rotate: spin }] }}
                source={require('../assets/obstacle-13.png')}
              />
            )
        }
      } else {
        return (
          <Image
            key={key}
            style={{ position: 'absolute', height: obstacleDimensions[1][0], width: obstacleDimensions[1][1], left: x, bottom: y }}
            source={require('../assets/obstacle-1.png')}
          />
        )
      }
    })
  }
}

Obstacle.propTypes = {
  update: PropTypes.bool,
  collectables: PropTypes.array,
  obstacles: PropTypes.array
}

export { Obstacle, obstacleDimensions, collectableDimensions }
