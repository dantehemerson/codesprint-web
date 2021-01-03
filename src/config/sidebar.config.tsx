import React from 'react'

export type SidebarConfigItem = {
  title: string
  icon: JSX.Element,
  to: string,
  pathname: Array<string | RegExp>
}

/**
 * https://regex101.com/r/Ii03cQ/1
 */
export const sidebarConfig: { items: SidebarConfigItem[] } = {
  items: [
    {
      title: 'Frontend',
      icon : <path
        d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' strokeLinecap='round' strokeLinejoin='round'
        strokeWidth={2} />,
      to      : '/',
      pathname: [ '/',  /^\/challenge(\/.*|\/?)$/ ]
    },
    {
      title: 'Backend',
      icon : <path
        d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' strokeLinecap='round' strokeLinejoin='round'
        strokeWidth={2} />,
      to      : '/',
      pathname: [ '/', /^\/challenge(\/.*|\/?)$/ ]
    },
    {
      title: 'Katas',
      icon : <path
        d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' strokeLinecap='round' strokeLinejoin='round'
        strokeWidth={2} />,
      to      : '/katas',
      pathname: [ /^\/katas(\/.*|\/?)$/  ]
    }
  ]
}
