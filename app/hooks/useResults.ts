import { useEffect, useState } from "react";

type Results = [
  handleOnTermSubmit: (st: string) => Promise<void>,
  results: string,
  errorMessage: string
];

export function useResults(): Results {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState("");

  const handleOnTermSubmit = async (st: string) => {
    try {
      console.log(st);

      // TODO: Make use of axios to fetch data from server
      // then set the data as results, unless the result is an error.
      setResults("");
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
