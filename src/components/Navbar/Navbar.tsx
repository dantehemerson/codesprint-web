import React from 'react'
import { UserDropdown } from './UserDropdown'

export function Navbar() {
  return (
    <nav className='fixed bg-white shadow w-full'>
      <div className='mx-auto px-6 h-20  flex align-middle'>
        <div className='md:flex md:items-center md:justify-between w-full'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-semibold text-gray-700'>
              <a className='text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl' href='/'>CodeSprint</a>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:justify-between flex-1'>
            <div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'>
              <div className='mx-10 hidden md:block'>
                <input
                  aria-label='Search' className='w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400' placeholder='Search'
                  type='text' />
              </div>
            </div>
            <div className='flex items-center mt-4 md:mt-0'>
              <button aria-label='show notifications' className='mx-4 hidden md:block text-gray-600 hover:text-gray-700 focus:text-gray-700 focus:outline-none'>
                <svg
                  className='h-6 w-6' fill='none' viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9' stroke='currentColor' strokeLinecap='round'
                    strokeLinejoin='round' strokeWidth={2} />
                </svg>
              </button>
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
