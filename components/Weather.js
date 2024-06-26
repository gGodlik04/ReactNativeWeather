import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from './weatherConditions';

const Weather = ({ weather, temperature }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: weatherConditions[weather].color },
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
        <View  style={styles.tempCont}>
            <Text style={styles.tempText}>{Math.trunc(temperature)}˚</Text>
            <Text style={styles.tempText2}>Kazan</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  tempCont: {
    flex: 1
  },
  tempText: {
    fontSize: 72,
    color: '#fff',
  },
  tempText2: {
      fontSize: 36,
      color: '#fff',
    },
  title: {
    fontSize: 60,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Weather;
