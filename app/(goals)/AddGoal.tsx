import Feather from "@expo/vector-icons/Feather";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { Context as GoalContext } from "../context/GoalContext";

export default function AddGoalScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const { state, addGoal } = useContext(GoalContext);

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Goal:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Category:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCategory(text)}
      />

      <Button
        style={styles.btnCreateGoal}
        mode="contained"
        onPress={() => {
          addGoal({
            category,
            title,
            imageSource: "src",
          });

          console.log(state);
        }}
      >
        <Feather name="plus" /> Create Goal
      </Button>

      {!(title === category && title === "") && (
        <>
          <Text style={{ marginTop: 16 }}>Summary</Text>
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
  btnCreateGoal: { borderRadius: 5, marginTop: 16, fontSize: 18 },
  input: {
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "white",
    borderEndEndRadius: 0,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
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
