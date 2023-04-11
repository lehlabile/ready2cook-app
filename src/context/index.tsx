import { createContext, Dispatch, useContext, useReducer } from 'react';

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

function globalStateReducer(state: any, action: any) {
  switch (action.type) {
    case 'user': {
      return {
        ...state, 
        user: action.user
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}