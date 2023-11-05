const ViewAssignment = () => {
  return (
    <div className="card lg:w-3/4 mx-auto p-5  bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-96 w-full object-cover "
          src="https://i.ibb.co/xjYpWWD/math.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">assignment 11 </h2>
        <p>
          If a dog chews shoes whose shoes does he choose? grow your knowledge
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Take Assignment</button>
        </div>
      </div>
    </div>
  );
};

export default ViewAssignment;
