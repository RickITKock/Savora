import { tablesDB } from "@/lib/appwrite";
import { Dispatch } from "react";
import { ID, Query } from "react-native-appwrite";
import createDataContext from "./createDataContext";

import * as z from "zod";

const SAVORA_DATABASE_ID = "68e9728f00290b8c80f8";
const GOALS_TABLE_ID = "goals";

const Goal = z
  .object({
    $id: z.string(),
    title: z.string(),
    category: z.string(),
  })
  .transform(({ $id, ...rest }) => ({
    id: $id,
    ...rest,
  }));

const Goals = z.array(Goal);

type GoalType = z.infer<typeof Goal>;

type GoalTypeArray = z.infer<typeof Goals>;

type NewGoal = Omit<GoalType, "id">;

type Action =
  | {
      type: "get_goals";
      payload: any[]; // TODO: Use Goal interface
    }
  | {
      type: "add_goal";
      payload: NewGoal;
    }
  | {
      type: "edit_goal";
      payload: GoalType;
    }
  | {
      type: "delete_goal";
      payload: string;
    };

function getRandomNumber(): number {
  return Math.floor(Math.random() * 99999);
}

const goalReducer = (state: GoalType[], action: Action): GoalType[] => {
  switch (action.type) {
    case "get_goals":
      return action.payload;
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

// TODO: Add a new goal to the goals table
const addGoal = (dispatch: Dispatch<Action>) => {
  return async (goal: NewGoal, callback?: () => void) => {
    // console.log("Goal Added:\t", goal);

    try {
      const response = await tablesDB.createRow({
        databaseId: SAVORA_DATABASE_ID,
        tableId: GOALS_TABLE_ID,
        rowId: ID.unique(),
        data: goal,
        // permissions: [Permission.write(Role.user(idea.userId))],   // TODO: Set permissions
      });

      console.log(response);

      // dispatch({ type: "add_goal", payload: goal });
      if (callback) callback();
    } catch (error: unknown) {
      console.error("Failed to add a new goal:\n", error);
      return;
    }
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

const getGoals = (dispatch: Dispatch<Action>) => {
  return async () => {
    const response = await tablesDB.listRows({
      databaseId: SAVORA_DATABASE_ID,
      tableId: GOALS_TABLE_ID,
      queries: [Query.orderDesc("$createdAt"), Query.limit(10)],
    });

    const goals = Goals.parse(response.rows);
    console.log(goals);

    dispatch({ type: "get_goals", payload: goals });
  };
};

export const { Context, Provider } = createDataContext(
  goalReducer,
  { addGoal, editGoal, deleteGoal, getGoals },
  [
    // {
    //   id: "1",
    //   title: "Buy a new laptop",
    //   category: "Electronics",
    //   // imageSource: "src", // require("../assets/images/beach.jpg"), //require("@/assets/images/beach.jpg"), //"../../assets/beach.jpg"),
    // },
    // {
    //   id: "2",
    //   title: "Save for vacation",
    //   category: "Travel",
    //   // imageSource: "src",
    //   // imageSource: require("@/assets/images/forest.jpg"), // "../../assets/forest.jpg"),
    // },
  ] as GoalType[]
);
