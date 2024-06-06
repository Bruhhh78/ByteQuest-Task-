"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center space-x-8 py-4 md:flex-row sm:flex-col sm:items-center">
        <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
          Bags
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
          Travel
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
          Accessories
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
          Gifting
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white" prefetch={false}>
          Jewelry
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
