import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcourseList } from "../actions";

const CheckList = () => {
  const checkLists = useSelector((state) => state.courseList);
  const dispatch = useDispatch();
  //console.log(checkLists);

  useEffect(() => {
    dispatch(fetchcourseList(checkLists));
  }, [dispatch]);

  if (!checkLists) {
    return <h2> Loading ...</h2>;
  }

  return (
    <div>
      <h2>Check List</h2>
      <ul>
        {Object.values(checkLists).map((chlist) => {
          return (
            <div key={chlist.id}>
              <li>
                <strong>Year</strong> {chlist.year}
              </li>
              <li>
                <strong>Value</strong>
                {chlist.value}
              </li>
              <li>
                <strong>Name</strong>
                {chlist.name}
              </li>
              <li>
                <strong>Funding Cap1</strong>
                {chlist.fundingCap1}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckList;
