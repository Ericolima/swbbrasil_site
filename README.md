# SWB Brasil — site institucional

Clone melhorado do site institucional da SWB Brasil, reestruturado para hospedagem estática gratuita em:

- Netlify
- Vercel
- GitHub Pages

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Router

## Melhorias aplicadas

- Projeto totalmente independente, preparado para deploy estático em hospedagens gratuitas.
- Estrutura organizada por páginas, seções e componentes reutilizáveis.
- Conteúdo centralizado em `src/data/site-content.js`.
- Formulário com fallback para WhatsApp e suporte opcional a endpoint externo.
- SEO básico, páginas legais e artigo científico estático.
- Configuração pronta para Netlify e Vercel.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Variáveis opcionais

Crie um arquivo `.env` ou `.env.local` se quiser habilitar envio real do formulário:

```bash
VITE_CONTACT_ENDPOINT=
VITE_CONTACT_SUCCESS_MESSAGE=Recebemos sua mensagem. Nossa equipe retornará em breve.
```

### Como funciona o formulário

- Se `VITE_CONTACT_ENDPOINT` estiver configurado, o formulário faz `POST` em JSON.
- Se não estiver, ele abre o WhatsApp com a mensagem pré-formatada.

## Deploy

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Framework preset: `Vite`

### GitHub Pages
O projeto funciona em hospedagem estática pura. Para links internos sem depender de rewrite do servidor, o roteamento usa `HashRouter`.

## Ajustes rápidos de conteúdo

Edite:

- `src/data/site-content.js` → contatos, métricas, textos, especificações
- `public/artigo-swb.html` → artigo científico completo
- `public/privacy.html` e `public/terms.html` → páginas legais
