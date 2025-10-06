import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.view}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
});
