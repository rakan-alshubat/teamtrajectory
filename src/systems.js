import { Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

let isPressed = false
let lastPosition = 0

const MoveShip = (entities, { touches }) => {
  const ship = entities['1']

  const moveTouch = touches.find(x => x.type === 'move')
  const startTouch = touches.find(x => x.type === 'start')
  const endTouch = touches.find(x => x.type === 'end')
  const pressTouch = touches.find(x => x.type === 'press')

  if (pressTouch) {
    lastPosition = pressTouch.event.pageX
    if (pressTouch.event.pageX > (WIDTH / 2)) {
      ship.position = [ship.position[0] + 4, ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    } else {
      ship.position = [ship.position[0] - 4, ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
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
      ship.position = [ship.position[0] + 4, ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    } else {
      ship.position = [ship.position[0] - 4, ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
    }
  } else if (isPressed) {
    if (isPressed) {
      if (lastPosition > (WIDTH / 2)) {
        ship.position = [ship.position[0] + 4, ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
      } else {
        ship.position = [ship.position[0] - 4, ship.position[1]] // ((ship.upgrades.thrusterControl + 1) / 2)
      }
    }
  }

  return entities
}

const MoveObstacles = (entities) => {
  const obstacle = entities['2']

  obstacle.position = [obstacle.position[0], obstacle.position[1] - 1]

  return entities
}

export { MoveShip, MoveObstacles }
