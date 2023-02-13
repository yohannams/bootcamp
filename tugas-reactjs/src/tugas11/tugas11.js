import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tugas11 = () => {
    const [data,setData] = useState(null)

    useEffect(()=>{
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
        .then((res)=>{
            let result = res.data;
            console.log(res)
            setData(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])

    const handleIndexScore = (nilai) => {
      if(nilai >= 80){
        return "A"
      }else if(nilai >= 70 && nilai < 80){
        return "B"
      }else if(nilai >= 60 && nilai < 70){
        return "C"
      }else if(nilai >= 50 && nilai < 60){
        return "D"
      }else{
        return "E"
      }
    }

  return (
    <div className="container">
      <div className="relative overflow-x-auto sm:rounded-lg">
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
            </tr>
          </thead>
          <tbody>
                {data === null && <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" colSpan="5">Loading</th>}
                {data !== null && 
                     data.map((element, index)=>{
                     return (
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={element.id}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index+1}</th>
                      <td className="px-6 py-4">{element.name}</td>
                      <td className="px-6 py-4">{element.course}</td>
                      <td className="px-6 py-4">{element.score}</td>
                      <td className="px-6 py-4">{handleIndexScore(element.score)}</td>
                    </tr>)
                    })
                }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tugas11;
