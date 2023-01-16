import courseListData from "../apis/courseListData";
import { FETCH_COURSELIST } from "./types";

export const fetchcourseList = () => async (dispatch) => {
  const response = await courseListData.get("/courseListData");
  console.log("Action >>", response);
  dispatch({ type: FETCH_COURSELIST, payload: response.data });
};
