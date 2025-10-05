import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Goals() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView edges={["top"]}>
        <Text variant="titleLarge">
          Goals
        </Text>
      </SafeAreaView>
    </View>
  );
}