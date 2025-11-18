#!/bin/bash

# Quick Start Script for Landing Page Deployment
# Run: bash quickstart.sh

set -e

echo "🚀 Algorithmic Trading Research - Landing Page Setup"
echo "=================================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Please run this script from the landing-page directory.${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Found package.json"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

echo -e "${GREEN}✓${NC} Dependencies installed"

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo ""
    echo "🔧 Creating .env.local file..."
    cp .env.local.example .env.local
    echo -e "${GREEN}✓${NC} Created .env.local from example"
    echo -e "${YELLOW}⚠${NC}  Please edit .env.local with your configuration"
else
    echo -e "${YELLOW}⚠${NC}  .env.local already exists, skipping creation"
fi

# Build test
echo ""
echo "🔨 Testing build..."
npm run build

echo -e "${GREEN}✓${NC} Build successful!"

echo ""
echo "=================================================="
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Edit .env.local with your settings"
echo "  2. Run 'npm run dev' to start development server"
echo "  3. Visit http://localhost:3000"
echo ""
echo "To deploy to Vercel:"
echo "  1. Push code to GitHub"
echo "  2. Import repository in Vercel dashboard"
echo "  3. Add environment variables"
echo "  4. Deploy!"
echo ""
echo "📚 See SETUP_GUIDE.md for detailed instructions"
echo ""
