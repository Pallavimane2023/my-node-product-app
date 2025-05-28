import React, { useEffect, useState } from 'react'

const useFetch = (url,method)=>{
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchApi = async()=>{
            setLoading(true);
            setError(null);
          try{
            const response = await fetch(url,{
                method:method,
                headers:{
                    'Content-type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                },
                //credentials:'include' step6 add credentials:"include" to set token in cookie automatically
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);

          }catch(err){
            setError(err);
          }finally{
            setLoading(false);
          }
        }
        fetchApi();

    },[url])

    return {
        loading,data,error
    }
}

export default useFetch