import { Link, useLocation } from 'react-router-dom'

import type { TNavLink } from './types'

export function NavLink(props: TNavLink) {
  const { pathname } = useLocation()
  const isCurrentLink = pathname === props.to

  return (
    <Link
      data-current={isCurrentLink}
      {...props}
      className="text-muted-foreground dark:hover:text-foreground hover:text-primary/80 dark:data-[current=true]:text-foreground data-[current=true]:text-primary flex items-center gap-1.5 text-sm font-medium"
    />
  )
}
