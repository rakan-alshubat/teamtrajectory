import { Animated, Dimensions, Easing } from 'react-native'
import { collectableDimensions, obstacleDimensions } from './components/Obstacle'
import { Storage } from './storage'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

setInterval(() => {
  spawnFactor = Math.random()
}, 1000)

setInterval(() => {
  if (frames < 6) frames = 6
  fps = (frames / 2)
  frames = 0
}, 500)

setInterval(() => {
  Storage.getPaused().then(val => {
    if (paused === '1' && val === '0') resumed = true
    paused = val
  })
}, 500)

const maxDistance = 600
const thrusterLevels = {
  1: 0.01,
  2: 0.015,
  3: 0.022,
  4: 0.027,
  5: 0.035
}
const thrusterEffLevels = {
  1: 1.4,
  2: 1.25,
  3: 1.05,
  4: 0.9,
  5: 0.65
}
const solarPanelsLevels = {
  1: 10000,
  2: 9000,
  3: 7500,
  4: 6500,
  5: 4500
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
let coins = 0
/* eslint-disable */
let coinBoostTimeout = null
let speedChangeTimeout = null
/* eslint-enable */
let isCoinBoost = false
let gameOver = '0'
let fps = 18
let frames = 18
let paused = '0'
let resumed = false

let solarPanelsInterval = null

const Tick = (entities, { touches }) => {
  // Count frame rate
  ++frames
  // Define entities
  const background = entities['1']
  const ship = entities['2']
  const obstacle = entities['3']
  const battery = entities['4']
  const fuel = entities['5']
  const score = entities['6']
  const timer = entities['7']

  if (paused === '1' && gameOver !== '1') {
    Storage.getGameOver().then(val => { gameOver = val })
    timer.pause = true
    obstacle.obstacles.map(obs => {
      Animated.timing(obs.spin).stop()
    })
    return entities
  }
  // Go home from pause menu
  if (paused === '1' && gameOver === '1') {
    Storage.setCoins(String(lastCoins + coins)).then(x => {
      Storage.setLastScore(String(Math.round(distanceTraveled))).then(x => {
        if (distanceTraveled > highScore) {
          highScore = distanceTraveled
          Storage.setHighScore(String(Math.round(distanceTraveled)))
        }
        solarPanelsInterval = null
        coins = 0
        distanceTraveled = fuelLevels[fuelLevel]
        ship.position = [WIDTH / 2, 180]
        velocity = 2
        obstacle.collectables = []
        obstacle.obstacles = []
        battery.battery = 80
        fuel.fuelAmount = 95
        timer.reset = true
        Storage.setPaused('0')
        paused = '0'
        Storage.setGameOver('0')
        gameOver = '0'
        return entities
      }).catch(err => {
        console.log(err)
        return entities
      })
    }).catch(err => {
      console.log(err)
      return entities
    })
  }
  if (resumed) {
    resumed = false
    timer.pause = false
    obstacle.obstacles.map(obs => {
      Animated.timing(
        obs.spin,
        {
          toValue: 1,
          duration: 13500,
          easing: Easing.linear
        }
      ).start()
    })
  }

  if (gameOver === '1') {
    Storage.getGameOver().then(val => { gameOver = val })
    return entities
  }

  // End game: velocity 0 or reached end
  if (velocity <= 0 || distanceTraveled >= maxDistance) {
    gameOver = '1'
    Storage.setGameOver('1').then(x => {
      Storage.setCoins(String(lastCoins + coins)).then(x => {
        Storage.setLastScore(String(Math.round(distanceTraveled))).then(x => {
          if (distanceTraveled > highScore) {
            highScore = distanceTraveled
            Storage.setHighScore(String(Math.round(distanceTraveled))).then(background.navigation.navigate('End'))
          } else {
            background.navigation.navigate('End')
          }
          solarPanelsInterval = null
          coins = 0
          distanceTraveled = fuelLevels[fuelLevel]
          ship.position = [WIDTH / 2, 180]
          velocity = 2
          obstacle.collectables = []
          obstacle.obstacles = []
          battery.battery = 80
          fuel.fuelAmount = 95
          timer.reset = true
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
  distanceTraveled += (velocity / fps)
  // Update coins
  score.coins = lastCoins + coins
  // Update timer
  timer.reset = false

  const shipPositionOld = [ship.position[0], ship.position[1]]
  const moveTouch = touches.find(x => x.type === 'move')
  const startTouch = touches.find(x => x.type === 'start')
  const endTouch = touches.find(x => x.type === 'end')
  const pressTouch = touches.find(x => x.type === 'press')

  /* Touch Controls */
  if (pressTouch) {
    lastPosition = pressTouch.event.pageX
    if (pressTouch.event.pageX > (WIDTH / 2)) {
      ship.position = [ship.position[0] + (speed * (WIDTH / fps)), ship.position[1]]
    } else {
      ship.position = [ship.position[0] - (speed * (WIDTH / fps)), ship.position[1]]
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
      ship.position = [ship.position[0] + (speed * (WIDTH / fps)), ship.position[1]]
    } else {
      ship.position = [ship.position[0] - (speed * (WIDTH / fps)), ship.position[1]]
    }
  } else if (isPressed) {
    if (isPressed) {
      if (lastPosition > (WIDTH / 2)) {
        ship.position = [ship.position[0] + (speed * (WIDTH / fps)), ship.position[1]]
      } else {
        ship.position = [ship.position[0] - (speed * (WIDTH / fps)), ship.position[1]]
      }
    }
  }

  /* Battery */
  // Battery regeneration
  if (!solarPanelsInterval) {
    solarPanelsInterval = setInterval(() => {
      if (paused) return
      if (battery.battery < 80) {
        battery.battery += 10
        if (battery.battery > 80) {
          battery.battery = 80
        }
      }
    }, solarPanelsLevels[solarPanelsLevel])
  }
  // Do not move ship if out of battery
  if (battery.battery <= 0) {
    ship.position = shipPositionOld
  }
  // Consume battery from ship movement
  if (ship.position[0] !== shipPositionOld[0]) {
    battery.battery -= 80 * (Math.abs(shipPositionOld[0] - ship.position[0]) / WIDTH) * thrusterEffLevels[thrusterEffLevel]
    if (battery.battery < 0) battery.battery = 0
  }

  /* Spawn Entities */
  // Force ship to re-render
  ship.update = !ship.update
  // Force entities to re-render
  obstacle.update = !obstacle.update
  // Spawn collectables
  if (lastSpawnFactor !== spawnFactor && spawnFactor > 0.7) {
    const numX2Coins = obstacle.collectables.filter(obj => obj.type === 2).length
    const numSpeedReducs = obstacle.collectables.filter(obj => obj.type === 3).length
    const numSpeedBoosts = obstacle.collectables.filter(obj => obj.type === 4).length
    const numStyleCoins = obstacle.collectables.filter(obj => obj.type === 5).length

    let type = Math.floor(Math.random() * (10)) + 1

    if (type < 6) type = 1
    else if (type < 8 && numSpeedBoosts === 0) type = 4
    else if (type < 9 && numX2Coins === 0) type = 2
    else if (type < 10 && numSpeedReducs === 0) type = 3
    else if (type === 10 && numStyleCoins === 0) type = 5
    else type = 1

    obstacle.collectables.push({ type, position: [Math.random() * (WIDTH + 30), HEIGHT + 100], speed: 0.02, delete: false })
  }
  // Spawn obstacles
  if (obstacle.obstacles.length < 3 && lastSpawnFactor !== spawnFactor && spawnFactor < 0.4) {
    const newObstacle = {
      type: (Math.floor(Math.random() * (12)) + 1),
      spin: new Animated.Value(0),
      rotation: Math.round(Math.random()),
      position: [Math.random() * (WIDTH + 30), HEIGHT + 100],
      endpoint: [Math.random() * (WIDTH + 30)],
      speed: ((Math.random() * 0.04) + 0.02),
      delete: false
    }
    Animated.timing(
      newObstacle.spin,
      {
        toValue: 1,
        duration: 13500,
        easing: Easing.linear
      }
    ).start()
    obstacle.obstacles.push(newObstacle)
  }

  /* Collectable Collisions */
  let collectables = obstacle.collectables
  if (collectables.length > 0) {
    collectables.map(obj => {
      if (obj.delete) return

      obj.position[1] = obj.position[1] - (obj.speed * ((HEIGHT + 100) / fps))

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
    obstacle.collectables = collectables.filter(obs => !obs.delete)
  }

  /* Obstacle Collisions */
  let obstacles = obstacle.obstacles
  if (obstacles.length > 0) {
    obstacles.map(obs => {
      if (obs.delete) return

      let dimensions = obstacleDimensions[obs.type]
      if (obs.spin >= 0.4 && obs.spin < 0.8) dimensions = [obstacleDimensions[obs.type][1][0]]

      obs.position[0] = obs.position[0] + (obs.speed * ((obs.endpoint - obs.position[0]) / fps))
      obs.position[1] = obs.position[1] - (obs.speed * ((HEIGHT + 100) / fps))
      // Obstacle-Ship collisions
      const matchH = Math.abs((ship.position[0] + (ship.dimensions[0] / 2)) - (obs.position[0] + (dimensions[0] / 2))) < (ship.dimensions[0] / 2)
      const matchV = Math.abs((ship.position[1] + (ship.dimensions[1] / 2)) - (obs.position[1] + (dimensions[1] / 2))) < (ship.dimensions[1] / 2)
      if (matchH && matchV) {
        obs.delete = true
        fuel.fuelAmount -= 47
        velocity -= 1
      }
      // Floor collisions
      if (obs.position[1] - (dimensions[1]) <= 0) {
        obs.delete = true
      }
    })
    obstacle.obstacles = obstacles.filter(obs => !obs.delete)
  }

  /* Ship-Wall Collisions */
  const collideLeft = ship.position[0] <= 0
  const collideRight = ship.position[0] >= WIDTH
  if (collideLeft || collideRight) {
    ship.position = shipPositionOld
  }

  lastSpawnFactor = spawnFactor

  // Fuel
  if (fuel.fuelAmount > 1) fuel.fuelAmount -= 0.1
  else fuel.fuelAmount = 80

  return entities
}

export { Tick }
