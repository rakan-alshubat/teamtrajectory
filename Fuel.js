import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PropTypes from "prop-types";

export default class Fuel extends Component {
  render() {
    const width = this.props.fuelAmount;
    const height = 20;
    //bot = 145
    return (
      <React.Fragment>
        <Image
          style={{ height: 12, width: 100, left: 30, bottom: 840 }}
          source={require("../src/assets/fuelBar.png")}
        />

        <View
          style={[
            styles.square,
            { width: width, height: 7.5, left: 33, bottom: 850 }
          ]}
        />
      </React.Fragment>
    );
  }
}

Fuel.propTypes = {
  fuelAmount: PropTypes.node
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "white"
  }
});
export { Fuel };
