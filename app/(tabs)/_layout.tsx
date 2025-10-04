import Entypo from "@expo/vector-icons/Entypo";

import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "tomato" }}>
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
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => {
            return <Entypo name="login" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen name="Login" options={{ title: "Login" }} />
    </Tabs>
  );
}
