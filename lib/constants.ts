import {
  Users,
  MessageSquare,
  Target,
  DollarSign,
  Palette,
  Box,
  Share2,
  Megaphone,
  FileText,
  BarChart3,
} from "lucide-react";

export const services = [
  {
    title: "Ambassador Program",
    description:
      "We set up and run ambassador systems mainly using platforms like Zealy, where community members complete quests, contribute to your project, and earn rewards. It builds consistent engagement without unnecessary overhead.",
    icon: Users,
    features: [
      "Zealy & Quest platform integration",
      "Custom quest design & gamification",
      "Reward system automation",
      "Performance tracking & analytics",
      "Community leader identification"
    ],
    benefits: [
      "Organic community growth",
      "Reduced marketing overhead",
      "Higher engagement rates",
      "Scalable ambassador network"
    ],
  },
  {
    title: "Community Management",
    description:
      "We handle your day-to-day community operations across Discord, Telegram, and other platforms, moderation, updates, support, and engagement, keeping the community active, informed, and aligned with your project.",
    icon: MessageSquare,
    features: [
      "24/7 moderation & support",
      "Multi-platform management",
      "Content scheduling & updates",
      "Community health monitoring",
      "Event coordination & hosting"
    ],
    benefits: [
      "Consistent brand voice",
      "Reduced response time",
      "Improved user satisfaction",
      "Active & engaged community"
    ],
  },
  {
    title: "Community Building",
    description:
      "We grow your community with targeted strategies, structured onboarding, and meaningful activities. The goal is a strong, loyal, long-term user base.",
    icon: Users,
    features: [
      "Growth strategy development",
      "Onboarding flow optimization",
      "Engagement campaign design",
      "Community segmentation",
      "Retention programs"
    ],
    benefits: [
      "Quality over quantity growth",
      "Higher retention rates",
      "Stronger brand loyalty",
      "Sustainable community growth"
    ],
  },
  {
    title: "Influencer Marketing",
    description:
      "We connect your project with relevant Web3 KOLs and creators who actually drive results. No random lists, no fake engagement, only targeted outreach and measurable impact.",
    icon: Target,
    features: [
      "KOL identification & vetting",
      "Campaign strategy & execution",
      "Relationship management",
      "Performance measurement",
      "ROI tracking & optimization"
    ],
    benefits: [
      "Authentic brand partnerships",
      "Higher conversion rates",
      "Targeted audience reach",
      "Measurable campaign results"
    ],
  },
  {
    title: "Affiliate Marketing",
    description:
      "We build and manage affiliate systems where partners promote your project and earn commission based on performance. A cost-efficient way to scale reach without upfront spending.",
    icon: Share2,
    features: [
      "Affiliate program setup",
      "Commission structure design",
      "Partner recruitment & onboarding",
      "Tracking & attribution systems",
      "Performance optimization"
    ],
    benefits: [
      "Performance-based pricing",
      "Scalable growth model",
      "Cost-effective acquisition",
      "Partner network expansion"
    ],
  },
  {
    title: "Fundraising",
    description:
      "We help you prepare and position your project for investors, pitch decks, narrative refinement, outreach strategies, and connecting you with the right VCs, launchpads, and partners.",
    icon: DollarSign,
    features: [
      "Pitch deck creation",
      "Investor outreach strategy",
      "VC & launchpad connections",
      "Narrative & positioning",
      "Due diligence preparation"
    ],
    benefits: [
      "Higher funding success rate",
      "Better investor relationships",
      "Strategic partnerships",
      "Professional presentation"
    ],
  },
  {
    title: "UI / UX",
    description:
      "We design clean, functional interfaces for Web3 products and apps, focused on user flow, clarity, and frictionless interaction. Every screen is built for performance, not just aesthetics.",
    icon: Palette,
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Interaction design",
      "Usability testing"
    ],
    benefits: [
      "Improved user experience",
      "Higher conversion rates",
      "Reduced user friction",
      "Professional product design"
    ],
  },
  {
    title: "3D Animation",
    description:
      "High-quality 3D visuals and animations for branding, storytelling, product showcases, or trailers. Ideal for games, Web3 worlds, and NFT projects needing premium visual identity.",
    icon: Box,
    features: [
      "3D modeling & rendering",
      "Animation & motion design",
      "Brand identity creation",
      "Product visualization",
      "Trailer & video production"
    ],
    benefits: [
      "Premium visual identity",
      "Standout brand presence",
      "Engaging storytelling",
      "Professional presentation"
    ],
  },
  {
    title: "Social Media Management",
    description:
      "We manage your platforms end-to-end content, scheduling, engagement, analytics, and growth optimization, ensuring a consistent and professional online presence.",
    icon: Share2,
    features: [
      "Content strategy & creation",
      "Multi-platform scheduling",
      "Community engagement",
      "Analytics & reporting",
      "Growth optimization"
    ],
    benefits: [
      "Consistent brand presence",
      "Increased reach & engagement",
      "Time-saving automation",
      "Data-driven improvements"
    ],
  },
  {
    title: "Presales",
    description:
      "We prepare and execute structured presale campaigns starting from strategy, funnel design, community activation, and investor communication to ensure strong momentum before launch.",
    icon: Megaphone,
    features: [
      "Presale strategy development",
      "Funnel design & optimization",
      "Community activation campaigns",
      "Investor communication",
      "Launch momentum building"
    ],
    benefits: [
      "Higher presale success",
      "Strong launch momentum",
      "Better investor relations",
      "Optimized conversion funnels"
    ],
  },
  {
    title: "Content Marketing",
    description:
      "We create and distribute content that builds your narrative, blogs, threads, explainer pieces, announcements, and educational content tailored to Web3 users.",
    icon: FileText,
    features: [
      "Content strategy development",
      "Blog & article writing",
      "Social media content",
      "Educational materials",
      "Content distribution"
    ],
    benefits: [
      "Strong brand narrative",
      "Increased thought leadership",
      "Better SEO & visibility",
      "Engaged audience"
    ],
  },
  {
    title: "Performance Marketing",
    description:
      "We run data-driven paid campaigns focused on conversions, not impressions, acquisition funnels, retargeting, ad optimization, and ROI tracking across platforms.",
    icon: BarChart3,
    features: [
      "Campaign strategy & setup",
      "Multi-channel advertising",
      "Conversion optimization",
      "Retargeting campaigns",
      "ROI tracking & analysis"
    ],
    benefits: [
      "Higher conversion rates",
      "Better ROI on ad spend",
      "Data-driven decisions",
      "Scalable growth"
    ],
  },
];

