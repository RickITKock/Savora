import { Goal } from "@/app/interfaces/Goal";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";

type Props = {
  onSubmit: (goal: Omit<Goal, "id">) => void;
  initialValues?: Omit<Goal, "id">;
};

const GoalForm = ({ onSubmit, initialValues }: Props) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [category, setCategory] = useState(initialValues?.category || "");

  return (
    <View style={styles.view}>
      <Text style={styles.label}>Goal:</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Category:</Text>
      <TextInput
        value={category}
        style={styles.input}
        onChangeText={(text) => setCategory(text)}
      />
      <Button
        mode="contained"
        style={styles.btnCreateGoal}
        onPress={() =>
          onSubmit({
            category: category,
            imageSource: "src",
            title: title,
          })
        }
      >
        Save Goal
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, margin: 16 },
  btnCreateGoal: {
    borderRadius: 5,
    marginTop: 16,
    fontSize: 18,
    alignItems: "center",
  },
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
});

export default GoalForm;
