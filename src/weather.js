import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import * as Location from "expo-location";
import weatherKey from "../Keys/WeatherKey";

const openWeatherKey = weatherKey;
let url = `http://api.openweathermap.org/data/2.5/onecall?&units=metric&appid=${openWeatherKey}`;


const Weather = () => {
  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission not granted");
      setRefreshing(false);
      return;
    }

    //get location
    let location = await Location.getCurrentPositionAsync();

    //fetch data
    const response = await fetch(
      `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
    );
    const data = await response.json();

    if (!response.ok) {
      console.log(data.message);
      Alert.alert("Error", data.message);
      setRefreshing(false);
      return;
    } else {
      setForecast(data);
      setRefreshing(false);
    }
  };

  //useEffect hook
  useEffect(() => {
    loadForecast();
  }, []);

  if (!forecast) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#efffea" />
      </View>
    );
  }

  const current = forecast.current.weather[0];

  return (
    <View style={{paddingTop:10}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadForecast()}
          />
        }
        Style={styles.weatherContainer}
      >
        <Image
              style={{position:'absolute', width: 100, height: 100 , right:0}}
              source={{
                uri:`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}.png`
              }}
            />
        <Text style={styles.temperature}>{forecast.current.temp}°C</Text>
        <Text style={styles.condition}>{current.description}</Text>
      </ScrollView>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 20,
  },
  temperature: {
    fontSize: 34,
    color: "#fff",
    marginLeft: 20,
  },
  condition: {
    fontSize: 34,
    color: "#fff",
    marginLeft: 20,
  },
});
