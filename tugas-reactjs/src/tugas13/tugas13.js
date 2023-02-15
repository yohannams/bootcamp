import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tugas13 = () => {
    const [data,setData] = useState(null)
    const [input,setInput] = useState({
        name: "",
        course: "",
        score: 0
    })

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "name"){         
            setInput({...input,name:value})
        }else if(name === "course"){
            setInput({...input,course:value})
        }else if(name === "score"){
            setInput({...input,score:value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {name} = input
        let {course} = input
        let {score} = input

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name,course,score})
            .then((res)=>{
                setFetchStatus(true)
            })
            .catch((err)=>{
    
            })    
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,{name,course,score})
            .then((res)=>{
                setFetchStatus(true)
            })
            .catch((err)=>{

            })
        }

        setInput({
            name:"",
            course:"",
            score:0
        })
        setCurrentId(-1)
    }

    const handleEdit = (event)=>{
        let idData = parseInt(event.target.value)
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res)=>{
            let result = res.data;
            setInput({
                name: result.name,
                course: result.course,
                score: result.score
            })
            setCurrentId(result.id)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleDelete = (event)=>{
        let idData = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res)=>{
            setFetchStatus(true)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const [fetchStatus,setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

    useEffect(()=>{
        if(fetchStatus === true){
            axios.get('https://backendexample.sanbercloud.com/api/student-scores')
            .then((res)=>{
                let result = res.data;
                setData([...result])
            })
            .catch((error)=>{
                console.log(error)
            })
            setFetchStatus(false)
        }
    },[fetchStatus,setFetchStatus])

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
    <>
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
    <div style={{width:'80%', margin:'auto', marginBottom:'100px'}}>
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

export default Tugas13;