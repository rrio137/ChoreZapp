import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//Screens
const HomeScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Welcome to the Home Screen!</Text>
  </View>
);

const SearchScreen = () => (
  <View style={styles.center}>
    <Text style={styles.text}>Search something here</Text>
  </View>
);

const ProfileScreen = () => (
<View style={styles.center}>
    <Text style={styles.text}>This is your Profile.</Text>
  </View>
);

const SettingsScreen = () => (
<View style={styles.center}>
    <Text style={styles.text}>Adjust your settings here.</Text>
  </View>
);

const HelpScreen = () => (
<View style={styles.center}>
    <Text style={styles.text}>How can we help you?</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Search':
                iconName = 'search-outline';
                break;
              case 'Profile':
                iconName = 'profile-outline';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
              case 'Help':
                iconName = 'help-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Help" component={HelpScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  },
});