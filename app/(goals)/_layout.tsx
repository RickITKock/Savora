import { Stack } from "expo-router";

export default function GoalsLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
      <Stack.Screen name="AddGoal" options={{ title: "Add new Goal" }} />
    </Stack>
  );
}
