import { sidebarConfig, SidebarConfigItem } from 'config/sidebar.config'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const { items } = sidebarConfig

type SidebarInfo = {
  items: SidebarConfigItem[],
  selectedTo: Maybe<string>
}

export function useSidebarInfo(): SidebarInfo {
  const { pathname } = useLocation()

  const selectedItem = useMemo(() => {
    const sidebarItem = items.find(item => {
      return item.pathname.some(path => {
        if(typeof path === 'string') {
          return path === pathname
        }

        return path.test(pathname)
      })
    })

    return sidebarItem
  }, [ pathname ])

  return {
    items,
    selectedTo: selectedItem?.to
  }
}
