# 🚀 Quick Start - Deploy Your Landing Page

## ✅ What's Done

Your landing page is now in a separate project: `~/Projects/aistock-landing`

## 📦 Project Structure

```
~/Projects/
├── Live Trader AI/          # Dashboard (education branch) ✅
│   └── React dashboard connecting to Railway
│
└── aistock-landing/         # Landing page (NEW) ✅
    └── Next.js landing page for Vercel
```

## 🎯 Next Steps

### 1. Create GitHub Repository

```bash
# Go to https://github.com/new and create:
Repository name: aistock-landing
Description: Educational landing page for Algorithmic Trading Research
Public ✅
```

### 2. Push to GitHub

```bash
cd ~/Projects/aistock-landing

# Add remote (replace 'ahjavid' with your username)
git remote add origin https://github.com/ahjavid/aistock-landing.git

# Push
git push -u origin main
```

### 3. Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `aistock-landing` repository
5. Add environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
   NEXT_PUBLIC_API_KEY=aistock_test_key_2_standard_ml_backtest_2024
   NEXT_PUBLIC_SITE_NAME=Algorithmic Trading Research
   ```
6. Click "Deploy" 🎉

### 4. Your Live URL

After deployment: `https://aistock-landing.vercel.app`

## 📝 Files Included

- ✅ All Next.js pages (Home, Performance, Architecture, About)
- ✅ All components (Header, Footer, Hero, etc.)
- ✅ Top 20 performance data
- ✅ Complete documentation
- ✅ Vercel configuration
- ✅ TypeScript & Tailwind setup

## 🔗 Complete System

```
Landing Page (Vercel)
    ↓ links to
Dashboard (education branch)
    ↓ API calls to
Backend (Railway) ✅ deployed
```

## 📚 Documentation

See these files in `aistock-landing/`:
- **PROJECT_SUMMARY.md** - Complete overview
- **SETUP_GUIDE.md** - Detailed instructions
- **DEPLOY.md** - Deployment guide
- **README.md** - Quick reference

## ⚡ Quick Test Locally

```bash
cd ~/Projects/aistock-landing
npm install
cp .env.local.example .env.local
# Edit .env.local with your settings
npm run dev
# Visit http://localhost:3000
```

## ✅ Summary

- ✅ New repo created: `aistock-landing`
- ✅ All files moved and committed
- ✅ Ready to push to GitHub
- ✅ Ready to deploy to Vercel
- ✅ `education` branch stays on Live Trader AI for dashboard

**Next action:** Create GitHub repo and push code! 🚀
