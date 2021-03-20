import { initialState } from "./AppContext";

type Action = "POOP" | "LMAO";
type StateType = typeof initialState;
export interface ReturnValue extends StateType {
  dispatch: React.Dispatch<Action>;
}

export const reducer = (state: StateType, action: Action): StateType => {
  return state;
};
