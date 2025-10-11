import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function TabsLayout() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add logout logic here
    router.replace("/login");
    console.log("Logged out!");
  };

  const handleNotifications = () => {
    // TODO: Add navigation or open notification center
    console.log("Notifications clicked!");
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#27ae60",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Entypo name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ color }) => {
            return <Octicons name="goal" size={24} color={color} />;
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => router.navigate("/(goals)/AddGoal")}
              >
                <Feather name="plus" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="spending"
        options={{
          title: "Spending",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="credit-card" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="user-circle" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50, // for safe area
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  appTitle: {
    color: "white",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconBtn: {
    padding: 4,
  },
});