export const projects = [
  { 
    name: "Botwars Ascendance", 
    image: "/botwars.png",
    description: "A revolutionary Web3 gaming platform combining strategy and blockchain technology. Players engage in epic battles while earning rewards through NFT ownership and token mechanics.",
    deliverables: ["Smart Contract Development", "NFT Marketplace", "Game UI/UX Design", "Tokenomics Design", "Community Management"],
    services: ["Blockchain Development", "Game Design", "Smart Contract Audit", "Marketing Strategy"]
  },
  { 
    name: "Field Hockey", 
    image: "/hockeymanager.png",
    description: "An immersive sports management game built on Web3 infrastructure. Manage your team, trade players as NFTs, and compete in global tournaments.",
    deliverables: ["Game Development", "NFT Player Cards", "Tournament System", "Wallet Integration", "Mobile App"],
    services: ["Game Development", "NFT Design", "Blockchain Integration", "Mobile Development"]
  },
  { 
    name: "SANSHU", 
    image: "/sanchu.png",
    description: "A decentralized finance platform offering innovative DeFi solutions with advanced yield farming and liquidity protocols.",
    deliverables: ["DeFi Protocol", "Yield Farming Platform", "Liquidity Pools", "Dashboard Analytics", "Security Audit"],
    services: ["DeFi Development", "Smart Contract Security", "Frontend Development", "Protocol Design"]
  },
  { 
    name: "World Football Manager", 
    image: "/hockeymanager.png",
    description: "The ultimate football management experience on blockchain. Build your dream team, trade players, and compete in leagues worldwide.",
    deliverables: ["Game Platform", "NFT Marketplace", "League System", "Player Trading", "Mobile Application"],
    services: ["Game Development", "NFT Development", "Blockchain Integration", "Mobile App Development"]
  },
  { 
    name: "Zizle", 
    image: "/zizzle.png",
    description: "A social commerce platform leveraging Web3 technology to create unique shopping experiences with NFT-based rewards and community features.",
    deliverables: ["E-commerce Platform", "NFT Rewards System", "Social Features", "Payment Gateway", "Mobile App"],
    services: ["Platform Development", "NFT Integration", "Payment Solutions", "Mobile Development"]
  },
  { 
    name: "MYTH", 
    image: "/myth.png",
    description: "An epic fantasy RPG game with blockchain integration. Collect mythical creatures as NFTs, battle in arenas, and build your legendary collection.",
    deliverables: ["RPG Game", "NFT Creature Collection", "Battle System", "Marketplace", "Gaming Platform"],
    services: ["Game Development", "NFT Art & Design", "Blockchain Integration", "Game Economy Design"]
  },
  { 
    name: "Degn", 
    image: "/degn.png",
    description: "A cutting-edge DeFi aggregator that optimizes yield farming strategies across multiple protocols for maximum returns.",
    deliverables: ["DeFi Aggregator", "Yield Optimizer", "Portfolio Dashboard", "Analytics Tools", "Security Audit"],
    services: ["DeFi Development", "Smart Contract Development", "Security Auditing", "Frontend Development"]
  },
  { 
    name: "AICC", 
    image: "/aicc.png",
    description: "An AI-powered cryptocurrency platform providing intelligent trading insights and automated portfolio management solutions.",
    deliverables: ["AI Trading Platform", "Portfolio Manager", "Analytics Dashboard", "Trading Bots", "Mobile App"],
    services: ["AI Development", "Trading Platform", "Mobile Development", "Data Analytics"]
  },
  { 
    name: "EverXNode", 
    image: "/everxnote.png",
    description: "A blockchain infrastructure project providing node services and validator solutions for various blockchain networks.",
    deliverables: ["Node Infrastructure", "Validator Services", "Dashboard Platform", "API Integration", "Documentation"],
    services: ["Infrastructure Development", "Blockchain Services", "API Development", "Technical Documentation"]
  },
  { 
    name: "Rabbitholes", 
    image: "/rabitholes.svg",
    description: "An interactive learning platform that gamifies Web3 education through quests, rewards, and NFT achievements.",
    deliverables: ["Learning Platform", "Quest System", "NFT Achievements", "Progress Tracking", "Community Features"],
    services: ["Platform Development", "Gamification Design", "NFT Development", "Educational Content"]
  },
];

export const partners = [
  { name: "Forbes", logo: "/forbes.png" },
  { name: "Cointelegraph", logo: "/cointelegraph.png" },
  { name: "Yahoo! Finance", logo: "/yahoofinance.png" },
  { name: "CoinGecko", logo: "/coingecko.png" },
  { name: "Bitcoin.com", logo: "/bitcon.png" },
  { name: "CoinDesk", logo: "/coindesksquare.png" },
  { name: "Marketwatch", logo: "/marketwatch.png" },
  { name: "Investing.com", logo: "/investiong.png" },
  { name: "Zealy", logo: "/zealy.png" },
  { name: "KuCoin", logo: "/kucoin.png" },
  { name: "Gate.io", logo: "/gate.io.png" },
  { name: "Dxsale", logo: "/dxsale.png" },
  { name: "Vorto", logo: "/vorto.webp" },
];
