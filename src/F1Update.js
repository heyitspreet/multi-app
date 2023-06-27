import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import caljson from "../Keys/Cal.json";


const F1Update = () => {
  //get Cal.json from S3 bucket
  const [data, setData] = useState(caljson);

  const currentDate = new Date();
  const upcomingRace = data.details.find((race) => {
    const [day, month, year] = race.date.split("-");
    const raceDate = new Date(Number(year), Number(month) - 1, Number(day));
    return raceDate > currentDate;
  });

  if (!upcomingRace) {
    // If there are no upcoming races, display a message
    return (
      <View>
        <Text style={{ color: "white" }}>No upcoming races</Text>
      </View>
    );
  }

  // Extract the necessary details for the upcoming race
  const { name, Quali, Race } = upcomingRace;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.Heading}>{name}</Text>
        <View style={styles.raceData}>
          <Text style={styles.raceText}>Quali: {Quali}</Text>
          <Text style={styles.raceText}>Race: {Race}</Text>
        </View>
      </View>
    </View>
  );
};

export default F1Update;

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: "#efffae",
  },
  main: {
    flex: 1,
    backgroundColor: "#181818",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  raceData: {
    flexDirection: "row",
  },
  Heading: {
    fontSize: 34,
    color: "white",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  raceText: {
    color: "#efffae",
    padding: 5,
  },
});
