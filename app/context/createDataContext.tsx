import {
    createContext,
    useReducer,
    type Dispatch,
    type PropsWithChildren,
} from "react";

type ActionBinder<Act> = Act extends (dispatch: Dispatch<any>) => infer R
  ? R
  : never;

export default function createDataContext<
  S,
  A extends Record<
    string,
    (dispatch: Dispatch<any>) => (...args: any[]) => any
  >,
  Action
>(reducer: React.Reducer<S, Action>, actionsArg: A, initialState: S) {
  type BoundActions = { [K in keyof A]: ActionBinder<A[K]> };

  const Context = createContext<{ state: S } & BoundActions>({} as any);

  const Provider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {} as BoundActions;

    for (const key in actionsArg) {
      const creator = actionsArg[key];
      boundActions[key] = creator(dispatch) as BoundActions[typeof key];
    }

    return (
      <Context.Provider
        value={{
          state,
          ...boundActions,
        }}
      >
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
