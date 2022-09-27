import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Restaurants from '../pages/Restaurants'
import Restaurant from '../pages/Restaurants/Restaurant'
import Items from '../pages/Items'
import Item from '../pages/Items/Item'
import PageNotFound from '../components/ErrorTemplates/index'
import Orders from '../pages/orders'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Restaurants />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<Restaurant />} />
      <Route path="/restaurants/:restaurantId/items" element={<Items />} />
      <Route path="/items/:id" element={<Item />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
)

export default AppRoutes
