import GoalListItem from "@/components/GoalListItem";
import { useNavigation } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Goals() {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTintColor: "#fff",
  });

  return (
    <View style={styles.view}>
      {/* <StatusBar style={"light"} /> */}

      <View style={styles.header}>
        <SafeAreaView edges={["top"]}>
          <Text variant="titleLarge" style={styles.greetingText}>Text</Text>
        </SafeAreaView>
      </View>

      <GoalListItem title="sdsd" subtitle="sdsd" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  header: {
    height: 300,
    backgroundColor: "#04143c",
    color: "white",
    justifyContent: "center",
  },
  greetingText: {
    color: "#fff",
    fontWeight: "300",
    width: "100%",
    textAlign: "center",
  },
});
