import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Link = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link} selectable={false}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  link: {
    color: "#1B4371",
  },
});
export default Link;
