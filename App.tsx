import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const handlePress = (label) => {
    alert(`You pressed ${label}`);
  };

  return (
    <View style={styles.container}>
      {/* Main content area */}
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to the Home Page!</Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.bottomBar}>
        {['Home', 'Search', 'Profile', 'Settings', 'Help'].map((label) => (
          <TouchableOpacity key={label} style={styles.button} onPress={() => handlePress(label)}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#007AFF',
  },
});
