import React from 'react'
import Popper from 'popper.js'
import { Link } from 'react-router-dom'

export function  UserDropdown() {
  // dropdown props
  const [ dropdownPopoverShow, setDropdownPopoverShow ] = React.useState(false)
  const btnDropdownRef = React.createRef<HTMLAnchorElement>()
  const popoverDropdownRef = React.createRef<HTMLDivElement>()
  const openDropdownPopover = () => {
    if(btnDropdownRef.current && popoverDropdownRef.current) {
      new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: 'bottom-end'
      })
      setDropdownPopoverShow(true)
    }
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  return (
    <>
      <a
        className='text-gray-600 block'
        href='#pablo'
        onClick={e => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
        ref={btnDropdownRef}>
        <button aria-label='toggle profile dropdown' className='flex items-center focus:outline-none' type='button'>
          <div className='h-8 w-8 overflow-hidden rounded-full border-2  border-gray-400'>
            <img alt='avatar' className='h-full w-full object-cover' src='https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g' />
          </div>
          <h3 className='mx-2 text-sm text-gray-700 font-medium md:hidden'>Khatab wedaa</h3>
        </button>
      </a>
      <div
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
        }
        ref={popoverDropdownRef}
        style={{ minWidth: '12rem' }}>
        <Link
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          href='#pablo'
          to='/dantehemerson'>
          Profile
        </Link>
        <a
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          href='#pablo'
          onClick={e => e.preventDefault()}>
          Settings
        </a>
        <div className='h-0 my-2 border border-solid border-gray-200' />
        <a
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          href='#pablo'
          onClick={e => e.preventDefault()}>
          Sign Out
        </a>
      </div>
    </>
  )
}
