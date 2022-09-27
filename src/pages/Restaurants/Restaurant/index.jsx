import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../../constaints'
import TopNavBar from '../../../components/TopNavBar'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  const { id: restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState({})
  const [isRequesting, setIsRequesting] = useState(false)

  useEffect(() => {
    const getRestaurant = () => {
      setIsRequesting(true)
      axios
        .get(`${BASE_URL}/api/v1/restaurants/${restaurantId}`)
        .then((res) => {
          setRestaurant(res.data)
          setIsRequesting(false)
        })
    }
    getRestaurant()
  }, [restaurantId])

  return (
    <div>
      <TopNavBar restaurantId={restaurantId} />
      <div className="container">
        <div className="d-flex justify-content-center">
          {!isRequesting && (
            <div>
              <h1>{restaurant.name}</h1>
              <Link to={`/restaurants/${restaurant.id}/items`}>Items</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Restaurant
