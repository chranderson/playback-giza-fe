# Playback Giza Frontend
Frontend playback Nextjs app for Giza hackathon

[Live Demo](https://giza.playback.network)


## Getting Started

First, run the development server:

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Create production build locally
```bash
# build app
pnpm build

# run production build on localhost:3000
pnpm start

```

### Environment variables
To run locally env vars are required, create `.env.local` in the root directory, and add the following vars:   
*replace "redacted" with values*

```bash
# .env.local
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID="redacted"  
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_NAME="redacted"  
NEXT_PUBLIC_ENABLE_TESTNETS="true"
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
