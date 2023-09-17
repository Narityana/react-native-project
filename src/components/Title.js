import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.3,
    textAlign: "center",
    paddingBottom: 32,
  },
});

export default Title;
