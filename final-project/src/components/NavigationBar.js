import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalContext';
import Cookies from "js-cookie";
import { Navbar } from "flowbite-react";
import LogoFinal from '../image/LogoFinal.png'

const NavigationBar = () => {
  const {handleFunction} = useContext(GlobalContext)

const {
    handleLogout
} = handleFunction

  return (
    <div className="w-11/12 mx-auto">
      {/* <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"> */}
      <Navbar fluid={true} rounded={true}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={LogoFinal}
              className="h-10 mr-3 w-16"
              alt="Connect"
            />
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              {Cookies.get("token") && (
                <li className="mr-2">
                  <Link
                    to="/dashboard"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {Cookies.get("token") && (
                <li className="mr-2">
                  <span
                    className="cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </li>
              )}
              {!Cookies.get("token") && (
                <li className="mr-2">
                  <Link
                    to="/login"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* </div> */}
    </div>
  );
};

export default NavigationBar;
