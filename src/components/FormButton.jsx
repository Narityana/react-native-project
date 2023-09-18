import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FormButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    alignItems: "center",
    color: "#FFFFFF",
    backgroundColor: "#FF6C00",
    padding: 16,
    width: "100%",
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    letterSpacing: 0.3,
    color: "#FFFFFF",
  },
});

export default FormButton;
