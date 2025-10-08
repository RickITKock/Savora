import { Link, useRouter } from "expo-router";
import { NavigationOptions } from "expo-router/build/global-state/routing";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalListItem from "./GoalListItem";

// TODO: Create an interface and remove the following code
type Goal = {
  id: string;
  title: string;
  category: string;
  imageSource: any;
};

type Props = {
  title: string;
  results: Goal[];
};

type props = NavigationOptions;

export const GoalsList: React.FC<Props> = ({ title, results }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Link
              href={{
                pathname: "/(goals)/[id]",
                params: { id: item.id },
              }}
              style={styles.listItemContainer}
            >
              <GoalListItem
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
    marginVertical: 16,
  },

  listItem: {
    width: "100%",
  },
});

export default GoalsList;
