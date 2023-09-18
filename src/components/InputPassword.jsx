import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const InputPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <TextInput
        style={[styles.input, isFocused && styles.focusedInput]}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={togglePasswordVisibility}
      >
        <Text>{showPassword ? "Приховати" : "Показати"}</Text>
      </TouchableOpacity>
    </View>
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
  },
  focusedInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  toggleButton: {
    position: "absolute",
    right: 16,
    top: "130%",
    transform: [{ translateY: -50 }],
  },
});

export default InputPassword;
