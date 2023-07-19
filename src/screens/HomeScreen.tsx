import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { STATE, useGlobalState, useGlobalStateDispatch } from "../context";

export default function HomeScreen() {
  const globalState = useGlobalState();
  const globalStateDispach = useGlobalStateDispatch();

  console.log("globalState: ", globalState);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => globalStateDispach({
        type: STATE.USER,
        data: {
          name: "Lehlabile"
        }
      })}>
        <Text>Set User</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  }
})