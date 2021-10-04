import React, { Component } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem, Button, Icon, Image } from "react-native-elements";
import { HISTORY } from "../shared/numberHistory.js";
import * as Animatable from "react-native-animatable";

function RenderItem({ item }) {
  if (item) {
    return (
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
        {/* <Card.Image
          source={require(`${img1}`)}
          style={{ width: 80, height: 80, resizeMode: "contain" }}
        /> */}

        <Text style={{ marginBottom: 10, marginTop: 10, color: "white" }}>
          {" "}
          제 {item.round}회차 당첨번호를 알아보세요. 보너스 번호는{" "}
          {item.bonusNumber}이며, 나머지 번호들은 {item.number1}, {item.number2}
          , {item.number3}
          ..
        </Text>
      </Card>
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
