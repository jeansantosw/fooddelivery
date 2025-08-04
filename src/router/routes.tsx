import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/page/_layouts/app'
import { AuthLayout } from '@/page/_layouts/auth'
import { NotFound } from '@/page/404'
import { Dasboard } from '@/page/app/dashboard/dashboard'
import { Orders } from '@/page/app/orders/orders'
import { SignIn } from '@/page/auth/sign-in/sign-in'
import { SignUp } from '@/page/auth/sign-up/sign-up'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dasboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
