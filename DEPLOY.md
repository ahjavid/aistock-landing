# Algorithmic Trading Research - Landing Page

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ahjavid/aistock-landing)

Educational demonstration of Reinforcement Learning trading algorithms.

## 🚀 Quick Deploy

### Deploy to Vercel (Recommended)

1. **Fork or clone this repository**
2. **Click the "Deploy" button above** or visit [Vercel](https://vercel.com)
3. **Import your repository**
4. **Add environment variables:**
   ```
   NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
   NEXT_PUBLIC_API_KEY=aistock_test_key_2_standard_ml_backtest_2024
   NEXT_PUBLIC_SITE_NAME=Algorithmic Trading Research
   ```
5. **Deploy!**

### Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── page.tsx              # Home page
│   ├── performance/
│   │   └── page.tsx          # Performance metrics
│   ├── architecture/
│   │   └── page.tsx          # System architecture
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── PerformanceHighlights.tsx
│   ├── Architecture.tsx
│   ├── CTA.tsx
│   └── Disclaimer.tsx
├── lib/
│   └── data.ts               # Performance data
└── public/
```

## 🎯 Features

- ✅ Fully responsive design
- ✅ Performance metrics from backtest results
- ✅ System architecture documentation
- ✅ Educational disclaimers throughout
- ✅ No trading functionality (read-only)
- ✅ SEO optimized
- ✅ Fast loading with Next.js 15

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **Backend:** Railway (separate)

## ⚠️ Important

This is an **educational research project**. Not financial advice. Not for real trading.

## 📚 Documentation

- [Full README](./README.md)
- [Performance Data](./lib/data.ts)
- [Backend API](https://aistock-production-2561.up.railway.app)
- [GitHub Repo](https://github.com/ahjavid/live-trader-ai)

## 🔗 Links

- **Landing Page:** (Deploy to get URL)
- **Dashboard:** https://github.com/ahjavid/live-trader-ai (education branch)
- **Backend:** https://aistock-production-2561.up.railway.app

## 📄 License

Educational use only.
