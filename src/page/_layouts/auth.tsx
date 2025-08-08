import { Outlet } from 'react-router-dom'

import imageSignin from '@/assets/imageSignin.svg'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg">
          <p className="text-2xl font-bold dark:text-amber-50">
            foo<span className="text-primary">DD</span>elivery
          </p>
        </div>
        <img src={imageSignin} alt="" />
        <footer className="text-sm"></footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
