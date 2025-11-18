# 🚀 Complete Setup Guide - Algorithmic Trading Research

## Overview

This guide walks you through deploying the complete system:
- **Landing Page** (Next.js) → Vercel
- **Dashboard** (React) → Current repo (education branch)
- **Backend API** → Railway (already deployed ✅)

---

## Option 1: New Repository (RECOMMENDED)

### Step 1: Create New GitHub Repository

1. Go to https://github.com/new
2. Repository name: `aistock-landing`
3. Description: "Educational landing page for Algorithmic Trading Research"
4. Public ✅
5. Click "Create repository"

### Step 2: Push Landing Page Code

```bash
# Navigate to landing page directory
cd "/home/codepulse/Projects/Live Trader AI/landing-page"

# Initialize git
git init
git branch -M main

# Add remote
git remote add origin https://github.com/ahjavid/aistock-landing.git

# Commit and push
git add .
git commit -m "Initial commit: Next.js landing page for RL trading research"
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "Add New Project"**
4. **Import `ahjavid/aistock-landing`**
5. **Configure:**
   - Framework Preset: Next.js ✅ (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   
6. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
   NEXT_PUBLIC_API_KEY=aistock_test_key_2_standard_ml_backtest_2024
   NEXT_PUBLIC_SITE_NAME=Algorithmic Trading Research
   NEXT_PUBLIC_SITE_URL=https://aistock-landing.vercel.app
   ```

7. **Click "Deploy"** 🎉

### Step 4: Get Your URL

After deployment completes:
- Your site: `https://aistock-landing.vercel.app`
- Or custom domain: `https://algo-trading-research.com`

---

## Option 2: Deploy from Current Repo (Alternative)

### Step 1: Commit Landing Page to Education Branch

```bash
cd "/home/codepulse/Projects/Live Trader AI"

# Add landing page
git add landing-page/
git commit -m "Add Next.js landing page"
git push origin education
```

### Step 2: Deploy Subfolder to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Import `ahjavid/live-trader-ai`**
3. **Configure:**
   - Framework: Next.js
   - Root Directory: `landing-page` ⚠️ (Important!)
   - Branch: `education`

4. **Add Environment Variables** (same as above)
5. **Deploy**

---

## Architecture Summary

After deployment, you'll have:

```
┌─────────────────────────────────────────┐
│  Landing Page (Next.js)                 │
│  https://aistock-landing.vercel.app     │
│  • Home / Performance / Architecture    │
│  • Read-only display                    │
│  • Educational disclaimers              │
└─────────────────────────────────────────┘
                    │
                    │ (Links to)
                    ▼
┌─────────────────────────────────────────┐
│  Dashboard (React)                      │
│  Current repo (education branch)        │
│  • Live trader control panel            │
│  • Real-time positions                  │
│  • Performance tracking                 │
└─────────────────────────────────────────┘
                    │
                    │ (API calls)
                    ▼
┌─────────────────────────────────────────┐
│  Backend API (FastAPI)                  │
│  https://aistock-production-2561...     │
│  • RL predictions (PPO/A2C/SAC)         │
│  • Risk management                      │
│  • Trading logic                        │
└─────────────────────────────────────────┘
```

---

## Testing Your Deployment

### 1. Test Landing Page

Visit your Vercel URL:
- [ ] Home page loads with hero section
- [ ] Performance page shows top 20 performers
- [ ] Architecture page displays system design
- [ ] About page explains mission
- [ ] All disclaimers visible
- [ ] Mobile responsive

### 2. Test API Connection (Optional)

The landing page doesn't call the API directly, but you can test:

```bash
curl -X POST \
  -H "X-API-Key: aistock_test_key_2_standard_ml_backtest_2024" \
  -H "Content-Type: application/json" \
  -d '{"symbol": "NEM"}' \
  https://aistock-production-2561.up.railway.app/api/v1/rl/predict
```

Expected response:
```json
{
  "action_type": "HOLD",
  "position_size": 0.0,
  "confidence": 0.25,
  "approved": false
}
```

### 3. Test Dashboard

The dashboard connects to Railway backend:
1. Run locally: `npm run dev`
2. Start trader with top performers
3. Verify live updates

---

## Environment Variables Reference

### Landing Page (.env.local)
```bash
# Railway Backend API
NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
NEXT_PUBLIC_API_KEY=aistock_test_key_2_standard_ml_backtest_2024

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Algorithmic Trading Research
NEXT_PUBLIC_SITE_URL=https://aistock-landing.vercel.app
```

### Dashboard (Current repo)
```bash
# Same API settings
VITE_API_KEY=aistock_test_key_2_standard_ml_backtest_2024
VITE_API_URL=https://aistock-production-2561.up.railway.app
```

---

## Updating Content

### Update Performance Data

1. Edit `landing-page/lib/data.ts`
2. Update `topPerformers` array
3. Commit and push
4. Vercel auto-deploys ✅

### Update Pages

All pages in `landing-page/app/`:
- `page.tsx` - Home
- `performance/page.tsx` - Performance metrics
- `architecture/page.tsx` - System architecture
- `about/page.tsx` - About page

### Update Components

All components in `landing-page/components/`:
- `Hero.tsx` - Hero section
- `Features.tsx` - Feature cards
- `PerformanceHighlights.tsx` - Top 5 table
- etc.

---

## Custom Domain (Optional)

### Add Custom Domain to Vercel

1. **Go to Vercel Dashboard** → Your Project → Settings → Domains
2. **Add Domain:** `algo-trading-research.com`
3. **Configure DNS** (at your registrar):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. **Wait for SSL** (automatic, ~5 minutes)

---

## Troubleshooting

### Build Fails on Vercel

**Check:**
- Node version: Should be ≥18.0.0
- Build command: `npm run build`
- Environment variables set correctly

**Fix:**
```bash
# Test locally first
cd landing-page
npm install
npm run build
# Should succeed
```

### 404 on Routes

**Issue:** Next.js routes not working

**Fix:** Vercel auto-configures Next.js routing. If issues:
1. Check `next.config.js` output: `'standalone'`
2. Verify `app/` directory structure

### Environment Variables Not Working

**Issue:** `undefined` in browser

**Check:**
- Variables start with `NEXT_PUBLIC_` for client-side
- Set in Vercel Dashboard → Settings → Environment Variables
- Redeploy after adding variables

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
cd landing-page
npm update

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "Update dependencies"
git push
```

### Monitor Performance

Vercel provides:
- Analytics (visits, performance)
- Build logs
- Deployment history

---

## Security Checklist

- [x] No financial advice language
- [x] Educational disclaimers on every page
- [x] No "trade now" buttons
- [x] No account/wallet integration
- [x] Read-only data display
- [x] API key in environment variables only
- [x] HTTPS enabled (automatic on Vercel)

---

## Next Steps

After deployment:

1. **Test thoroughly** on mobile and desktop
2. **Share URL** with educational disclaimer
3. **Monitor Vercel analytics**
4. **Update Railway CORS** if needed:
   ```python
   # In Railway backend
   origins = [
       "https://aistock-landing.vercel.app",
       "http://localhost:3000",
   ]
   ```

5. **Link from Dashboard** (education branch)

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Railway Docs:** https://docs.railway.app

---

## Summary

✅ **Backend:** Railway (deployed)
✅ **Landing Page:** Vercel (this guide)
✅ **Dashboard:** Current repo (education branch)

**Result:** Complete educational RL trading research platform! 🎉

---

**Important:** This is an educational system. Not financial advice. Not for real trading.
