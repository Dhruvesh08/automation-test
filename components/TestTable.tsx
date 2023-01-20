import React, { useState } from "react";
import NoDataComponet from "./NoDataComponet";

type Props = {
  data: any;
};

const TestCaseTable = (props: Props) => {
  const { data } = props;
  let myDataList = [];
  // careate 100 testcase object that has data of testmodule name, test id ,is Selected
  for (let i = 0; i < data.length; i++) {
    let myData = {
      testModule: data[i].name,
      testId: i,
      isSelected: false,
    };
    myDataList.push(myData);
  }

  if (data.length === 0) {
    return <NoDataComponet />;
  }

  return (
    <div className="overflow-y-auto h-4/5 w-full">
      <table className="min-w-full divide-y divide-gray-300 border ">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Test ID
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Module Name
            </th>

            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Selected
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {myDataList.map((test) => (
            <tr key={test.testModule}>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {test.testId}
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {test.testModule}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {test.isSelected === true ? "true" : "false"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCaseTable;
