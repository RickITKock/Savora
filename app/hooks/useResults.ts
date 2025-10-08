import { goals } from "@/lib/placeholder-data";
import { useEffect, useState } from "react";
import { type Goal } from "../interfaces/Goal";

type Results = [
  handleOnTermSubmit: (st: string) => Promise<void>,
  results: Goal[],
  errorMessage: string
];

export function useResults(): Results {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState<Goal[]>([]);

  const handleOnTermSubmit = async (st: string) => {
    try {
      // TODO: Make use of axios to fetch data from server
      // then set the data as results, unless the result is an error.
      const filteredGoals: Goal[] = goals.filter((goal) => {
        const res = goal.title.toLowerCase().search(st.toLowerCase());
        return res > -1;
      });

      console.log("filtered:\t\t", filteredGoals);

      setResults(filteredGoals);

      console.warn("Not implemented yet");
    } catch (e: unknown) {
      setErrorMessage("Something went wrong");

      if (e instanceof Error) {
        console.error("Error occurred:\n", e.stack);
      }
    }
  };

  // We want to get the default results first when the screen
  // gets rendered for the first time.
  useEffect(() => {
    handleOnTermSubmit("");
  }, []);

  return [handleOnTermSubmit, results, errorMessage];
}
