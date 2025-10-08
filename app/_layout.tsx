import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// TODO: Handle screen layout changes (e.g., keyboard appearance)
// TODO: Add a results screen
// TODO: Configure axios instance for API calls
// TODO: Make hooks reusable
// TODO: Navigate with params
// TODO: Advanced state management
// TODO: Data API sync
// TODO: Build a custom Express API
// TODO: Add in-app authentication (e.g., supabase, firebase, or custom)
// TODO: Add animations
// TODO: Improve performance
// TODO: Test quality: testing, A11y, i18n, etc.
// TODO: Release engineering (analytics, CI/CD, OTA, Stores, etc.)

export default function RootLayout() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)"  />
          <Stack.Screen name="(goals)"  />
          <Stack.Screen name="(tabs)" />
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
