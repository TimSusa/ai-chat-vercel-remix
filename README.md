# AI Chat with Remix and Vercel AI SDK

This repository contains an AI-powered chat application built with Remix and leveraging the Vercel AI SDK. It serves as a modern chat interface where users can interact with an AI assistant, with Remix handling routing and server-side rendering (SSR), and Vercel’s AI SDK managing the communication with language models for generating responses.

## Key Features:

- Seamless AI Integration: Utilizes Vercel's AI SDK to handle AI prompts and responses effectively, creating a dynamic and responsive chat experience.

- Remix Framework: The project leverages Remix’s full-stack capabilities for fast data loading, SSR, and routing, optimizing both performance and SEO.

- User-Friendly Interface: A simple, intuitive UI allowing users to send messages and receive AI-generated responses in real-time.

- Environment Variable Support: API keys and other sensitive information are handled securely through environment variables, ensuring best practices for security.

## Project Setup

- Install Dependencies: Run

```
npm i
```

to set up dependencies.

### Environment Configuration:

Add your OpenAI API key to a .env file as OPENAI_API_KEY.

### Run the Development Server:

Use

```
npm run dev

```

to start the application in development mode.

### Ideal for:

Developers looking for a Remix and Vercel AI SDK integration example.
Projects that require real-time AI interactions with modern web frameworks.
Full-stack developers interested in combining SSR with AI capabilities in a secure, efficient setup.
Explore the code, customize as needed, and dive into building advanced, AI-driven web applications!

## Remix Documentation

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This project comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
