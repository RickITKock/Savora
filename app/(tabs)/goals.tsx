import GoalList from "@/components/GoalsList";
import { SearchBar } from "@/components/SearchBar";
import { useResults } from "@/hooks/useResults";
// import { goals } from "@/lib/placeholder-data";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const GoalsScreen = (props: unknown) => {
  const router = useRouter();
  const [term, setTerm] = useState("");
  const [handleOnTermSubmit, results, errorMessage] = useResults();

  console.log(results);
  

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
      <GoalList results={results} title="All" />
      <Button
        onPress={() => router.navigate("/(goals)/AddGoal")}
        mode="contained"
      >
        <Text>Add Goals</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1 },
  searchBar: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default GoalsScreen;
