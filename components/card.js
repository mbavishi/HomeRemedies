import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Data from "../data.json"

export default function Card() {
  const navigation = useNavigation();

  const handleCardPress = (remedies) => {
    navigation.navigate('Remedies', { remedies });
  };
  return (
    Data.map((i, index) => (
      <View style={styles.card} key={index}>
        <TouchableOpacity onPress={() => handleCardPress(i)}>
          <Text style={styles.heading}>{i.name}</Text>
        </TouchableOpacity>
      </View>
    ))
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    borderRadius: 10,
    margin: 15,
    padding: 20,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
