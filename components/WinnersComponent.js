import React, { Component } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { WINNERS } from "../shared/winners";
import * as Animatable from "react-native-animatable";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

function RenderItem({ item, onPress }) {
  let iconName = faLockOpen;
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
          어플 이용자 누적 당첨 현황
        </Card.FeaturedTitle>
        <Card.FeaturedSubtitle style={{ marginLeft: "auto" }}>
          {item.date} 기준
        </Card.FeaturedSubtitle>
        <Card.Divider />
        {/* <Card.Image source={img}></Card.Image> */}
        <Text style={{ marginBottom: 10, marginTop: 10, color: "white" }}>
          누적 당첨자
        </Text>
        <Card
          containerStyle={{
            backgroundColor: "#2B2B2B",
            borderColor: "#2B2B2B",
            shadowColor: "black",
          }}
        >
          <Card.Image
            source={require("../assets/5th.jpg")}
            containerStyle={{ length: 4 }}
          />
        </Card>

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
          onPress={onPress}
        />
      </Card>
    );
  }
  return <View />;
}

class Winners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: WINNERS,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem
            item={this.state.winners[0]}
            navigation={this.props.navigation}
            onPress={() => this.props.navigation.navigate("Numbers", { id: 0 })}
            keyExtractor={(item) => item.id.toString()}
          />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Winners;
