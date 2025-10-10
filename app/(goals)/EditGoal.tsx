import GoalForm from "@/components/GoalForm";
import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Context as GoalContext } from "../context/GoalContext";

export default function AddGoalScreen() {
  const { state, editGoal } = useContext(GoalContext);
  const { id } = useLocalSearchParams<{ id: string }>();
  const goal = state.find((goal) => goal.id === id);

  return (
    <GoalForm
      onSubmit={(goal) => {
        editGoal(id, goal);        
      }}
      initialValues={goal}
    />
  );
}
