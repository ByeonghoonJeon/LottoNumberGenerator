import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { HISTORY } from "../shared/numberHistory.js";
import * as Animatable from "react-native-animatable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import About from "./AboutComponent.js";

function RenderItem({ item }) {
  let iconName = faLock;
  if (item) {
    let img;
    if (item.round % 5 == 1) {
      img = require("../assets/goldbars.jpg");
    } else if (item.round % 5 == 2) {
      img = require("../assets/dollars.jpg");
    } else if (item.round % 5 == 3) {
      img = require("../assets/cards.jpg");
    } else if (item.round % 5 == 4) {
      img = require("../assets/lights.jpg");
    } else {
      img = require("../assets/ruby.jpg");
    }
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
        <Card.Image source={img}></Card.Image>
        <Text style={{ marginBottom: 10, marginTop: 10, color: "white" }}>
          {" "}
          제 {item.round}회차 당첨번호를 알아보세요. 보너스 번호는{" "}
          {item.bonusNumber}이며, 나머지 번호들은 {item.number1}, {item.number2}
          , {item.number3}
          ..
        </Text>

        <Button
          icon={<FontAwesomeIcon icon={iconName} color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: "#CE1212",
          }}
          title="  전체 번호 확인하기"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </Card>
    );
  }
  return <View />;
}

// class NumberPrediction extends Component{
//   render(){
//     return(

//     )
//   }
// }

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
            onPress={() => this.props.navigation.navigate("About")}
          />
          <RenderItem
            item={this.state.history[1]}
            onPress={() => this.props.navigation.navigate("About")}
          />
          <RenderItem
            item={this.state.history[2]}
            onPress={() => this.props.navigation.navigate("About")}
          />
          <RenderItem
            item={this.state.history[3]}
            onPress={() => this.props.navigation.navigate("About")}
          />
          <RenderItem
            item={this.state.history[4]}
            onPress={() => this.props.navigation.navigate("About")}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Home;
