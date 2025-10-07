import GoalListItem from "@/components/GoalListItem";
import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Button } from "react-native-paper";

const GoalsScreen = (props: unknown) => {
  const router = useRouter();

  const goals = [
    {
      id: "1",
      title: "Buy a new laptop",
      category: "Electronics",
      imageSource: require("../../assets/beach.jpg"),
    },
    {
      id: "2",
      title: "Save for vacation",
      category: "Travel",
      imageSource: require("../../assets/forest.jpg"),
    },
    {
      id: "3",
      title: "Pay off credit card",
      category: "Finance",
      imageSource: require("../../assets/mountain.jpg"),
    },
  ];

  return (
    <View style={styles.view}>
      <Text>Goals</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <GoalListItem
              title={item.title}
              subtitle={item.category}
              imageSource={item.imageSource}
            />
          );
        }}
      />
      <Button
        onPress={() => router.navigate("/(goals)/AddGoal")}
        mode="contained"
      >
        <Text>Add Goal</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1 },
  listItem: {
    marginVertical: 20,
  },
});

export default GoalsScreen;
