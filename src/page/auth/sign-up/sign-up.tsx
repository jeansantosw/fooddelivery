import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { commercialStoreRegistration } from '@/api/http/services/auth/register'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { TSignupForm } from './types'

export function SignUp() {
  const navegate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSignupForm>()

  const { mutateAsync: commercialStoreRegistrationFn } = useMutation({
    mutationFn: commercialStoreRegistration,
  })

  async function handleSignup(data: TSignupForm) {
    try {
      await commercialStoreRegistrationFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        phone: data.phoneNumber,
        email: data.email,
      })
      toast.success('Estabelecimento cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navegate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao realizar cadastro')
    }
  }

  return (
    <div className="p-5">
      <div className="flex w-80 flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Criar conta</h1>
          <p className="text-muted-foreground text-xs">
            Seja um parceiro e comece agora!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="w-full space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              autoComplete="off"
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Digite seu nome</Label>
            <Input
              id="managerName"
              type="text"
              autoComplete="off"
              {...register('managerName')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Digite seu telefone</Label>
            <Input
              id="phoneNumber"
              autoComplete="off"
              type="tel"
              {...register('phoneNumber')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Digite seu e-mail</Label>
            <Input
              id="email"
              type="email"
              autoComplete="off"
              {...register('email')}
            />
          </div>
          <Button disabled={isSubmitting} className="w-full" type="submit">
            Finalizar cadastro
          </Button>
          <div className="flex items-center justify-center">
            <span className="text-muted-foreground text-xs">
              Já tenha cadastro
              <Button
                asChild
                className="w-19 text-xs font-semibold"
                variant="link"
              >
                <Link to="/sign-in">Fazer login</Link>
              </Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
