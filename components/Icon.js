import React from "react";
import { Icon } from "native-base";

import Colors from "../constants/Colors";

class TabBarIcon extends React.Component {
  render() {
    const { name, size, type, focused, style } = this.props;
    return (
      <Icon
        name={name}
        size={size || 26}
        type={type}
        style={{
          marginBottom: -3,
          color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
          ...style
        }}
      />
    );
  }
}

export default TabBarIcon;
