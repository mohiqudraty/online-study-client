import CardForAllAss from "./CardForAllAss";
// import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import axios from "axios";

const AllAssignment = () => {
  // const axios = useAxios();
  const [assignments, setAssignments] = useState([]);
  // console.log(assignments);
  const [level, setLevel] = useState("");
  console.log(level);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/all-assignment")
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <div className="text-center text-3xl md:text-4xl lg:5xl mt-5">
        <span className="border-b-4 font-bold text-stBlack">
          All Assignment
        </span>
      </div>
      {/* assignment difficulty Level  */}
      <div className=" w-52 text-center mx-auto mt-5 md:ml-auto md:pr-5">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Sort By Level
        </label>
        <select
          onChange={(e) => setLevel(e.target.value)}
          id="countries"
          className=" cursor-pointer  focus:ring-stPrimary     dark:focus:ring-green-800-500 dark:focus:border-green-900-500 bg-green-50 border border-stGray text-stBlack dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
        >
          <option value=" Assignment difficulty" disabled selected>
            Assignment difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {/* all assignment card  */}
      <div className="grid md:grid-cols-2  gap-10 px-10 my-10">
        {assignments.map((a) => (
          <CardForAllAss key={a.title} a={a}></CardForAllAss>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
