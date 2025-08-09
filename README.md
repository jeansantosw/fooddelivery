
# fooDDelivery

A aplicação é uma plataforma de gestão voltada para comércios do ramo alimentício, permitindo que proprietários administrem seus estabelecimentos de forma prática e eficiente.
Com um painel intuitivo, o usuário pode cadastrar e editar informações do negócio, acompanhar métricas de desempenho, gerenciar pedidos em tempo real e atualizar seus status de forma simples.
O sistema oferece gráficos de rendimento diário e mensal, filtros avançados para métricas e pedidos, e acesso rápido a detalhes e faturas, tornando o gerenciamento mais ágil e organizado.

![Logo](https://github.com/jeansantosw/fooddelivery/blob/main/doc/img/logo.png)

## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Background       |  #fefefe |
| Foreground       |  #09090b |
| Primary       |  #ff1f56 |
| Primary Foreground       |  #fef0f1 |
| Secondary       |  #f3f3f4 |
| Secondary Foreground       |  #17171a |
| Accent       |  #f3f3f4 |
| Accent Foreground       |  #17171a |
| Destructive       |  #e7000a |


## Autores

- [@jeansantosw](https://www.github.com/jeansantosw)


## Documentação

[Documentação](https://github.com/jeansantosw/fooddelivery/blob/main/doc/DOC.md)


## 🛠 Habilidades
Javascript, typescript, React 19, zod, react-query



## Instalação

Instale com npm

```bash
  git clone https://github.com/jeansantosw/fooddelivery.git
  cd fooddelivery
  npm install
  npm run dev
  npm run test
  npm run dev:mocks:test

```
    
## Roadmap

| Fase       | Status          | Descrição                                                          |
| ---------- | --------------- | ------------------------------------------------------------------ |
| **Fase 1** | ✅ Concluído     | Cadastro de comércio, painel básico, gestão de pedidos com status. |
| **Fase 2** | ✅ Concluído     | Dashboard com gráficos e métricas.      |
| **Fase 3** | ✅ Concluído | Detalhes do pedido, visualização da fatura, edição de perfil.      |
| **Fase 4** | ✅ Concluído     | Notificações em tempo real para atualização de pedidos.            |
| **Fase 4** | ✅ Concluído     | filtros por ID, nome e status.            |
| **Fase 5** | ⏳ Planejado     | Integração com sistemas de pagamento e gateways de entrega.        |
| **Fase 6** | ⏳ Planejado     | Aplicativo mobile para gestão fora do computador.                  |
| **Fase 7** | ⏳ Planejado     | Relatórios avançados e exportação de dados (CSV, PDF).             |
| **Fase 8** | ⏳ Planejado     | Multiusuário com permissões e níveis de acesso diferenciados.      |


## Stack utilizada

**Front-end:** 

Javascript, typescript, React 19, zod

tanstack/react-query, axios

react-hook-form, react-router-dom

playwright e2e teste, msw

tailwindcss, shadcn



## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
  npm run dev:mocks:test
  npx playwright test --ui 
```

