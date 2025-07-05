import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { axiosInstance } from '../apis/config'

const AddRecipe = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      recipeName: '',
      recipeDescription: '',
    },
    validationSchema: Yup.object({
      recipeName: Yup.string()
        .required('Recipe name is required')
        .min(3, 'Must be at least 3 characters'),
      recipeDescription: Yup.string()
        .required('Description is required')
        .min(10, 'Must be at least 10 characters')
        .max(200, 'Must be 200 characters or less'),
    }),
    onSubmit: (values) => {
      axiosInstance.post('/recipe/add', values)
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }
  })

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="mb-4 text-center">Add Recipe</h3>
              <form onSubmit={formik.handleSubmit} noValidate>

                {/* Recipe Name */}
                <div className="mb-3">
                  <label htmlFor="recipeName" className="form-label">Recipe Name</label>
                  <input
                    id="recipeName"
                    name="recipeName"
                    type="text"
                    className={`form-control ${formik.touched.recipeName && formik.errors.recipeName ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.recipeName}
                  />
                  {formik.touched.recipeName && formik.errors.recipeName && (
                    <div className="invalid-feedback">
                      {formik.errors.recipeName}
                    </div>
                  )}
                </div>

                {/* Recipe Description */}
                <div className="mb-3">
                  <label htmlFor="recipeDescription" className="form-label">Recipe Description</label>
                  <textarea
                    id="recipeDescription"
                    name="recipeDescription"
                    className={`form-control ${formik.touched.recipeDescription && formik.errors.recipeDescription ? 'is-invalid' : ''}`}
                    rows={5}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.recipeDescription}
                  />
                  {formik.touched.recipeDescription && formik.errors.recipeDescription && (
                    <div className="invalid-feedback">
                      {formik.errors.recipeDescription}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
