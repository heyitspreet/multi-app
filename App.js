import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Weather from "./src/weather";
import Header from "./src/components/Header";
import Tasks from "./src/Tasks";
import F1Update from "./src/F1Update";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="TEMPERATURE" />
      <StatusBar style="auto" />
      <Weather />
      <Header title="TASKS" />
      <Tasks />
      <Header title="F1 UPDATES" />
      <F1Update />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding fix for android
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#181818",
  },
});
