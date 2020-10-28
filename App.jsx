import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/home";
import About from "./pages/lookup";
import UpcomingItems from "./pages/upcomingItems";

import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Daily Shop":
              iconName = "shopping-cart";
              break;
            case "Upcoming Items":
              iconName = "calendar";
              break;
            case "Lookup":
              iconName = "search";
              break;
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#8b73bf",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Daily Shop" component={Home} />
      <Tab.Screen name="Upcoming Items" component={UpcomingItems} />
      <Tab.Screen name="Lookup" component={About} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Fortnite Stats"
          component={Tabs}
          options={{
            headerStyle: { backgroundColor: "#8b73bf" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
