import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Goal() {
  const { id } = useLocalSearchParams<{id: string}>()

  console.log(id);

  return (
    <View style={styles.container}>
      <Text>Results Show</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 16 },
});
