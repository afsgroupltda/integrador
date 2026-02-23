## Visão Geral

Um boilerplate para API backend robusta construída com Node.js, TypeScript, Fastify e Prisma. Esta API fornece um sistema básico de autenticação, tratamento de erros avançado, e uma configuração poderosa para usar as ferramentas em conjunto, seguindo as melhores práticas de desenvolvimento.

## Características

- **Autenticação Segura**: Sistema JWT com cookies HTTP-only
- **Gerenciamento de Usuários**: Cadastro e login
- **Tratamento de Erros Robusto**: Sistema centralizado com classes de erro personalizadas
- **Validação de Dados**: Validação completa usando Zod
- **Documentação API**: Swagger/OpenAPI integrado
- **Segurança Robusta**: Libs poderosas para dar segurança a API
- **Banco de Dados**: Utiliza Prisma ORM para melhorar o manuseio de banco de dados

## Tecnologias

- **Node.js**: Ambiente de execução
- **TypeScript**: Linguagem de programação tipada
- **Fastify**: Framework web de alta performance
- **Prisma**: ORM para acesso ao banco de dados
- **Zod**: Validação de esquemas
- **JWT**: Autenticação baseada em tokens
- **ESLint**: Linting de código
- **Prettier**: Formatação de código
- **Pino**: Logging estruturado

## Estrutura do Projeto

```
├── prisma/                  # Configuração do Prisma e migrações
├── src/
│   ├── @types/             # Tipos TypeScript personalizados
│   ├── config/             # Configurações da aplicação
│   ├── functions/          # manipuladores
│   ├── functions/error     # Classes e manipuladores de erro
│   ├── lib/                # Bibliotecas e utilitários
│   ├── middlewares/        # Middlewares do Fastify
│   ├── plugin/             # Plugins do Fastify e Plugins Personalizados
│   ├── routes/             # Definição de rotas
│   ├── schemas/            # Esquemas de validação Zod
│   ├── services/           # Lógica de negócios
│   ├── utils/              # Funções utilitárias
│   ├── app.ts              # Configuração da aplicação Fastify
│   └── server.ts           # Ponto de entrada da aplicação
├── .gitignore              # Arquivos ignorados pelo Git
├── .prettierrc             # Configuração do Prettier
├── eslint.config.mjs       # Configuração do ESLint
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Documentação do projeto
```

## Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Banco de dados PostgreSQL

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/vrodrigues06/API-boilerplate.git

   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/db_name"
   JWT_SECRET="seu-segredo-jwt-super-seguro"
   NODE_ENV="development"
   PORT=3333
   ```

4. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   # ou
   yarn prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Endpoints da API

### Autenticação

#### Registro de Usuário

- **URL**: `/api/auth/signup`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com",
    "password": "senha123",
    "passwordConfirm": "senha123
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "status": "success",
    "token": "jwt-token",
    "data": {
      "user": {
        "id": "uuid",
        "name": "Nome do Usuário",
        "email": "usuario@exemplo.com",
        "createdAt": "2023-01-01T00:00:00.000Z"
      }
    }
  }
  ```

#### Login

- **URL**: `/api/auth/login`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "email": "usuario@exemplo.com",
    "password": "senha123"
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "status": "success",
    "token": "jwt-token"
  }
  ```

## Sistema de Tratamento de Erros

A API implementa um sistema robusto de tratamento de erros com as seguintes classes:

- **AppError**: Classe base para todos os erros da aplicação
- **InvalidCredentials**: Erros de requisição inválida ao tentar logar na aplicação (400)
- **AlreadyExistsEmail**: Erros de conflito ao tentar criar um usuário já existente(409)
- **ValidationError**: Erros de validação de dados (400)
- **RateLimitError**: Erros ao atingir o limite de requisições (429)

Cada erro inclui:

- Mensagem descritiva
- Código de status HTTP
- Código de erro específico

## Documentação da API

A documentação completa da API está disponível através do Swagger UI em:

```
http://localhost:3333/docs
```

## Scripts Disponíveis

- **dev**: Inicia o servidor de desenvolvimento com hot-reload
- **lint**: Executa o ESLint para verificar o código

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Seu Nome - [vitorrodrigues06@outlook.com](mailto:vitorrodrigues06@outlook.com)

Link do Projeto: [https://github.com/vrodrigues06/API-boilerplate](https://github.com/vrodrigues06/API-boilerplate)
