import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constaints'
import ItemList from '../../components/Items/ItemList'
import TopNavBar from '../../components/TopNavBar'

const Items = () => {
  const { restaurantId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const setItemsState = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/restaurants/${restaurantId}/items`
        )
        setItems(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    setItemsState()
  }, [restaurantId])

  return (
    <div>
      <TopNavBar restaurantId={restaurantId} />
      <div className="container d-flex justify-content-center mt-2">
        <h1>All Items</h1>
      </div>
      <div className="container mt-3">
        <div className="row">
          {items.map((item, key) => (
            <ItemList item={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Items
