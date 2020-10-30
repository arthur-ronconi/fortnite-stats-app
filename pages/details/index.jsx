import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { capitalize } from "../../utils/capitalize";
export default function Details({ route }) {
  const item = route.params.item;
  // console.log(route.params.item);

  return (
    <View style={styles.detailsContainer}>
      <Image
        source={
          item.full_background
            ? { uri: item.full_background }
            : { uri: item.images.full_background }
        }
        style={{ height: 350, width: 350 }}
      />
      <View style={styles.detailsTextContainer}>
        <Text style={styles.detailsTextTitle}>{item.name}</Text>
        <Text style={styles.detailsTextType}>
          Type: {capitalize(item.type)}
        </Text>
        <Text style={styles.detailsTextPrice}>
          Price: {item.priceNoDiscount} V-Bucks
        </Text>
        {item.internalRarity ? (
          <Text style={styles.detailsTextRarity}>
            Rarity: {capitalize(item.internalRarity)}
          </Text>
        ) : (
          <View />
        )}

        <Text style={styles.detailsTextDescription}>
          Description: "{item.description}"
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  detailsTextContainer: {
    marginTop: 15,
  },
  detailsTextTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#8b73bf",
  },
  detailsTextType: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
  },
  detailsTextPrice: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
  },
  detailsTextRarity: {
    color: "gray",
  },
  detailsTextDescription: {
    marginTop: 16,
  },
});
