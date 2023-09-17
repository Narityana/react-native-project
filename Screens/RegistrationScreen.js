import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

import Avatar from "../src/components/Avatar";
import RegisterForm from "../src/components/RegisterForm";

const RegistrationScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? -200 : 0}
      style={styles.container}
    >
      <View style={styles.avatar}>
        <Avatar />
      </View>
      <RegisterForm style={styles.form} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  form: {},
  avatar: {
    position: "absolute",
    bottom: 456,
    left: "50%",
    transform: [{ translateX: -66 }],
    zIndex: 5,
  },
});

export default RegistrationScreen;
