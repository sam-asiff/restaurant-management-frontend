import React from 'react'
import { Link } from 'react-router-dom'
import demoImage from '../../assets/image/sample_food_image.jpeg'

const ItemList = ({ item }) => (
  <div id="item.id" className="col-lg-3 list-item">
    <div className="image-div">
      <Link to={`/items/${item.id}`}>
        {item.image_url ? (
          <img
            className="image"
            src={`${item.image_url}`}
            alt={`${item.title}`}
          />
        ) : (
          <img className="image" src={demoImage} alt={`${item.title}`} />
        )}
      </Link>
    </div>
    <div className="d-flex justify-content-between mt-2">
      <span className="title">{item.title}</span>
    </div>
    <div className="description">
      <span> {item.description} </span>
    </div>
    <div className="currency">
      <span>Rs.</span>
      <span>{item.price}</span>
    </div>
  </div>
)

export default ItemList
