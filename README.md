# Algorithmic Trading Research - Landing Page

Educational demonstration of Reinforcement Learning trading algorithms.

## 🎯 Purpose

This landing page showcases a production-ready RL trading system for **educational and research purposes only**.

## ⚠️ Important Disclaimers

- **NOT FINANCIAL ADVICE**
- **NOT FOR REAL TRADING**
- For portfolio/research demonstration only
- Past performance does not guarantee future results

## 🏗️ Architecture

- **Landing Page**: Next.js on Vercel (FREE)
- **Backend API**: AIStock on Railway
- **Frontend Dashboard**: React on current repository (education branch)

## 🚀 Quick Deploy to Vercel

### Option 1: New Repository (Recommended)

```bash
# 1. Create new repo on GitHub: aistock-landing
# 2. Clone and setup
git clone https://github.com/ahjavid/aistock-landing.git
cd aistock-landing

# 3. Copy landing-page contents
cp -r /path/to/live-trader-ai/landing-page/* .

# 4. Install dependencies
npm install

# 5. Deploy to Vercel
npm run build
vercel deploy
```

### Option 2: Deploy from Current Repo (Alternative)

```bash
# Deploy landing-page subfolder directly
cd landing-page
vercel deploy
```

## 📦 What's Included

### Pages
- `/` - Hero section with system overview
- `/performance` - Top 20 symbol backtest results
- `/architecture` - System design & DDD approach
- `/about` - Educational mission statement

### Features
- ✅ Performance metrics display (read-only)
- ✅ Backtest results visualization
- ✅ No "trade now" buttons
- ✅ No account/wallet integration
- ✅ Clear educational disclaimers

## 🔗 API Integration

Backend URL: `https://aistock-production-2561.up.railway.app`

Example prediction endpoint:
```bash
curl -X POST \
  -H "X-API-Key: aistock_test_key_2_standard_ml_backtest_2024" \
  -H "Content-Type: application/json" \
  -d '{"symbol": "NEM"}' \
  https://aistock-production-2561.up.railway.app/api/v1/rl/predict
```

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
- **Deployment**: Vercel (FREE tier)
- **Analytics**: None (privacy-first)

## 📝 Environment Variables

Create `.env.local`:

```env
# Railway Backend
NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
NEXT_PUBLIC_API_KEY=aistock_test_key_2_standard_ml_backtest_2024

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

- **Landing Page**: (To be deployed)
- **Dashboard**: https://github.com/ahjavid/live-trader-ai (education branch)
- **Backend API**: https://aistock-production-2561.up.railway.app
- **Railway**: https://railway.app

## 📄 License

Educational and research purposes only.
