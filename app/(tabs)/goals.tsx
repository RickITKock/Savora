// import ListScreen from "@/components/ListScreen";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function GoalsScreen() {
  const goals = [
    { id: "1", title: "Buy a new laptop", category: "Electronics" },
    { id: "2", title: "Save for vacation", category: "Travel" },
    { id: "3", title: "Pay off credit card", category: "Finance" },
  ];

  return (
    <View style={styles.view}>
      <Text>Goals</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.listItem}>
              <Text>{item.title}</Text>
              <Text>{item.category}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1 },
  listItem: {
    marginVertical: 50,
  }
});
