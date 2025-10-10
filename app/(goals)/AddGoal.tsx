import GoalForm from "@/components/GoalForm";
import { useContext } from "react";
import { Context as GoalContext } from "../context/GoalContext";

export default function AddGoalScreen() {
  const { state, addGoal } = useContext(GoalContext);

  // TODO: Add a callback to redirect the user to the previous page

  return <GoalForm onSubmit={addGoal} />;
}
