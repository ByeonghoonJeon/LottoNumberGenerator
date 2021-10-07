import * as React from "react";
import { Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/HomeComponent";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faQuestionCircle,
  faCheckSquare,
  faHome,
  faTrophy,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import About from "./components/AboutComponent";
import Numbers from "./components/NumbersComponent";
import Winners from "./components/WinnersComponent";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323",
      }}
    >
      <Home {...props} />
    </View>
  );
}

function PurchaseScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#284E78",
      }}
    >
      <Text>Shopping Cart!</Text>
    </View>
  );
}

function AboutScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323",
      }}
    >
      <About {...props} />
    </View>
  );
}

function WinnersScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323",
      }}
    >
      <Winners {...props} />
    </View>
  );
}

function NumbersScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323",
      }}
    >
      <Numbers />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color;
            let size;

            if (route.name === "나만의 번호") {
              iconName = focused ? faCheckSquare : faUserCircle;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 25;
            } else if (route.name === "사주로또") {
              iconName = focused ? faCheckSquare : faHome;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 20;
            } else if (route.name === "사주 로또란?") {
              iconName = focused ? faCheckSquare : faQuestionCircle;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 20;
            } else if (route.name === "당첨현황") {
              iconName = focused ? faCheckSquare : faTrophy;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 20;
            }

            return (
              <View>
                <FontAwesomeIcon icon={iconName} color={color} size={size} />
              </View>
            );
          },

          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "#CE1212",
        })}
      >
        <Tab.Screen name="사주로또" component={HomeScreen} />
        <Tab.Screen name="사주 로또란?" component={AboutScreen} />
        <Tab.Screen name="나만의 번호" component={PurchaseScreen} />
        <Tab.Screen name="당첨현황" component={WinnersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <HomeTabs />;
}
