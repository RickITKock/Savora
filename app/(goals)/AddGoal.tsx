import { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

type Action = {
  type: "goal" | "category" | "date";
  content: string;
};

export default function AddGoalScreen() {
  const reducer = (state: any, action: Action) => {
    console.log(state);

    switch (action.type) {
      case "goal":
        return { ...state, goal: action.content };
      case "category":
        return { ...state, category: action.content };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    goal: "",
    category: "",
    targetDate: new Date(),
  });

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        label="Goal"
        onChangeText={(text) => dispatch({ type: "goal", content: text })}
      />

      <TextInput
        style={styles.input}
        label="Category"
        onChangeText={(text) => dispatch({ type: "category", content: text })}
      />

      <Button
        style={styles.btnCreateGoal}
        mode="contained"
        onPress={() => console.log(state)}
      >
        + Create Goal
      </Button>

      {!(state.goal === state.goal && state.goal === "") && (
        <>
          <Text variant="titleLarge" style={{ marginTop: 16 }}>Summary</Text>
          <Card style={styles.goalSummary}>
            <Card.Content>
              <Card.Title
                titleStyle={styles.summaryTitle}
                subtitleStyle={styles.summarySubtitle}
                title={state.goal}
                subtitle={state.category}
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
