import GoalList from "@/components/GoalsList";
import { SearchBar } from "@/components/SearchBar";
import { useResults } from "@/hooks/useResults";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Context as GoalContext } from "../context/GoalContext";

const GoalsScreen = () => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [handleOnTermSubmit, results, errorMessage] = useResults();
  const { state } = useContext(GoalContext)

  if (!results) return null

  // TODO: Need to consider limiting the amount of searches per second
  useEffect(() => {
    handleOnTermSubmit(term)
    console.log("Goals loaded:\t", state);
  }, [term])

  useEffect(() => {
    console.log("state loaded:\t", state);
  }, [state])

  return (
    <View style={styles.view}>
      <Text>Goals</Text>
      <SearchBar
        term={term}
        style={styles.searchBar}
        onTermChange={setTerm}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <GoalList results={state} title={ term === "" ? "All" : `"${term}"`} />
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
