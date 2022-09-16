import React from 'react'
import { Link } from 'react-router-dom'

const TopNavBar = ({ restaurant }) => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      {restaurant && (
        <Link className="navbar-brand" to={`restaurants/${restaurant.id}`}>
          {restaurant.name}
        </Link>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        {restaurant && (
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={`/restaurants/${restaurant.id}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/restaurants/${restaurant.id}/items`}
              >
                All Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                All Orders
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  </nav>
)

export default TopNavBar
