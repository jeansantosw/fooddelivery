import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/page/_layouts/app'
import { AuthLayout } from '@/page/_layouts/auth'
import { Dasboard } from '@/page/app/dashboard/dashboard'
import { SignIn } from '@/page/auth/sign-in/sign-in'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dasboard /> }],
  },
  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
