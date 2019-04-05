import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

class Ship extends PureComponent {
  render() {
    const width = 50;
    const height = 75;
    const x = this.props.position[0] - width / 2;
    const y = this.props.position[1] - height / 2;
    return (
      <Image
        style={{ height: height, width: width, left: x, bottom: y }}
        source={require("../assets/lvl3-pink.png")}
      />
    );
  }
}

Ship.propTypes = {
  position: PropTypes.node
};

export { Ship };
