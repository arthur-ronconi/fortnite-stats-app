import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AdMobBanner } from "expo-ads-admob";

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
      <AdMobBanner
        bannerSize="largeBanner"
        adUnitID="ca-app-pub-8278568013593627/4783825762" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(err) => console.log(err)}
        style={{ alignSelf: "center" }}
      />
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
