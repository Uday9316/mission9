# Monad Ecosystem Explorer

An interactive frontend application showcasing all dApps and infrastructure projects in the Monad ecosystem. Built with Next.js, TypeScript, and shadcn UI.

## Features

- 🔍 **Search & Filter**: Search dApps by name, description, or category
- 🏷️ **Category Filtering**: Filter by categories (DeFi, Gaming, NFT, Social, AI, etc.)
- 📱 **Type Filtering**: Filter by type (App, Infra, App/Infra)
- 🚀 **Status Filtering**: Filter by status (Live on Testnet, Coming Soon)
- 🎨 **Modern UI**: Beautiful, responsive design with dark mode support
- ⚡ **Fast & Interactive**: Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
monad-eco/
├── app/
│   ├── page.tsx          # Main page with dApp listing
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/               # shadcn UI components
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── button.tsx
│       └── select.tsx
├── data/
│   └── dapps.ts          # dApp data
└── lib/
    └── utils.ts          # Utility functions
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn UI** - UI component library
- **Radix UI** - Accessible component primitives

## Data

The dApp data is stored in `data/dapps.ts` and includes:
- dApp name and description
- Type (App, Infra, App/Infra)
- Categories
- Status (Live on Testnet, Coming Soon)
- Only on Monad flag

## Customization

To add or modify dApps, edit the `data/dapps.ts` file. The interface is defined as:

```typescript
interface Dapp {
  id: string;
  name: string;
  description: string;
  type: "App" | "Infra" | "App/Infra";
  categories: string[];
  status: "Live on Testnet" | "Coming Soon";
  onlyOnMonad: boolean;
}
```

## License

MIT
