import { initialState } from "./AppContext";

type DispatchType = {
  type: Action;
  payload?: any;
};

type Action = "SET_PATH" | "CHANGE_THEME" | "TOGGLE_LIBRARY";
type StateType = typeof initialState;

export interface ReturnValue extends StateType {
  dispatch: React.Dispatch<DispatchType>;
}

export const reducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case "SET_PATH":
      console.log(state.isLibraryOpen);
      return { ...state, currentPage: action.payload, isLibraryOpen: false };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "TOGGLE_LIBRARY":
      return { ...state, isLibraryOpen: !state.isLibraryOpen };
    default:
      return state;
  }
};
