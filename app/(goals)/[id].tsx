import { useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Context as GoalContext } from "../context/GoalContext";

export default function GoalScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { state } = useContext(GoalContext);
  const navigation = useNavigation();

  const goal = state.find(goal => goal.id === id)

  useEffect(() => {
    if (goal) {
      navigation.setOptions({ headerShown: true, title: goal.title });
    }
  }, [navigation, goal]);

  return (
    <View style={styles.container}>
      <Text>{goal?.title}</Text>
      <Text>{goal?.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 16 },
});
