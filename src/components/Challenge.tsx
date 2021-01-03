import React from 'react'
import { ChallengeDto } from 'reducers/challenge/types/challenge.type'
import { Link } from 'react-router-dom'

type ChallengeProps = {
  challenge: ChallengeDto
}

export function Challenge({ challenge }: ChallengeProps) {
  return (
    <div className='h-full rounded-lg shadow overflow-hidden bg-white dark:bg-gray-800'>
      <Link to={`/challenge/${challenge.id}`}>
        <img alt='blog' className='lg:h-48 md:h-36 w-full object-cover object-center' src={challenge.thumbnail} />
      </Link>
      <div className='p-4'>
        {/* <div className='flex'>
          {
            challenge.categories?.slice(0, 3)?.map(category =>
              (<Link className='tracking-widest text-xs text-gray-500 mb-1 mr-1' key={category.id} to={`/category/${category.slug}`}>
                {category.title}
              </Link>)
            )
          }
        </div> */}
        <Link to={`/challenge/${challenge.id}`}>
          <h1 className='title-font text-base font-medium text-gray-800 dark:text-gray-300 mb-2'>{challenge.title}</h1>
        </Link>
        <p className='leading-relaxed text-xs mb-3 text-gray-600 dark:text-gray-400'>{challenge.intro}</p>
        <div className='flex items-center flex-wrap'>
          <Link className='text-indigo-500 text-sm inline-flex items-center md:mb-2 lg:mb-0' to={`/challenge/${challenge.id}`}>View
            <svg
              className='w-3 h-3 ml-2' fill='none' stroke='currentColor'
              strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              viewBox='0 0 24 24'>
              <path d='M5 12h14' />
              <path d='M12 5l7 7-7 7' />
            </svg>
          </Link>
          <span className='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-xs pr-3 py-1 border-r-2 border-gray-300'>
            <svg
              className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
              strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              viewBox='0 0 24 24'>
              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
              <circle cx={12} cy={12} r={3} />
            </svg>1.2K
          </span>
          <span className='text-gray-600 inline-flex items-center leading-none text-xs'>
            <svg
              className='w-4 h-4 mr-1'
              fill='none' stroke='currentColor' viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' strokeLinecap='round' strokeLinejoin='round'
                strokeWidth='2' />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

