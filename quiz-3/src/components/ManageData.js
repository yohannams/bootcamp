import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const ManageData = () => {
    let {IdData} = useParams();
    const {state, handleFunction} = useContext(GlobalContext)
    const {
        data,setData,
        input,setInput,
        fetchStatus,setFetchStatus,
        currentId, setCurrentId
    } = state

    const {
        handleRupiah,
        handleText,
        handleSize,
        handleDelete,
        handleEdit,
        handleSubmit,
        handleChange,
        fetchData
    } = handleFunction

    useEffect(()=>{
        if(IdData !== undefined){
         axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${IdData}`)
         .then((res)=>{
             let result = res.data;
             setInput({
                name: result.name,
                description: result.description,
                category: result.category,
                release_year: result.release_year,
                size: result.size,
                price: result.price,
                rating: result.rating,
                image_url: result.image_url,
                is_android_app: result.is_android_app,
                is_ios_app: result.is_ios_app
             })
             
         })
         .catch((error)=>{
             console.log(error)
         })
        }

        if(fetchStatus === true){
          fetchData()
      }
     },[fetchStatus,setFetchStatus,fetchData])



  return (
    <>
    <div className="w-11/12 m-8 mx-auto">
      <h3 className='font-bold my-5'>Manage Data</h3>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-white-500 dark:text-white-400 mt-2">
          <thead className="text-xs text-white uppercase bg-violet-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                RATING
              </th>
              <th scope="col" className="px-6 py-3">
                RELEASE YEAR
              </th>
              <th scope="col" className="px-6 py-3">
                SIZE
              </th>
              <th scope="col" className="px-6 py-3">
                IS_ANDROID_APP
              </th>
              <th scope="col" className="px-6 py-3">
                IS_IOS_APP
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
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
                      <td className="px-6 py-4">{element.category}</td>
                      <td className="px-6 py-4">{handleText(element.description)}</td>
                      <td className="px-6 py-4">{element.price}</td>
                      <td className="px-6 py-4">{element.rating}</td>
                      <td className="px-6 py-4">{element.release_year}</td>
                      <td className="px-6 py-4">{element.size}</td>
                      <td className="px-6 py-4">{element.is_android_app}</td>
                      <td className="px-6 py-4">{element.is_ios_app}</td>
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
    <div className="w-11/12 m-8 mb-24 mt-12 mx-auto">
        <h3 className='font-bold my-5'>Create Data</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gambar Data Game
              </label>
              <hr className='mb-5'/>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image URL:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.image_url} id="image_url" type="text" placeholder="Image URL" name="image_url"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Data Game
              </label>
              <hr className='mb-5'/>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.name} id="name" type="text" placeholder="Name" name="name"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.category} id="category" type="text" placeholder="Category" name="category"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description:
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.description} id="description" placeholder="Description" name="description"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.price} id="price" type="number" placeholder="Price" name="price"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Rating:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.rating} id="rating" type="number" placeholder="Rating" name="rating" min="0" max="5"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Release Year:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.release_year} id="release_year" type="number" placeholder="Release Year" name="release_year" min="2007" max="2021"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Size:
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.size} id="size" type="number" placeholder="Size (MB)" name="size"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Platform
              </label>
              <hr className='mb-5'/>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  Android?
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.is_android_app} id="is_android_app" type="number" placeholder="Android?" name="is_android_app"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                  IOS?
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} required value={input.is_ios_app} id="is_ios_app" type="number" placeholder="IOS?" name="is_ios_app"/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Submit</button>
        </form>
    </div>
    </>
  );
};

export default ManageData;