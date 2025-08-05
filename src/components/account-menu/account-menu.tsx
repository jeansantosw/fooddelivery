import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagedCommercialStore } from '@/api/http/services/commercial-store/get-managed-commercial-store'
import { getProfile } from '@/api/http/services/profile/get-profile'

import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'
import { CommercialStoreProfileDialog } from './commercial-store-profile-dialog'

export function AccountMenu() {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const {
    data: managedCommercialStore,
    isLoading: isLoadingManagedCommercialStore,
  } = useQuery({
    queryKey: ['managed-commercial-store'],
    queryFn: getManagedCommercialStore,
    staleTime: Infinity,
  })
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            {isLoadingManagedCommercialStore ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedCommercialStore?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            <span>{profile?.name}</span>
            <span className="text-muted-foreground text-xs font-normal">
              {profile?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
            <LogOut className="mr-2 h-4 w-4 text-rose-500 dark:text-rose-400" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CommercialStoreProfileDialog />
    </Dialog>
  )
}
