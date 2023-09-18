import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={null} style={styles.image} />
      </View>
      <View style={styles.iconContainer}>
        <AntDesign
          name="pluscircleo"
          size={25}
          color="#FF6C00"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  iconContainer: {
    position: "absolute",
    bottom: 14,
    left: "90%",
  },
  icon: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12.5,
  },
});

export default Avatar;
