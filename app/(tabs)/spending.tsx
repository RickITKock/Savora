import { StyleSheet, Text, View } from "react-native";

export default function SpendingScreen() {
  return (
    <View style={styles.view}>
      <Text>Spending</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: "center", alignItems: "center" },
});
