import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const InputField = ({ value, onChangeText, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.focusedInput]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  focusedInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
});

export default InputField;
