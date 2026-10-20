# Reactproject

Aplicação React para consultar e listar repositórios públicos do GitHub.

## Requisitos

- Node.js 22.22.2+, 24.15+ ou versão 26+.
- pnpm 11.25.0, conforme `packageManager`.

## Desenvolvimento e validação

```sh
pnpm install --frozen-lockfile
pnpm start
```

A aplicação abre em http://localhost:3000. A rota `/repository` mantém a página de detalhes inicial do projeto.

```sh
pnpm lint
pnpm format:check
pnpm test
pnpm build
pnpm audit
pnpm preview
```

Os testes verificam a listagem após uma consulta ao GitHub, o estado de carregamento, a rota existente e a configuração do cliente HTTP. O build de produção continua na pasta `build/`. O servidor que hospedar a aplicação deve redirecionar rotas da aplicação para `index.html`.

## Dependências

A compilação usa Vite e os testes usam Vitest. O cliente HTTP usa axios 1.x. React 16 e React Router 5 foram mantidos para preservar a implementação existente.

`pnpm-lock.yaml` é o único arquivo de versões travadas. Instale pelo pnpm para reproduzir a árvore auditada; não reutilize o antigo `yarn.lock` do Create React App.
