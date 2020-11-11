import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AdMobBanner } from "expo-ads-admob";

export default function UpcomingItems({ navigation }) {
  // STATE
  const [upcomingItems, setUpcomingItems] = useState([]);

  // API CALLS

  const getUpcomingItemsData = async () => {
    const response = await fetch(
      "https://fortniteapi.io/v1/items/upcoming?lang=en",
      {
        method: "get",
        headers: {
          Authorization: "d4b0c477-a3bd4895-cf0dd77a-6d169cb7",
        },
      }
    );
    const data = await response.json();
    setUpcomingItems(await data.items); // FINAL ARRAY TO STATE VARIABLE
  };

  // FIRE API CALL
  useEffect(() => {
    getUpcomingItemsData();
  }, []);

  // RENDER
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {/* <Text style={styles.sectionTitle}>Upcoming Items</Text> */}
        <FlatList
          style={styles.shopList}
          data={upcomingItems}
          renderItem={({ item }) => (
            <View style={styles.shopListItem} key={item.id}>
              <Image
                source={{ uri: item.images.full_background }}
                style={{ height: 120, width: 120 }}
              />
              <View style={styles.shopListItemText}>
                <Text style={styles.shopListItemTextName}>{item.name}</Text>
                <Text style={styles.shopListItemTextDescription}>
                  {item.description}
                </Text>
                <TouchableOpacity
                  style={styles.shopListItemButton}
                  onPress={() => navigation.navigate("Details", { item })}
                >
                  <Text style={styles.shopListItemButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
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
    // paddingTop: 20,
    backgroundColor: "#fff",
  },
  section: {
    flex: 1,
  },
  sectionTitle: {
    // paddingLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#8b73bf",
    marginBottom: 16,
    textAlign: "center",
  },
  shopList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 20,
  },
  shopListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  shopListItemText: {
    paddingLeft: 16,
  },
  shopListItemTextName: {
    color: "#8b73bf",
    fontSize: 20,
    fontWeight: "bold",
  },
  shopListItemTextDescription: {
    color: "gray",
    width: "80%",
  },
  shopListItemButton: {
    marginTop: 8,
    paddingVertical: 4,
    width: 100,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#8b73bf",
    justifyContent: "center",
    alignItems: "center",
  },
  shopListItemButtonText: {
    color: "#8b73bf",
    fontWeight: "bold",
  },
});
