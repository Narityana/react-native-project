import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Background from "./src/components/Background";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginForm from "./src/components/LoginUserForm";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Background>
        {/* <RegistrationScreen></RegistrationScreen> */}
        <LoginScreen />
        <StatusBar style="auto" />
      </Background>
    </View>
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
