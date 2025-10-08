import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Goal() {
  const { id } = useLocalSearchParams<{id: string}>()
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: "" });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Results Show</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, margin: 16 },
});
