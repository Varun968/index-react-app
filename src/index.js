import React from "react";
import ReactDOM from "react-dom";
import './index.css'; // Import your CSS file

function Home() {
  const tableData = [
    // Your data here...
  ];
  
  return (
    <>
      <h2 className="text-center m-4">MERN Projects [Set-2]</h2>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Link
                </th>
                <th scope="col" className="px-6 py-3">
                  github
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr className="bg-white border-b" key={item.id}>
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4 text-blue-800">
                      <a href={item.link}> {item.name}</a>
                    </td>
                    <td className="px-6 py-4 text-blue-800">
                      <a href={item.github}> {item.name}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));

