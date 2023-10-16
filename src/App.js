import React from "react";
function Home() {
  const tableData = [
    { id: 1, name: "my-react-app", link: "https://my-react-app-xi-one.vercel.app/", github: "https://github.com/Varun968/my-react-app" },
    { id: 2, name: "react-calculator-app", link: "https://react-calculator-app-mg3s.vercel.app/", github: "https://github.com/Varun968/react-calculator-app" },
    { id: 3, name: "color-picker-react-app", link: "https://react-calculator-app-ashy.vercel.app/", github: "https://github.com/Varun968/color-picker-react-app" },
    { id: 4, name: "usertable-react-app", link: "https://usertable-react-app.vercel.app/", github: "https://github.com/Varun968/usertable-react-app" },
    { id: 5, name: "age-calculator-react-app", link: "https://age-calculator-react-app-six.vercel.app/", github: "https://github.com/Varun968/age-calculator-react-app" },
    { id: 6, name: "portfolio", link: "https://portfolio-react-app-rose.vercel.app/", github: "https://github.com/Varun968/portfolio-react-app" },
  ];
  return (
    <>
      <h2 className="text-center m-4">MERN Projects [Set-2]</h2>
      <div className=" flex justify-center items-center">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Link
                </th>
                <th scope="col" class="px-6 py-3">
                  github
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr class="bg-white border-b ">
                    <td class="px-6 py-4">{item.id}</td>
                    <td class="px-6 py-4">{item.name}</td>
                    <td class="px-6 py-4 text-blue-800">
                      <a href={item.link}> {item.name}</a>
                    </td>
                    <td class="px-6 py-4 text-blue-800">
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

export default App;
