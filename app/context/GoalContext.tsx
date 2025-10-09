import { Dispatch } from "react";
import { Goal } from "../interfaces/Goal";
import createDataContext from "./createDataContext";

type Action = {
  type: "add_goal";
  payload: Goal;
};

const goalReducer = (state: Goal[], action: Action): Goal[] => {
  switch (action.type) {
    case "add_goal":
      return [...state, action.payload];
    default:
      return state;
  }
};

const addGoal = (dispatch: Dispatch<Action>) => {
  return (goal: Goal) => {
    dispatch({ type: "add_goal", payload: goal });
  };
};

export const { Context, Provider } = createDataContext(
  goalReducer,
  { addGoal },
  [] as Goal[]
);
