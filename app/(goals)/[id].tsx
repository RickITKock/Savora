import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { findOneById } from "../api/goals";
import { Goal } from "../interfaces/Goal";

export default function GoalScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [result, setResult] = useState<Goal>();

  async function getResult(id: string) {
    const { data } = await findOneById(id);
    if (data) setResult(data);
  }

  useEffect(() => {
    getResult(id);
  }, []);

  useEffect(() => {
    if (result) {
      navigation.setOptions({ headerShown: true, title: result.title });
    }
  }, [navigation, result]);

  return (
    <View style={styles.container}>
      <Text>{result?.title}</Text>
      <Text>{result?.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 16 },
});
