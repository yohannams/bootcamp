import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';


const Tugas15List = () => {
    const {state, handleFunction} = useContext(GlobalContext)
    const {
        data,setData,
        input,setInput,
        fetchStatus,setFetchStatus,
        currentId, setCurrentId
    } = state

    const {
        handleIndexScore,
        handleDelete,
        handleEdit,
        handleSubmit,
        handleChange,
        fetchData
    } = handleFunction

    useEffect(()=>{
        if(fetchStatus === true){
            fetchData()
        }
    },[fetchStatus,setFetchStatus,fetchData])


  return (
    <>
    <div className="container">
      <div className="relative overflow-x-auto sm:rounded-lg">
      <Link to='/create'><button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create</button></Link>
        <table className="w-full text-sm text-left text-white-500 dark:text-white-400">
          <thead className="text-xs text-white uppercase bg-violet-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                NAMA
              </th>
              <th scope="col" className="px-6 py-3">
                MATA KULIAH
              </th>
              <th scope="col" className="px-6 py-3">
                NILAI
              </th>
              <th scope="col" className="px-6 py-3">
                INDEX NILAI
              </th>
              <th scope="col" className="px-6 py-3">
                AKSI
              </th>
            </tr>
          </thead>
          <tbody>
                {/* {data === null && <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" colSpan="5">Loading</th>} */}
                {data !== null && 
                     data.map((element, index)=>{
                     return (
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={element.id}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index+1}</th>
                      <td className="px-6 py-4">{element.name}</td>
                      <td className="px-6 py-4">{element.course}</td>
                      <td className="px-6 py-4">{element.score}</td>
                      <td className="px-6 py-4">{handleIndexScore(element.score)}</td>
                      <td className="px-6 py-4">
                        <button onClick={handleEdit} value={element.id} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                        <button onClick={handleDelete} value={element.id} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                    </td>
                    </tr>)
                    })
                }
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Tugas15List;