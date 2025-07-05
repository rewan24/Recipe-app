import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../apis/config'

const RecipeDetails = () => {
  const params=useParams()
  const [recipes,setRecipe]=useState()
  // console.log(params);
  
  useEffect(()=>{
    axiosInstance.get(`/recipes/${params.id}`)
    .then((res)=>setRecipe(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <h2>{recipes?.name}</h2>
      <ul>
        {recipes?.ingredients.map((ing,index)=>{
         return <li key={index}>{ing}</li>
        })}
      </ul>

    </div>
  )
}

export default RecipeDetails
