import * as React from "react";
import { Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/HomeComponent";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faSquare,
  faQuestionCircle,
  faCheckSquare,
  faHome,
  faLaughBeam,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import About from "./components/AboutComponent";
// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323",
      }}
    >
      <Home />
    </View>
  );
}

function PurchaseScreen() {
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

function AboutScreen() {
  return <About />;
}

function WinnersScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323",
      }}
    >
      <Text>Winners!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color;
            let size;

            if (route.name === "My Lucky Numbers") {
              iconName = focused ? faCheckSquare : faLaughBeam;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 20;
            } else if (route.name === "Home") {
              iconName = focused ? faCheckSquare : faHome;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 20;
            } else if (route.name === "About") {
              iconName = focused ? faCheckSquare : faQuestionCircle;
              color = focused ? "#CE1212" : "black";
              size = focused ? 25 : 20;
            } else if (route.name === "Winners") {
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

          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "#CE1212",
        })}
      >
        <Tab.Screen name="My Lucky Numbers" component={PurchaseScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Winners" component={WinnersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <MyTabs />;
}
