import { Link } from "react-router-dom";

const TableOfSubmitted = ({ ass }) => {
  console.log(ass);
  const { pdf, note, user, status, title, marks } = ass || {};

  return (
    <>
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {title}
        </th>
        <td className="px-6 py-4">{marks}</td>
        <td className="px-6 py-4">{user && user.displayName}</td>
        <td className="px-6 py-4 ">
          <span className="py-1 px-2 rounded-lg text-white bg-orange-600">
            {status}
          </span>
        </td>
        <td className="px-6 py-4">
          <Link to={"/give-mark-assignment"}>
            <button className="py-1 px-2  rounded-md text-white hover:bg-stPrimary bg-stSecondary">
              Give Mark
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableOfSubmitted;
