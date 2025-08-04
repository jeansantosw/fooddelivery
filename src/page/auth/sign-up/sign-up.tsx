import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { TSignupForm } from './types'

export function SignUp() {
  // const navegate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSignupForm>()

  async function handleSignup(data: TSignupForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Estabelecimento cadastrado com sucesso!', {
        // action: {
        //   label: 'Login',
        //   onClick: () => navegate('/sign-in'),
        // },
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
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Digite seu nome</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Digite seu telefone</Label>
            <Input id="phoneNumber" type="tel" {...register('phoneNumber')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Digite seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
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
