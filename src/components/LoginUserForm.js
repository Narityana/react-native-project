import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import InputField from "./InputField";
import FormButton from "./FormButton";
import InputPassword from "./InputPassword";
import Title from "./Title";
import Link from "./Link";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Отримайти дані форми
  };

  return (
    <View style={styles.container}>
      <Title title="Увійти"></Title>
      <InputField
        value={email}
        placeholder="Адреса електронної пошти"
        onChangeText={setEmail}
      ></InputField>
      <InputPassword></InputPassword>
      <FormButton text="Увійти"></FormButton>
      <View style={styles.linkContainer}>
        <Text style={styles.linkSubtitle}>Немає акаунту?</Text>
        <Link text="Зареєструватися"></Link>
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
  linkSubtitle: {
    color: "#1B4371",
  },
});

export default LoginForm;
