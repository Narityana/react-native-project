import React from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Avatar from "../components/Avatar";
import RegisterForm from "../components/RegisterForm";

const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? -100 : 0}
        style={styles.container}
      >
        <View style={styles.avatar}>
          <Avatar />
        </View>
        <RegisterForm style={styles.form} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    // top: 200,
    alignSelf: "center",
    // left: "50%",
    // transform: [{ translateX: -66 }],
    zIndex: 5,
  },
});

export default RegistrationScreen;
