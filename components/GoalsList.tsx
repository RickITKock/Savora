import { Goal } from "@/app/interfaces/Goal";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalListItem from "./GoalListItem";

type Props = {
  title: string;
  results: Goal[];
};

export const GoalsList: React.FC<Props> = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Link
              key={item.id}
              href={{
                pathname: "/(goals)/[id]",
                params: { id: item.id },
              }}
              style={styles.listItemContainer}
            >
              <GoalListItem
                id={item.id}
                title={item.title}
                subtitle={item.category}
                imageSource={item.imageSource}
                style={styles.listItem}
              />
            </Link>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  listItemContainer: {
    marginBottom: 20,
  },

  listItem: {
    width: "100%",
  },
});

export default GoalsList;
