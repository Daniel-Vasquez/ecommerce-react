import { Link } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { useState, useEffect } from 'react'
import { Products } from '@/components/Products'

export const Home = () => {

  return (
    <div className="min-h-screen">
      <Cart />
      <h1 className="text-4xl font-black text-golden text-center my-7">
        Tarjetas de Rick and Morty
      </h1>
    </div>
  )
}
