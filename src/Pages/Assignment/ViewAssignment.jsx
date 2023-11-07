import moment from "moment";
import { useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
  const assignment = useLoaderData();
  const { _id, title, description, marks, photo, level, dueDate, user } =
    assignment || {};
  //  Convert date from ISO 8601 to Date object using Moment.js
  assignment.date = moment(dueDate).toDate().toDateString();
  console.log(assignment.date);

  return (
    <div className="card lg:w-3/4 mx-auto p-5  bg-base-100 shadow-xl">
      <figure>
        <img className="h-96 w-full object-cover " src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <div>
          <p
            className={
              level === "easy"
                ? "badge badge-success"
                : level === "medium"
                ? "badge badge-info"
                : "badge badge-warning"
            }
          >
            {level}
          </p>{" "}
          <p>{description}</p>
          <span className="font-semibold">Creator Email: {user.email}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="font-semibold">Marks: {marks}</span>
          <span className="font-semibold">
            Created at: {dueDate && assignment.date}
          </span>
        </div>
        <div className="card-actions justify-center mt-5">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn  bg-stSecondary  text-white hover:bg-stPrimary"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Take Assignment
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form>
              <div className="modal-box text-center">
                <h3 className="font-bold text-lg my-3">Assignment Pdf Link</h3>
                <input
                  type="text"
                  name="pdf"
                  placeholder="Put Your Pdf Link"
                  className="input input-success "
                  required
                />
                <h3 className="font-bold text-lg my-3">Quick Note</h3>
                <textarea
                  type="text"
                  name="note"
                  placeholder="note something"
                  className="textarea textarea-success "
                  required
                />
                <div className="modal-action">
                  <div method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      type="submit"
                      className="btn  bg-stSecondary  text-white hover:bg-stPrimary"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Take Assignment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
