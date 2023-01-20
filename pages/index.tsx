import type { NextPage } from "next";
import { useRef, useState } from "react";
import TestCaseTable from "../components/TestTable";

const Home: NextPage = () => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form id="csv-form">
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Select Csv File
        </button>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={(e) => {
            setCsvFile(e.target.files[0]);
          }}
        ></input>

        <button
          type="button"
          className="ml-10 inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={(e) => {
            e.preventDefault();
            if (csvFile) submit();
          }}
        >
          Add Data
        </button>
      </form>
      <div className="mx-auto max-w-7xl w-full sm:px-6 lg:p-8 flex">
        <TestCaseTable data={csvArray} />
      </div>
    </div>
  );
};

export default Home;
