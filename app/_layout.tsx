import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider as GoalProvider } from "./context/GoalContext";

// TODO: Add in-app authentication (e.g., supabase, firebase, or custom)
// TODO: Add animations
// TODO: Improve performance
// TODO: Test quality: testing, A11y, i18n, etc.
// TODO: Release engineering (analytics, CI/CD, OTA, Stores, etc.)

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeArea}
        edges={["left", "right", "top", "bottom"]}
      >
        <GoalProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(goals)" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </GoalProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
