import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from './apiKey';
import Weather from './components/Weather';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);

  const fetchWeather = (lat = 55.81674, lon = 49.0952) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${55.816835}&lon=${49.095727}&APPID=${API_KEY}&units=metric`,
    )
      .then((res) => res.json())
      .then((json) => {
      console.log('da');
        console.log(json);
        setTemperature(json.main.temp);
        setWeatherCondition(json.weather[0].main);
        setIsLoading(false);
        console.log(weatherCondition);
      });
  };


  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeather(position.coords.latitude, position.coords.longitude);
    });
  });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Text>Weather App</Text>
        </View>
      ) : (
        <Weather weather={weatherCondition} temperature={temperature} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
