import GoalForm from "@/components/GoalForm";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext } from "react";
import { Context as GoalContext } from "../context/GoalContext";

export default function AddGoalScreen() {
  const { state, editGoal } = useContext(GoalContext);
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // Find the existing goal, if any
  const existingGoal = state.find((goal) => goal.id === id);

  return (
    <GoalForm
      onSubmit={(goal) => {
        editGoal(id, goal, () => router.back());
      }}
      initialValues={existingGoal}
    />
  );
}
