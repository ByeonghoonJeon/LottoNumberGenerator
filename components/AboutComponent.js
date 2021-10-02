import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

class About extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#232323",
        }}
      >
        <Text>About!</Text>
      </View>
    );
  }
}

export default About;
