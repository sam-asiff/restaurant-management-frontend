import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Restaurants from './routes/Restaurants'
import Restaurant from './routes/Restaurants/Restaurant'
import Items from './routes/Items'
import Item from './routes/Items/Item'
import PageNotFound from './components/ErrorTemplates/index'
import Orders from './routes/orders'

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
