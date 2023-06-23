import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const Splash = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  }, [navigation]);
  return <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/star-wars-logo.png")} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  logo: {
    width: 300,
    height: 150
  }
});
export default Splash;