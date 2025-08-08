import { expect, test } from '@playwright/test'

test('Sign-in', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Digite seu e-mail' })
    .fill('exemplo@exemplo.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Check seu e-mail')

  expect(toast).toBeVisible()
})

test('Log in to the app with incorrect credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Digite seu e-mail' })
    .fill('anotherexemplo@exemplo.com')

  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  expect(toast).toBeVisible()
})
