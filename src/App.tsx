import '@/styles/global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './http/services/react-query/react-query'
import { routes } from './router/routes'

export function App() {
  return (
    <ThemeProvider storageKey="fooddelivery-theme" defaultTheme="system">
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
