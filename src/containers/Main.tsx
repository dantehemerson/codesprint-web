import React from 'react'
import { Navbar } from 'components/Navbar/Navbar'
import { Sidebar } from 'components/Navbar/Sidebar'

export default function Main({ children }: any) {
  return (
    <>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        <div className='flex-1'>
          {children}
        </div>
      </div>3
    </>
  )
}
