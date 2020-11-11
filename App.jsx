import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DailyShop from "./pages/dailyShop";
import Lookup from "./pages/lookup";
import UpcomingItems from "./pages/upcomingItems";
import About from "./pages/about";
import Details from "./pages/details";

import { Feather } from "@expo/vector-icons";

const DailyShopStack = createStackNavigator();
const UpcomingItemsStack = createStackNavigator();
const LookupStack = createStackNavigator();
const MoreStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DailyShopStackScreen = () => {
  return (
    <DailyShopStack.Navigator>
      <DailyShopStack.Screen
        name="Daily Shop"
        component={DailyShop}
        options={{
          headerStyle: { backgroundColor: "#8b73bf" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <DailyShopStack.Screen
        name="Details"
        component={Details} //
        options={{
          headerStyle: { backgroundColor: "#8b73bf" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </DailyShopStack.Navigator>
  );
};

const UpcomingItemsStackScreen = () => {
  return (
    <UpcomingItemsStack.Navigator>
      <UpcomingItemsStack.Screen
        name="Upcoming Items"
        component={UpcomingItems}
        options={{
          headerStyle: { backgroundColor: "#8b73bf" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <UpcomingItemsStack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: { backgroundColor: "#8b73bf" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </UpcomingItemsStack.Navigator>
  );
};

const LookupStackScreen = () => {
  return (
    <LookupStack.Navigator>
      <LookupStack.Screen
        name="Lookup"
        component={Lookup}
        options={{
          headerStyle: { backgroundColor: "#8b73bf" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </LookupStack.Navigator>
  );
};

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="About"
        component={About}
        options={{
          headerStyle: { backgroundColor: "#8b73bf" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </MoreStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
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
              case "About":
                iconName = "more-horizontal";
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#8b73bf",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Daily Shop" component={DailyShopStackScreen} />
        <Tab.Screen
          name="Upcoming Items"
          component={UpcomingItemsStackScreen}
        />
        <Tab.Screen name="Lookup" component={LookupStackScreen} />
        <Tab.Screen name="About" component={MoreStackScreen} />
      </Tab.Navigator>
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
