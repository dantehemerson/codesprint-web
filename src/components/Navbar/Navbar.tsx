import React from 'react'
import { UserDropdown } from './UserDropdown'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className='fixed bg-white shadow w-full'>
      <div className='mx-auto px-6 h-20  flex align-middle'>
        <div className='md:flex md:items-center md:justify-between w-full'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-semibold text-gray-700'>
              <Link className='text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl' to='/'>CodeSprint</Link>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:justify-between flex-1'>
            <div className='flex flex-col -mx-4 md:flex-row md:items-center md:mx-8'>
              <div className='mx-10 hidden md:block'>
                <div className='pt-2 relative mx-auto text-gray-600'>
                  <input
                    className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' name='search' placeholder='Search'
                    type='search' />
                  <button className='absolute right-0 top-0 mt-5 mr-4' type='submit'>
                    <svg
                      className='text-gray-600 h-4 w-4 fill-current' height='512px' id='Capa_1'
                      version='1.1' viewBox='0 0 56.966 56.966'
                      width='512px' x='0px' xmlSpace='preserve'
                      xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' y='0px'>
                      <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
                    </svg>
                  </button>
                </div>
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
