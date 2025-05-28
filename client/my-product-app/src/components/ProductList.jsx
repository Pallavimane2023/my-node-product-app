import React, { useState } from 'react'
import useFetch from '../useFetch'

function ProductList() {
   const { loading,error,data} = useFetch('http://localhost:3000/api/user/products','GET');

   console.log(data,"data")
   if(loading){
    return<>Loading...</>
   }

  return (
    <><h1>ProductList</h1>
<ul>
    {data && data.map((element,index)=>{
        return <li key={index}>{element.name}</li>
    })}
</ul>
    </>
  )
}

export default ProductList