import { Link, useLocation } from 'react-router-dom'

import type { TNavLink } from './types'

export function NavLink(props: TNavLink) {
  const { pathname } = useLocation()
  const isCurrentLink = pathname === props.to

  console.log('path name:', pathname)
  console.log('props to:', props.to)

  return (
    <Link
      data-current={isCurrentLink}
      {...props}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
    />
  )
}
