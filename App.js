import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/HomeComponent";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
