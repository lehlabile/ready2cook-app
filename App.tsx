import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStateProvider, useGlobalState, useGlobalStateDispatch } from "./src/context";

function HomeScreen() {
  const globalState = useGlobalState();
  const globalStateDispach = useGlobalStateDispatch();

  console.log("globalState: ", globalState);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => globalStateDispach({
        type: "user",
        user: {
          name: "Lehlabile"
        }
      })}>
        <Text>Set User</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}