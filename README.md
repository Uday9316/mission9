# Monad Ecosystem Explorer

Monad Ecosystem Explorer is an interactive frontend application that lists and categorizes every dApp and infrastructure project built on Monad. The project leverages Next.js, TypeScript, Tailwind CSS, and shadcn UI for a modern and responsive user experience.

<img width="3018" height="1722" alt="image" src="https://github.com/user-attachments/assets/42b1a6b6-cee5-4e79-8e5e-37e69d671903" />

## Features

- Search and filter dApps by name, description, or category
- Category, type, and status-based filtering
- Responsive layout with light and dark modes
- Built for performance and usability

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

npm install
npm run dev




### Production



## Project Structure


monad-eco/
├── app/
│ ├── page.tsx # Main page with dApp listing
│ ├── layout.tsx # Root layout
│ └── globals.css # Global styles
├── components/
│ └── ui/ # shadcn UI components
│ ├── card.tsx
│ ├── badge.tsx
│ ├── input.tsx
│ ├── button.tsx
│ └── select.tsx
├── data/
│ └── dapps.ts # dApp data
└── lib/
└── utils.ts # Utility functions



## Technologies

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn UI
- Radix UI

## Data File

The dApp listing is managed in `data/dapps.ts` using the structure below:


interface Dapp {
id: string;
name: string;
description: string;
type: "App" | "Infra" | "App/Infra";
categories: string[];
status: "Live on Testnet" | "Coming Soon";
onlyOnMonad: boolean;
}


## Customization

To add or modify dApps, update `data/dapps.ts` with new entries or edits as per the interface.

## License

MIT
