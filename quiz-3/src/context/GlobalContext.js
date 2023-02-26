import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider =  (props) => {
    let navigate = useNavigate();
    const [data,setData] = useState(null)
    const [input,setInput] = useState({
        name: "",
        description: "",
        category: "",
        release_year: 2007,
        size: 0,
        price: 0,
        rating: 0,
        image_url: "",
        is_android_app: "",
        is_ios_app: ""
    })
    const [fetchStatus,setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        if(name === "name"){         
            setInput({...input,name:value})
        }else if(name === "description"){
            setInput({...input,description:value})
        }else if(name === "category"){
            setInput({...input,category:value})
        }else if(name === "release_year"){
            setInput({...input,release_year:value})
        }else if(name === "size"){
            setInput({...input,size:value})
        }else if(name === "price"){
            setInput({...input,price:value})
        }else if(name === "rating"){
            setInput({...input,rating:value})
        }else if(name === "image_url"){
            setInput({...input,image_url:value})
        }else if(name === "is_android_app"){
            setInput({...input,is_android_app:value})
        }else if(name === "is_ios_app"){
            setInput({...input,is_ios_app:value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {name} = input
        let {description} = input
        let {category} = input
        let {release_year} = input
        let {size} = input
        let {price} = input
        let {rating} = input
        let {image_url} = input
        let {is_android_app} = input
        let {is_ios_app} = input

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', {name,description,category,release_year,size,price,rating,image_url,is_android_app,is_ios_app})
            .then((res)=>{
                setFetchStatus(true)
                // navigate('/')
            })
            .catch((err)=>{
    
            })    
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,{name,description,category,release_year,size,price,rating,image_url,is_android_app,is_ios_app})
            .then((res)=>{
                setFetchStatus(true)
                // navigate('/')
            })
            .catch((err)=>{

            })
        }

        setInput({
            name: "",
            description: "",
            category: "",
            release_year: 2007,
            size: 0,
            price: 0,
            rating: 0,
            image_url: "",
            is_android_app: "",
            is_ios_app: ""
        })
        setCurrentId(-1)
        setFetchStatus(true)
    }

    const handleEdit = (event)=>{
        let idData = parseInt(event.target.value)
        // setCurrentId(idData)
        // navigate(`/edit/${idData}`)

        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
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
             setCurrentId(result.id)
         })
         .catch((error)=>{
             console.log(error)
         })
        
    }

    const handleDelete = (event)=>{
        let idData = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res)=>{
            setFetchStatus(true)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleRupiah = (angka) => {
        let number_string = angka.toString();
        let split = number_string.split(',');
        let sisa = split[0].length % 3;
        let rupiah = split[0].substr(0, sisa);
        let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if(ribuan){
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return (angka > 0 ? 'Rp. ' + rupiah : 'Free');
    }

    const handleSize = (size) => {
        if(size > 1000){
            return `${size/1000}GB`;
        }
        return `${size}MB`;
    }

    const handleText = (text) => {
        if (text.length > 200) {
            return text.substring(0, 150) + '...';
        }
        return text;
    }

    let fetchData = () => {
        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
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
        handleRupiah,
        handleText,
        handleSize,
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