import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  const name = 'John'
  
  return (
    <View  style={styles.view}>
      <Text style={styles.textStyle}>Hello world!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  textStyle: {
    fontSize: 18,
    color: "#000",
  },
  subHeaderStyle: {
    fontSize: 16,
    color: "#333",
  },
});
