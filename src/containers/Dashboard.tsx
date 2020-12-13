import { Challenge } from 'components/Challenge'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import challengeDucks from 'reducers/challenges'

const { getChallenges } = challengeDucks.creators

interface Selector {
  challenges: {
    challenges: any[]
  }
}

export default () => {
  const dispatch = useDispatch()
  const [ c, setC ] = useState(1)
  const { challenges } = useSelector((state: Selector) => state.challenges)

  console.log('🤫 Dante ➤ challenges', challenges)
  useEffect(() => {
    dispatch(getChallenges())
  }, [])

  return (
    <div data-testid='counter'>
      <p>Challenges {c}</p>
      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
                <img alt='blog' className='lg:h-48 md:h-36 w-full object-cover object-center' src='https://dummyimage.com/720x400' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>CATEGORY</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The Catalyzer</h1>
                  <p className='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='flex items-center flex-wrap '>
                    <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                      <svg
                        className='w-4 h-4 ml-2' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                    <span className='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
                      <svg
                        className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className='text-gray-600 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
                <img alt='blog' className='lg:h-48 md:h-36 w-full object-cover object-center' src='https://dummyimage.com/721x401' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>CATEGORY</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The 400 Blows</h1>
                  <p className='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='flex items-center flex-wrap'>
                    <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                      <svg
                        className='w-4 h-4 ml-2' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                    <span className='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
                      <svg
                        className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className='text-gray-600 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
                <img alt='blog' className='lg:h-48 md:h-36 w-full object-cover object-center' src='https://dummyimage.com/722x402' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>CATEGORY</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>Shooting Stars</h1>
                  <p className='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className='flex items-center flex-wrap '>
                    <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                      <svg
                        className='w-4 h-4 ml-2' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                    <span className='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
                      <svg
                        className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                        <circle cx={12} cy={12} r={3} />
                      </svg>1.2K
                    </span>
                    <span className='text-gray-600 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1' fill='none' stroke='currentColor'
                        strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                        viewBox='0 0 24 24'>
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button onClick={() => setC(c + 1)}>lkl</button>
      {
        challenges.map(challenge => <Challenge challenge={challenge} key={challenge.id} />)
      }
    </div>
  )
}
