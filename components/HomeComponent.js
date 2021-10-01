// import React, { Component } from "react";
// import { View, Text, ScrollView } from "react-native";
// import { Card } from "react-native-elements";
// import { HISTORY } from "../shared/numberHistory.js";
// import * as Animatable from "react-native-animatable";

// function RenderItem({ item }) {
//   if (item) {
//     return (
//       <Card featuredTitle={item.round} image={item.basicImage}>
//         <Text style={{ margin: 10 }}>
//           {
//             (item.number1,
//             item.number2,
//             item.number3,
//             item.number4,
//             item.number5,
//             item.number6)
//           }{" "}
//           + {item.bonusNumber}
//         </Text>
//       </Card>
//     );
//   }
//   return <View />;
// }

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: HISTORY,
//     };
//   }

//   static navigationOptions = {
//     title: "My Chef",
//   };

//   render() {
//     return (
//       <ScrollView>
//         <Text>Hello</Text>
//         {/* <Animatable.View animation="fadeInRightBig" duration={1000}>
//           <RenderItem
//             item={this.state.history[this.state.history.length - 1]}
//             onPress={() => this.props.navigation.navigate("Contact")}
//           />
//         </Animatable.View> */}
//       </ScrollView>
//     );
//   }
// }

// export default Home;
