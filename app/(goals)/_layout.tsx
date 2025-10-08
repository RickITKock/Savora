import { Stack } from "expo-router";

// TODO: Rename the function
// export default function GoalerLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: true,
//         headerTitle: "Add new Goal",
//       }}
//     />
//   );
// }

import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function GoalsLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
        <Stack screenOptions={{ headerShown: true }}>
          <Stack.Screen name="[id]" options={{ headerShown: false }} />
          <Stack.Screen name="AddGoal" options={{ title: "Add new Goal" }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // base background for all screens
  },
});
