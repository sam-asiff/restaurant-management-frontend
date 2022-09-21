import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constaints'
import axios from 'axios'
import OrdersTable from './ordersTable'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v1/orders`).then((res) => {
      setOrders(res.data)
    })
  }, [])

  return (
    <div>
      <div className="container mt-4">
        <link rel="stylesheet" href="" />
        <Link to="/" type="button" className="btn btn-primary">
          Back to Restaurants
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <h1>All Orders</h1>
      </div>
      <OrdersTable orders={orders} />
    </div>
  )
}

export default Orders
