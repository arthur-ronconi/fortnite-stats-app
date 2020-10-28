import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function UpcomingItems() {
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
        <Text style={styles.sectionTitle}>Upcoming Items</Text>
        <FlatList
          numColumns={2}
          style={styles.shopList}
          data={upcomingItems}
          renderItem={({ item }) => (
            <View style={styles.shopListItem} key={item.id}>
              <Image
                source={{ uri: item.images.full_background }}
                style={{ height: 175, width: 175 }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  section: {
    flex: 1,
  },
  sectionTitle: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#8b73bf",
    marginBottom: 16,
  },
  shopList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 20,
  },
});
