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
      type: "edit_goal";
      payload: Goal;
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
    case "edit_goal":
      return state.map((goal) => {
        return goal.id === action.payload.id ? action.payload : goal;
      });
    case "delete_goal":
      return state.filter((goal) => goal.id !== action.payload);
    default:
      return state;
  }
};

const addGoal = (dispatch: Dispatch<Action>) => {
  return (goal: NewGoal, callback?: () => void) => {
    console.log("Goal Added:\t", goal);

    dispatch({ type: "add_goal", payload: goal });
    if (callback) callback();
  };
};

const editGoal = (dispatch: Dispatch<Action>) => {
  return (id: string, goal: NewGoal, callback?: () => void) => {
    dispatch({ type: "edit_goal", payload: { ...goal, id } });
    if (callback) callback();
  };
};

const deleteGoal = (dispatch: Dispatch<Action>) => {
  return (id: string) => {
    dispatch({ type: "delete_goal", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  goalReducer,
  { addGoal, editGoal, deleteGoal },
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
