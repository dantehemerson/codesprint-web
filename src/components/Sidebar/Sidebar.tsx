import { appConfig } from 'config/app.config'
import { useSidebarInfo } from 'lib/hooks/use-sidebar-info.hook'
import React from 'react'
import { Link } from 'react-router-dom'

export function Sidebar() {
  const { items, selectedTo } = useSidebarInfo()

  return (
    <>
      {/* Desktop sidebar */}
      <aside className='z-20 hidden w-52 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0'>
        <div className='py-4 text-gray-500 dark:text-gray-400'>
          <Link className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200' to='/'>
            {appConfig.title}
          </Link>
          <ul className='mt-6'>
            {
              items.map((item, index)=> {
                return (
                  <li className='relative px-6 py-3' key={index}>
                    {
                      item.to === selectedTo &&  <span aria-hidden='true' className='absolute inset-y-0 left-0 w-1 bg-teal-600 rounded-tr-lg rounded-br-lg' />
                    }
                    <Link className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' to={item.to}>
                      <svg
                        aria-hidden='true' className='w-5 h-5' fill='none'
                        stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                        strokeWidth={2} viewBox='0 0 24 24'>
                        {item.icon}
                      </svg>
                      <span className='ml-4'>{item.title}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className='px-6 my-6'>
            <button className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-lg active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal'>
                Create account
              <span aria-hidden='true' className='ml-2'>+</span>
            </button>
          </div>
        </div>
      </aside>
      {/* Mobile sidebar */}
      {/* Backdrop
      <div className='fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center' x-show='isSideMenuOpen' />
      <aside className='fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden' x-show='isSideMenuOpen'  >
        <div className='py-4 text-gray-500 dark:text-gray-400'>
          <a className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200' href='#'>
              Windmill
          </a>
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              <span aria-hidden='true' className='absolute inset-y-0 left-0 w-1 bg-teal-600 rounded-tr-lg rounded-br-lg' />
              <a className='inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100' href='index.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                </svg>
                <span className='ml-4'>Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className='relative px-6 py-3'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200' href='forms.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
                </svg>
                <span className='ml-4'>Forms</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200' href='cards.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                </svg>
                <span className='ml-4'>Cards</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200' href='charts.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' />
                  <path d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' />
                </svg>
                <span className='ml-4'>Charts</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200' href='buttons.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122' />
                </svg>
                <span className='ml-4'>Buttons</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200' href='modals.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
                </svg>
                <span className='ml-4'>Modals</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <a className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200' href='tables.html'>
                <svg
                  aria-hidden='true' className='w-5 h-5' fill='none'
                  stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} viewBox='0 0 24 24'>
                  <path d='M4 6h16M4 10h16M4 14h16M4 18h16' />
                </svg>
                <span className='ml-4'>Tables</span>
              </a>
            </li>
            <li className='relative px-6 py-3'>
              <button aria-haspopup='true' className='inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'>
                <span className='inline-flex items-center'>
                  <svg
                    aria-hidden='true' className='w-5 h-5' fill='none'
                    stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                    strokeWidth={2} viewBox='0 0 24 24'>
                    <path d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
                  </svg>
                  <span className='ml-4'>Pages</span>
                </span>
                <svg
                  aria-hidden='true' className='w-4 h-4' fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path clipRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' fillRule='evenodd' />
                </svg>
              </button>
              <template x-if='isPagesMenuOpen' />
            </li>
          </ul>
          <div className='px-6 my-6'>
            <button className='flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-lg active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal'>
                Create account
              <span aria-hidden='true' className='ml-2'>+</span>
            </button>
          </div>
        </div>
      </aside>*/}
    </>
  )
}
