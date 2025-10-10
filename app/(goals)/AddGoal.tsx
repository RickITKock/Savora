import GoalForm from "@/components/GoalForm";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Context as GoalContext } from "../context/GoalContext";

export default function AddGoalScreen() {
  const { addGoal } = useContext(GoalContext);
  const router = useRouter();

  return <GoalForm onSubmit={(goal) => addGoal(goal, () => router.back())} />;
}
