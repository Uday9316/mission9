export interface Dapp {
  id: string;
  name: string;
  description: string;
  type: "App" | "Infra" | "App/Infra";
  categories: string[];
  status: "Live on Testnet" | "Coming Soon";
  onlyOnMonad: boolean;
  website?: string;
  twitter?: string;
  logo?: string; // Project logo/banner URL
}

// Protocol data is fetched from: https://github.com/monad-crypto/protocols
// To update this data, run: node scripts/fetch-protocols.js
// This will fetch all testnet protocols from the GitHub repository and update the dapps array.

// Total dapps: 303 (verified)
// To verify count, run: node scripts/verify-dapp-count.js

export const dapps: Dapp[] = [
      // 1.
  {
    id: "0x",
    name: "0x",
    description: "Swap API v2, embedded swaps in any app",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://0x.org/",
    twitter: "https://x.com/0xProject",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9106b6ca74a7001624998_0x_logo.webp",
  },
      // 2.
  {
    id: "aarna",
    name: "Aarna",
    description: "next-generation DeFi asset management platform via crypto structured products, merging AI and tokenization",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.aarna.ai/",
    twitter: "https://x.com/aarnasays",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6834a164fae7947828580000_Twitter-Logo.webp",
  },
      // 3.
  {
    id: "accountable",
    name: "Accountable",
    description: "Crypto-based yields done right. Total privacy, full transparency, maximizing your yield opportunities, worry-free.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://yield.accountable.capital/",
    twitter: "https://x.com/AccountableData",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68a7302c461b97699ee0f421_Profile%20Pic%20(7)%20(1).webp",
  },
      // 4.
  {
    id: "acurast",
    name: "Acurast",
    description: "Acurast delivers confidential AI, hyper-personalized agents, and privacy-focused computation using thousands of smartphones worldwide.",
    type: "App",
    categories: ["DePIN"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://acurast.com/",
    twitter: "https://x.com/Acurast",
    logo: "https://acurast.com/",
  },
      // 5.
  {
    id: "alldomains",
    name: "AllDomains",
    description: "All Domains: the web3 identity asset layer to create and trade web3 domains | Customizable for everyone",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monad.alldomains.id/",
    twitter: "https://x.com/AllDomains_",
    logo: "https://monad.alldomains.id/",
  },
      // 6.
  {
    id: "ambient",
    name: "Ambient",
    description: "Spot AMM with combining multiple liquidity types with modular hooks, dynamic fees and MEV protection",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monad.ambient.finance",
    twitter: "https://x.com/ambient_finance",
    logo: "https://monad.ambient.finance",
  },
      // 7.
  {
    id: "ambire_wallet",
    name: "Ambire Wallet",
    description: "Еasy and secure self-custody for smart accounts, EOAs, and hardware wallets. EIP-7702 ready wallet",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "www.ambire.com",
    twitter: "x.com/ambirewallet",
    logo: "www.ambire.com",
  },
      // 8.
  {
    id: "amertis",
    name: "Amertis",
    description: "Fully on-chain aggregator connecting users to deep liquidity across sources, ensuring best rates and an optimised DeFi experience",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.amertis.exchange",
    twitter: "https://x.com/AmertisExchange",
    logo: "https://www.amertis.exchange",
  },
      // 9.
  {
    id: "ammalgam",
    name: "Ammalgam",
    description: "Ammalgam is a new primitive that combines lending and trading into one protocol called a Decentralized Lending Exchange.",
    type: "App",
    categories: ["DeFi", "DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://ammalgam.xyz",
    twitter: "https://x.com/Ammalgam",
    logo: "https://ammalgam.xyz",
  },
      // 10.
  {
    id: "apebond",
    name: "ApeBond",
    description: "The #1 Bonding Protocol in DeFi, with $20M+ bonded and 80k+ bonds sold, transforming how projects raise funds and secure liquidity.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://ape.bond",
    twitter: "https://x.com/apebond",
    logo: "https://ape.bond",
  },
      // 11.
  {
    id: "apriori",
    name: "aPriori",
    description: "aPriori is an MEV infrastructure and liquid staking protocol, designed for the parallel execution era and natively built on Monad.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "testnet-staking.apr.io",
    twitter: "https://x.com/apr_labs",
    logo: "testnet-staking.apr.io",
  },
      // 12.
  {
    id: "atlantis",
    name: "Atlantis",
    description: "Modular V4 DEX offering cross-chain swaps, DeFAI, a launchpad, farming, staking, fiat on-ramp, & more.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://atlantisdex.xyz",
    twitter: "https://x.com/atlantisdex_xyz",
    logo: "https://atlantisdex.xyz",
  },
      // 13.
  {
    id: "ausd",
    name: "AUSD",
    description: "AUSD on Monad testnet",
    type: "App",
    categories: ["Other Apps"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://agora.finance",
    twitter: "https://x.com/withAUSD",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c620f4a0bab10af98e0508_ausd.webp",
  },
      // 14.
  {
    id: "azaar",
    name: "Azaar",
    description: "Azaar is a high-performance DEX aggregator and trading platform built for Monad.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://azaar.com/",
    twitter: "https://x.com/AzaarExchange",
    logo: "https://azaar.com/",
  },
      // 15.
  {
    id: "azex",
    name: "AZEx",
    description: "Your A-Z DeFi Hub in One Click. Trade any asset as margin with 100x leverage. Multi-Chain Protocol. AI-Powered Copytrading.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://azex.io/home",
    twitter: "https://x.com/azex_io",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67e316cec7faf77a521ebdc3_AZEX-icon-wht-background-300x300.webp",
  },
      // 16.
  {
    id: "balancer",
    name: "Balancer",
    description: "Balancer is a decentralized automated market maker (AMM) protocol built on Ethereum.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://balancer.fi/",
    twitter: "https://x.com/Balancer",
    logo: "https://balancer.fi/",
  },
      // 17.
  {
    id: "band_protocol",
    name: "Band Protocol",
    description: "Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.bandprotocol.com/",
    twitter: "https://x.com/BandProtocol",
    logo: "https://www.bandprotocol.com/",
  },
      // 18.
  {
    id: "bean_exchange",
    name: "Bean Exchange",
    description: "Bean Exchange is a fully on-chain DeFi platform natively built on Monad that delivers CEX-grade performance across Perps, Turbo Vault, and soon DLMM Spot.",
    type: "App",
    categories: ["DeFi", "DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://bean.exchange/",
    twitter: "https://x.com/Bean_DEX",
    logo: "https://bean.exchange/",
  },
      // 19.
  {
    id: "bebop",
    name: "Bebop",
    description: "Seamless and efficient crypto trading for everyone. Web3 trading app and API that finds the best route for all your trades.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://bebop.xyz/",
    twitter: "https://x.com/bebop_dex/",
    logo: "https://bebop.xyz/",
  },
      // 20.
  {
    id: "bima",
    name: "Bima",
    description: "BIMA is a DeFi platform that lets you earn yield on your BTC across multiple chains by using USBD, a Bitcoin-backed stablecoin.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://bima.money/",
    twitter: "https://x.com/bimabtc",
    logo: "https://bima.money/",
  },
      // 21.
  {
    id: "blazpay",
    name: "Blazpay",
    description: "Blazpay AI: Simplifying Crypto | 1.2M+ Users AI-Swap | Portfolio | Alerts | Cross-Chain Gamified Learning | Multi-Platform",
    type: "App/Infra",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://blazpay.com",
    twitter: "https://x.com/blazpaylabs",
    logo: "https://blazpay.com",
  },
      // 22.
  {
    id: "blocklive",
    name: "Blocklive",
    description: "Blocklive is a platform for end-to-end onchain event management and ticketing, using proof of history to target and reward fans.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://blocklive.io",
    twitter: "https://x.com/blocklive_/",
    logo: "https://blocklive.io",
  },
      // 23.
  {
    id: "castora",
    name: "Castora",
    description: "Funfair price prediction markets on monad",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://castora.xyz",
    twitter: "https://x.com/Castora_xyz",
    logo: "https://castora.xyz",
  },
      // 24.
  {
    id: "catton_ai",
    name: "Catton AI",
    description: "Catton AI, backed by Forj & Ape Accelerator, leads AI NPC gaming on Telegram with 900K users and 300k holders.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://catton.ai",
    twitter: "https://x.com/Cattontw",
    logo: "https://catton.ai",
  },
      // 25.
  {
    id: "chainlink",
    name: "Chainlink",
    description: "Chainlink is the standard for onchain finance, verifiable data, and cross-chain interoperability. Learn more by visiting chain.link.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://chain.link/",
    twitter: "https://x.com/chainlink",
    logo: "https://chain.link/",
  },
      // 26.
  {
    id: "chainsight",
    name: "Chainsight",
    description: "Chainsight redefines oracles with no-code tools, lowering costs, reducing single-operator risks, and driving scalable, open innovation",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://chainsight.network/",
    twitter: "https://x.com/Chainsight_",
    logo: "https://chainsight.network/",
  },
      // 27.
  {
    id: "chronicle",
    name: "Chronicle",
    description: "Decentralized, verifiable oracles. Chronicle connects product builders to realtime data & custom verification.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://chroniclelabs.org/",
    twitter: "https://x.com/ChronicleLabs",
    logo: "https://chroniclelabs.org/",
  },
      // 28.
  {
    id: "clober",
    name: "Clober",
    description: "Clober is a fully on-chain CLOB DEX protocol with a gas-efficient matching engine optimized for on-chain execution.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://clober.io",
    twitter: "https://x.com/CloberDEX",
    logo: "https://clober.io",
  },
      // 29.
  {
    id: "conft",
    name: "coNFT",
    description: "coNFT.app-NFT aggregator where users can create/trade NFT and register web3 domains.",
    type: "App/Infra",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://conft.app",
    twitter: "https://x.com/ConftApp",
    logo: "https://conft.app",
  },
      // 30.
  {
    id: "covenant",
    name: "Covenant",
    description: "Tradeable leverage and debt tokens backed by any asset.",
    type: "App",
    categories: ["DeFi", "DeFi", "DeFi", "DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://covenant.finance",
    twitter: "https://x.com/covenantFi",
    logo: "https://covenant.finance",
  },
      // 31.
  {
    id: "crust_finance",
    name: "Crust Finance",
    description: "Crust Finance is a metadex with concentrated liquidity and native ALM support, built on Monad.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://crust.finance",
    twitter: "https://x.com/CrustFinance",
    logo: "https://crust.finance",
  },
      // 32.
  {
    id: "crystal",
    name: "Crystal",
    description: "Crystal is a fully on-chain CLOB exchange that brings CEX-grade performance to the EVM without compromising on security or composability.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://crystal.exchange",
    twitter: "https://x.com/CrystalExch",
    logo: "https://crystal.exchange",
  },
      // 33.
  {
    id: "curvance",
    name: "Curvance",
    description: "Curvance is a multichain liquidity protocol that maximizes capital efficiency in DeFi.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.curvance.com/",
    twitter: "https://x.com/Curvance",
    logo: "https://www.curvance.com/",
  },
      // 34.
  {
    id: "cycle_network",
    name: "Cycle Network",
    description: "Cycle Network is building a universal all-chain settlement layer and a bridgeless liquidity network for the entire blockchain ecosystem.",
    type: "App/Infra",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.cyclenetwork.io/",
    twitter: "https://x.com/cyclenetwork_GO",
    logo: "https://www.cyclenetwork.io/",
  },
      // 35.
  {
    id: "dau_cards",
    name: "DAU Cards",
    description: "DAU Cards bridges your crypto to everyday spending in seconds. Our interface-agnostic platform unlocks access to 40M+ global merchants.",
    type: "App",
    categories: ["Payments"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://gmonad.daucards.com/",
    twitter: "https://x.com/DAUCards",
    logo: "https://gmonad.daucards.com/",
  },
      // 36.
  {
    id: "diffuse",
    name: "Diffuse",
    description: "Diffuse is a zk serverless protocol that delivers fast, cost-efficient, and verifiable both on/off-chain data any project needs. ",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.diffuse.fi/",
    twitter: "https://x.com/DiffuseFi",
    logo: "https://www.diffuse.fi/",
  },
      // 37.
  {
    id: "dirol_protocol",
    name: "Dirol Protocol",
    description: "Dirol is a native DeFi Hub on Monad with a full suite of DeFi features. You can do everything on Dirol.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://dex.dirol.io/swap",
    twitter: "https://x.com/DirolProtocol",
    logo: "https://dex.dirol.io/swap",
  },
      // 38.
  {
    id: "discocats",
    name: "DiscoCats",
    description: "We make locked assets liquid, offering multi-layer yield through Liquid NFTs and Bribe mechanisms with our four products.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://mydiscocats.com/",
    twitter: "https://x.com/mydiscocats",
    logo: "https://mydiscocats.com/",
  },
      // 39.
  {
    id: "doppler",
    name: "Doppler",
    description: "Doppler is an easy to integrate token creation protocol. It automates finding fair prices and getting AMMs like Uniswap bootstrapped.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://whetstone.cc/",
    twitter: "https://x.com/whetstonedotcc",
    logo: "https://whetstone.cc/",
  },
      // 40.
  {
    id: "drkvrs",
    name: "DRKVRS",
    description: "DRKVRS is a Web3 Multiplayer Action RPG game with innovative mechanics, set in a dystopian and brutalist world.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.drkvrs.io",
    twitter: "https://x.com/drkvrs",
    logo: "https://www.drkvrs.io",
  },
      // 41.
  {
    id: "dusted",
    name: "Dusted",
    description: "Connect with every community member in token-specific chat rooms, earn Dusted points, and win prizes from other Monad projects.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.dusted.app",
    twitter: "https://www.x.com/dusted_app",
    logo: "https://www.dusted.app",
  },
      // 42.
  {
    id: "dyson_finance",
    name: "Dyson Finance",
    description: "Dyson Finance makes DeFi more inclusive and profitable by combining dynamic AMM, Dual Investment, and a Membership Program.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://dyson.finance/",
    twitter: "https://x.com/DysonFinance",
    logo: "https://dyson.finance/",
  },
      // 43.
  {
    id: "enjoyoors",
    name: "Enjoyoors",
    description: "Enoyoors is a protocol that unlocks yield on any asset on any chain (starting with the Monad testnet)",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://enjoyoors.xyz",
    twitter: "https://x.com/enjoyoorsxyz",
    logo: "https://enjoyoors.xyz",
  },
      // 44.
  {
    id: "entangle",
    name: "Entangle",
    description: "Blockchains are fragmented, blocking data, liquidity/tokens. Our interoperability stack unifies Web3.",
    type: "Infra",
    categories: ["Infra", "Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://entangle.fi/",
    twitter: "https://x.com/Entanglefi",
    logo: "https://entangle.fi/",
  },
      // 45.
  {
    id: "eoracle",
    name: "eOracle",
    description: "eOracle provides decentralized price feeds through a cryptoeconomically secure oracle network.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://eo.app/",
    twitter: "https://x.com/eoracle_network",
    logo: "https://eo.app/",
  },
      // 46.
  {
    id: "euler",
    name: "Euler",
    description: "Euler revolutionizes DeFi by letting any asset become collateral for a lending market.  ",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "euler.finance",
    twitter: "https://x.com/eulerfinance/",
    logo: "euler.finance",
  },
      // 47.
  {
    id: "fastlane",
    name: "FastLane",
    description: "FastLane is an MEV protocol for validators + apps with an integrated 4337 bundler, an on-chain task scheduler, and the first holistic LST.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.shmonad.xyz/",
    twitter: "https://x.com/0xFastLane",
    logo: "https://www.shmonad.xyz/",
  },
      // 48.
  {
    id: "fiamma",
    name: "Fiamma",
    description: "Unlocking Bitcoin’s real-world use, making it a dynamic asset & foundation of a decentralized internet & finance.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://fiammalabs.io/",
    twitter: "https://x.com/fiamma_labs",
    logo: "https://fiammalabs.io/",
  },
      // 49.
  {
    id: "fizen.io",
    name: "Fizen.io",
    description: "Backed by Tether, Fizen.io provides a Wallet-based Crypto Super App Pay for everything with crypto",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://fizen.io/",
    twitter: "https://x.com/fizenapp",
    logo: "https://fizen.io/",
  },
      // 50.
  {
    id: "flap",
    name: "Flap",
    description: "The premier memecoin launchpad for trench warriors on Monad.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "monad.flap.sh",
    twitter: "https://x.com/flapdotsh",
    logo: "monad.flap.sh",
  },
      // 51.
  {
    id: "flipside_crypto",
    name: "Flipside Crypto",
    description: "Flipside orchestrates blockchain growth with data, science & community, turning onchain insights into measurable ecosystem value.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://flipsidecrypto.com",
    twitter: "https://x.com/flipsidecrypto",
    logo: "https://flipsidecrypto.com",
  },
      // 52.
  {
    id: "folks_finance",
    name: "Folks Finance",
    description: "Folks Finance offers crosschain lending, borrowing, staking and trading, building the TradFi experience on a DeFi foundation.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://folks.finance/",
    twitter: "https://x.com/FolksFinance",
    logo: "https://folks.finance/",
  },
      // 53.
  {
    id: "fortytwo",
    name: "Fortytwo",
    description: "A decentralized AI network growing smarter with each node where every computer contributes to planetary-scale limitless intelligence.",
    type: "App",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://fortytwo.network/",
    twitter: "https://x.com/fortytwonetwork",
    logo: "https://fortytwo.network/",
  },
      // 54.
  {
    id: "fuku",
    name: "FUKU",
    description: "FUKU: A DefiSaving protocol on Monad, blending savings with the excitement of betting and winning prizes without risking your deposit.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://testnet.fukunad.xyz/",
    twitter: "https://x.com/Fuku_nad",
    logo: "https://testnet.fukunad.xyz/",
  },
      // 55.
  {
    id: "garden",
    name: "Garden",
    description: "Garden is transforming Bitcoin interoperability with its next-gen bridge. It is built by the renBTC team using an intents based architecture with trustless settlement, enabling cross-chain Bitcoin swaps in as little as 30 seconds with zero custody risk.\n\nIn its first year, Garden processed over $1 billion in volume—proving the market’s demand for seamless, cost-effective Bitcoin bridging solutions.\n\nNow, Garden is unlocking a new era of interoperability—supporting non-likewise assets, external liquidity, and a wallet-friendly API—to onboard the next wave of partners and users.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://garden.finance/",
    twitter: "https://x.com/gardenfi",
    logo: "https://garden.finance/",
  },
      // 56.
  {
    id: "gasp",
    name: "Gasp",
    description: "Gasp is a cross-chain DEX for exchanging crypto across blockchains like Ethereum L2s, Solana, Bitcoin, RWA, and much more.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.gasp.xyz/",
    twitter: "https://x.com/Gasp_xyz",
    logo: "https://www.gasp.xyz/",
  },
      // 57.
  {
    id: "gelato",
    name: "Gelato",
    description: "Gelato Web3 Services bring enhanced UX to Monad's high-speed L1, enabling devs build automated apps with gasless transactions & VRF",
    type: "Infra",
    categories: ["Infra", "Infra", "Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.gelato.network/",
    twitter: "https://x.com/gelatonetwork",
    logo: "https://www.gelato.network/",
  },
      // 58.
  {
    id: "gifted.art",
    name: "Gifted.art",
    description: "Gifted.art is a email delivery platform to send any onchain",
    type: "App",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://gifted.art/",
    twitter: "https://x.com/gifteddotart",
    logo: "https://gifted.art/",
  },
      // 59.
  {
    id: "gm_agents",
    name: "GM Agents",
    description: "GM Agents is building the on-chain memory protocol for AI. We turn your interactions and knowledge into digital memories you can own, share, and earn from. Your memory, your asset.",
    type: "App",
    categories: ["AI", "AI", "AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://gmagents.ai/",
    twitter: "https://x.com/GMAgents_AI",
    logo: "https://gmagents.ai/",
  },
      // 60.
  {
    id: "golden_goose",
    name: "Golden Goose",
    description: "Golden Goose is an yield-bearing game incubated by Cycle Network that combines blind boxes, nurturing gameplay and DeFi!",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.goose.farm/",
    twitter: "https://x.com/GoldenGoose_app",
    logo: "https://www.goose.farm/",
  },
      // 61.
  {
    id: "haha_wallet",
    name: "HaHa Wallet",
    description: "Native smart wallet with DeFi automations and a community rewards system.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.haha.me",
    twitter: "https://x.com/haha_app",
    logo: "https://www.haha.me",
  },
      // 62.
  {
    id: "hashflow",
    name: "Hashflow",
    description: "Hashflow is the leading RFQ protocol that connects professional market makers and takers—powering $25B+ in volume across multiple chains.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "www.hashflow.com",
    twitter: "https://x.com/hashflow",
    logo: "www.hashflow.com",
  },
      // 63.
  {
    id: "hawk_terminal",
    name: "Hawk Terminal",
    description: "Launchpad for On-chain Builders Augmented by AI Agent.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://hawkterminal.com/",
    twitter: "https://x.com/hawkterminal_HQ",
    logo: "https://hawkterminal.com/",
  },
      // 64.
  {
    id: "hive",
    name: "Hive",
    description: "Hive is Monad's native stablecoin protocol unlocking real yield, liquidity, through native-chain collateral and active deployment",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://bhive.finance/",
    twitter: "https://x.com/bhive_finance",
    logo: "https://bhive.finance/",
  },
      // 65.
  {
    id: "hyperlane",
    name: "Hyperlane",
    description: "Hyperlane is a permissionless interoperability protocol for cross-chain message passing & asset transfers. It's fast, free, and open-source!",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://hyperlane.xyz",
    twitter: "https://x.com/hyperlane",
    logo: "https://hyperlane.xyz",
  },
      // 66.
  {
    id: "infinit",
    name: "INFINIT",
    description: "INFINIT is a DeFi abstraction layer for DeFAI, enabling permissionless creation of DeFi protocols and agents for autonomous DeFi. ",
    type: "App/Infra",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://infinit.tech/",
    twitter: "https://x.com/Infinit_Labs",
    logo: "https://infinit.tech/",
  },
      // 67.
  {
    id: "izumi_finance",
    name: "iZUMi Finance",
    description: "iZUMi Finance is a multi-chain DeFi protocol providing one-stop DEX-as-a-Service (DaaS)",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://izumi.finance/home",
    twitter: "https://x.com/izumi_Finance",
    logo: "https://izumi.finance/home",
  },
      // 68.
  {
    id: "kiloex",
    name: "KiloEx",
    description: "KiloEx is the next generation of user-friendly perpetual DEX, fully integration with LSTfi. Backed by BinanceLabs.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.kiloex.io/",
    twitter: "https://x.com/KiloEx_perp",
    logo: "https://www.kiloex.io/",
  },
      // 69.
  {
    id: "kinetk",
    name: "KINETK",
    description: "KINETK is building the IP infrastructure layer for the next generation of digital creativity, unlocking attribution, protection, and capital for creators. Through the combination of proprietary invisible watermarking, agentic AI detection and tracking, and on-chain registration, KINETK is providing the tools that will underpin the future data models of the digital landscape.",
    type: "App/Infra",
    categories: ["AI", "AI", "DeFi", "Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.kinetk.ai/",
    twitter: "https://x.com/kinetk_ai",
    logo: "https://www.kinetk.ai/",
  },
      // 70.
  {
    id: "kintsu",
    name: "Kintsu",
    description: "Kintsu is setting a new paradigm in Liquid Staking, fully native to Monad with DAO curated Validator Registry weights",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://kintsu.xyz/",
    twitter: "https://x.com/kintsu_xyz",
    logo: "https://kintsu.xyz/",
  },
      // 71.
  {
    id: "kinza_finance",
    name: "Kinza Finance",
    description: "Permissionless Lending",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://app.kinza.finance/#/",
    twitter: "https://x.com/kinzafinance",
    logo: "https://app.kinza.finance/#/",
  },
      // 72.
  {
    id: "kizzy",
    name: "Kizzy",
    description: "Kizzy is a social media betting app. Bet on how your favorite influencers and celebrities will perform on Twitter and YouTube.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://kizzy.io/",
    twitter: "https://x.com/kizzymobile",
    logo: "https://kizzy.io/",
  },
      // 73.
  {
    id: "kuru",
    name: "Kuru",
    description: "Find and trade your coins on a fully on-chain CLOB. Built for traders, powered by Monad.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://kuru.io/",
    twitter: "https://x.com/KuruExchange",
    logo: "https://kuru.io/",
  },
      // 74.
  {
    id: "layerzero",
    name: "LayerZero",
    description: "LayerZero is an omnichain interoperability protocol that enables seamless communication between different blockchains.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://layerzero.network/",
    twitter: "https://x.com/LayerZero_Core",
    logo: "https://layerzero.network/",
  },
      // 75.
  {
    id: "legends_of_elysium",
    name: "Legends of Elysium",
    description: "A fantasy strategy game that combines TCG and board game mechanics. Collect cards, build custom decks, and engage in tactical battles.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://legendsofelysium.io/",
    twitter: "https://x.com/LegendsElysium",
    logo: "https://legendsofelysium.io/",
  },
      // 76.
  {
    id: "levr.bet",
    name: "LEVR.bet",
    description: "Leverage Sports Betting with Fully Liquid Positions ",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.levr.bet",
    twitter: "https://x.com/LEVR_bet",
    logo: "https://www.levr.bet",
  },
      // 77.
  {
    id: "lfj",
    name: "LFJ",
    description: "LFJ is a DEX agg & liquidity hub that invented Liquidity Book protocol and will debut an on-chain spot order book on Monad exclusively.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://lfj.gg/",
    twitter: "https://x.com/LFJ_gg",
    logo: "https://lfj.gg/",
  },
      // 78.
  {
    id: "lombard",
    name: "Lombard",
    description: "Lombard connects Bitcoin to every chain, defi protocol, and yield opportunity via LBTC. LBTC currently has $1.9B+ in deposits.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://lombard.finance",
    twitter: "https://x.com/Lombard_Finance",
    logo: "https://lombard.finance",
  },
      // 79.
  {
    id: "lootgo",
    name: "LootGO",
    description: "LootGO is a free walk-to-earn mobile app turning your daily life into a treasure hunt for next 100x memecoins.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://lootgo.app",
    twitter: "https://x.com/lootgo_official",
    logo: "https://lootgo.app",
  },
      // 80.
  {
    id: "lootify",
    name: "Lootify",
    description: "Lootify is a lootbox platform on Monad, offering NFTs, gaming assets, and tokenized trading cards as rewards",
    type: "App/Infra",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://beta.lootify.xyz/",
    twitter: "https://x.com/Lootify_xyz",
    logo: "https://beta.lootify.xyz/",
  },
      // 81.
  {
    id: "m0narch",
    name: "M0narch",
    description: "Provably fair iGaming platform on Monad - every wager, outcome, and payout is secured on-chain",
    type: "App",
    categories: ["Consumer", "Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://m0narch.xyz",
    twitter: "https://x.com/MonadM0narch",
    logo: "https://m0narch.xyz",
  },
      // 82.
  {
    id: "mace",
    name: "Mace",
    description: "Mace is a DEX aggregator on Monad that optimizes trades by routing through AMMs, orderbooks & RFQ market makers for best execution",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.mace.ag/",
    twitter: "x.com/mace_ag",
    logo: "https://www.mace.ag/",
  },
      // 83.
  {
    id: "mach_exchange",
    name: "Mach Exchange",
    description: "Mach Exchange is a one click onboarding tool, allowing any users to instantly and securely onboard from any crypto asset on any chain.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.mach.exchange/",
    twitter: "https://x.com/mach_exchange",
    logo: "https://www.mach.exchange/",
  },
      // 84.
  {
    id: "madhouse",
    name: "Madhouse",
    description: "Experience lightning-fast 10,000 tps on Monad with Madhouse aggregator. Trade with speed, high liquidity, and madness.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://madhouse.ag/",
    twitter: "https://x.com/usemadhouse",
    logo: "https://madhouse.ag/",
  },
      // 85.
  {
    id: "magic_eden",
    name: "Magic Eden",
    description: "Magic Eden is a NFT marketplace, bringing NFT trading across chain in one easy-to-use platform ",
    type: "App",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://magiceden.io",
    twitter: "https://x.com/magiceden",
    logo: "https://magiceden.io",
  },
      // 86.
  {
    id: "magma",
    name: "Magma",
    description: "Magma is a Liquid Staking platform built on Monad",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.magmastaking.xyz/",
    twitter: "https://x.com/MagmaStaking",
    logo: "https://www.magmastaking.xyz/",
  },
      // 87.
  {
    id: "mahjong123",
    name: "Mahjong123",
    description: "Match tiles, progress through levels, boost your ranking, and get more airdrop rewards!",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monad.mahjong123.io/",
    twitter: "https://x.com/0xMJM",
    logo: "https://monad.mahjong123.io/",
  },
      // 88.
  {
    id: "mentaport",
    name: "Mentaport",
    description: "Keep your creative works safe from the internet troublemakers.",
    type: "App/Infra",
    categories: ["Infra", "NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.mentaport.com",
    twitter: "https://twitter.com/mentaportinc",
    logo: "https://www.mentaport.com",
  },
      // 89.
  {
    id: "merv",
    name: "MERV",
    description: "IP creation platform powered by AI",
    type: "App",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://merv.wtf/",
    twitter: "https://x.com/merv_wtf",
    logo: "https://merv.wtf/",
  },
      // 90.
  {
    id: "meta_leap",
    name: "Meta Leap",
    description: "Meta Leap is a plug-and-play AI Gaming solution that empowers developers to seamlessly onboard their Web2 games onto Web3 within 30 minutes.",
    type: "App/Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://metaleap.io/",
    twitter: "https://x.com/MetaLeap_io",
    logo: "https://metaleap.io/",
  },
      // 91.
  {
    id: "mintpad",
    name: "Mintpad",
    description: "We make it easy to start an NFT collection. All you need is your artwork and a cryptocurrency wallet. Our platform takes care of the rest.",
    type: "App",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://mintpad.co/",
    twitter: "https://x.com/mintpadco",
    logo: "https://mintpad.co/",
  },
      // 92.
  {
    id: "monadata_ai",
    name: "Monadata AI",
    description: "Monadata is an AI and Data Platform on Monad. Interact, Train, and Earn!",
    type: "App",
    categories: ["AI", "DePIN"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monadata.ai/",
    twitter: "https://x.com/monadata_ai",
    logo: "https://monadata.ai/",
  },
      // 93.
  {
    id: "monday_trade",
    name: "Monday Trade",
    description: "Monday Trade is Monad’s native spot DEX combining the precision of a fully on-chain order book with the simplicity of AMMs.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monday.trade/",
    twitter: "https://x.com/MondayTrade_",
    logo: "https://monday.trade/",
  },
      // 94.
  {
    id: "monorail",
    name: "Monorail",
    description: "Trade anything across Monad.  Monorail is the first aggregator to combine onchain orderbooks and AMMs to give you the best trade possible.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monorail.xyz",
    twitter: "https://x.com/monorail_xyz",
    logo: "https://monorail.xyz",
  },
      // 95.
  {
    id: "moseiki",
    name: "Moseiki",
    description: "Moseiki is Web3 Social Networking Application that merges the familiar experience of Web2 with the financial power of blockchain.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://moseiki.app/",
    twitter: "https://x.com/MoseikiApp",
    logo: "https://moseiki.app/",
  },
      // 96.
  {
    id: "mu_digital",
    name: "Mu Digital",
    description: "RWA protocol bringing Asia's Best Yields Onchain",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.mudigital.net/",
    twitter: "https://x.com/MuDigitalHQ",
    logo: "https://www.mudigital.net/",
  },
      // 97.
  {
    id: "multipli.fi",
    name: "Multipli.fi",
    description: "Multipli is a Zk based yield protocol specifically designed for making yield on traditionally non-yield bearing assets",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://multipli.fi/",
    twitter: "https://x.com/multiplifi",
    logo: "https://multipli.fi/",
  },
      // 98.
  {
    id: "nabla_finance",
    name: "Nabla Finance",
    description: "The Yield Protocol for the People. Nabla Finance is a yield protocol where the yield is generated by the hyper-efficient Nabla AMM.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.nabla.fi",
    twitter: "https://www.x.com/nablafi",
    logo: "https://www.nabla.fi",
  },
      // 99.
  {
    id: "nad.fun",
    name: "Nad.fun",
    description: "Nad.fun is a Social Memecoin Playground powered by Monad, enabling seamless token launches and trading.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://testnet.nad.fun",
    twitter: "https://x.com/naddotfun",
    logo: "https://testnet.nad.fun",
  },
      // 100.
  {
    id: "nadsmith",
    name: "NadSmith",
    description: "AI Agent OS on Monad | Tokenizing Agents & Automating Markets - built exclusively on Monad",
    type: "App",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://nadsmith.ai/",
    twitter: "https://x.com/NadSmith_",
    logo: "https://nadsmith.ai/",
  },
      // 101.
  {
    id: "narwhal_finance",
    name: "Narwhal Finance",
    description: "Narwhal Finance is an AI-driven decentralized perpetual trading platform exclusively on Monad. Backed by Jump Crypto and CMS Holdings",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://testnet.narwhal.finance/",
    twitter: "https://x.com/Narwhal_Finance",
    logo: "https://testnet.narwhal.finance/",
  },
      // 102.
  {
    id: "nfts2me",
    name: "NFTs2Me",
    description: "NFTs2Me is a user-friendly comprehensive platform to create, deploy and manage your NFT collection on Monad, 100% free.",
    type: "App",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://nfts2me.com/",
    twitter: "https://x.com/NFTs2Me",
    logo: "https://nfts2me.com/",
  },
      // 103.
  {
    id: "nitrofinance",
    name: "NitroFinance",
    description: "NitroFinance: An AMM on steroids—fusing DEX and Money Market into one pool to maximize efficiency and simplify liquidity management.",
    type: "App",
    categories: ["DeFi", "DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://nitrofinance.xyz/",
    twitter: "https://x.com/NitroFinance",
    logo: "https://nitrofinance.xyz/",
  },
      // 104.
  {
    id: "nomas_wallet",
    name: "Nomas Wallet",
    description: "Web3 Wallet Evolution Powered by AI.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://nomaswallet.com/",
    twitter: "https://x.com/NomasWallet",
    logo: "https://nomaswallet.com/",
  },
      // 105.
  {
    id: "nostra",
    name: "Nostra",
    description: "Nostra is the crypto Super App where users can lend, borrow, swap and bridge cryptocurrencies.",
    type: "App",
    categories: ["DeFi", "DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://nostra.finance/",
    twitter: "https://x.com/nostrafinance",
    logo: "https://nostra.finance/",
  },
      // 106.
  {
    id: "octoswap",
    name: "OctoSwap",
    description: "OctoSwap offers lightning-fast token swaps and capital-efficient liquidity pools with a user friendly interface.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://octo.exchange",
    twitter: "https://x.com/octoswapdex",
    logo: "https://octo.exchange",
  },
      // 107.
  {
    id: "opals",
    name: "Opals",
    description: "Opals: Kickstarter meets NFTs for projects. Buy cards → auto-launch when funded → cards claim tokens + rewards. Discover gems on Opals.io",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://opals.io/",
    twitter: "https://x.com/Opals_io",
    logo: "https://opals.io/",
  },
      // 108.
  {
    id: "open_ocean",
    name: "Open Ocean",
    description: "OpenOcean – a leading DEX aggregator on 30+ chains, with its swap API powering 180+ projects like MetaMask, Rabby, Li.Fi, and more.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://openocean.finance/",
    twitter: "https://x.com/OpenOceanGlobal",
    logo: "https://openocean.finance/",
  },
      // 109.
  {
    id: "open_sea",
    name: "Open Sea",
    description: "The largest NFT marketplace. Buy, sell, & discover the internet of goods.",
    type: "App",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://opensea.io/",
    twitter: "https://x.com/opensea",
    logo: "https://opensea.io/",
  },
      // 110.
  {
    id: "orochi_network",
    name: "Orochi Network",
    description: "Orochi Network is the world’s first Verifiable Data Infrastructure, addressing scalability, privacy, and data integrity challenges.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "http://www.orochi.network/",
    twitter: "https://x.com/OrochiNetwork",
    logo: "http://www.orochi.network/",
  },
      // 111.
  {
    id: "outpost_surge",
    name: "Outpost Surge",
    description: "A city-building society survival game on Mars. Manage resources, grow your outpost, and earn rewards.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.outpostsurge.com/",
    twitter: "https://x.com/OutpostSurge",
    logo: "https://www.outpostsurge.com/",
  },
      // 112.
  {
    id: "owlto_finance",
    name: "Owlto Finance",
    description: "Owlto Finance is an intent-centric interoperability protocol, Bridge the World with AI Agent",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://owlto.finance/",
    twitter: "https://x.com/Owlto_Finance",
    logo: "https://owlto.finance/",
  },
      // 113.
  {
    id: "pancakeswap",
    name: "PancakeSwap",
    description: "Trade and earn crypto on the all-in-one decentralized exchange. Enjoy low fees, high liquidity, and a user-friendly interface.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://pancakeswap.finance/?chain=monadTestnet",
    twitter: "https://twitter.com/PancakeSwap",
    logo: "https://pancakeswap.finance/?chain=monadTestnet",
  },
      // 114.
  {
    id: "pimlico",
    name: "Pimlico",
    description: "Pimlico is the world's most advanced ERC-4337 account abstraction infrastructure platform. Pimlico provides a suite of tools and services to help you build, deploy, and manage smart accounts on Ethereum and other EVM-compatible chains.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.pimlico.io",
    twitter: "https://x.com/pimlicoHQ",
    logo: "https://www.pimlico.io",
  },
      // 115.
  {
    id: "pingu_exchange",
    name: "Pingu Exchange",
    description: "Pingu Exchange is a fully on-chain, coin-margined Perp DEX with top-tier performance for traders of all sizes to access global markets.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://pingu.exchange/",
    twitter: "https://x.com/PinguExchange",
    logo: "https://pingu.exchange/",
  },
      // 116.
  {
    id: "plato",
    name: "Plato",
    description: "Plato is first game for eating on Monad (Eat2Earn)",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://getplato.app/",
    twitter: "https://x.com/plato2earn",
    logo: "https://getplato.app/",
  },
      // 117.
  {
    id: "play_network",
    name: "PLAY Network",
    description: "PLAY turbocharges games with crypto rails. Any game, any chain.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.theplay.network/",
    twitter: "https://x.com/0xplay_network",
    logo: "https://www.theplay.network/",
  },
      // 118.
  {
    id: "poink",
    name: "Poink",
    description: "Poink lets users interact with Web3 directly on X (Twitter), helping dapps onboard users directly from X.",
    type: "App/Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://poink.xyz/",
    twitter: "https://x.com/poinkofficial",
    logo: "https://poink.xyz/",
  },
      // 119.
  {
    id: "poply",
    name: "Poply",
    description: "Community-based NFT marketplace where anyone can generate custom NFT collections using an integrated AI engine.",
    type: "App",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://poply.xyz",
    twitter: "https://x.com/poply_xyz",
    logo: "https://poply.xyz",
  },
      // 120.
  {
    id: "primex_finance",
    name: "Primex Finance",
    description: "Primex Finance is a leveraged farming & trading protocol offering top APYs & margin trading for unlimited tokens on DEXs.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://primex.finance/",
    twitter: "https://x.com/primex_official",
    logo: "https://primex.finance/",
  },
      // 121.
  {
    id: "primus",
    name: "Primus",
    description: "Primus is a cryptographic infrastructure that enables any web data to be validated, and further to be encrypted and processed",
    type: "Infra",
    categories: ["Infra", "Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://primuslabs.xyz/",
    twitter: "https://x.com/primus_labs",
    logo: "https://primuslabs.xyz/",
  },
      // 122.
  {
    id: "proof-of-skill",
    name: "Proof-of-Skill",
    description: "A protocol to verify real-world skills along with ID & work history, enabling faster, smarter skill-based hiring",
    type: "App",
    categories: ["AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://proofofskill.org",
    twitter: "https://x.com/proofofskill",
    logo: "https://proofofskill.org",
  },
      // 123.
  {
    id: "puffer_finance",
    name: "Puffer Finance",
    description: "Puffer Finance is a leading liquid staking protocol that lets users stake $ETH, receive $pufETH, and access DeFi opportunities.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://linktr.ee/puffer_finance",
    twitter: "https://x.com/Puffer_Finance",
    logo: "https://linktr.ee/puffer_finance",
  },
      // 124.
  {
    id: "pumpbtc",
    name: "PumpBTC",
    description: "PumpBTC’s aim to allow Bitcoin holders to maximize their returns by participating in DeFi with security, scalability, and transparency.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "pumpbtc.xyz",
    twitter: "https://x.com/Pumpbtcxyz",
    logo: "pumpbtc.xyz",
  },
      // 125.
  {
    id: "purps",
    name: "Purps",
    description: "Purps: A perpetual DEX and liquidity hub on Monad, offering deep liquidity, fast trading, and support for native projects.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.purps.xyz/",
    twitter: "https://x.com/PurpsExchange",
    logo: "https://www.purps.xyz/",
  },
      // 126.
  {
    id: "pyth_network",
    name: "Pyth Network",
    description: "The price layer of the global financial market.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "pyth.network",
    twitter: "x.com/PythNetwork",
    logo: "pyth.network",
  },
      // 127.
  {
    id: "rabble",
    name: "Rabble",
    description: "Rabble is a multichain Tg client with a built-in wallet, Rabots, social questing & cross-chain support. 7K+ users, 10+ chains, 20+ agents.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.rabble.pro/",
    twitter: "https://x.com/0xRabble",
    logo: "https://www.rabble.pro/",
  },
      // 128.
  {
    id: "rarebetsports",
    name: "RareBetSports",
    description: "Building consumer sports applications powered by the RBS Oracle. Play RareLink and win up to 100x your crypto.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.rarebetsports.io/",
    twitter: "https://x.com/RareBetSports",
    logo: "https://www.rarebetsports.io/",
  },
      // 129.
  {
    id: "redbrick",
    name: "Redbrick",
    description: "Create. Play. Earn. Redbrick is a next-generation web3 gaming engine empowering creators to publish & monetize their games. Redbrick bridges the gap between Web2 & Web3, enabling users to play, earn, & create immersive experiences.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://redbrick.land",
    twitter: "https://x.com/RedbrickLand",
    logo: "https://redbrick.land",
  },
      // 130.
  {
    id: "redstone",
    name: "Redstone",
    description: "RedStone is the fastest-growing Modular Oracle, specializing in yield-bearing collateral for lending markets, such as LSTs, LRTs and BTCFi.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://redstone.finance/",
    twitter: "https://x.com/redstone_defi",
    logo: "https://redstone.finance/",
  },
      // 131.
  {
    id: "renzo",
    name: "Renzo",
    description: "Renzo simplifies restaking with AVS strategies for LRTs, supporting $ezETH, $pzETH, and $ezSOL on Ethereum & Solana.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.renzoprotocol.com/",
    twitter: "https://x.com/RenzoProtocol",
    logo: "https://www.renzoprotocol.com/",
  },
      // 132.
  {
    id: "reservoir",
    name: "Reservoir",
    description: "Reservoir is a developer platform that lets you interact with the NFT market using a single toolkit.",
    type: "App/Infra",
    categories: ["NFT"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://reservoir.tools/",
    twitter: "https://x.com/reservoir0x",
    logo: "https://reservoir.tools/",
  },
      // 133.
  {
    id: "rgbclash",
    name: "RgbClash",
    description: "Draw an nft,if players guess its name correctly it gets rewarded. Play in multiplayer lobbies and be the fastest to guess the nft names",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://rgbclash.xyz",
    twitter: "https://x.com/rgbclash_xyz",
    logo: "https://rgbclash.xyz",
  },
      // 134.
  {
    id: "rubic",
    name: "Rubic",
    description: "Rubic. Your Best Rate Finder across 90+ chains and 360+ DEXs and bridges. For users and dApps.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://rubic.exchange/",
    twitter: "https://x.com/CryptoRubic",
    logo: "https://rubic.exchange/",
  },
      // 135.
  {
    id: "rug_rumble",
    name: "Rug Rumble",
    description: "Rug Rumble is a platform gamifying the speculative memecoin landscape. Wager your memecoins, defend your banner, and win outsized returns",
    type: "App",
    categories: ["DeFi", "Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "rugrumble.xyz",
    twitter: "x.com/RugRumble",
    logo: "rugrumble.xyz",
  },
      // 136.
  {
    id: "showdown",
    name: "Showdown",
    description: "Powering competitive gaming's future on Monad. Automated tournaments & skill-based wagering for all gamers on their favorite gaming titles!",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "www.showdown.win",
    twitter: "https://x.com/showdown_gg",
    logo: "www.showdown.win",
  },
      // 137.
  {
    id: "sidekick",
    name: "sidekick",
    description: "Sidekick Protocol is a one-stop platform for asset distribution & trading. Launch, distribute, and trade assets via live streaming.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://sidekick.fans/",
    twitter: "https://x.com/Sidekick_Labs",
    logo: "https://sidekick.fans/",
  },
      // 138.
  {
    id: "skytrade",
    name: "SkyTrade",
    description: "SkyTrade lets you monetize your air rights, the legal right to use and control the space above buildings and land.",
    type: "App",
    categories: ["DeFi", "DePIN"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://sky.trade",
    twitter: "https://x.com/SkyTradeNetwork",
    logo: "https://sky.trade",
  },
      // 139.
  {
    id: "slogain",
    name: "Slogain",
    description: "Post and Bump. Content Rewards Made Easy. Everyone has a stake in the content ecosystem. Each click translates into tangible recognition.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://slogain.gg/",
    twitter: "https://x.com/SlogainDaily",
    logo: "https://slogain.gg/",
  },
      // 140.
  {
    id: "solv_protocol",
    name: "Solv Protocol",
    description: "Solv Protocol is the On-Chain Bitcoin Reserve, connecting TradFi, CeFi, and DeFi to unlock Bitcoin's $1T+ potential.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://solv.finance/",
    twitter: "https://x.com/SolvProtocol",
    logo: "https://solv.finance/",
  },
      // 141.
  {
    id: "spine_finance",
    name: "Spine Finance",
    description: "Instant, Efficient, and Flexible Fixed-Rate Money Markets.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://spine.finance/",
    twitter: "https://x.com/spineprotocol",
    logo: "https://spine.finance/",
  },
      // 142.
  {
    id: "stakestone",
    name: "StakeStone",
    description: "Omnichain liquidity infrastructure for yield-bearing assets, redistributing liquidity across chains and protocols through Liquidity Pad.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://stakestone.io/",
    twitter: "https://x.com/stake_stone",
    logo: "https://stakestone.io/",
  },
      // 143.
  {
    id: "stork",
    name: "Stork",
    description: "Stork, the fastest-growing oracle, offers over 355 real-time feeds for dApps, helping developers build Web2-level speed and efficiency.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.stork.network/",
    twitter: "https://x.com/StorkOracle",
    logo: "https://www.stork.network/",
  },
      // 144.
  {
    id: "sumer",
    name: "Sumer",
    description: "Sumer unifies correlated/non-correlated asset lending, CDP synthetics, and bridge liquidity into a capital-efficient DeFi pool",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://sumer.money/",
    twitter: "https://x.com/sumermoney",
    logo: "https://sumer.money/",
  },
      // 145.
  {
    id: "swaap",
    name: "Swaap",
    description: "Swaap is the most efficient onchain liquidity source",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.swaap.finance/",
    twitter: "https://x.com/SwaapFinance",
    logo: "https://www.swaap.finance/",
  },
      // 146.
  {
    id: "switchboard",
    name: "Switchboard",
    description: "Switchboard is the largest customizable oracle network and first oracle aggregator, helping secure nearly $1.5B in value across 10+ chains.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://switchboard.xyz",
    twitter: "https://x.com/switchboardxyz",
    logo: "https://switchboard.xyz",
  },
      // 147.
  {
    id: "t3rn",
    name: "t3rn",
    description: "t3rn executes cross-chain transactions at the protocol layer — no need for wrapping assets or trusting third-party relayers.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://t3rn.io/",
    twitter: "https://x.com/t3rn_io",
    logo: "https://t3rn.io/",
  },
      // 148.
  {
    id: "tadle",
    name: "Tadle",
    description: "Tadle is a full-stack platform offering Points trading, Missions, and Odds Marketplaces to boost engagement, liquidity, and growth.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://tadle.com/",
    twitter: "https://x.com/tadle_com",
    logo: "https://tadle.com/",
  },
      // 149.
  {
    id: "talentum",
    name: "Talentum",
    description: "Talentum is a Web3 KOL & community management platform helping projects launch risk-free, data-driven marketing campaigns with real users",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://monad.talentum.id",
    twitter: "https://x.com/TalentumID",
    logo: "https://monad.talentum.id",
  },
      // 150.
  {
    id: "tarobase",
    name: "Tarobase",
    description: "Build on-chain apps with Tarobase—from Venmo & Pump.fun clones to endless possibilities—without writing smart contracts.",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://tarobase.com",
    twitter: "https://x.com/0xtarobase",
    logo: "https://tarobase.com",
  },
      // 151.
  {
    id: "tezza_poker",
    name: "Tezza Poker",
    description: "Play, win, mint. Tezza Poker lets you compete free, earn Points, and claim NFTs—pure skill, real rewards.",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://t.me/playtezzapoker_bot",
    twitter: "x.com/tezzapoker",
    logo: "https://t.me/playtezzapoker_bot",
  },
      // 152.
  {
    id: "the_vape_labs",
    name: "The Vape Labs",
    description: "The Vape Labs pioneers DePIN x Vape2Earn with AI-powered smart vapes, rewarding users and providing anonymized data for public health",
    type: "App",
    categories: ["DePIN"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://thevapelabs.io/",
    twitter: "https://x.com/thevapelabs",
    logo: "https://thevapelabs.io/",
  },
      // 153.
  {
    id: "timeswap",
    name: "Timeswap",
    description: "\"Timeswap is the first oracleless lending/borrowing protocol — enabling the creation of money markets for ANY ERC20 tokens.\n\n\"",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://timeswap.io/",
    twitter: "https://x.com/TimeswapLabs",
    logo: "https://timeswap.io/",
  },
      // 154.
  {
    id: "tread.fi",
    name: "tread.fi",
    description: "Exchange aggregator and algorithmic trading platform, standardizing and elevating institutional and retail trading experiences.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "www.tread.fi",
    twitter: "https://x.com/tread_fi",
    logo: "www.tread.fi",
  },
      // 155.
  {
    id: "uniswap",
    name: "Uniswap",
    description: "The largest onchain marketplace. Buy and sell crypto on Ethereum and 11+ other chains.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://app.uniswap.org/",
    twitter: "https://x.com/Uniswap",
    logo: "https://app.uniswap.org/",
  },
      // 156.
  {
    id: "uniswap_wallet",
    name: "Uniswap Wallet",
    description: "The Uniswap Wallet is self-custody crypto wallet built for swapping. It lets you buy crypto, browse NFTs, explore Web3 apps, and swap tokens",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "wallet.uniswap.org",
    twitter: "https://x.com/Uniswap",
    logo: "wallet.uniswap.org",
  },
      // 157.
  {
    id: "valor_quest",
    name: "Valor Quest",
    description: "The No.1 Mythic-themed AFK game on Telegram with NFTs, mining, and epic battles to earn airdrops!",
    type: "App",
    categories: ["Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://t.me/ValorQuestBot",
    twitter: "https://x.com/valorquestgame",
    logo: "https://t.me/ValorQuestBot",
  },
      // 158.
  {
    id: "wormhole",
    name: "Wormhole",
    description: "Wormhole is a generic message-passing protocol designed to enable secure and efficient communication between different blockchains. ",
    type: "Infra",
    categories: ["Infra"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://wormhole.com/",
    twitter: "https://x.com/wormhole",
    logo: "https://wormhole.com/",
  },
      // 159.
  {
    id: "xl",
    name: "XL",
    description: "XL is a memecoin launchpad enabling easy, low-cost token creation across various networks.",
    type: "App",
    categories: ["DeFi", "DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "xlmeme.com",
    twitter: "https://x.com/XLmemeCom",
    logo: "xlmeme.com",
  },
      // 160.
  {
    id: "yamata",
    name: "Yamata",
    description: "Yamata empowers traders with blazing CLOBs, advanced order types, and a simple, self-custodial on-chain experience. Trade without trade-offs",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://yamata.io",
    twitter: "https://x.com/YamataExchange",
    logo: "https://yamata.io",
  },
      // 161.
  {
    id: "yieldkingz",
    name: "YieldKingZ",
    description: "YieldKingZ: A Web3 Game-Fi casino featuring yield farming, sustainable tokenomics, and Club-Fi for community-driven finance.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://test-monad.yieldkingz.io/",
    twitter: "https://x.com/yieldkingz",
    logo: "https://test-monad.yieldkingz.io/",
  },
      // 162.
  {
    id: "zapry",
    name: "Zapry",
    description: "Zapry is a one-stop web3 entrance that incubates viral trends and offers one-step crypto transfers.",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.zapry.net/",
    twitter: "https://x.com/0xZapry",
    logo: "https://www.zapry.net/",
  },
      // 163.
  {
    id: "zona",
    name: "Zona",
    description: "Zona is building scalable infra for composable RWA tokens. We let users mint, speculate, and earn yield on real estate Index Tokens.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.zona.finance/",
    twitter: "https://x.com/zona_io",
    logo: "https://www.zona.finance/",},
      // 164.
  {
    id: "across-protocol",
    name: "Across Protocol",
    description: "Across Protocol on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e035994e3c2ccadb2a907a_X-Logo.webp",
  },
      // 165.
  {
    id: "aethonswap",
    name: "AethonSwap",
    description: "AethonSwap is a CLAMM V4 DEX combining next-gen tech with intelligent design, for low-slippage trading & efficient liquidity management",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.aethonswap.com/",
    twitter: "https://x.com/AethonSwap",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e0395d301c8d49539f8fed_AethonSwap-icon-Twitter-1-2-.webp",
  },
      // 166.
  {
    id: "alchemy",
    name: "Alchemy",
    description: "Alchemy's end-to-end platform gives devs everything to build and scale web3 apps - from APIs to monitoring, across multiple chains.",
    type: "Infra",
    categories: ["Dev Tooling","RPC","Indexer"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://alchemy.com",
    twitter: "https://x.com/Alchemy",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910dc1f770571ff122b0c_Alchemy_logo.webp",
  },
      // 167.
  {
    id: "allium",
    name: "Allium",
    description: "Allium delivers blockchain data for analytics, applications, and accounting use cases via dashboards, APIs, datashares, and data streams.",
    type: "Infra",
    categories: ["Analytics","Indexer","Dev Tooling"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.allium.so/",
    twitter: "https://x.com/AlliumLabs",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b910eaea5cc3512a8a1b8f_Allium_logo.webp",
  },
      // 168.
  {
    id: "atomic-wallet",
    name: "Atomic Wallet",
    description: "Manage, exchange, and stake 1000+ assets securely on desktop & mobile.",
    type: "Infra",
    categories: ["Wallet"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://atomicwallet.io/",
    twitter: "https://x.com/atomicwallet",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6806075774f1032f79627b16_c5FE7avh_400x400.webp",
  },
      // 169.
  {
    id: "backpack-wallet",
    name: "Backpack Wallet",
    description: "Backpack is a next-level wallet and exchange. Buy tokens, trade futures, and explore on-chain apps—seamlessly and securely. 🎒",
    type: "Infra",
    categories: ["Wallet"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://backpack.app/",
    twitter: "https://x.com/Backpack",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91182d6f6cc072b1dbb7e_Backpack%20Wallet_logo.webp",
  },
      // 170.
  {
    id: "biconomy",
    name: "Biconomy",
    description: "Biconomy helps devs build user-friendly dApps with modular tools. Our stack powers 300+ dApps & 50M+ transactions, accelerating adoption.",
    type: "Infra",
    categories: ["Account Abstraction"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "http://biconomy.io",
    twitter: "https://x.com/biconomy",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911a9dec63edfce3e07fb_Biconomy_logo.webp",
  },
      // 171.
  {
    id: "birdeye",
    name: "Birdeye",
    description: "The all-in-one trading data tool for alpha traders: real-time charts, smart money flows, gems & historical data across 300+ exchanges.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://birdeye.so/",
    twitter: "https://x.com/birdeye_so",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4da7d3625a521dd18a_Group-17.webp",
  },
      // 172.
  {
    id: "birdeye-data-services",
    name: "Birdeye Data Services",
    description: "High-performance onchain data provider with real-time, accurate data across tokens, wallets & protocols.",
    type: "Infra",
    categories: ["Indexer","Analytics","Cross-Chain"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://bds.birdeye.so/",
    twitter: "https://x.com/birdeye_data",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4d2971afdf6a18ab24_Group-18.webp",
  },
      // 173.
  {
    id: "bitget-wallet",
    name: "Bitget Wallet",
    description: "Bitget Wallet is a non-custodial wallet with advanced multi-chain capabilities and a powerful swap function.",
    type: "Infra",
    categories: ["Wallet"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://web3.bitget.com/en?source=bitget",
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911c2bfbd83279f12cf05_Bitget%20Wallet_logo.webp",
  },
      // 174.
  {
    id: "blockstreet",
    name: "BlockStreet",
    description: "Unified liquidity layer for tokenized equities - delivering secure settlement, deep liquidity, and institutional-grade efficiency.",
    type: "Infra",
    categories: ["Other Infra"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://blockstreet.money/",
    twitter: "https://x.com/blockst_hq",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be38a9f4a238e4ca802_monad-logo-400_400.webp",
  },
      // 175.
  {
    id: "blockvision",
    name: "BlockVision",
    description: "BlockVision provides blockchain infrastructure services, offering APIs, RPC services to empower developers and users alike.",
    type: "Infra",
    categories: ["Indexer","Analytics"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://blockvision.org/",
    twitter: "https://x.com/blockvisionhq",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911e5ebe3a25cc1bc45a5_BlockVision_logo.webp",
  },
      // 176.
  {
    id: "blockdaemon",
    name: "Blockdaemon",
    description: "Blockdaemon provides enterprise-grade web3 infrastructure, including dedicated nodes, APIs, staking, liquid staking, MPC wallets, and more.",
    type: "Infra",
    categories: ["RPC"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.blockdaemon.com/",
    twitter: "https://x.com/BlockdaemonHQ",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b911f1b0307a90b7b20ade_Blockdaemon_logo.webp",
  },
      // 177.
  {
    id: "breath-of-estova",
    name: "Breath of Estova",
    description: "Breath of Estova is a play-to-earn 2D action-based MMORPG where classic nostalgia meets a vast open world.",
    type: "App",
    categories: ["Gaming"],
    status: "Coming Soon",
    onlyOnMonad: true,
    website: "https://www.breathofestova.com/",
    twitter: "https://x.com/BreathOfEstova",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816c09a34ff481b1be028_estova%20logo%20_400x400.webp",
  },
      // 178.
  {
    id: "bybit-web3-wallet",
    name: "Bybit Web3 Wallet",
    description: "Bybit Web3 is your gateway to Web3. Explore DeFi offerings, and trade thousands of tokens across various networks.",
    type: "Infra",
    categories: ["Wallet"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.bybit.com/en/web3",
    twitter: "https://x.com/Bybit_Web3",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912533b92e175eb004a8c_Bybit%20Web3%20Wallet_logo.webp",
  },
      // 179.
  {
    id: "cplx",
    name: "CPLX",
    description: "Institutional-grade DeFi derivatives exchange. Unified liquidity pools & pioneering RWA products. Built by TradFi exchange pioneers.",
    type: "App",
    categories: ["DeFi","RWA"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://cplx.io",
    twitter: "https://x.com/cplx_io",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a7a1418a2a81fc351_x_logo_4.webp",
  },
      // 180.
  {
    id: "cult",
    name: "CULT",
    description: "Cult is where culture meets crypto. A new reputation system rewards loyalty for holders, tokens, and creators alike.",
    type: "App",
    categories: ["Social","DeFi","AI"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://www.cult.trade/",
    twitter: "https://x.com/cultdottrade",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/688e9f8173066eb8c97da18d_cult%20logo%20.webp",
  },
      // 181.
  {
    id: "caddy-finance",
    name: "Caddy Finance",
    description: "Building Bitcoin yield vaults for retail, aggregated retail liquidity for institutional yields.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://caddy.finance/",
    twitter: "https://x.com/caddyfi",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9125febe3a25cc1bc990d_Caddy%20Finance_logo.webp",
  },
      // 182.
  {
    id: "capa",
    name: "Capa",
    description: "Capa connects LATAM to global finance. It simplifies global payments, enabling companies to move money across borders via stablecoins.",
    type: "Infra",
    categories: ["Onramp","Stablecoin"],
    status: "Coming Soon",
    onlyOnMonad: false,
    website: "https://capa.fi/",
    twitter: "https://x.com/capa_fi",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68bb689f48ab3c3dcc9c43ff_capa%20logo.webp",
  },
      // 183.
  {
    id: "celeris",
    name: "Celeris",
    description: "Celeris is the first fully on-chain orderbook Perps++ DEX that is fully permissionless with ultra-low latency & parallelized liquidity.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://celeris.exchange",
    twitter: "https://x.com/0xCeleris",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135bff21aa78233f1aa0_IMG_20250624_015425_464.webp",
  },
      // 184.
  {
    id: "chainbase",
    name: "Chainbase",
    description: "Chainbase enables AI-era data interoperability and access with a decentralized, composable, and incentivized economy.",
    type: "Infra",
    categories: ["Dev Tooling","Analytics","Cross-Chain"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://chainbase.com/",
    twitter: "https://twitter.com/ChainbaseHQ",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9129b442716854f208d19_Chainbase_logo.webp",
  },
      // 185.
  {
    id: "codex",
    name: "Codex",
    description: "The Codex API provides fast and accurate enriched data, meticulously structured to easily plug straight into your application.",
    type: "Infra",
    categories: ["Indexer","Dev Tooling","Analytics"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.codex.io",
    twitter: "https://x.com/trycodex",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912df3b92e175eb00c2f8_Codex_logo.webp",
  },
      // 186.
  {
    id: "coin98-ai-wallet",
    name: "Coin98 AI Wallet",
    description: "Crypto Messenger & AI Wallet. Everyone's Gateway to The Open Internet.",
    type: "Infra",
    categories: ["AI","Wallet"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://coin98.com/",
    twitter: "https://x.com/coin98_wallet",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b912eaf20a63404b11b01c_Coin98%20AI%20Wallet_logo.webp",
  },
      // 187.
  {
    id: "cult-markets",
    name: "Cult Markets",
    description: "Gamified omnichain NFT marketplace powering dynamic drops, collectibles, and interactive shard-based campaigns.",
    type: "App",
    categories: ["NFT","Social","Gaming"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://testnet.cultmarkets.com/",
    twitter: "https://x.com/cultmarkets",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6847444702a242ed322515e4_cultL.webp",
  },
      // 188.
  {
    id: "cyferio",
    name: "Cyferio",
    description: "Award-winning Cyferio Hub offers modular FHE rollup tech for confidential, scalable blockchain computing and privacy-preserving apps.",
    type: "Infra",
    categories: ["Privacy","Zero-Knowledge"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://cyferio.com",
    twitter: "https://x.com/cyferio_labs",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91393ebe3a25cc1be0cc4_Cyferio_logo.webp",
  },
      // 189.
  {
    id: "drpc",
    name: "DRPC",
    description: "dRPC is an off-chain routing protocol for delivering reliable API infrastructure leveraging a distributed network of nodes.",
    type: "Infra",
    categories: ["RPC"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://drpc.org",
    twitter: "https://x.com/drpcorg",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913b7b9188e59b9a50568_DRPC_logo.webp",
  },
      // 190.
  {
    id: "dashx",
    name: "DashX",
    description: "DashX: One-click payments for everything. A DeFi platform with the fastest cross-chain transactions, ramps, and rewards!",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://dashx.xyz",
    twitter: "https://x.com/dashxhq",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebd535f9f62cdf559f308_dashx%20logo.webp",
  },
      // 191.
  {
    id: "defined",
    name: "Defined",
    description: "Defined is the fastest charting platform serving 70+ networks and 25+ million tokens.",
    type: "Infra",
    categories: ["Analytics"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://defined.fi",
    twitter: "https://x.com/definedfi",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913c47f3041834a5454df_Defined_logo.webp",
  },
      // 192.
  {
    id: "demask-finance",
    name: "Demask Finance",
    description: "Demask Finance is an on-chain AMM protocol that enables trading between NFT collectibles and native tokens.",
    type: "App",
    categories: ["NFT","DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://demask.finance/",
    twitter: "https://x.com/demaskfinance",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913d97f3041834a54624e_Demask%20Finance_logo.webp",
  },
      // 193.
  {
    id: "dialect",
    name: "Dialect",
    description: "A toolkit to integrate onchain experiences into your app, instantly.",
    type: "Infra",
    categories: ["Other Infra"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "http://www.dialect.to",
    twitter: "http://www.x.com/saydialect",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b913e4c3ad7da1ddf1c27c_Dialect_logo.webp",
  },
      // 194.
  {
    id: "drake",
    name: "Drake",
    description: "Drake's hybrid CLOB unlocks CEX speed, DEX transparency, and frictionless yields, resulting in what matters most: perps that feel right",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: true,
    website: "https://drake.exchange/",
    twitter: "https://x.com/DrakeExchange",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6847444575685e46bfbc9a83_400x400-1-.webp",
  },
      // 195.
  {
    id: "dune",
    name: "Dune",
    description: "Dune is the leading data platform for onchain data, empowering users to query, visualize, and build across 90+ blockchains.",
    type: "Infra",
    categories: ["Analytics","Dev Tooling"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "http://dune.com/home",
    twitter: "https://x.com/Dune",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91412f9180e8745b286a5_Dune_logo.webp",
  },
      // 196.
  {
    id: "dynamic",
    name: "Dynamic",
    description: "Dynamic combines authentication, smart wallets, and secure key management into one flexible SDK.",
    type: "Infra",
    categories: ["Account Abstraction"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.dynamic.xyz/",
    twitter: "https://x.com/dynamic_xyz",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91426859d08f0b8d76748_Dynamic_logo.webp",
  },
      // 197.
  {
    id: "elfi",
    name: "ELFi",
    description: "ELFi is the first DEX with ultra portfolio margin & zero-risk stablecoin pool. No KYC. $0.62B volume, 32K users, up to 1000x leverage.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.elfi.xyz/",
    twitter: "https://x.com/ELFiProtocol",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68474446020515eb7453f848_logo.webp",
  },
      // 198.
  {
    id: "eisen-finance",
    name: "Eisen Finance",
    description: "Eisen is a multichain DEX aggregator expanding with V2 to unify CEX/DEX spot & derivatives for advanced DeFi strategies.",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://eisenfinance.com/",
    twitter: "https://x.com/EisenLabs",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6893bd214907ffb0bd6905ae_Eisen_Symbol.webp",
  },
      // 199.
  {
    id: "envio",
    name: "Envio",
    description: "Envio is a modern, multi-chain EVM blockchain indexer for querying real-time and historical data.",
    type: "Infra",
    categories: ["Indexer","Dev Tooling","Analytics"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://envio.dev/",
    twitter: "https://x.com/envio_indexer",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91462c1a6a111c71df6fd_Envio_logo.webp",
  },
      // 200.
  {
    id: "euclid-protocol",
    name: "Euclid Protocol",
    description: "Euclid is the first liquidity consensus layer, letting any dApp instantly access liquidity from 50+ networks—no bridging needed.",
    type: "Infra",
    categories: ["Dev Tooling","Analytics"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.euclidprotocol.io/",
    twitter: "https://x.com/EuclidProtocol",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883f9e5ab45980310bb5983_euclid%20logo%20.webp",
  },
      // 201.
  {
    id: "fwx",
    name: "FWX",
    description: "FWX: Permissionless leverage trading on DEX. Add any token, create a lending pool, and margin trade. Lenders are protected via hedging.",
    type: "App",
    categories: ["DeFi","Prediction Market"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://fwx.finance",
    twitter: "https://x.com/fwxfinance",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6847444652fc2d7b6454b30f_fwx-logo.webp",
  },
      // 202.
  {
    id: "fans3-ai",
    name: "Fans3 AI",
    description: "Fans3 AI on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68782bc80d889748856753b5_fan3%20logo%20DZcQNjA2_400x400.webp",
  },
      // 203.
  {
    id: "farcaster",
    name: "Farcaster",
    description: "Farcaster is a decentralized social app that has an embedded wallet and mini apps that support Monad",
    type: "App",
    categories: ["Social"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "http://farcaster.xyz/",
    twitter: "https://x.com/farcaster_xyz",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31c7002016d7f174e41_fc.webp",
  },
      // 204.
  {
    id: "fonbnk",
    name: "Fonbnk",
    description: "Fonbnk links cash-based, mobile-first economies to Web3 by converting prepaid payments into stablecoins for instant global access.",
    type: "Infra",
    categories: ["Onramp","Stablecoin","Cross-Chain"],
    status: "Coming Soon",
    onlyOnMonad: false,
    website: "https://www.fonbnk.com/",
    twitter: "https://x.com/fonbnk1",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be3d17aa8667581bcf4_fonbnk_logo_400x400.webp",
  },
      // 205.
  {
    id: "foxwallet",
    name: "FoxWallet",
    description: "Leading multi-chain mobile and extension wallet solution that seamlessly integrates with major blockchains.",
    type: "Infra",
    categories: ["Wallet"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://foxwallet.com/en",
    twitter: "https://twitter.com/FoxWallet",
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c5b61ab3ee66b95f4d_FoxWallet-logo-976d5ab2d790ac1b34faff49589007f8.webp",
  },
      // 206.
  {
    id: "gateway",
    name: "Gateway",
    description: "Gateway on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91506e21ffe4d1051b443_Gateway_logo.webp",
  },
      // 207.
  {
    id: "gearbox-protocol",
    name: "Gearbox Protocol",
    description: "Gearbox Protocol on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4cbcdd9c8e6c15073a_ISu5WSUS_400x400.webp",
  },
      // 208.
  {
    id: "ghost",
    name: "Ghost",
    description: "Ghost on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91518fc64a6c6e43ab1b3_Ghost_logo.webp",
  },
      // 209.
  {
    id: "goplus",
    name: "GoPlus",
    description: "GoPlus on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9152e89130464ea40fe38_GoPlus_logo.webp",
  },
      // 210.
  {
    id: "goldrush-by-covalent",
    name: "GoldRush by Covalent",
    description: "GoldRush by Covalent on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9153489130464ea41015c_GoldRush%20by%20Covalent_logo.webp",
  },
      // 211.
  {
    id: "goldsky",
    name: "Goldsky",
    description: "Goldsky on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9154c5075b90f1688042c_Goldsky_logo.webp",
  },
      // 212.
  {
    id: "gorillionaire",
    name: "Gorillionaire",
    description: "Gorillionaire on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68474cae0b197901e1e48b23_gorillionaire%20logo.webp",
  },
      // 213.
  {
    id: "hemera",
    name: "Hemera",
    description: "Hemera on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9157cf9180e8745b35b41_Hemera_logo.webp",
  },
      // 214.
  {
    id: "henry-labs",
    name: "Henry Labs",
    description: "Henry Labs on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816eba60be7a1995ef6ee_henry%20logo%20.webp",
  },
      // 215.
  {
    id: "impossible-finance",
    name: "Impossible Finance",
    description: "Impossible Finance on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915a173996311554d8205_Impossible%20Finance_logo.webp",
  },
      // 216.
  {
    id: "index-network",
    name: "Index Network",
    description: "Index Network on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68d6e931940f75ea0a8764e7_Frame-777.webp",
  },
      // 217.
  {
    id: "jenius",
    name: "Jenius",
    description: "Jenius on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e319c7dc648610d7a0d4_jenius1.webp",
  },
      // 218.
  {
    id: "jumper-exchange",
    name: "Jumper Exchange",
    description: "Jumper Exchange on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a6e033a4712c4c3743_Jump_-_PFP.webp",
  },
      // 219.
  {
    id: "kansei",
    name: "Kansei",
    description: "Kansei on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb780461d68370d63b7bd_Twitter-header---13.webp",
  },
      // 220.
  {
    id: "kingdomly",
    name: "Kingdomly",
    description: "Kingdomly on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883ea2d90ec8f542c785833_kingdom%20logo.webp",
  },
      // 221.
  {
    id: "kodeus-ai",
    name: "Kodeus AI",
    description: "Kodeus AI on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb77ff5972224015058a3_kodeus-favicon-white.webp",
  },
      // 222.
  {
    id: "koywe",
    name: "Koywe",
    description: "Koywe on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be38a9f4a238e4ca7eb_Koywe_Icon_400x400_koywe.webp",
  },
      // 223.
  {
    id: "kucoin-web3-wallet",
    name: "KuCoin Web3 Wallet",
    description: "KuCoin Web3 Wallet on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b915e211a6f5896679ee94_KuCoin%20Web3%20Wallet_logo.webp",
  },
      // 224.
  {
    id: "lagoon",
    name: "LAGOON",
    description: "LAGOON on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687546f428ab754a943f12cb_Logo_LAGOON_400x400-pixels.webp",
  },
      // 225.
  {
    id: "li-fi",
    name: "LI.FI",
    description: "LI.FI on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb780e6d195deeeed6da7_lifi_pfp.webp",
  },
      // 226.
  {
    id: "layerhub",
    name: "Layerhub",
    description: "Layerhub on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4cc576152375cc74ac_group_1000002444_1x.webp",
  },
      // 227.
  {
    id: "leap-wallet",
    name: "Leap Wallet",
    description: "Leap Wallet on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91613d821392f193e089c_Leap%20Wallet_logo.webp",
  },
      // 228.
  {
    id: "leverup",
    name: "LeverUp",
    description: "LeverUp on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a6e79a1b8bcd68fa36_logo-400x400.webp",
  },
      // 229.
  {
    id: "likwid",
    name: "Likwid",
    description: "Likwid on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863141eff21aa78233f7caa_liqd%20logo%20.webp",
  },
      // 230.
  {
    id: "lumiterra",
    name: "Lumiterra",
    description: "Lumiterra on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/689f814d36a7d97c9a6b7bd8_logo.webp",
  },
      // 231.
  {
    id: "memesteroid",
    name: "Memesteroid",
    description: "Memesteroid on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4d753f1c7638402824_logo-eco.webp",
  },
      // 232.
  {
    id: "meow-finance",
    name: "Meow Finance",
    description: "Meow Finance on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31d5763deb46e176906_MeowFi-Logo-400x400-black-1-.webp",
  },
      // 233.
  {
    id: "metakeep",
    name: "MetaKeep",
    description: "MetaKeep on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b916858330a99a870f5bdc_MetaKeep_logo.webp",
  },
      // 234.
  {
    id: "mflo",
    name: "Mflo",
    description: "Mflo on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68d6e931832086d684a61615_Mflo_logo_400x.webp",
  },
      // 235.
  {
    id: "mindagentsai",
    name: "MindAgentsAI",
    description: "MindAgentsAI on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e96f51ceca150235bab079_IMG_8830.jpeg",
  },
      // 236.
  {
    id: "mobula",
    name: "Mobula",
    description: "Mobula on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9169686bf1f948b427b62_Mobula_logo.webp",
  },
      // 237.
  {
    id: "monadexplorer-by-blockvision",
    name: "MonadExplorer by BlockVision",
    description: "MonadExplorer by BlockVision on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b916a989130464ea421461_MonadExplorer%20by%20BlockVision_logo.webp",
  },
      // 238.
  {
    id: "morpheus",
    name: "Morpheus",
    description: "Morpheus on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135aaa23b039d89be2e6_logo-full-k.webp",
  },
      // 239.
  {
    id: "mozi",
    name: "Mozi",
    description: "Mozi on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91713c0e02b5b7bf17fa6_Mozi_logo.webp",
  },
      // 240.
  {
    id: "multisynq",
    name: "Multisynq",
    description: "Multisynq on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878165ed21cf891079ce3c7_multisynq%20logo%20kxXecY0r_400x400.webp",
  },
      // 241.
  {
    id: "nadsa",
    name: "NADSA",
    description: "NADSA on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68b20be49797d18c63a72c2f_nadsa-logo.webp",
  },
      // 242.
  {
    id: "nxtchain",
    name: "NXTchain",
    description: "NXTchain on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68f69b4c2914de7af9a367b0_NXTchain_Monad_LOGO.webp",
  },
      // 243.
  {
    id: "narrative",
    name: "Narrative",
    description: "Narrative on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68965da65527ff3384f1c059_narrative%206R7oJYe6_400x400.webp",
  },
      // 244.
  {
    id: "neverland",
    name: "Neverland",
    description: "Neverland on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68d6e9319f6a7484c5ec014c_nvr_logo.webp",
  },
      // 245.
  {
    id: "nillion",
    name: "Nillion",
    description: "Nillion on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9177f779fac86351cf9da_Nillion_logo.webp",
  },
      // 246.
  {
    id: "nitro-by-router-protocol",
    name: "Nitro by Router Protocol",
    description: "Nitro by Router Protocol on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9178c02389168368647c9_Nitro%20by%20Router%20Protocol_logo.webp",
  },
      // 247.
  {
    id: "notifi",
    name: "Notifi",
    description: "Notifi on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917b1d9acff4898218bb3_Notifi_logo.webp",
  },
      // 248.
  {
    id: "noves",
    name: "Noves",
    description: "Noves on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a3cf8aec80270f6e0_noves-logo.webp",
  },
      // 249.
  {
    id: "nubila",
    name: "Nubila",
    description: "Nubila on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e035995a5f630974e62baa_nubila_logo_400-400.webp",
  },
      // 250.
  {
    id: "nunchi",
    name: "Nunchi",
    description: "Nunchi on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68ceb77f687b9b48c01abe3c_nunchi_logo_400x400.webp",
  },
      // 251.
  {
    id: "okx-explorer",
    name: "OKX Explorer",
    description: "OKX Explorer on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917bcd9acff4898219311_OKX%20Explorer_logo.webp",
  },
      // 252.
  {
    id: "okx-wallet",
    name: "OKX Wallet",
    description: "OKX Wallet on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917c5d052009891789dd4_OKX%20Wallet_logo.webp",
  },
      // 253.
  {
    id: "osl-pay",
    name: "OSL Pay",
    description: "OSL Pay on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a61a4eecacc687e166_D_h84D3s_400x400.webp",
  },
      // 254.
  {
    id: "omnia",
    name: "Omnia",
    description: "Omnia on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878162dca7c1699923aaaba_omnia_400x400.webp",
  },
      // 255.
  {
    id: "orbiter-finance",
    name: "Orbiter Finance",
    description: "Orbiter Finance on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917eee21ffe4d1053ae79_Orbiter%20Finance_logo.webp",
  },
      // 256.
  {
    id: "orderly",
    name: "Orderly",
    description: "Orderly on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b917fa6561ec94bfa5749f_Orderly_logo.webp",
  },
      // 257.
  {
    id: "pangea",
    name: "Pangea",
    description: "Pangea on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b918fbe0429ca00f52460d_Pangea_logo.webp",
  },
      // 258.
  {
    id: "para",
    name: "Para",
    description: "Para on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9190489130464ea441071_Para_logo.webp",
  },
      // 259.
  {
    id: "pecker",
    name: "Pecker",
    description: "Pecker on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68966e755af8bc2db3ee374a_pecker%20logo%20.webp",
  },
      // 260.
  {
    id: "peridot",
    name: "Peridot",
    description: "Peridot on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31aba83cb513135eaee_NEW-LOGO-CUBE-400x400.webp",
  },
      // 261.
  {
    id: "permute-finance",
    name: "Permute Finance",
    description: "Permute Finance on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68e96f513a156f995f3de133_Logo-WebP-400x400-.webp",
  },
      // 262.
  {
    id: "perpl",
    name: "Perpl",
    description: "Perpl on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878163e0a3904f124992455_Perpl_400x400.webp",
  },
      // 263.
  {
    id: "phantom",
    name: "Phantom",
    description: "Phantom on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9190b6ae7e18300e2ad13_Phantom_logo.webp",
  },
      // 264.
  {
    id: "polyflow",
    name: "PolyFlow",
    description: "PolyFlow on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878157fd689191cf9e81382_polyfi%20logo_400x400.webp",
  },
      // 265.
  {
    id: "poster-fun",
    name: "Poster.fun",
    description: "Poster.fun on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135b0d47a347f77313fc_poster-logo-webp.webp",
  },
      // 266.
  {
    id: "privy",
    name: "Privy",
    description: "Privy on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919421610ca8a55c5fc53_Privy_logo.webp",
  },
      // 267.
  {
    id: "quicknode",
    name: "QuickNode",
    description: "QuickNode on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b9195a048c532f61e234ea_QuickNode_logo.webp",
  },
      // 268.
  {
    id: "rayvo",
    name: "Rayvo",
    description: "Rayvo on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6878156edcbd1ae880b0885f_rayvo%20Td0jPvVW_400x400.webp",
  },
      // 269.
  {
    id: "relend-network",
    name: "Relend Network",
    description: "Relend Network on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31c7521ac0c5bd871ac_relend-logo-monad.webp",
  },
      // 270.
  {
    id: "reown",
    name: "Reown",
    description: "Reown on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919a50238916836880556_Reown_logo.webp",
  },
      // 271.
  {
    id: "rhino-fi",
    name: "Rhino.fi",
    description: "Rhino.fi on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919bb7399631155504fcc_Rhino.fi_logo.webp",
  },
      // 272.
  {
    id: "rumi",
    name: "Rumi",
    description: "Rumi on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68781565fc16fe318bea11a7_rumi%20zPdVic8R_400x400.webp",
  },
      // 273.
  {
    id: "sqd",
    name: "SQD",
    description: "SQD on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b919e49fa4892d62397880_SQD_logo.webp",
  },
      // 274.
  {
    id: "stage-fun",
    name: "STAGE.fun",
    description: "STAGE.fun on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6875106c949bec27002cd3da_STAGE-400x400.png",
  },
      // 275.
  {
    id: "safepal",
    name: "SafePal",
    description: "SafePal on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67c4e7769a93e78ca6b0d394_400-400_SafePal.webp",
  },
      // 276.
  {
    id: "scatter-art",
    name: "Scatter.art",
    description: "Scatter.art on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883f79d5ed6d256a4153b15_scatter%20logo%20.webp",
  },
      // 277.
  {
    id: "sela-network",
    name: "Sela Network",
    description: "Sela Network on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68966d42336d11a6c5b329ea_sela%20logo%20.webp",
  },
      // 278.
  {
    id: "sherpa",
    name: "Sherpa",
    description: "Sherpa on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6888280b254c67fbfb86411b_sherpa_logo.webp",
  },
      // 279.
  {
    id: "sprout",
    name: "Sprout",
    description: "Sprout on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68fe71a688d8e714a821b7f4_2AsmLCyj_400x400.webp",
  },
      // 280.
  {
    id: "stargate",
    name: "Stargate",
    description: "Stargate on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a8de21ffe4d10563502_Stargate_logo.webp",
  },
      // 281.
  {
    id: "stationx",
    name: "StationX",
    description: "StationX on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31bd059f065788130eb_stnx_logo.webp",
  },
      // 282.
  {
    id: "subquery",
    name: "SubQuery",
    description: "SubQuery on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91a9dbe2243a8e82363fa_SubQuery_logo.webp",
  },
      // 283.
  {
    id: "sunscreen",
    name: "Sunscreen",
    description: "Sunscreen on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6863135baa6db2d22d376c0a_Sunscreen-Logos-Social-Frame.webp",
  },
      // 284.
  {
    id: "swyrl-finance",
    name: "Swyrl Finance",
    description: "Swyrl Finance on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31a5f263ff733767dec_swyrl_logo.webp",
  },
      // 285.
  {
    id: "tally",
    name: "Tally",
    description: "Tally on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91af25075b90f168cabc6_Tally_logo.webp",
  },
      // 286.
  {
    id: "terminal-3",
    name: "Terminal 3",
    description: "Terminal 3 on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67eff2c6563c6021491d9621_T3_LOGO.webp",
  },
      // 287.
  {
    id: "the-graph",
    name: "The Graph",
    description: "The Graph on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b019fa4892d623a2d04_The%20Graph_logo.webp",
  },
      // 288.
  {
    id: "thirdweb",
    name: "Thirdweb",
    description: "Thirdweb on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b13f6998cf2420a9d1d_Thirdweb_logo.webp",
  },
      // 289.
  {
    id: "timelock",
    name: "Timelock",
    description: "Timelock on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68781555f2471af37cf9c74a_timelock%20goht1Ab-_400x400.webp",
  },
      // 290.
  {
    id: "tokenpocket",
    name: "TokenPocket",
    description: "TokenPocket on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67bebce03f2e46a263da186f_token%20banner.webp",
  },
      // 291.
  {
    id: "townsquare",
    name: "TownSquare",
    description: "TownSquare on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b27b9188e59b9aa8b6a_TowneSquare_logo.webp",
  },
      // 292.
  {
    id: "triton-one",
    name: "Triton One",
    description: "Triton One on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b39c1a6a111c72292a6_Triton%20One_logo.webp",
  },
      // 293.
  {
    id: "turnkey",
    name: "Turnkey",
    description: "Turnkey on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b43d821392f19422bcd_Turnkey_logo.webp",
  },
      // 294.
  {
    id: "typex",
    name: "TypeX",
    description: "TypeX on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/687816493ef8c9bbd2bf4fe8_typex%20logo%20_400x400.webp",
  },
      // 295.
  {
    id: "unmarshal",
    name: "Unmarshal",
    description: "Unmarshal on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b7db9188e59b9aac1e1_Unmarshal_logo.webp",
  },
      // 296.
  {
    id: "web3auth",
    name: "Web3Auth",
    description: "Web3Auth on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91b9211a6f589667ebd18_Web3Auth_logo.webp",
  },
      // 297.
  {
    id: "winks-fun",
    name: "Winks.fun",
    description: "Winks.fun on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91ba36561ec94bfa7abfa_Winks.fun_logo.webp",
  },
      // 298.
  {
    id: "wonad",
    name: "Wonad",
    description: "Wonad on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6883e31ceeab028ff508564a_logowonad.webp",
  },
      // 299.
  {
    id: "x2c",
    name: "X2C",
    description: "X2C on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/6893d9cb3aa0c3e58d29e9c6_x2c-icon.webp",
  },
      // 300.
  {
    id: "zerion",
    name: "Zerion",
    description: "Zerion on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91be5a00e125f94a41d09_Zerion_logo.webp",
  },
      // 301.
  {
    id: "zerodev",
    name: "ZeroDev",
    description: "ZeroDev on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/67b91bef84cbdc367d67b771_ZeroDev_logo.webp",
  },
      // 302.
  {
    id: "dfusion-ai",
    name: "dFusion AI",
    description: "dFusion AI on Monad testnet",
    type: "App",
    categories: ["DeFi"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    
    
    logo: "https://cdn.prod.website-files.com/669ade140a683001b9f7fd78/68cebe8f33d4d7940f9a4dfb_dfusion%20logo%20.webp",
  },
  // 303.
  {
    id: "buzzing-club",
    name: "Buzzing Club",
    description: "Buzzing Club on Monad testnet",
    type: "App",
    categories: ["Consumer"],
    status: "Live on Testnet",
    onlyOnMonad: false,
    website: "https://www.buzzing.club/",
    logo: "https://www.buzzing.club/",
  },
];

export const categories = [
  "All",
  "DeFi",
  "Gaming",
  "NFT",
  "Social",
  "AI",
  "Betting",
  "Payments",
  "Prediction Market",
  "RWA",
  "Account Abstraction",
  "Analytics",
  "Cross-Chain",
  "Dev Tooling",
  "Gaming Infra",
  "Identity",
  "Indexer",
  "Onramp",
  "Oracle",
  "Other Infra",
  "Privacy",
  "RPC",
  "Stablecoin",
  "Wallet",
  "Zero-Knowledge",
  "DePIN",
  "Governance",
] as const;

export const types = ["All", "App", "Infra", "App/Infra"] as const;

