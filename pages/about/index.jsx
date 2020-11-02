import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutTextThanks}>
        Thank you for downloading this app!
      </Text>
      <Text style={styles.aboutText}>
        Information source:{" "}
        <Text style={{ fontWeight: "bold" }}>FortniteApi.io</Text>
      </Text>
      <Text style={styles.aboutText}>
        App built by <Text style={{ fontWeight: "bold" }}>Arthur Ronconi</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  aboutText: {
    fontSize: 15,
    marginBottom: 15,
  },
  aboutTextThanks: {
    fontSize: 15,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
