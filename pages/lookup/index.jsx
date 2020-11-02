import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import { Picker } from "@react-native-picker/picker";
import { Feather } from "@expo/vector-icons";
import { StatsList } from "../../components/StatsList";

export default function Lookup() {
  const [platform, setPlatform] = useState({
    platform: "pc",
  });
  const [username, setUsername] = useState("");
  const [accountID, setAccountID] = useState("");
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // API CALLS
  const getAccountID = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://fortniteapi.io/v1/lookup?username=${username}&platform${platform.platform}`,
      {
        method: "get",
        headers: {
          Authorization: "d4b0c477-a3bd4895-cf0dd77a-6d169cb7",
        },
      }
    );
    const data = await response.json();
    setAccountID(await data.account_id);
    // console.log(await data.account_id);
    return setIsLoading(false);
  };
  const getUserData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://fortniteapi.io/v1/stats?account=${accountID}`,
      {
        method: "get",
        headers: {
          Authorization: "d4b0c477-a3bd4895-cf0dd77a-6d169cb7",
        },
      }
    );
    const data = await response.json();
    setUserData(await data);
    // console.log(await data);
    return setIsLoading(false);
  };

  useEffect(() => {
    if (accountID != "") {
      getUserData();
    }
  }, [accountID]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Search by username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            style={styles.formTextInput}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          {/* <Picker
            style={styles.formPicker}
            selectedValue={platform.platform}
            onValueChange={(itemValue, itemIndex) => {
              setPlatform({
                platform: itemValue,
              });
            }}
          >
            <Picker.Item label="PC" value="pc" />
            <Picker.Item label="PS4 (Coming soon)" value="psn" />
            <Picker.Item label="Xbox (Coming soon)" value="xbn" />
          </Picker> */}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            getAccountID();
          }}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" size={20} />
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.submitButtonText}>Search</Text>
              <Feather name="search" size={20} color="#fff" />
            </View>
          )}
        </TouchableOpacity>
      </View>
      {userData ? (
        <ScrollView style={styles.resultContainer}>
          <Text style={styles.resultName}>{userData.name}</Text>
          {userData.account.level ? (
            <Text style={styles.resultLevel}>
              Account level:{" "}
              <Text style={styles.resultLevelNumber}>
                {userData.account.level}
              </Text>
            </Text>
          ) : (
            <Text style={styles.resultLevel}>
              Account level:{" "}
              <Text style={styles.resultLevelNumber}>Unavailable</Text>
            </Text>
          )}

          {userData.global_stats ? (
            <View>
              <StatsList
                title="Solo"
                kd={userData.global_stats.solo.kd}
                kills={userData.global_stats.solo.kills}
                wins={userData.global_stats.solo.placetop1}
                matchesPlayed={userData.global_stats.solo.matchesplayed}
                playersOutlived={userData.global_stats.solo.playersoutlived}
              />
              <StatsList
                title="Duo"
                kd={userData.global_stats.duo.kd}
                kills={userData.global_stats.duo.kills}
                wins={userData.global_stats.duo.placetop1}
                matchesPlayed={userData.global_stats.duo.matchesplayed}
                playersOutlived={userData.global_stats.duo.playersoutlived}
              />
              <StatsList
                title="Squad"
                kd={userData.global_stats.squad.kd}
                kills={userData.global_stats.squad.kills}
                wins={userData.global_stats.squad.placetop1}
                matchesPlayed={userData.global_stats.squad.matchesplayed}
                playersOutlived={userData.global_stats.squad.playersoutlived}
              />
            </View>
          ) : (
            <Text>Stats unavailable</Text>
          )}
        </ScrollView>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#8b73bf",
    backgroundColor: "#fff",
  },
  formLabel: {
    color: "#8b73bf",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  formTextInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#8b73bf",
    paddingLeft: 8,
    color: "#8b73bf",
  },
  formPicker: {
    flex: 1,
    color: "gray",
  },
  submitButton: {
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8b73bf",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
  resultContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  resultName: {
    color: "#8b73bf",
    fontSize: 40,
    fontWeight: "bold",
  },
  resultLevel: {
    color: "gray",
    fontSize: 15,
    marginBottom: 20,
  },
  resultLevelNumber: {
    color: "#8b73bf",
    fontSize: 20,
    fontWeight: "bold",
  },
});
