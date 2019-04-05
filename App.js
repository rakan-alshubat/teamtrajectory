import React, { PureComponent } from "react";
import { Obstacle } from "./src/components/Obstacle";
import { AppRegistry, StyleSheet, Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Ship } from "./src/components/Ship";
import {
  MoveBackground,
  MoveShip,
  MoveObstacles,
  FuelAmount
} from "./src/systems";
import ScrollingBackgroundImage from "./src/views/ScrollingBackgroundImage";
import Timer from "./Timer";
import Fuel from "./src/Fuel";
import Battery from "./src/Battery";
import Score from "./src/Score";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const entities = {
  1: { renderer: <ScrollingBackgroundImage /> },
  2: { position: [200, 130], renderer: <Ship /> },
  3: {
    position: [Math.random() * (WIDTH - 30), HEIGHT + 100],
    renderer: <Obstacle />
  },
  4: { fuelAmount: 98, renderer: <Fuel /> },
  5: { renderer: <Battery /> },
  6: { renderer: <Timer /> },
  7: { renderer: <Score /> }
};

export default class App extends PureComponent {
  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveBackground, MoveShip, MoveObstacles, FuelAmount]}
        entities={entities}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});

AppRegistry.registerComponent("App", () => App);
