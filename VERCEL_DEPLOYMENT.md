# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is **production-ready** with the following optimizations:

- ✅ Environment variables properly configured
- ✅ Security headers enabled (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- ✅ React Strict Mode enabled
- ✅ Powered-by header removed for security
- ✅ API calls use environment variables (no hardcoded URLs)
- ✅ Next.js 15 with App Router
- ✅ TypeScript configured

## 🚀 Deployment Steps

### 1. Push to GitHub
```bash
git add -A
git commit -m "Production ready for Vercel deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to https://vercel.com
2. Click **"Add New..."** → **"Project"**
3. Import `aistock-landing` repository from GitHub
4. Vercel will auto-detect Next.js configuration

### 3. Configure Environment Variables

Add these in Vercel Project Settings → Environment Variables:

#### **Required Variables:**
```bash
# Railway Backend API
NEXT_PUBLIC_API_URL=https://aistock-production-2561.up.railway.app
NEXT_PUBLIC_API_KEY=aistock_test_key_2_standard_ml_backtest_2024

# Site Configuration
NEXT_PUBLIC_SITE_NAME=Algorithmic Trading Research
```

#### **Optional Variables:**
```bash
# Custom domain (after adding domain)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics (if needed)
NEXT_PUBLIC_GA_ID=
```

**Important:** Set all variables for **Production**, **Preview**, and **Development** environments.

### 4. Deploy

1. Click **"Deploy"**
2. Vercel will build and deploy automatically
3. Your site will be live at: `https://aistock-landing.vercel.app`

## 🔧 Build Configuration

Vercel automatically uses:
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** 18.x or higher

## 🌐 Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

## 🔍 Post-Deployment Verification

### Test These Endpoints:

```bash
# Homepage
curl https://aistock-landing.vercel.app/

# API Demo (should work)
# Go to https://aistock-landing.vercel.app/#api-demo
# Test prediction with NEM, NVDA, etc.

# Performance page
curl https://aistock-landing.vercel.app/performance

# Architecture page
curl https://aistock-landing.vercel.app/architecture
```

### Verify Railway Backend Connection:

```bash
# Test API from your deployed site
# Open browser console on your Vercel site and run:
fetch('https://aistock-production-2561.up.railway.app/api/v1/rl/predict', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'aistock_test_key_2_standard_ml_backtest_2024'
  },
  body: JSON.stringify({ symbol: 'NEM' })
}).then(r => r.json()).then(console.log)
```

## 📊 Performance Optimizations

Already implemented:
- ✅ Static page generation (SSG) where possible
- ✅ Automatic image optimization
- ✅ Font optimization with `next/font`
- ✅ Gzip/Brotli compression (automatic on Vercel)
- ✅ CDN caching (automatic on Vercel Edge Network)

## 🔒 Security Features

Already configured:
- ✅ `X-Frame-Options: DENY` (prevents clickjacking)
- ✅ `X-Content-Type-Options: nosniff` (prevents MIME sniffing)
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ No `X-Powered-By` header
- ✅ React Strict Mode enabled

## 🐛 Troubleshooting

### Build Fails
```bash
# Check build logs in Vercel dashboard
# Common issues:
# 1. TypeScript errors - run `npm run lint` locally
# 2. Missing dependencies - ensure package.json is up to date
# 3. Node version - Vercel uses Node 18.x by default
```

### API Not Working
```bash
# Verify environment variables are set correctly
# Check Railway backend is running
curl https://aistock-production-2561.up.railway.app/health

# Check CORS settings on Railway backend
# Should allow: https://aistock-landing.vercel.app
```

### Images Not Loading
```bash
# Vercel automatically optimizes images
# No additional configuration needed for local images
# For external images, add domains to next.config.js
```

## 📈 Monitoring

### Vercel Analytics (Free)
1. Go to Project → Analytics
2. View:
   - Page views
   - Top pages
   - Traffic sources
   - Web Vitals (Core Web Vitals)

### Speed Insights (Free)
- Automatically enabled
- View real user performance data
- Core Web Vitals monitoring

## 🔄 Continuous Deployment

Vercel automatically deploys on:
- ✅ **Push to `main`** → Production deployment
- ✅ **Pull Requests** → Preview deployment
- ✅ **Other branches** → Preview deployment

### Preview Deployments
- Every commit gets a unique URL
- Test before merging to production
- Automatic comments on PRs with preview URL

## 📝 Environment-Specific Builds

```bash
# Production
VERCEL_ENV=production

# Preview (PRs, branches)
VERCEL_ENV=preview

# Development (local)
VERCEL_ENV=development
```

## 🎯 Best Practices

### ✅ Do:
- Use environment variables for all external URLs
- Test preview deployments before merging
- Monitor Web Vitals in Vercel Analytics
- Keep dependencies updated
- Use TypeScript for type safety

### ❌ Don't:
- Hardcode API URLs or keys
- Expose sensitive data in client-side code
- Use synchronous data fetching in pages
- Skip testing preview deployments
- Ignore build warnings

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Documentation:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Railway Dashboard:** https://railway.app/dashboard

## 🎉 You're Ready!

Your landing page is production-ready and optimized for Vercel deployment with:
- Fast global CDN
- Automatic HTTPS
- Zero-config deployment
- Automatic preview deployments
- Built-in analytics

**Deploy now:** https://vercel.com/new
