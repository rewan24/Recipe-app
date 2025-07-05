import React from 'react'
import { Route,Routes } from 'react-router-dom'
import RecipesList from '../pages/RecipesList'
import AddRecipe from '../pages/AddRecipe'
import RecipeCounter from '../pages/RecipeCounter'
import Settings from '../pages/Settings'
import RecipeDetails from '../pages/RecipeDetails'
// import Header from './components/Header'
import NotFound from '../pages/NotFound'
import LayoutWithHeader from '../components/layoutWithHeader'

const RouteList = () => {
  return (
  
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path='/' element={<RecipesList />} />
        <Route path='add-recipe' element={<AddRecipe />} />
        <Route path='recipe-details/:id' element={<RecipeDetails />} />
        <Route path='recipe-counter' element={<RecipeCounter />} />
        <Route path='settings' element={<Settings />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
   
  )
}

export default RouteList