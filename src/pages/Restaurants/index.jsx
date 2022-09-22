import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constaints'
import { RestaurantList } from '../../components/Restaurants'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/restaurants`).then((res) => {
      setRestaurants(res.data)
    })
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>Available Restaurants</h1>
      </div>
      <div className="mb-4">
        {restaurants.map((restaurant, key) => (
          <RestaurantList restaurant={restaurant} key={key} />
        ))}
      </div>
    </div>
  )
}

export default Restaurants
