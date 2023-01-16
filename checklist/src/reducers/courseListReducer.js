import { FETCH_COURSELIST } from "../actions/types";

export const courseListReducer = (state = {}, action) => {
  console.log("Reducer >>", action.payload);
  switch (action.type) {
    case FETCH_COURSELIST:
      return { ...action.payload, ...state };
    default:
      return state;
  }
};
