import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Icon, Text } from "native-base";

class CategoryCard extends React.PureComponent {
  _onPressCard = () => this.props.onPress && this.props.onPress();

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._onPressCard}>
        <View style={[styles.imageContainer, this.props.style]}>
          <Icon name={this.props.icon} type={this.props.type} />
        </View>

        <View style={{ marginBottom: 3 }} />

        <Text style={styles.name}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginVertical: 8
  },

  imageContainer: {
    padding: 12,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#dbe1e0",
    borderColor: "#98a9b350",
    borderWidth: 0.4,
    borderRadius: 3,
    marginHorizontal: 13,
    height: 60,
    width: 60,

    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0
    }
  },

  name: {
    textAlign: "center",
    fontSize: 12.5,
    maxWidth: "90%"
  }
});
