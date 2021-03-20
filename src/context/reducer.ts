import { initialState } from "./AppContext";

type DispatchType = {
  type: Action;
  payload?: any;
};

type Action = "SET_PATH" | "CHANGE_THEME";
type StateType = typeof initialState;

export interface ReturnValue extends StateType {
  dispatch: React.Dispatch<DispatchType>;
}

export const reducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case "SET_PATH":
      return { ...state, currentPage: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
