import { createStore } from 'redux';
import { SET_LANGUAGE } from "@/consts";
// import { ActionsUnion, createAction } from "../helps";

interface ActionType {
  type: string;
  payload?: any;
}

// export const Actions = {
//   setLanguage: (payload: string): ActionType =>
//     createAction(SET_LANGUAGE, payload),
// };

// export const DispatchActions = (dispatch: Dispatch) => ({
//   setKeyPath: (payload: string): void => {
//     dispatch(Actions.setLanguage(payload));
//   },
// });

// type ActionsType = ActionsUnion<typeof Actions>;

export interface State {
  language: string;
}

const initialState: State = {
  language: "zh",
};

function reducer(state: State = initialState, action: any): State {
  console.log('reducer的初次执行-->>', state, action);
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
  }
  return state
}
const store = createStore(reducer);
export default store;