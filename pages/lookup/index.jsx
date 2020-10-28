import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function Lookup() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text>Search by username</Text>
        <TextInput placeholder="Username" />
        <TouchableOpacity>
          <Text>Search</Text>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
});
