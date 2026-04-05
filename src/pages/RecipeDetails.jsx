// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { axiosInstance } from '../apis/config'

// const RecipeDetails = () => {
//   const params=useParams()
//   const [recipes,setRecipe]=useState()
//   // console.log(params);
  
//   useEffect(()=>{
//     axiosInstance.get(`/recipes/${params.id}`)
//     .then((res)=>setRecipe(res.data))
//     .catch((err)=>console.log(err))
//   },[])
//   return (
//     <div>
//       <h2>{recipes?.name}</h2>
//       <ul>
//         {recipes?.ingredients.map((ing,index)=>{
//          return <li key={index}>{ing}</li>
//         })}
//       </ul>

//     </div>
//   )
// }

// export default RecipeDetails

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../apis/config'

const RecipeDetails = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    axiosInstance.get(`/recipes/${params.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err))
  }, [params.id])

  if (!recipe) return <p>Loading...</p>  // loading state

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <img 
          src={recipe.image} 
          className="card-img-top" 
          alt={recipe.name} 
          style={{ maxHeight: '400px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h3 className="card-title">{recipe.name}</h3>
          <p className="card-text">{recipe.description}</p>
          <h5>Ingredients:</h5>
          <ul className="list-group list-group-flush">
            {recipe.ingredients.map((ing, index) => (
              <li className="list-group-item" key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails