import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { HISTORY } from "../shared/numberHistory.js";
import * as Animatable from "react-native-animatable";

function RenderItem({ number }) {
  if (number) {
    return (
      <ScrollView>
        <Card featuredTitle={number.bonusNumber}>
          <Text style={({ marginTop: 10 }, { marginLeft: 10 })}>
            Difficulty: {number.number1}
          </Text>
          <Text style={({ marginBottom: 10 }, { marginLeft: 10 })}>
            Time: {number.number2} mins.
          </Text>
        </Card>
      </ScrollView>
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
    const numberId = this.props.navigation.getParam("numberId");
    const number = this.state.history.filter(
      (number) => number.id === numberId
    )[0];
    return (
      <View>
        <Animatable.View animation="fadeInRightBig" duration={1000}>
          <RenderItem number={number} />
        </Animatable.View>
      </View>
    );
  }
}

export default Numbers;
