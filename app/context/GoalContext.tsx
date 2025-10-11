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

// TODO: Set permissions on all db related calls
const goalReducer = (state: GoalType[], action: Action): GoalType[] => {
  switch (action.type) {
    case "get_goals":
      return action.payload;
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

const addGoal = () => {
  return async (goal: NewGoal, callback?: () => void) => {
    try {
      await tablesDB.createRow({
        databaseId: SAVORA_DATABASE_ID,
        tableId: GOALS_TABLE_ID,
        rowId: ID.unique(),
        data: goal,
      });

      if (callback) callback();
    } catch (error: unknown) {
      console.error("Failed to add a new goal:\n", error);
      return;
    }
  };
};

const editGoal = (dispatch: Dispatch<Action>) => {
  return async (id: string, goal: NewGoal, callback?: () => void) => {
    try {
      await tablesDB.updateRow({
        databaseId: SAVORA_DATABASE_ID,
        tableId: GOALS_TABLE_ID,
        rowId: id,
        data: goal,
      });
      dispatch({ type: "edit_goal", payload: { ...goal, id } });
      if (callback) callback();
    } catch (error: unknown) {
      console.error("Failed to update goal:\n", error);
      return;
    }
  };
};

const deleteGoal = (dispatch: Dispatch<Action>) => {
  return async (id: string) => {
    try {
      await tablesDB.deleteRow({
        databaseId: SAVORA_DATABASE_ID,
        tableId: GOALS_TABLE_ID,
        rowId: id,
      });

      // Keeping the dispatch code here to refresh the screen
      // We don't strictly need to add a listener as we did
      // when adding a new goal
      dispatch({ type: "delete_goal", payload: id });
    } catch (error: unknown) {
      console.error("Failed to delete a goal:\n", error);
      return;
    }
  };
};

const getGoals = (dispatch: Dispatch<Action>) => {
  return async () => {
    try {
      const response = await tablesDB.listRows({
        databaseId: SAVORA_DATABASE_ID,
        tableId: GOALS_TABLE_ID,
        queries: [Query.orderDesc("$createdAt"), Query.limit(10)],
      });

      const goals = Goals.parse(response.rows);
      dispatch({ type: "get_goals", payload: goals });
    } catch (error: unknown) {
      console.error("Failed to fetch goals:\n", error);
      return;
    }
  };
};

export const { Context, Provider } = createDataContext(
  goalReducer,
  { addGoal, editGoal, deleteGoal, getGoals },
  [] as GoalType[]
);
