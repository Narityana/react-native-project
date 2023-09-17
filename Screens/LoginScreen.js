import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

import LoginForm from "../src/components/LoginUserForm";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? -500 : 0}
      style={styles.container}
    >
      <LoginForm></LoginForm>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
});

export default LoginScreen;
