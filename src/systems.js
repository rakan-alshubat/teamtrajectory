import { Animated, Dimensions, Easing } from 'react-native'
import { collectableDimensions, obstacleDimensions } from './components/Obstacle'
import { Storage } from './storage'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

setInterval(() => {
  spawnFactor = Math.random()
}, 1000)

const maxDistance = 600
const thrusterLevels = {
  1: 0.075,
  2: 0.115,
  3: 0.1575,
  4: 0.2,
  5: 0.24
}
const thrusterEffLevels = {
  1: 2.2,
  2: 2,
  3: 1.7,
  4: 1.5,
  5: 1
}
const solarPanelsLevels = {
  1: 15000,
  2: 14000,
  3: 12000,
  4: 11000,
  5: 8000
}
const fuelLevels = {
  1: 25,
  2: 50,
  3: 85,
  4: 110,
  5: 150
}
const coinBoostLevels = {
  1: 5,
  2: 10,
  3: 17,
  4: 22,
  5: 30
}
const collectableSpeedIncrease = 1.25
const collectableSpeedDecrease = 0.75

let thrusterLevel = 1
Storage.getThrusterControlLevel().then(level => { thrusterLevel = Number(level) })
let thrusterEffLevel = 1
Storage.getThrusterEfficiencyLevel().then(level => { thrusterLevel = Number(level) })
let solarPanelsLevel = 1
Storage.getSolarPanelsLevel().then(level => { solarPanelsLevel = Number(level) })
let fuelLevel = 1
Storage.getFuelLevel().then(level => { fuelLevel = Number(level) })
let coinBoostLevel = 1
Storage.getCoinBoostLevel().then(level => { coinBoostLevel = Number(level) })
let lastCoins = 0
Storage.getCoins().then(coins => { lastCoins = Number(coins) })
let highScore = 0
Storage.getHighScore().then(score => { highScore = Number(score) })

let lastSpawnFactor = 1
let spawnFactor = 1
let isPressed = false
let lastPosition = 0
let velocity = 2

let distanceTraveled = fuelLevels[fuelLevel]
let speed = thrusterLevels[thrusterLevel]
// speed = 0.24
let coins = 0
let coinBoostTimeout = null
let speedChangeTimeout = null
let isCoinBoost = false
let gameOver = '0'

let solarPanelsInterval = null

