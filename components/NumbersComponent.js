import React, { Component } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem, Button, Icon, Image } from "react-native-elements";
import { HISTORY } from "../shared/numberHistory.js";
import * as Animatable from "react-native-animatable";
import { inlineStyles } from "react-native-svg";

function RenderItem({ item }) {
  let numberImage1;

  if (item) {
    return (
      <View>
        <Card
          containerStyle={{
            backgroundColor: "#2B2B2B",
            borderColor: "#2B2B2B",
            shadowColor: "black",
          }}
        >
          <Card.FeaturedTitle style={{ textAlign: "center" }}>
            제 {item.round}회차 당첨번호
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{ marginLeft: "auto" }}>
            {item.date}
          </Card.FeaturedSubtitle>

          <Card.Divider />
          <Card.Image
            source={require("../assets/number1.png")}
            style={{ width: 60, height: 60 }}
          />
        </Card>
      </View>
    );
  }
  return <View />;
}

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: HISTORY,
    };
  }

  static navigationOptions = {
    title: "Numbers",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem
            item={this.state.history[0]}
            navigation={this.props.navigation}
            keyExtractor={(item) => item.id.toString()}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Numbers;
