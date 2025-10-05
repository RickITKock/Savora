import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}
