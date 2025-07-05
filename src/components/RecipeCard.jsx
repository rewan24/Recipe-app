import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router'

export default function RecipeCard({recipeItem , onDelete}) {
    // console.log(props)
    // const {recipeItem , onDelete}=props;
    const navigate=useNavigate();
    const redirectDetails=(id)=>{
      console.log("ID",id);
      
      navigate (`/recipe-details/${id}`)
    }
  return (
    <div className="card h-100">
      <img src={recipeItem.image} className="card-img-top" alt={recipeItem.name}/>
      <div className="card-body">
        <h5 className="card-title">{recipeItem.name}</h5>
        <p className="card-text">{recipeItem.description}.</p>
      </div>
      <div className="card-footer">
     <button className='btn btn-dark' onClick={() => onDelete(recipeItem.id)}>Delete</button>
     <span >  </span>
     <button className='btn btn-dark' onClick={()=>redirectDetails(recipeItem.id)}>View</button>

      </div>
    </div>

  )
}
