import React from 'react'

export default function FooterSmall(props: any) {
  return (
    <>
      <footer
        className={
          (props.absolute ?
            'absolute w-full bottom-0 bg-gray-900' :
            'relative') + ' pb-6'
        }>
        <div className='container mx-auto px-4'>
          <hr className='mb-6 border-b-1 border-gray-700' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4'>
              <div className='text-sm text-white font-semibold py-1'>
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  className='text-white hover:text-gray-400 text-sm font-semibold py-1'
                  href='https://www.creative-tim.com'>
                  Creative Tim
                </a>
              </div>
            </div>
            <div className='w-full md:w-8/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
                <li>
                  <a
                    className='text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                    href='https://www.creative-tim.com'>
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    className='text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                    href='https://www.creative-tim.com/presentation'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className='text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                    href='http://blog.creative-tim.com'>
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className='text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3'
                    href='https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md'>
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
