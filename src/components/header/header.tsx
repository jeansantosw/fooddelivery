import { LayoutDashboard, ListMinus } from 'lucide-react'

import { AccountMenu } from '../account-menu/account-menu'
import { NavLink } from '../nav-link/nav-link'
import { ThemeToggle } from '../theme/theme-toggle'

export function Header() {
  return (
    <div className="border-primary/50 dark:border-muted-foreground/10 border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        {/* <HandPlatter className="h-6 w-6" /> */}
        <p className="font-bold dark:text-amber-50">
          foo<span className="text-primary">DD</span>elivery
        </p>
        {/* <Separator
          orientation="vertical"
          className="bg-primary/50 dark:bg-muted-foreground/10"
        /> */}
        <nav className="ml-14 flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/orders">
            <ListMinus className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
