import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const Tugas15Form = () => {
    let {IdData} = useParams();
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
        if(IdData !== undefined){
         axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${IdData}`)
         .then((res)=>{
             let result = res.data;
             setInput({
                 name: result.name,
                 course: result.course,
                 score: result.score
             })
             
         })
         .catch((error)=>{
             console.log(error)
         })
        }
     },[])


  return (
    <>
    <div style={{width:'80%', margin:'auto', marginBottom:'100px', marginTop:'50px'}} className="container">
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nama:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.name} id="name" type="text" placeholder="Nama" name="name"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mata Kuliah:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.course} id="course" type="text" placeholder="Mata Kuliah" name="course"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nilai:
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.score} id="score" type="number" placeholder="Nilai" name="score"/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Submit</button>
        </form>
    </div>
    </>
  );
};

export default Tugas15Form;