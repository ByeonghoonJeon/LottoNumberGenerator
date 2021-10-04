import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import * as Animatable from "react-native-animatable";

class About extends Component {
  render() {
    let iconName = faFire;
    return (
      <ScrollView containerStyle={{}}>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <Card
            containerStyle={{
              backgroundColor: "#2B2B2B",
              borderColor: "#2B2B2B",
              shadowColor: "black",
            }}
          >
            <Card.FeaturedTitle
              style={{ textAlign: "center", color: "#FFC107" }}
            >
              사주를 바탕으로 추천하는 로또 번호
            </Card.FeaturedTitle>
            <Card.Divider />
            <Text
              style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
            >
              1. 로또 사는 날짜, 언제가 좋을까요?
            </Text>
            <Card.Image source={require("../assets/date.jpg")}></Card.Image>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {"  "}
              횡재수, 로또운, 편재운이 들어오는 날짜에 로또를 구매해 보세요.
              생년월일시를 바탕으로 나한테 언제 로또운이 들어오는지 정확한
              날짜와 시간을 알아가세요!
            </Text>
            <Card.Divider />
            <Text
              style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
            >
              2. 로또 번호, 아무거나 찍지 마세요!
            </Text>
            <Card.Image source={require("../assets/aim.jpg")}></Card.Image>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {"  "}내 사주를 바탕으로 나만의 번호를 받아보세요. 나의 사주와,
              로또운이 들어오는 날짜, 시간 등을 조합하여 만들어진 최적의 번호를
              가져가세요!
            </Text>
            <Card.Divider />
            <Text
              style={{ marginBottom: 10, color: "#FFC107", fontWeight: "bold" }}
            >
              3. 의미없는 번호를 받느라 돈을 많이 쓰지 마세요!
            </Text>
            <Card.Image source={require("../assets/discount.jpg")}></Card.Image>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {"  "}이제는 나만의 번호를 저렴한 가격에 가져가세요!
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
              title="  나만의 번호 가져가기"
              onPress={() => d}
            />
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default About;
