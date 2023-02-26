import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const JobVacancy = (props) => {
    const { state, handleFunction } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState("");
    const {
      data,
      fetchStatus,
      setFetchStatus,
    } = state;
  
    const {
      fetchData,
    } = handleFunction;
  
    useEffect(() => {
      if (fetchStatus === true) {
        fetchData();
      }
    }, [fetchStatus, setFetchStatus, fetchData]);

    const handleSearch = (event) => {
      event.preventDefault();
      props.search(searchTerm);
    };
  
    return (
        <>
          <section className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data !== null &&
            data.map((element, index) => {
              return (
                <div
                key={element.id}
                className="h-fit md:grid-cols-2 justify-center flex-col flex-wrap w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex flex-col p-4 items-center">
                  <img
                    className="items-center w-16 h-16 mb-3 rounded-full shadow-lg object-cover"
                    src={element.company_image_url}
                    alt="Bonnie image"
                  />
                  <label className="items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {element.title}
                  </label>
                  <span className="items-center text-sm text-gray-500 dark:text-gray-400 inline-block max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
                    {element.company_name}
                  </span>
                  <div className="mt-3 flex text-left items-left">
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">
                      {element.company_city}
                    </label>
                  </div>
                  <label className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    <b
                      className={
                        element.job_status === 0
                          ? "text-red-500"
                          : "text-blue-500"
                      }
                    >
                      {element.job_status === 0 ? "Ditutup" : "Dibuka"}
                    </b>
                  </label>
                  <div className="flex mt-1 space-x-3 md:mt-3">
                    <Link
                      to={`/job-vacancy/${element.id}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
              )
          })
          }
          </section>
        </>
    )
}

export default JobVacancy;