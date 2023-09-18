import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import InputField from "./InputField";
import FormButton from "./FormButton";
import InputPassword from "./InputPassword";
import Title from "./Title";
import Link from "./Link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("Будь ласка, заповніть всі поля форми!");
      return;
    }

    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Title title="Увійти"></Title>
      <InputField
        value={email}
        placeholder="Адреса електронної пошти"
        onChangeText={setEmail}
      ></InputField>
      <InputPassword
        value={password}
        onChangeText={setPassword}
      ></InputPassword>
      <FormButton text="Увійти" onPress={handleSubmit}></FormButton>
      <View style={styles.linkContainer}>
        <Link text="Немає акаунту? Зареєструватися"></Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  linkContainer: {
    marginBottom: 111,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
});

export default LoginForm;
