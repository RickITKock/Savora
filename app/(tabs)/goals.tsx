import GoalList from "@/components/GoalsList";
import { SearchBar } from "@/components/SearchBar";
import { useResults } from "@/hooks/useResults";
import { useNavigation } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context as GoalContext } from "../context/GoalContext";

const GoalsScreen = () => {
  const [term, setTerm] = useState("");
  const [handleOnTermSubmit, results, errorMessage] = useResults();
  const { state, getGoals } = useContext(GoalContext);

  const navigation = useNavigation();

  if (!results) return null;

  // TODO: Need to consider limiting the amount of searches per second
  // TODO: Fix the search function 
  useEffect(() => {
    handleOnTermSubmit(term);
  }, [term]);

  useEffect(() => {
    getGoals();

    const listener = navigation.addListener("focus", () => {
      getGoals();
    });

    return listener; // return the function to unsubscribe
  }, [navigation]);

  return (
    <View style={styles.view}>
      <SearchBar term={term} style={styles.searchBar} onTermChange={setTerm} />
      {errorMessage && <Text>{errorMessage}</Text>}
      <GoalList results={state} title={term === "" ? "All" : `"${term}"`} />
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
