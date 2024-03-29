import { AsyncStorage } from 'react-native'

class Storage {
  static async setShipLevel (level) {
    try {
      await AsyncStorage.setItem('shipLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getShipLevel () {
    try {
      const shipLevel = await AsyncStorage.getItem('shipLevel') || '1'
      return shipLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setFuelLevel (level) {
    try {
      await AsyncStorage.setItem('fuelLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getFuelLevel () {
    try {
      const fuelLevel = await AsyncStorage.getItem('fuelLevel') || '1'
      return fuelLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setThrusterControlLevel (level) {
    try {
      await AsyncStorage.setItem('thrusterControlLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getThrusterControlLevel () {
    try {
      const thrusterControlLevel = await AsyncStorage.getItem('thrusterControlLevel') || '1'
      return thrusterControlLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setThrusterEfficiencyLevel (level) {
    try {
      await AsyncStorage.setItem('thrusterEfficiencyLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getThrusterEfficiencyLevel () {
    try {
      const thrusterEfficiencyLevel = await AsyncStorage.getItem('thrusterEfficiencyLevel') || '1'
      return thrusterEfficiencyLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setSolarPanelsLevel (level) {
    try {
      await AsyncStorage.setItem('solarPanelsLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getSolarPanelsLevel () {
    try {
      const solarPanelsLevel = await AsyncStorage.getItem('solarPanelsLevel') || '1'
      return solarPanelsLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setBatteryCapacityLevel (level) {
    try {
      await AsyncStorage.setItem('batteryCapacityLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getBatteryCapacityLevel () {
    try {
      const batteryCapacityLevel = await AsyncStorage.getItem('batteryCapacityLevel') || '1'
      return batteryCapacityLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setCoinBoostLevel (level) {
    try {
      await AsyncStorage.setItem('coinBoostLevel', level)
    } catch (err) {
      console.log(err)
    }
  }
  static async getCoinBoostLevel () {
    try {
      const coinBoostLevel = await AsyncStorage.getItem('coinBoostLevel') || '1'
      return coinBoostLevel
    } catch (err) {
      console.log(err)
    }
  }
  static async setLastScore (score) {
    try {
      await AsyncStorage.setItem('lastScore', score)
    } catch (err) {
      console.log(err)
    }
  }
  static async getLastScore () {
    try {
      const lastScore = await AsyncStorage.getItem('lastScore') || '0'
      return lastScore
    } catch (err) {
      console.log(err)
    }
  }
  static async setLastCoins (coins) {
    try {
      await AsyncStorage.setItem('lastCoins', coins)
    } catch (err) {
      console.log(err)
    }
  }
  static async getLastCoins () {
    try {
      const coins = await AsyncStorage.getItem('lastCoins') || '0'
      return coins
    } catch (err) {
      console.log(err)
    }
  }
  static async setHighScore (score) {
    try {
      await AsyncStorage.setItem('highScore', score)
    } catch (err) {
      console.log(err)
    }
  }
  static async getHighScore () {
    try {
      const highScore = await AsyncStorage.getItem('highScore') || '0'
      return highScore
    } catch (err) {
      console.log(err)
    }
  }
  static async setCoins (coins) {
    try {
      await AsyncStorage.setItem('coins', coins)
    } catch (err) {
      console.log(err)
    }
  }
  static async getCoins () {
    try {
      const coins = await AsyncStorage.getItem('coins') || '0'
      return coins
    } catch (err) {
      console.log(err)
    }
  }
  static async setGameOver (gameOver) {
    try {
      await AsyncStorage.setItem('gameOver', gameOver)
    } catch (err) {
      console.log(err)
    }
  }
  static async getGameOver () {
    try {
      const gameOver = await AsyncStorage.getItem('gameOver') || '0'
      return gameOver
    } catch (err) {
      console.log(err)
    }
  }
  static async setPaused (paused) {
    try {
      await AsyncStorage.setItem('paused', paused)
    } catch (err) {
      console.log(err)
    }
  }
  static async getPaused () {
    try {
      const paused = await AsyncStorage.getItem('paused') || '0'
      return paused
    } catch (err) {
      console.log(err)
    }
  }
}

export { Storage }
