import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

const Home = (props) => {
  let { IdData } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  } = state;

  const {
    handleRupiah,
    handleText,
    handleSize,
    handleDelete,
    handleEdit,
    handleSubmit,
    handleChange,
    fetchData,
  } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  }, [fetchStatus, setFetchStatus, fetchData]);

  return (
    <>
      <section className="bg-gray-200 p-5">
        <div className="w-11/12 mt-10 ml-8">
          <h1 className="text-xl font-bold ">Find your data that you need!</h1>
        </div>
        <div className="grid grid-cols-2 gap-1">
        {
        data !== null &&
          data.map((element, index) => {
            return (
              <div className="w-11/12 m-8 mx-auto flex-wrap flex gap-10 items-center justify-start" key={element.id}>
                <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden min-w-[90%]">
                  <img
                    src={element.image_url}
                    className="w-1/3 bg-cover bg-center bg-landscape"
                  />
                  <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl">
                      {element.name}
                    </h1>
                    <small>{element.release_year}</small>
                    <p className="mt-2 text-gray-600 text-sm">
                      {handleText(element.description)}
                    </p>
                    <div className=" item-center mt-2 text-gray-500">
                      <span className="font-semibold">{element.category}</span><br/>
                      <span>{handleSize(element.size)}</span>
                      <span>
                        , {element.is_android_app === 1 ? 'Android' : ''} {element.is_ios_app === 1 && element.is_android_app === 1 ? ' & IOS' : (element.is_ios_app === 1 ? 'IOS' : '')}
                      </span>
                    </div>
                    <div className="flex item-center justify-between mt-3">
                      <h1 className="text-gray-700 font-bold text-xl">
                        {handleRupiah(element.price)}
                      </h1>
                      <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        {element.rating} Ratings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
