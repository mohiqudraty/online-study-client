import { useLoaderData } from "react-router-dom";
import CardForAllAss from "./CardForAllAss";

const AllAssignment = () => {
  const ass = useLoaderData();

  return (
    <div>
      {/* all assignment card  */}
      <div className="grid md:grid-cols-2  gap-10 px-10 my-10">
        {ass.map((a) => (
          <CardForAllAss key={a.title} a={a}></CardForAllAss>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
