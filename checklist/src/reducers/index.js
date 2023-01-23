import { combineReducers } from "redux";
import { courseListReducer } from "./courseListReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  courseList: courseListReducer,
  form: formReducer,
});

export default reducers;
