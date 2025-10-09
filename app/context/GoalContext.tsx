import { Dispatch } from "react";
import { Goal } from "../interfaces/Goal";
import createDataContext from "./createDataContext";

type NewGoal = Omit<Goal, "id">;

type Action =
  | {
      type: "add_goal";
      payload: NewGoal;
    }
  | {
      type: "delete_goal";
      payload: string;
    };

function getRandomNumber(): number {
  return Math.floor(Math.random() * 99999);
}

const goalReducer = (state: Goal[], action: Action): Goal[] => {
  switch (action.type) {
    case "add_goal":
      const id = getRandomNumber().toString();
      return [...state, { ...action.payload, id }];
    case "delete_goal":
      return state.filter((goal) => goal.id !== action.payload);
    default:
      return state;
  }
};

const addGoal = (dispatch: Dispatch<Action>) => {
  return (goal: NewGoal) => {
    dispatch({ type: "add_goal", payload: goal });
  };
};

const deleteGoal = (dispatch: Dispatch<Action>) => {
  return (id: string) => {
    dispatch({ type: "delete_goal", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  goalReducer,
  { addGoal, deleteGoal },
  [
    {
      id: "1",
      title: "Buy a new laptop",
      category: "Electronics",
      imageSource: "src", // require("../assets/images/beach.jpg"), //require("@/assets/images/beach.jpg"), //"../../assets/beach.jpg"),
    },
    {
      id: "2",
      title: "Save for vacation",
      category: "Travel",
      imageSource: "src",
      // imageSource: require("@/assets/images/forest.jpg"), // "../../assets/forest.jpg"),
    },
  ] as Goal[]
);
