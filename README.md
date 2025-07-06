# CRUD de Produtos

Aplicação desenvolvida como parte de um teste técnico de Frontend, com o objetivo de criar um sistema web completo de gerenciamento de produtos, utilizando **React 19**, **Vite** e **TypeScript**.

---

## 🚀 Deploy

Acesse o projeto publicado em produção:
[https://crud-produtos-liard.vercel.app/](https://crud-produtos-liard.vercel.app/)

---

## 📚 Sobre o Projeto

O projeto consiste em um **CRUD de Produtos** com as seguintes funcionalidades principais:

- **Login**: Página de login, para adicionar usuário e senha.
- **Listar produtos**: Exibe nome, descrição, categoria e preço.
- **Criar produto**: Formulário validado para novo cadastro.
- **Editar produto**: Edição dos dados com formulário validado.
- **Excluir produto**: Remoção de produto com confirmação por modal.

A aplicação utiliza uma **API mock** (por exemplo, [MockAPI](https://mockapi.io/)), mas pode ser adaptada facilmente para qualquer backend RESTful.

- **Login**: A tela de login utiliza a api do mockapi[https://6869635a2af1d945cea1c907.mockapi.io/api/v1/users]
- **Crud Completo**: Utiliza a api mockapi[https://6869635a2af1d945cea1c907.mockapi.io/api/v1/products]

---

## 🧰 Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/) para requisições HTTP
- [MockAPI](https://mockapi.io/) ou serviço similar para simulação dos dados
- Estilização com CSS Modules, Styled-components ou similar

---

## 📁 Estrutura de Pastas

```
CRUD-PRODUCTOS/
├── public/
│   ├── fundo.png
│   ├── logo.png
│   ├── seta para baixo.svg
│   └── vite.svg
├── src/
│   ├── api/
│   │   ├── authService.ts
│   │   └── products.ts
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Button/
│   │   ├── Delete/
│   │   ├── Header/
│   │   ├── Notification/
│   │   ├── Products/
│   │   ├── Search/
│   │   └── Table/
│   ├── constants/
│   │   ├── Categories/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Products/
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── utils/
│   │   └── getUserFromStorage.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 📝 Funcionalidades

### 1. Listagem de Produtos
- Visualização dos produtos em tabela.
- Exibição de: **Nome, Descrição, Categoria, Preço**.
- Ações rápidas para **editar** ou **excluir**.

### 2. Criar Produto
- Formulário com os campos:
  - **Nome** (obrigatório, texto não vazio)
  - **Descrição** (opcional)
  - **Preço** (obrigatório, número positivo)
  - **Categoria** (obrigatório, selecionável via autocomplete)
- Validações amigáveis.

### 3. Editar Produto
- Edição pelo mesmo formulário de criação, com preenchimento automático dos dados.

### 4. Excluir Produto
- Ação protegida por modal de confirmação antes de remover o produto.

---

## 🏗️ Como rodar localmente

1. **Clone o repositório**

```bash
  git clone https://github.com/seu-usuario/crud-produtos.git
  cd crud-produtos
```

2. **Instale as dependências**

```bash
  npm install
```

3. **Configure a API**

- Configuração da API esta no arquivo *src/services/api.ts*.

4. **Inicie o projeto**

```bash
  npm run dev
```
- Acesse em http://localhost:5173

---

## 📦 Scripts Disponíveis

- dev: Inicia o servidor de desenvolvimento

- build: Gera o build para produção

- preview: Visualiza o build localmente

- lint: (Opcional) Rodar linter

## 🌐 Deploy

- O deploy foi realizado utilizando Vercel.
-Confira em:
``` https://crud-produtos-liard.vercel.app/ ```

## 👤 Autor

- Keven Rodrigues de Aguiar