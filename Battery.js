import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";

export default class Battery extends PureComponent {
  constructor() {
    super();
    this.state = {
      batteryBars: 80
    };
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      {
        if (this.state.batteryBars > 0) {
          this.setState({
            batteryBars: this.state.batteryBars - 1
          });
        } else {
          this.setState({
            batteryBars: 0
          });
        }
      }
    }, 1000);
  }

  render() {
    const width = 21;
    const height = 55;
    const x = 30;
    const y = 840;
    const batteryBars = this.state.batteryBars;
    const one = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 8 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const two = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 18 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const three = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 28 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const four = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 38 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const five = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 48 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const six = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 58 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const seven = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 68 }}
        source={require("../src/assets/bar.png")}
      />
    );
    const eight = (
      <Image
        style={{ height: 4, width: 16, left: x + 2.5, bottom: y + 78 }}
        source={require("../src/assets/bar.png")}
      />
    );

    let arr;
    if (this.state.batteryBars > 70) {
      arr = [one, two, three, four, five, six, seven, eight];
    } else if (this.state.batteryBars > 60) {
      arr = [one, two, three, four, five, six, seven];
    } else if (this.state.batteryBars > 50) {
      arr = [one, two, three, four, five, six];
    } else if (this.state.batteryBars > 40) {
      arr = [one, two, three, four, five];
    } else if (this.state.batteryBars > 30) {
      arr = [one, two, three, four];
    } else if (this.state.batteryBars > 20) {
      arr = [one, two, three];
    } else if (this.state.batteryBars > 10) {
      arr = [one, two];
    } else if (this.state.batteryBars > 0) {
      arr = [one];
    }

    return (
      <React.Fragment>
        <Image
          style={{ height: height, width: width, left: x, bottom: y + 1.5 }}
          source={require("../src/assets/BatteryFrame.png")}
        />

        {arr}
        <View
          style={[
            styles.container,
            { width: 80, height: 20, left: 30, bottom: 700 }
          ]}
        />
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: "absolute"
  },
  gameOver: {
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20
  }
});

export { Battery };
