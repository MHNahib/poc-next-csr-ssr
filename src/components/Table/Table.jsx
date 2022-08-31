import React from "react";

const Table = ({ data, title }) => {
  console.log("on table", data);
  return (
    <div className="mx-2 my-2">
      <h4 className="text-center my-4 font-bold text-xl">{title} </h4>
      {data ? (
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  User Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.username}</td>
                  <td className="py-4 px-6">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-red-900 text-3xl  py-6">
          NO DATA FOUND !
        </div>
      )}
    </div>
  );
};

export default Table;
