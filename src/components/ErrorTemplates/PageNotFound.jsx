import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => (
  <div className="d-flex justify-content-center">
    <div>
      <h1>Page Not Exist</h1>
      <Link to="/"> Back To DashBoard</Link>
    </div>
  </div>
)

export default PageNotFound
