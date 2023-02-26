import Hero from "../components/Hero";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { Accordion } from "flowbite-react";

const Home = (props) => {
  const { state, handleFunction } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, setData, fetchStatus, setFetchStatus } = state;

  const { fetchData } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  }, [fetchStatus, setFetchStatus, fetchData]);

  const [search, setSearch] = useState("");
  const handleChangeSearch = (event) => setSearch(event.target.value);
  const handleSearch = (event) => {
    event.preventDefault();

    let fetchData = async () => {
      let { data } = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      let dataJob = data.data;

      let searchData = dataJob.filter((res) => {
        return Object.values(res)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setData([...searchData]);
    };

    fetchData();
  };

  const [filter, setFilter] = useState({
    company_name: "",
    salary_min: "",
    company_city: ""
  });

  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleFilter = (event) => {
    event.preventDefault();

    let fetchData = async () => {
      setData(null);
      let { data } = await axios.get(
        "https://dev-example.sanbercloud.com/api/job-vacancy"
      );
      let dataJob = data.data;

      let filterData = dataJob.filter((res) => {
        console.log(res)
        console.log(filter)
        return (
          res.company_name == filter.company_name ||
          res.salary_min == filter.salary_min ||
          res.company_city == filter.company_city
        );
      });
      setData([...filterData]);
    };

    fetchData();
  };

  return (
    <>
      <div className="container mx-auto">
        <Hero />
        <form className="mb-8" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Job.."
              value={search}
              onChange={handleChangeSearch}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3 sm:gap-0">
          <div className="col-span-1">
            <Accordion alwaysOpen={true} className="mb-4 w-full">
              <Accordion.Panel>
                <Accordion.Title>Filter</Accordion.Title>
                <Accordion.Content>
                  <form className="mb-8" onSubmit={handleFilter}>
                    <input
                      type="search"
                      id="default-search"
                      className="mt-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Company Name"
                      value={filter.company_name}
                      name="company_name"
                      onChange={handleChangeFilter}
                    />
                    <input
                      type="search"
                      id="default-search"
                      className="mt-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Company City"
                      value={filter.company_city}
                      name="company_city"
                      onChange={handleChangeFilter}
                    />
                    <input
                      type="search"
                      id="default-search"
                      className="mt-2 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Salary Min"
                      value={filter.salary_min}
                      name="salary_min"
                      onChange={handleChangeFilter}
                    />
                    <button
                      type="submit"
                      className="text-white mt-2 block w-full right-2.5 bottom-2.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    >
                      Filter
                    </button>
                    <button
                      className="text-white mt-2 block w-full right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      onClick={() => {setFetchStatus(true);setFilter({
                        company_name: "",
                        salary_min: "",
                        company_city: ""
                      });}}
                    >
                      Reset Filter
                    </button>
                  </form>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <section className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data !== null &&
              data
                // .filter((element, index) => {
                //   return index < 4;
                // })
                .map((element) => {
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
                  );
                })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
