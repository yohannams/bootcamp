import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ChangePassword = () => {
  const [fetchStatus, setFetchStatus] = useState(true);
  let navigate = useNavigate();

  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleChangePassword = (event) => {
    if (input.new_password.length < 8) {
      console.log(input.current_password)
      console.log(input.new_password)
      console.log(input.new_confirm_password)
      alert("Minimum password length is 8 digits");
    } else {
      event.preventDefault();

      let { current_password, new_password, new_confirm_password } = input;

      axios
        .post(
          "https://dev-example.sanbercloud.com/api/change-password",
          { current_password, new_password, new_confirm_password },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/login");
        })

        .catch((error) => {
          // console.log(error)
          alert(error.message);
        });
    }
  };

  return (
    <>
      <div className="mx-auto w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleChangePassword}>
            <div>
              <label
                htmlFor="current_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Password
              </label>
              <input
                value={input.current_password}
                onChange={handleInput}
                type="password"
                name="current_password"
                id="current_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Current Password"
                required
              />
            </div>
            <div>
              <label
                htmlFor="new_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                value={input.new_password}
                onChange={handleInput}
                type="password"
                name="new_password"
                id="new_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="New Password"
                required
              />
            </div>
            <div>
              <label
                htmlFor="new_confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Re-enter New Password
              </label>
              <input
                value={input.new_confirm_password}
                onChange={handleInput}
                type="password"
                name="new_confirm_password"
                id="new_confirm_password"
                placeholder="Re-enter New Pasword"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-400 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
