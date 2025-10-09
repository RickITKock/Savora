import GoalList from "@/components/GoalsList";
import { SearchBar } from "@/components/SearchBar";
import { useResults } from "@/hooks/useResults";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const GoalsScreen = () => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [handleOnTermSubmit, results, errorMessage] = useResults();

  if (!results) return null

  // TODO: Need to consider limiting the amount of searches per second
  useEffect(() => {
    handleOnTermSubmit(term)
  }, [term])

  return (
    <View style={styles.view}>
      <Text>Goals</Text>
      <SearchBar
        term={term}
        style={styles.searchBar}
        onTermChange={setTerm}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <GoalList results={results} title="All" />
      <Button
        onPress={() => router.navigate("/(goals)/AddGoal")}
        mode="contained"
      >
        <Text>+ Add Goal</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, margin: 16 },
  searchBar: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default GoalsScreen;
