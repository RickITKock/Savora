import { Stack } from "expo-router";

export default function GoalsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[id]" />
      <Stack.Screen name="AddGoal" options={{ title: "Add new Goal" }} />
    </Stack>
  );
}
