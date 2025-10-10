import { Stack, useRouter } from "expo-router";
import { Provider as GoalProvider } from "../context/GoalContext";

export default function GoalsLayout() {
  const router = useRouter();

  // <Link
  //               key={item.id}
  //               href={{
  //                 pathname: "/(goals)/[id]",
  //                 params: { id: item.id },
  //               }}
  //               style={styles.listItemContainer}
  //             ></Link>

  return (
    <GoalProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="[id]" />
        <Stack.Screen name="AddGoal" options={{ title: "Add new Goal" }} />
      </Stack>
    </GoalProvider>
  );
}
