import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStateProvider } from "./src/context";
import HomeScreen from "./src/screens/HomeScreen";

const { Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <Navigator>
          <Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        </Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}