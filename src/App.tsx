import '@/styles/global.css'

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { routes } from './router/routes'

export function App() {
  return (
    <ThemeProvider storageKey="fooddelivery-theme" defaultTheme="system">
      <Toaster richColors />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}
