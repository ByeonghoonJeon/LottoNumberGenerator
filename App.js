import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./components/AboutComponent";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AboutScreen(props) {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={About}
        options={{
          backgroundColor: "#FFFFFF",
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return <AboutScreen />;
}
