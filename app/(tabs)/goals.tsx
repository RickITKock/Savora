import GoalListItem from "@/components/GoalListItem";
import { SearchBar } from "@/components/SearchBar";
import { useResults } from "@/hooks/useResults";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const GoalsScreen = (props: unknown) => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [handleOnTermSubmit, results, errorMessage] = useResults();

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
      category: "Finances",
      imageSource: require("../../assets/mountain.jpg"),
    },
  ];

  return (
    <View style={styles.view}>
      <Text>Goals</Text>
      <SearchBar
        term={term}
        style={styles.searchBar}
        onTermChange={setTerm}
        onTermSubmit={() => handleOnTermSubmit(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <GoalListItem
              style={styles.listItem}
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
  searchBar: {
    marginTop: 15,
  },
  listItem: {
    marginVertical: 16,
  },
});

export default GoalsScreen;
