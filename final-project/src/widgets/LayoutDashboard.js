import React from "react";
import SideBar from "../components/SideBar";

const LayoutDashboard = (props) => {
  return (
    <>
      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="flex items-start justify-between">
          <SideBar/>
          <div className="flex flex-col w-full md:space-y-4">
            {/* <header className="z-40 flex items-center justify-between w-full h-16">

            </header> */}
            <div className="h-screen overflow-auto md:px-6 p-8">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutDashboard;