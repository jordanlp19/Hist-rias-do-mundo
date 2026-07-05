# Template React + Tailwind + Express

Estrutura base para uma aplicação web com frontend e backend separados.

## Estrutura

```txt
react-tailwind-express-template/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ services/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ index.css
│  ├─ index.html
│  ├─ package.json
│  ├─ tailwind.config.js
│  └─ vite.config.js
│
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ routes/
│  │  ├─ db/
│  │  └─ server.js
│  └─ package.json
```

## Como rodar o backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend:

```txt
http://localhost:3000
```

Teste da API:

```txt
http://localhost:3000/api/health
```

## Como rodar o frontend

Abra outro terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend:

```txt
http://localhost:5173
```

## Fluxo

```txt
React → chama a API → Express → responde JSON → React atualiza a tela
```

## Onde criar novas páginas

```txt
frontend/src/pages/
```

Depois registre a página em:

```txt
frontend/src/App.jsx
```

## Onde criar novos componentes

```txt
frontend/src/components/
```

## Onde criar novas rotas do backend

```txt
backend/src/routes/
```

## Onde colocar regras de negócio

```txt
backend/src/controllers/
```

## Banco de dados

O arquivo base está em:

```txt
backend/src/db/pool.js
```

Configure a conexão no `.env` do backend:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```
