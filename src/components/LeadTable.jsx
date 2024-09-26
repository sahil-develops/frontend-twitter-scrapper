import React, { useState } from "react";
import { ChevronLeft, ChevronRight,ArrowDownToLine,Mail,Search  } from "lucide-react";
const LeadTable = () => {
  const [name, setName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [date, setDate] = useState("");

  const dummyData = [
    {
      name: "John Doe",
      description: "Software Engineer",
      link: "https://example.com/john",
      text: "Experienced developer",
    },
    {
      name: "Jane Smith",
      description: "Product Manager",
      link: "https://example.com/jane",
      text: "Agile enthusiast",
    },
    {
      name: "Bob Johnson",
      description: "Designer",
      link: "https://example.com/bob",
      text: "UI/UX specialist",
    },
    {
      name: "Bob Johnson",
      description: "Designer",
      link: "https://example.com/bob",
      text: "UI/UX specialist",
    },
    {
      name: "Bob Johnson",
      description: "Designer",
      link: "https://example.com/bob",
      text: "UI/UX specialist",
    },
    {
      name: "Bob Johnson",
      description: "Designer",
      link: "https://example.com/bob",
      text: "UI/UX specialist",
    },
    {
      name: "Bob Johnson",
      description: "Designer",
      link: "https://example.com/bob",
      text: "UI/UX specialist",
    },
    {
      name: "Bob Johnson",
      description: "Designer",
      link: "https://example.com/bob",
      text: "UI/UX specialist",
    },
    // Add more dummy data as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { name, keywords, date });
  };

  return (
    <div className="max-w-7xl w-full mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row my-6 justify-between gap-5"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="font-Inter p-2 shadow-inner border-b border-gray-100 text-sm rounded w-full"
        />
        <input
          type="text"
          placeholder="Keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="font-Inter p-2 shadow-inner border-b border-gray-100  text-sm rounded w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="font-Inter p-2 shadow-inner border-b border-gray-100  text-sm rounded w-full"
        />
        <button
          type="submit"
          className="bg-black hover:scale-105 transition-all duration-200 delay-200 text-white px-12 py-2 rounded  font-Inter"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-end pb-2 w-full">
        <div className="w-full">
        <div className="relative">
        <input
          type="text"
          placeholder="Search your Query..."
          className="font-Inter p-2 shadow-inner border-b border-gray-100 text-sm rounded w-full"
        />
        <Search className="absolute right-3 w-6 top-1.5 text-gray-400 " />
        </div>
        </div>
        <div className="w-auto flex flex-row justify-between gap-x-4">
          <button
            type="submit"
            className="text-white bg-black  flex flex-row whitespace-nowrap items-center justify-center gap-x-4 hover:scale-105 transition-all duration-200 delay-200  text-sm px-4 py-2 rounded  font-Inter"
          >
            Email
              <Mail className="text-white w-4.5" />
          </button>
        <button
            type="submit"
            className="text-black  flex flex-row whitespace-nowrap items-center justify-center gap-x-4 hover:scale-105 transition-all duration-200 delay-200 border-2 border-black text-sm px-4 py-0 rounded  font-Inter"
          >
            Download Data
            <ArrowDownToLine className="w-4.5" />
          </button>
        </div>
      </div>
      <div className="border border-gray-100  rounded-t-lg ">
        <table className="w-full ">
          <thead className="rounded-t-lg">
            <tr className="text-black font-normal font-Inter text-sm ">
              <th className="p-4 font-Inter text-left">Name</th>
              <th className="p-4 font-Inter text-left border-l border-gray-100">
                Description
              </th>
              <th className="p-4 font-Inter text-left border-l border-gray-100">
                Link
              </th>
              <th className="p-4 font-Inter text-left border-l border-gray-100">
                Text
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : ""}>
                <td className="font-Inter p-4 border-t border-gray-100 text-sm">
                  {item.name}
                </td>
                <td className="font-Inter p-4 border-t border-gray-100 text-sm border-l">
                  {item.description}
                </td>
                <td className="font-Inter p-4 border-t border-gray-100 text-sm border-l">
                  <a href={item.link} className="text-black hover:underline">
                    {item.link}
                  </a>
                </td>
                <td className="font-Inter p-4 border-t border-gray-100 text-sm border-l">
                  {item.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-b border-gray-100 border-r border-l rounded-b-md py-3 flex justify-center space-x-2">
        <div className="flex w-full justify-between items-center px-2">
          <div>
            <button className="bg-gray-100 px-4 py-2 flex flex-row items-center gap-x-2  rounded text-sm font-Inter">
              <ChevronLeft className="text-black " />
              Previous
            </button>
          </div>

          <div className="flex flex-row items-center gap-x-2 font-Inter justify-center">
            <button className="bg-black text-white px-3 py-1 rounded">1</button>
            <button className=" px-3 py-1 rounded font-Inter">2</button>
            <button className=" px-3 py-1 rounded font-Inter">3</button>
          </div>
          <div>
            <button className="bg-gray-100 px-4 py-2 flex flex-row items-center gap-x-2  rounded text-sm font-Inter">
              Next
              <ChevronRight className="text-black " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadTable;
