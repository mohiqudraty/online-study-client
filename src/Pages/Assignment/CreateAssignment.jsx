import AssignmentForm from "../../Components/AssignmentForm";

const CreateAssignment = () => {
  return (
    <div>
      <div className="text-center text-3xl md:text-4xl lg:5xl mt-5">
        <span className="border-b-4 font-bold text-stBlack">
          Create an Assignment
        </span>
      </div>
      <AssignmentForm></AssignmentForm>
      <div className="text-center">
        <button
          type="submit"
          className="text-white bg-stSecondary hover:bg-stPrimary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stPrimary dark:hover-bg-blue-700 dark:focus-ring-stPrimary"
        >
          Create Assignment
        </button>
      </div>
    </div>
  );
};

export default CreateAssignment;
