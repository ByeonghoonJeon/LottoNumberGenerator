import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

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
        <Card
          containerStyle={{
            backgroundColor: "#2B2B2B",
            borderColor: "#2B2B2B",
            shadowColor: "black",
          }}
        >
          <Card.FeaturedTitle style={{ textAlign: "center", color: "#FFC107" }}>
            사주를 바탕으로 추천하는 로또 번호
          </Card.FeaturedTitle>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#B2B1B9", fontWeight: "bold" }}
          >
            1. 로또 사는 날짜, 언제가 좋을까요?
          </Text>
          <Text
            style={{ marginBottom: 10, color: "white", fontWeight: "bold" }}
          >
            {"  "}
            나의 횡재수, 로또운, 편재운이 들어오는 날짜에 로또를 구매해 보세요.
            생년월일시를 바탕으로 나한테 언제 로또운이 들어오는지
          </Text>
          <Card.Divider />
          <Text
            style={{ marginBottom: 10, color: "#B2B1B9", fontWeight: "bold" }}
          >
            1. 로또 사는 날짜 언제가 좋을까요?
          </Text>
          <Text
            style={{ marginBottom: 10, color: "white", fontWeight: "bold" }}
          >
            {"  "}
            나의 횡재수, 편재운이 들어오는 날짜에 로또를 구매해 보세요.
          </Text>

          <Button
            icon={<FontAwesomeIcon icon="faLockOpen" color="#ffffff" />}
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
      </View>
    );
  }
}

export default About;
