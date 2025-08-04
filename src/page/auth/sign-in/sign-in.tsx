import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { TSigninForm } from './types'

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSigninForm>()

  async function handleSignin(data: TSigninForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Check seu e-mail')
  }

  return (
    <div className="p-8">
      <div className="flex w-80 flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar o painel
          </h1>
          <p className="text-muted-foreground text-xs">
            Acompanhe suas vendas pelo painel!
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleSignin)}
          className="w-full space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Digite seu e-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button disabled={isSubmitting} className="mt-2 w-full" type="submit">
            Acessar painel
          </Button>
          <Button asChild className="w-full" variant="link">
            <Link to="/sign-up">Cadastrar novo estabelecimento</Link>
          </Button>
        </form>
      </div>
    </div>
  )
}
