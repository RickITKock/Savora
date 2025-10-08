import { goals } from "@/lib/placeholder-data";
import { Goal } from "../interfaces/Goal";

type API = {
  data: Goal | Goal[] | undefined;
};

type API_Single = {
  data: Goal | undefined;
};

export async function findOneById(id: string): Promise<API_Single> {
  return new Promise(function (resolve) {
    const goal = goals.find((goal) => goal.id === id);
    resolve({ data: goal });
  });
}

export async function findByTitle(title: string): Promise<API> {
  return new Promise(function (resolve) {
    const filteredGoals: Goal[] = goals.filter((goal) => {
      const res = goal.title.toLowerCase().search(title.toLowerCase());
      return res > -1;
    });
    resolve({ data: filteredGoals });
  });
}
