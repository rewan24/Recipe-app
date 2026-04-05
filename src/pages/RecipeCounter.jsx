import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../apis/config'

const RecipeCounter = () => {
  const [recipesCount, setRecipesCount] = useState(null)

  useEffect(() => {
    // نفترض إن عندنا endpoint بيرجع كل الوصفات
    axiosInstance.get('/recipes')
      .then(res => setRecipesCount(res.data.length))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container mt-4">
      <div className="card text-center mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title">Total Recipes</h3>
          <p className="card-text display-4">
            {recipesCount !== null ? recipesCount : 'Loading...'}
          </p>
          <p className="card-text">Enjoy cooking your favorite dishes! 🍳</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCounter