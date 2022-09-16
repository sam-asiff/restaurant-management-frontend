import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantList = ({ restaurant }) => (
  <div className="container">
    <div className="shadow-box d-flex justify-content-center p-2 m-2">
      <h1 className="fw-normal">
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
      </h1>
    </div>
  </div>
)

export default RestaurantList
