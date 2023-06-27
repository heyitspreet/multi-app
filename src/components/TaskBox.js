import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TaskBox = (props) => {
  return (
    <View style={styles.base}>
      <View style={styles.itemsLeft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{props.data}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default TaskBox;

const styles = StyleSheet.create({
  base: {
    minHeight: 40,
    backgroundColor: "#181818",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: "#545917",
    flexDirection: "row",
    alignItems: "center",
  },
  itemsLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  circular: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#efffae",
    marginRight: 10,
    marginTop: 12,
    // stick to the right
    position: "absolute",
    right: 0,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    maxWidth: "80%",
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: "#efffae",
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
