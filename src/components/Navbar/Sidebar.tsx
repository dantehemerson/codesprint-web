import React from 'react'

export function Sidebar() {
  return (
    <div className='pt-24 w-56 border-r-2'>
      <div className='bg-grey-darkest relative h-full min-h-screen'>
        <div className='xl:py-2'>
          <div className='hidden xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2'>
            Main
          </div>
          <div className='group relative sidebar-item with-children'>
            <a className='block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-200' href='#'>
              <svg
                className='h-8 w-8 text-gray-600 fill-current xl:mr-2' height={24} viewBox='0 0 24 24'
                width={24} xmlns='http://www.w3.org/2000/svg'><path className='heroicon-ui' d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z' /></svg>
              <div className='text-xs'>Challenges</div>
            </a>
          </div>
          <div className='group relative sidebar-item with-children'>
            <a className='block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-200' href='#'>
              <svg
                className='h-8 w-8 text-gray-600 fill-current xl:mr-2' height={24} viewBox='0 0 24 24'
                width={24} xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' strokeLinecap='round' strokeLinejoin='round'
                  strokeWidth={2} />
              </svg>

              <div className='text-xs'>Katas</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
