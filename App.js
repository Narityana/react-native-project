// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Background from "./src/components/Background";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const MainStack = createStackNavigator();

  return (
    // <NavigationContainer>
    //   <MainStack.Navigator initialRouteName="Registration">
    //     <MainStack.Screen name="Registration" component={RegistrationScreen} />
    //     <MainStack.Screen name="Login" component={LoginScreen} />
    //     {/* <MainStack.Screen name="Home" component={Home} /> */}
    //   </MainStack.Navigator>
    <View style={styles.container}>
      <Background>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        <StatusBar style="auto" />
      </Background>
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
