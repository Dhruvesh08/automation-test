import React from "react";

type Props = {};

const NoDataComponet = (props: Props) => {
  return (
    <div className="flex min-w-full  min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Your Company</span>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              There is No Data Selected
            </h1>
            <p className="mt-2 text-base text-gray-500">
              please add some data to see the table
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoDataComponet;
