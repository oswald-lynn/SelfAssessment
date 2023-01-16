import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcourseList } from "../actions";

const CheckList = () => {
  const checkLists = useSelector((state) => state.courseList);
  const dispatch = useDispatch();
  console.log(checkLists);

  useEffect(() => {
    dispatch(fetchcourseList(checkLists));
  }, []);

  if (!checkLists) {
    return <h2> Loading ...</h2>;
  } else {
    console.log(checkLists);
  }

  return (
    <div>
      <h2>Check List</h2>
      {checkLists.id}
      {checkLists.length > 0
        ? checkLists.map((clist) => (
            <div key={clist.id}>
              {clist.year}
              {clist.name}
            </div>
          ))
        : null}
    </div>
  );
};

export default CheckList;
