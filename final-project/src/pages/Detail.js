import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const Detail = () => {
    let {IdData} = useParams();
    const {state, handleFunction} = useContext(GlobalContext)
    const {
        data,setData,
        input,setInput,
        fetchStatus,setFetchStatus,
        currentId, setCurrentId,
        user,setUser
    } = state

    const {
        fetchData,
        handleRupiah
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
             console.log(input)
             
         })
         .catch((error)=>{
             console.log(error)
         })
        }
     },[])


    return(
        <>
            {console.log(input)}
            <section className='flex shadow-md p-6'>
                <img src={input.company_image_url} className="w-1/12 h-1/12"/>
                <section className='ml-3'>
                    <label className='block font-semibold'>{input.title} ({input.job_type})</label>
                    <label className='block'>{input.company_name}</label>
                    <label className='block'>{input.company_city}</label>
                    <label className='block'>{handleRupiah(input.salary_min)} - {handleRupiah(input.salary_max)}</label>
                    <label className="mt-1 text-sm text-gray-500 dark:text-gray-400"><b className={input.job_status === 0 ? 'text-red-500' : 'text-blue-500'}>{input.job_status === 0 ? 'Ditutup' : 'Dibuka'}</b></label>
                </section>
            </section>
            <section className='shadow-md p-6'>
                <section className='mt-2'>
                    <h1 className='font-semibold'>Job Tenure</h1>
                    <label>{input.job_tenure}</label>
                </section>
                <section className='mt-2'>
                    <h1 className='font-semibold'>Job Description</h1>
                    <label>{input.job_description}</label>
                </section>
                <section className='mt-2'>
                    <h1 className='font-semibold'>Job Qualification</h1>
                    <label>{input.job_qualification}</label>
                </section>
            </section>
        </>
    )
}

export default Detail;