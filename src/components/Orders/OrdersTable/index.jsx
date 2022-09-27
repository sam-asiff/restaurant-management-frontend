import React from 'react'

const OrdersTable = ({ orders }) => {
  return (
    <div className="m-3">
      <div className="container shadow-box">
        <table className="table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Ordered By</th>
              <th scope="col">Ordered At</th>
              <th scope="col">Status</th>
              <th scope="col">Order Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, key) => (
              <tr key={key}>
                <td>{order.id}</td>
                <td>{order.user.full_name}</td>
                <td>{order.ordered_at}</td>
                <td>
                  <span
                    className={`order-status-${order.status}`}
                    id={order.id}
                  >
                    {order.status}
                  </span>
                </td>
                <td> {order.order_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersTable
