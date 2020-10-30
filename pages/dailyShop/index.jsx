import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function DailyShop({ navigation }) {
  // STATE
  const [dailyShop, setDailyShop] = useState([]);

  // API CALLS
  const getShopData = async () => {
    const response = await fetch("https://fortniteapi.io/v1/shop?lang=en", {
      method: "get",
      headers: {
        Authorization: "d4b0c477-a3bd4895-cf0dd77a-6d169cb7",
      },
    });
    const data = await response.json();
    // console.log(await data.daily);
    setDailyShop(await data.daily); // FINAL ARRAY TO STATE VARIABLE
  };

  // FIRE API CALL
  useEffect(() => {
    getShopData();
  }, []);

  // RENDER
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {/* <Text style={styles.sectionTitle}>Daily Shop</Text> */}
        <FlatList
          style={styles.shopList}
          data={dailyShop}
          renderItem={({ item }) => (
            <View style={styles.shopListItem} key={item.id}>
              <Image
                source={{ uri: item.full_background }}
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
    // width: "100%",
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
