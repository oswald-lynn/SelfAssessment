import { combineReducers } from "redux";
import { courseListReducer } from "./courseListReducer";

const reducers = combineReducers({
  courseList: courseListReducer,
});

export default reducers;
