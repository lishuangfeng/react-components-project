import { SET_LANGUAGE } from "@/consts";

export interface State {
  language: string;
}

const initialState: State = {
  language: "zh",
};

const topPageReducer = (state: State = initialState, action: any): State => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
  }
  return state;
}

export default topPageReducer;