# AIStock: Reinforcement Learning Trading Research

> **⚠️ EDUCATIONAL RESEARCH PROJECT - NOT FINANCIAL ADVICE**

Professional demonstration of production-level machine learning engineering applied to algorithmic trading research.

## 🎯 Purpose

This landing page showcases advanced ML/AI engineering capabilities including:
- **Reinforcement Learning** (PPO, A2C, SAC algorithms)
- **Domain-Driven Design** with clean architecture
- **Walk-Forward Validation** with incremental learning
- **Production Infrastructure** (FastAPI, Railway deployment)

**Educational research demonstration showcasing ML engineering expertise.**

## ⚠️ Important Legal Disclaimers

- ❌ **NOT FINANCIAL ADVICE**
- ❌ **NOT FOR REAL TRADING**
- ✅ Educational research demonstration
- ⚠️ Past performance does not guarantee future results
- ⚠️ Author assumes no liability for any use of this information

## 🏗️ System Architecture

- **Landing Page**: Next.js (Static) → Deployed on Vercel
- **Backend API**: FastAPI (Python) → Deployed on Railway
- **Dashboard**: React (SPA) → Separate repository (education branch)
- **Storage**: PostgreSQL + Redis on Railway

## 🚀 Quick Start

### Local Development

```bash
# 1. Clone repository
git clone https://github.com/ahjavid/aistock-landing.git
cd aistock-landing

# 2. Install dependencies (requires Node.js)
npm install

# 3. Configure environment
cp .env.local.example .env.local
# Edit .env.local with your API settings

# 4. Start development server
npm run dev

# 5. Visit http://localhost:3000
```

### Deploy to Vercel (Production)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy via Vercel**
   - Go to https://vercel.com
   - Import repository: `aistock-landing`
   - Add environment variables (see .env.local.example)
   - Click "Deploy"

3. **Your Live URL**: `https://aistock-landing.vercel.app`

## 📦 What's Included

### Pages
- **`/`** - Hero landing with mission statement
- **`/performance`** - Top 20 backtest results (2025 data)
- **`/architecture`** - System design, DDD, and infrastructure
- **`/about`** - Educational disclaimer and project purpose

### Components
- **Header** - Navigation with educational branding
- **Hero** - Introduction with disclaimers
- **Performance** - Static backtest data (no live trading)
- **Architecture** - Tech stack visualization
- **Features** - System capabilities showcase
- **Footer** - Links to documentation and GitHub

### What's NOT Included (By Design)
- ❌ No "Trade Now" or "Sign Up" buttons
- ❌ No account creation or authentication
- ❌ No wallet/payment integration
- ❌ No live trading execution
- ✅ **Pure educational demonstration**

## 🔗 API Connection

**Backend:** `https://aistock-production-2561.up.railway.app`

### Safe Public Endpoints

```bash
# Health Check
curl https://aistock-production-2561.up.railway.app/api/v1/rl/health

# Single Prediction (requires valid API key)
curl -X POST \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"symbol": "AAPL"}' \
  https://aistock-production-2561.up.railway.app/api/v1/rl/predict
```

**Note:** Training and live trading endpoints are disabled for public deployment. See [Aistock education branch](https://github.com/ahjavid/Aistock/tree/education) for full local system.

## 📊 Performance Data

Top performers data sourced from `excellent_performers_stats.json`:
- **Period**: 2025-01-01 to 2025-09-30
- **Risk Profile**: Aggressive (50-75% positions)
- **Top Symbol**: NEM (628.09% return)
- **Average Return**: 126.2%
- **Average Win Rate**: 76.4%

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: None (privacy-first)

## 📝 Environment Variables

Create `.env.local`:

```env
# Railway Backend
NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
NEXT_PUBLIC_API_KEY=your_api_key_here

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Algorithmic Trading Research
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 🎨 Design System

Matching the Live Trader AI dashboard:
- Primary: `#4299e1` (blue)
- Background: `#1a202c` (dark)
- Surface: `#2d3748`
- Success: `#48bb78` (green)
- Danger: `#f56565` (red)

## 📱 Responsive Design

- Mobile-first approach
- Tablet & desktop optimized
- Performance charts adapt to screen size

## 🔒 Security

- No user authentication
- No payment processing
- Read-only data display
- API key in environment variables only

## 📚 Documentation Structure

```
landing-page/
├── app/
│   ├── page.tsx              # Home/Hero
│   ├── performance/
│   │   └── page.tsx          # Performance metrics
│   ├── architecture/
│   │   └── page.tsx          # System design
│   └── layout.tsx            # Root layout
├── components/
│   ├── Hero.tsx
│   ├── PerformanceTable.tsx
│   ├── Disclaimer.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts               # Performance data
└── public/
    └── performance-data.json
```

## 🚦 Deployment Checklist

- [ ] Create new repo: `aistock-landing`
- [ ] Copy landing page files
- [ ] Install dependencies
- [ ] Set environment variables in Vercel
- [ ] Deploy to Vercel
- [ ] Test production build
- [ ] Add custom domain (optional)
- [ ] Update Railway backend CORS if needed

## 🔗 Links

- **Landing Page**: https://aistock-landing.vercel.app (to be deployed)
- **Backend Repository**: https://github.com/ahjavid/Aistock/tree/education
- **Backend API**: https://aistock-production-2561.up.railway.app

## 📄 License

Educational and research purposes only.
