import * as React from "react";
import { createContext, Dispatch, useContext, useReducer } from 'react';

export enum STATE {
  USER = "user"
}

export type User = {
  name: string
}

export type GlobalState = {
  user: User | null
}

const initialState = {
  user: null
};

const GlobalStateContext = createContext<GlobalState>(initialState);

const GlobalStateDispatchContext = createContext<Dispatch<any>>(useGlobalStateDispatch);

export function GlobalStateProvider({ children }: any) {
  const [state, dispatch] = useReducer(
    globalStateReducer,
    initialState
  );

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalStateDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalStateDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export function useGlobalStateDispatch() {
  return useContext(GlobalStateDispatchContext);
}

function globalStateReducer(state: GlobalState, action: any) {
  switch (action.type) {
    case STATE.USER: {
      return {
        ...state, 
        user: action.data
      }
    }

    default: {
      return state;
    }
  }
}