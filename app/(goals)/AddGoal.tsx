import { StyleSheet, Text, View } from "react-native";

export default function AddGoalScreen() {
  return (
    <View style={styles.view}>
      <Text>Create a new Goal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
});
