import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import Home from "./src/pages/home";
import CepDetailsScreen from "./src/pages/cepDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={style.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "green",
            height: 120,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="MeuCep" component={Home} />
        <Stack.Screen name="CepDetailsScreen" component={CepDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
