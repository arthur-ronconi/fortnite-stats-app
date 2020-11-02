import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const StatsList = ({
  title,
  kd,
  kills,
  wins,
  matchesPlayed,
  playersOutlived,
}) => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statsCategory}>
        <Text style={styles.statsCategoryTitle}>{title}</Text>
        <Text style={styles.stats}>
          K/D ratio: <Text style={styles.statsNumber}>{kd}</Text>
        </Text>
        <Text style={styles.stats}>
          Kills: <Text style={styles.statsNumber}>{kills}</Text>
        </Text>
        <Text style={styles.stats}>
          Wins: <Text style={styles.statsNumber}>{wins}</Text>
        </Text>
        <Text style={styles.stats}>
          Matches played:{" "}
          <Text style={styles.statsNumber}>{matchesPlayed}</Text>
        </Text>
        <Text style={styles.stats}>
          Players outlived:{" "}
          <Text style={styles.statsNumber}>{playersOutlived}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsCategory: {
    marginBottom: 20,
  },
  statsCategoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8b73bf",
  },
  stats: {
    color: "gray",
    fontSize: 15,
  },
  statsNumber: {
    color: "#8b73bf",
    fontSize: 20,
    fontWeight: "bold",
  },
});
