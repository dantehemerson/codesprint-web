import React from 'react'
import { Navbar } from 'components/Navbar/Navbar'
import { Sidebar } from 'components/Navbar/Sidebar'

export default function Main({ children }: any) {
  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar />
      <div className='flex flex-col flex-1 w-full'>
        <Navbar />
        <div className='h-full overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  )
}
