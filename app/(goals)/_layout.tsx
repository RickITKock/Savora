import { Stack } from "expo-router";
import { GoalProvider } from "../context/GoalContext";

export default function GoalsLayout() {
  return (
    <GoalProvider>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
        <Stack.Screen name="AddGoal" options={{ title: "Add new Goal" }} />
      </Stack>
    </GoalProvider>
  );
}
