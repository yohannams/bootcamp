import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const Form = () => {
    let {IdData} = useParams();
    const {state, handleFunction} = useContext(GlobalContext)
    const {
        input,setInput,
    } = state

    const {
        handleSubmit,
        handleChange,
    } = handleFunction

    useEffect(()=>{
        if(IdData !== undefined){
         axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
         .then((res)=>{
             let result = res.data;
             setInput({
                title: result.title,
                job_description: result.job_description,
                job_qualification: result.job_qualification,
                job_type: result.job_type,
                job_tenure: result.job_tenure, 
                job_status: result.job_status,
                company_name: result.company_name,
                company_image_url: result.company_image_url,
                company_city: result.company_city,
                salary_min: result.salary_min,
                salary_max: result.salary_max
             })
             
         })
         .catch((error)=>{
             console.log(error)
         })
        }else{
            setInput({
                title: "",
                job_description: "",
                job_qualification: "",
                job_type: "",
                job_tenure: "",
                job_status: 0,
                company_name: "",
                company_image_url: "",
                company_city: "",
                salary_min: 0,
                salary_max: 0,
              });
        }
     },[])


  return (
    <>
    <div className="container mx-auto w-11/12">
        <h1 className='font-bold'>{IdData === undefined ? 'Create Data' : 'Edit Data'}</h1>
        <div className='mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Company Name:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.company_name} id="company_name" type="text" placeholder="Company Name" name="company_name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Company Image URL:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.company_image_url} id="company_image_url" type="text" placeholder="Company Image URL" name="company_image_url"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Company City:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.company_city} id="company_city" type="text" placeholder="Company City" name="company_city"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Title:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.title} id="title" type="text" placeholder="Title" name="title"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Type:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.job_type} id="job_type" type="text" placeholder="Job Type" name="job_type"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Tenure:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.job_tenure} id="job_tenure" type="text" placeholder="Job Tenure" name="job_tenure"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Description:
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.job_description} id="job_description" placeholder="Job Description" name="job_description" rows={7}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Qualification:
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.job_qualification} id="job_qualification" placeholder="Job Qualification" name="job_qualification" rows={7}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Salary Min:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.salary_min} id="salary_min" type="number" placeholder="Salary Min" name="salary_min"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Salary Max:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} value={input.salary_max} id="salary_max" type="number" placeholder="Salary Max" name="salary_max"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Job Status:
                    </label>
                    <div className="flex">
                        <div className="flex items-center mr-4">
                            <input id="job_status1" type="radio" onChange={handleChange} checked={input.job_status == "0"} value="0" name="job_status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="job_status1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ditutup</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="job_status2" type="radio" onChange={handleChange} checked={input.job_status == "1"} value="1" name="job_status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="job_status2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dibuka</label>
                        </div>
                    </div>
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
  );
};

export default Form;