const Tick = (entities, { touches }) => {
  // Storage.setHighScore('0')
  const ship = entities['2']

  if (ship.paused || gameOver === '1') {
    Storage.getGameOver().then(val => { gameOver = val })
    return entities
  }

  // End game: reached end
  if (distanceTraveled >= maxDistance) {
    entities['3'].obstacles.map(obs => {
      Animated.timing(obs.spin).stop()
    })
    Storage.setCoins(String(lastCoins + coins)).then(x => {
      if (distanceTraveled > highScore) {
        highScore = distanceTraveled
        Storage.setHighScore(String(Math.round(distanceTraveled))).then(entities['1'].navigation.navigate('End'))
      } else {
        entities['1'].navigation.navigate('End')
      }
      distanceTraveled = fuelLevels[fuelLevel]
      ship.position = [200, 160]
      velocity = 2
    })
    return entities
  }
  // End game: velocity 0
  if (velocity <= 0) {
    /*
    entities['3'].obstacles.map(obs => {
      Animated.timing(obs.spin).stop()
    })
    */
    console.log('gameover: ', gameOver)
    gameOver = '1'
    Storage.setGameOver('1').then(x => {
      console.log('set game over to 1')
      Storage.setCoins(String(lastCoins + coins)).then(x => {
        console.log('score: ', distanceTraveled)
        console.log('highscore: ', highScore)
        Storage.setLastScore(String(Math.round(distanceTraveled))).then(x => {
          if (distanceTraveled > highScore) {
            highScore = distanceTraveled
            Storage.setHighScore(String(Math.round(distanceTraveled))).then(entities['1'].navigation.navigate('End'))
          } else {
            entities['1'].navigation.navigate('End')
          }
          solarPanelsInterval = null
          coins = 0
          distanceTraveled = fuelLevels[fuelLevel]
          ship.position = [200, 160]
          velocity = 2
          entities['3'].collectables = []
          entities['3'].obstacles = []
          entities['5'].fuelAmount = 95
          entities['4'].battery = 80
          // entities['7'].reset = true
          return entities
        }).catch(err => {
          console.log(err)
          return entities
        })
      }).catch(err => {
        console.log(err)
        return entities
      })
    }).catch(err => {
      console.log(err)
      return entities
    })
  }
  // Update distance traveled
  distanceTraveled += (velocity / 18)
  // Update coins
  entities['6'].coins = lastCoins + coins

  const shipPositionOld = [ship.position[0], ship.position[1]]
  const moveTouch = touches.find(x => x.type === 'move')
  const startTouch = touches.find(x => x.type === 'start')
  const endTouch = touches.find(x => x.type === 'end')
  const pressTouch = touches.find(x => x.type === 'press')

  /* Touch Controls */
  if (pressTouch) {
    lastPosition = pressTouch.event.pageX
    if (pressTouch.event.pageX > (WIDTH / 2)) {
      ship.position = [ship.position[0] + (speed * (WIDTH / 18)), ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    } else {
      ship.position = [ship.position[0] - (speed * (WIDTH / 18)), ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    }
  }

  if (endTouch) {
    isPressed = false
    lastPosition = 0
  } else if (startTouch) {
    isPressed = true
    lastPosition = startTouch.event.pageX
  } else if (moveTouch) {
    lastPosition = moveTouch.event.pageX
    if (moveTouch.event.pageX > (WIDTH / 2)) {
      ship.position = [ship.position[0] + (speed * (WIDTH / 18)), ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    } else {
      ship.position = [ship.position[0] - (speed * (WIDTH / 18)), ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    }
  } else if (isPressed) {
    if (isPressed) {
      if (lastPosition > (WIDTH / 2)) {
        ship.position = [ship.position[0] + (speed * (WIDTH / 18)), ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
      } else {
        ship.position = [ship.position[0] - (speed * (WIDTH / 18)), ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
      }
    }
  }

  if (!solarPanelsInterval) {
    solarPanelsInterval = setInterval(() => {
      if (entities['4'].battery < 80) {
        entities['4'].battery += 10
        if (entities['4'].battery > 80) {
          entities['4'].battery = 80
        }
      }
    }, solarPanelsLevels[solarPanelsLevel])
  }
  if (entities['4'].battery <= 0) {
    ship.position = shipPositionOld
  }
  if (ship.position[0] !== shipPositionOld[0]) {
    // console.log(entities['4'].battery)
    entities['4'].battery -= 80 * (Math.abs(shipPositionOld[0] - ship.position[0]) / WIDTH) * thrusterEffLevels[thrusterEffLevel]
    if (entities['4'].battery < 0) entities['4'].battery = 0
  }

  /* Spawn Entities */
  // Force ship to re-render
  entities['2'].update = !entities['2'].update
  // Force entities to re-render
  entities['3'].update = !entities['3'].update
  // Spawn collectables
  if (lastSpawnFactor !== spawnFactor && spawnFactor > 0.7) {
    const numX2Coins = entities['3'].collectables.filter(obj => obj.type === 2).length
    const numSpeedReducs = entities['3'].collectables.filter(obj => obj.type === 3).length
    const numSpeedBoosts = entities['3'].collectables.filter(obj => obj.type === 4).length
    const numStyleCoins = entities['3'].collectables.filter(obj => obj.type === 5).length

    let type = Math.floor(Math.random() * (10)) + 1

    if (type < 6) type = 1
    else if (type < 8 && numSpeedBoosts === 0) type = 4
    else if (type < 9 && numX2Coins === 0) type = 2
    else if (type < 10 && numSpeedReducs === 0) type = 3
    else if (type === 10 && numStyleCoins === 0) type = 5
    else type = 1

    entities['3'].collectables.push({ type, position: [Math.random() * (WIDTH + 30), HEIGHT + 100], speed: 0.25, delete: false })
  }
  // Spawn obstacles
  if (entities['3'].obstacles.length < 3 && lastSpawnFactor !== spawnFactor && spawnFactor < 0.4) {
    const newObstacle = {
      type: (Math.floor(Math.random() * (12)) + 1),
      spin: new Animated.Value(0),
      rotation: Math.round(Math.random()),
      position: [Math.random() * (WIDTH + 30), HEIGHT + 100],
      endpoint: [Math.random() * (WIDTH + 30)],
      speed: ((Math.random() * 0.3) + 0.5),
      delete: false
    }
    Animated.timing(
      newObstacle.spin,
      {
        toValue: 1,
        duration: 4500,
        easing: Easing.linear
      }
    ).start()
    entities['3'].obstacles.push(newObstacle)
  }

  /* Collectable Collisions */
  let collectables = entities['3'].collectables
  if (collectables.length > 0) {
    collectables.map(obj => {
      if (obj.delete) return

      obj.position[1] = obj.position[1] - (obj.speed * ((HEIGHT + 100) / 60))

      // Collectable-Ship collisions
      let dimensions = collectableDimensions[obj.type]
      const matchH = Math.abs((ship.position[0] + (ship.dimensions[0] / 2)) - (obj.position[0] + (dimensions[0] / 2))) < (ship.dimensions[0] / 2)
      const matchV = Math.abs((ship.position[1] + (ship.dimensions[1] / 2)) - (obj.position[1] + (dimensions[1] / 2))) < (ship.dimensions[1] / 2)

      if (matchH && matchV) {
        if (obj.type === 1) {
          coins = coins + (isCoinBoost ? 10 : 5)
        } else if (obj.type === 2) {
          isCoinBoost = true
          coinBoostTimeout = setTimeout(() => {
            isCoinBoost = false
          }, coinBoostLevels[coinBoostLevel] * 1000)
        } else if (obj.type === 3) {
          speed *= collectableSpeedDecrease
          speedChangeTimeout = setTimeout(() => {
            speed = thrusterLevels[thrusterLevel]
          }, 10000)
        } else if (obj.type === 4) {
          speed *= collectableSpeedIncrease
          speedChangeTimeout = setTimeout(() => {
            speed = thrusterLevels[thrusterLevel]
          }, 10000)
        } else if (obj.type === 5) {
          // Change ship color
        }
        obj.delete = true
      }
      // Floor collisions
      if (obj.position[1] - (dimensions[1]) <= 0) {
        obj.delete = true
      }
    })
    entities['3'].collectables = collectables.filter(obs => !obs.delete)
  }

  /* Obstacle Collisions */
  let obstacles = entities['3'].obstacles
  if (obstacles.length > 0) {
    obstacles.map(obs => {
      if (obs.delete) return

      let dimensions = obstacleDimensions[obs.type]
      if (obs.spin >= 0.4 && obs.spin < 0.8) dimensions = [obstacleDimensions[obs.type][1][0]]

      obs.position[0] = obs.position[0] + (obs.speed * ((obs.endpoint - obs.position[0]) / 60))
      obs.position[1] = obs.position[1] - (obs.speed * ((HEIGHT + 100) / 60))
      // Obstacle-Ship collisions
      const matchH = Math.abs((ship.position[0] + (ship.dimensions[0] / 2)) - (obs.position[0] + (dimensions[0] / 2))) < (ship.dimensions[0] / 2)
      const matchV = Math.abs((ship.position[1] + (ship.dimensions[1] / 2)) - (obs.position[1] + (dimensions[1] / 2))) < (ship.dimensions[1] / 2)
      if (matchH && matchV) {
        obs.delete = true
        entities['5'].fuelAmount -= 47
        velocity -= 1
      }
      // Floor collisions
      if (obs.position[1] - (dimensions[1]) <= 0) {
        obs.delete = true
      }
    })
    entities['3'].obstacles = obstacles.filter(obs => !obs.delete)
  }

  /* Ship-Wall Collisions */
  const collideLeft = ship.position[0] <= 0
  const collideRight = ship.position[0] >= WIDTH
  if (collideLeft || collideRight) {
    ship.position = shipPositionOld
  }

  lastSpawnFactor = spawnFactor

  // Fuel
  const fuel = entities['4']
  if (fuel.fuelAmount > 1) fuel.fuelAmount -= 0.1
  else fuel.fuelAmount = 80

  return entities
}

export { Tick }
