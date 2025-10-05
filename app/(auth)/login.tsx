import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
      <Link href="/" style={styles.navButton}>
        Go to Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: "center", alignItems: "center" },
  navButton: {
    marginTop: 20,
    fontSize: 18,
    color: "blue",
    backgroundColor: "lightblue",
    padding: 10,
  },
});