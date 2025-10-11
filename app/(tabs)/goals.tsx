import GoalList from "@/components/GoalsList";
import { SearchBar } from "@/components/SearchBar";
import { useNavigation } from "expo-router";
import { useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Context as GoalContext } from "../context/GoalContext";

const GoalsScreen = () => {
  const [term, setTerm] = useState("");
  const { state, getGoals } = useContext(GoalContext);

  const navigation = useNavigation();

  const results = useMemo(() => {
    const t = term.trim().toLowerCase();

    if (!t) return state;

    return state.filter((g) =>
      [g.title, g.category].some((v) => v?.toLowerCase().includes(t))
    );
  }, [state, term]);

  useEffect(() => {
    getGoals();

    const listener = navigation.addListener("focus", () => {
      getGoals();
    });

    // return the function to unsubscribe
    return listener;
  }, [navigation]);

  return (
    <View style={styles.view}>
      <SearchBar term={term} style={styles.searchBar} onTermChange={setTerm} />
      {/* {errorMessage && <Text>{errorMessage}</Text>} */}
      <GoalList results={results} title={term === "" ? "All" : `"${term}"`} />
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
