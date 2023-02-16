import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider =  (props) => {
    const [data,setData] = useState(null)
    const [input,setInput] = useState({
        name: "",
        course: "",
        score: 0
    })
    const [fetchStatus,setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

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

    let fetchData = () => {
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

    let state = {
        data,setData,
        input,setInput,
        fetchStatus,setFetchStatus,
        currentId, setCurrentId
    }

    let handleFunction = {
        handleIndexScore,
        handleDelete,
        handleEdit,
        handleSubmit,
        handleChange,
        fetchData
    }

    return (
        <GlobalContext.Provider value={
            {
                state,
                handleFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}