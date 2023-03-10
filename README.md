# BomdiPreço

Este documento descreve as funcionalidades, bibliotecas e ferramentas utilizadas no desenvolvimento do projeto BomdiPreço.

Versão live hosteada na vercel:

[BomdiPreço](https://bomdipreco-app.vercel.app/)

**Versão Local**

1. Para rodar local basta clonar o repositório: [Github](https://github.com/BielCoelho/bomdipreco-app)
2. instalar as dependências “npm install”
3. utilizar o comando “npm run dev”

**Funcionalidades:**

- Responsividade mobile e web
- Next api routes
- React Context Api
- Estrutura escalável
- Hooks personalizados

**Bibliotecas utilizadas:**

- Axios
- Faker.js
- Framer-motion
- Styled-components
- Swiper.js

**Framework:**

- Next 13(utilizando /src ao invés da experimental /app)

**Auxiliares:**

- TypeScript
- ESLint
- Prettier

Obs:

- Este é um app de estado, ou seja, se atualizar a pagina ele resetará
- A pagina de produto só mostra o produto clicado caso ele esteja no carrinho, se ele não estiver no carrinho é gerado aleatoriamente um produto(que pode ser adicionado ao carrinho)
