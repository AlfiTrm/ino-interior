# Next.js Feature-Based Starter

A Next.js starter template organized around features rather than technical layers, promoting better separation of concerns and maintainability for medium to large applications.

## Features

- 📁 Feature-based folder structure
- 🔄 App Router for routing
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🔒 NextAuth.js for authentication
- 🧩 Reusable UI components
- 🔧 Utility functions and services

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project follows a feature-driven architecture. Learn more in the [FEATURE_DRIVEN.md](./FEATURE_DRIVEN.md) documentation.

```
src/
├── app/             # Next.js App Router pages
├── components/      # Shared UI components
├── features/        # Feature modules
│   ├── auth/        # Authentication feature
│   ├── posts/       # Posts feature
│   └── shared/      # Shared feature components
├── lib/             # Utility functions
└── types/           # Global TypeScript types
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Driven Development](https://en.wikipedia.org/wiki/Feature-driven_development)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## License

MIT

## INO Interior demo

This repository contains a frontend demo for an INO Interior company profile. Concept projects, locations, design briefs, and visual studies are fictional and must not be presented as a record of commissioned work. The project uses locally stored content and does not include a CMS or project database.

Run `npm install`, then `npm run dev`. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` for local quality checks.

The public reference photographs in `public/assets/concepts/` are listed with their photographer and source URL in `public/assets/concepts/sources.json`. They illustrate mood and material direction. Photographs in the same concept do not depict the same room. The five original illustrations in `public/assets/portfolio/` predate the current reference gallery. Their source history has not been supplied, so they remain labeled as demo visuals and should be replaced with licensed project imagery before any real business use.

`NEXT_PUBLIC_SITE_URL` enables indexable metadata and the sitemap. Without it, the demo sends `noindex` metadata and disallows crawling. `NEXT_PUBLIC_WHATSAPP_NUMBER` is optional; configure it only after confirming an INO-owned number in international format. Without it, the contact form prepares a message locally and offers a copy action.
