import { Stack } from "expo-router";

export default function GoalerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Add new Goal",
      }}
    />
  );
}
