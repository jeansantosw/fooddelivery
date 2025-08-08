import { expect, test } from '@playwright/test'

test('Navigate sign-up', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('link', {
      name: 'Fazer login',
    })
    .click()

  expect(page.url()).toContain('sign-in')
})

test('Sign-up', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Chu Mania')
  await page.getByRole('textbox', { name: 'Digite seu nome' }).fill('exemplo')
  await page
    .getByRole('textbox', { name: 'Digite seu telefone' })
    .fill('999999999')
  await page
    .getByRole('textbox', { name: 'Digite seu e-mail' })
    .fill('exemplo@exemplo.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Estabelecimento cadastrado com sucesso!')

  expect(toast).toBeVisible()
})
test('Sign-up error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('another Chu Mania')
  await page.getByRole('textbox', { name: 'Digite seu nome' }).fill('exemplo')
  await page
    .getByRole('textbox', { name: 'Digite seu telefone' })
    .fill('999999999')
  await page
    .getByRole('textbox', { name: 'Digite seu e-mail' })
    .fill('exemplo@exemplo.com')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao realizar cadastro')

  expect(toast).toBeVisible()
})
