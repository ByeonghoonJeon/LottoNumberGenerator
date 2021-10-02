import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
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
        <Card.Image source={require("../assets/goldbars.jpg")}></Card.Image>
        <Text style={{ marginBottom: 10, marginTop: 10, color: "white" }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: HISTORY,
    };
  }

  static navigationOptions = {
    title: "My Chef",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem
            item={this.state.history[0]}
            onPress={() => this.props.navigation.navigate("Contact")}
          />
          <RenderItem
            item={this.state.history[1]}
            onPress={() => this.props.navigation.navigate("Contact")}
          />
          <RenderItem
            item={this.state.history[2]}
            onPress={() => this.props.navigation.navigate("Contact")}
          />
          <RenderItem
            item={this.state.history[3]}
            onPress={() => this.props.navigation.navigate("Contact")}
          />
          <RenderItem
            item={this.state.history[4]}
            onPress={() => this.props.navigation.navigate("Contact")}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Home;
