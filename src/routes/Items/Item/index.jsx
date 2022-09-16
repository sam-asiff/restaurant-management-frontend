import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../../constaints'
import demoImage from '../../../assets/image/sample_food_image.jpeg'

const Item = () => {
  const { id: item_id } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/items/${item_id}`).then((res) => {
      setItem(res.data)
    })
  }, [])

  return (
    <div className="container item mt-5">
      <div className="row">
        <div className="col-lg-6">
          {item.image_url ? (
            <img
              className="image-section"
              src={`${item.image_url}`}
              alt={`${item.title}`}
            />
          ) : (
            <img
              className="image-section"
              src={demoImage}
              alt={`${item.title}`}
            />
          )}
        </div>
        <div className="col-lg-6 content-section">
          <div className="title">
            <span>{item.title}</span>
          </div>
          <div className="currency">
            <span>Rs. </span>
            <span>{item.price}</span>
          </div>
          <div className="description mt-4">
            <span>{item.description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Item
