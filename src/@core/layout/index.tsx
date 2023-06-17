import React from 'react'
import Navbar from '../components/Navbar'

type Props = {
    children: React.ReactNode
}

export default function index({children}: Props) {
  return (
    <div className='max-w-screen overflow-x-hidden'>
        <Navbar/>
        {children}
    </div>
  )
}