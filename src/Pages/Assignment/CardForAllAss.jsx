import { AiOutlineEye } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs/";

const CardForAllAss = ({ a }) => {
  const { title, description, marks, photo, level, dueDate } = a || {};
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-full object-cover" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div
            className={
              level === "easy"
                ? "badge badge-success"
                : level === "medium"
                ? "badge badge-info"
                : "badge badge-warning"
            }
          >
            {level}
          </div>
        </h2>
        <p className="text-stGray">{description}</p>
        <div className="flex justify-between w-full">
          <span>Marks: {marks}</span>
          <span>Date: {dueDate}</span>
        </div>

        <div className="flex justify-between">
          <button className="btn bg-stPrimary text-white hover:text-stBlack">
            View <AiOutlineEye />
          </button>
          <button className="btn bg-stSecondary text-white hover:text-stBlack">
            <BsPencilSquare /> Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardForAllAss;
