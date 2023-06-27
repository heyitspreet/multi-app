import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (pros) => {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>{pros.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  base: {
    marginTop:10,
    height: 40,
    backgroundColor: "#efffae",
  },
  text: {
    color: "black",
    fontSize: 23,
    paddingLeft: 10,
    paddingTop:5,
  },
});
