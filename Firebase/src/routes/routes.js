import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./../pages/Home/Home";

import Login from "./../pages/Login/Login";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
    </Stack.Navigator>
  );
}
