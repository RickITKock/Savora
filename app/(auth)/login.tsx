import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <Text>Welcome</Text>
      <Link href="/" style={styles.navButton}>
        Login
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, alignItems: "center", justifyContent: "center" },
  navButton: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
    backgroundColor: "lightblue",
    padding: 10,
  },
});