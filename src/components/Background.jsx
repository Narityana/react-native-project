import { StyleSheet, ImageBackground } from "react-native";

const image = require("../assets/images/Backgraund_Start.png");

const Background = ({ children }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});

export default Background;
