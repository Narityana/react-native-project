import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import InputField from "./InputField";
import FormButton from "./FormButton";
import InputPassword from "./InputPassword";
import Title from "./Title";
import Link from "./Link";

const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !login || !password) {
      Alert.alert("Будь ласка, заповніть всі поля форми!");
      return;
    }
    console.log(login);
    console.log(email);
    console.log(password);

    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Title title="Реєстрація"></Title>
      <InputField
        value={login}
        placeholder="Логін"
        onChangeText={setLogin}
      ></InputField>
      <InputField
        value={email}
        placeholder="Адреса електронної пошти"
        onChangeText={setEmail}
      ></InputField>
      <InputPassword
        value={password}
        onChangeText={setPassword}
      ></InputPassword>
      <FormButton text="Зареєструватися" onPress={handleSubmit}></FormButton>
      <View style={styles.linkContainer}>
        <Link text="Вже є акаунт? Увійти"></Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  linkContainer: {
    marginBottom: 45,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
});

export default RegisterForm;
