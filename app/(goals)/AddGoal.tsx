import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { Context as GoalContext } from "../context/GoalContext";

export default function AddGoalScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const { addGoal } = useContext(GoalContext);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        label="Goal"
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={styles.input}
        label="Category"
        onChangeText={(text) => setCategory(text)}
      />

      <Button
        style={styles.btnCreateGoal}
        mode="contained"
        onPress={() =>
          addGoal({
            category,
            title,
            imageSource: "src",
          })
        }
      >
        + Create Goal
      </Button>

      {!(title === category && title === "") && (
        <>
          <Text variant="titleLarge" style={{ marginTop: 16 }}>
            Summary
          </Text>
          <Card style={styles.goalSummary}>
            <Card.Content>
              <Card.Title
                titleStyle={styles.summaryTitle}
                subtitleStyle={styles.summarySubtitle}
                title={title}
                subtitle={category}
              />
            </Card.Content>
          </Card>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, margin: 16 },
  btnCreateGoal: { borderRadius: 5, marginTop: 16 },
  input: {
    marginTop: 16,
    backgroundColor: "white",
    borderEndEndRadius: 0,
  },
  summarySubtitle: {
    color: "#b3b3b3",
  },
  goalSummary: {
    marginTop: 16,
    backgroundColor: "#262626",
  },
  summaryTitle: {
    color: "white",
  },
});
