import { createContext, useReducer, type PropsWithChildren } from "react";
import { Goal } from "../interfaces/Goal";

const GoalContext = createContext<{
  goals: Goal[];
  addGoal: (goal: Goal) => void;
}>({
  goals: [],
  addGoal: () => null,
});

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

export const GoalProvider = ({ children }: PropsWithChildren) => {
  const [goals, dispatch] = useReducer(goalReducer, [
    // {
    //   id: "1",
    //   title: "Buy a new laptop",
    //   category: "Electronics",
    //   imageSource: "src", // require("../assets/images/beach.jpg"), //require("@/assets/images/beach.jpg"), //"../../assets/beach.jpg"),
    // },
  ]);

  const addGoal = (goal: Goal): void => {
    dispatch({ type: "add_goal", payload: goal });
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        addGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};

export default GoalContext;
