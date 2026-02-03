# 🚀 Deployment Guide - FV NIX Essential Oils Platform

This guide covers deploying the FV NIX platform to production using Vercel (recommended) or other hosting platforms.

## ✅ Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All changes are committed to git
- [ ] README.md is up to date
- [ ] No uncommitted local changes (`git status`)
- [ ] Production build works locally (`npm run build`)
- [ ] Environment variables are configured (if any)
- [ ] Cloud texture file exists at `public/textures/clouds.png`

## 📦 Method 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering:
- ✅ Zero-config Next.js deployment
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Edge functions
- ✅ Preview deployments for PRs
- ✅ GitHub integration

### Step 1: Push to GitHub

```bash
# Navigate to project directory
cd /home/user/webapp/fvnix-site

# Verify git status
git status
git log --oneline -5

# Add GitHub remote (replace <username> with your GitHub username)
git remote add origin https://github.com/<username>/fvnix-site.git

# Push to main branch
git push -u origin main
```

**Authentication Options:**

**Option A: Personal Access Token (PAT)**
1. Go to GitHub Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Select scope: `repo` (full control)
4. Copy the token
5. Use token as password when prompted during `git push`

**Option B: SSH Key**
```bash
# Use SSH URL instead
git remote add origin git@github.com:<username>/fvnix-site.git
git push -u origin main
```

### Step 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (opens browser)
vercel login

# Link project and deploy
cd /home/user/webapp/fvnix-site
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No (first time) / Yes (subsequent)
# - Project name? fvnix-site (or custom)
# - Directory? ./ (current directory)
```

This will:
1. Create a `.vercel` directory (already in `.gitignore`)
2. Deploy a preview build
3. Provide a preview URL: `https://fvnix-site-<hash>.vercel.app`

### Step 3: Deploy to Production

```bash
# Deploy to production domain
vercel --prod
```

Your site will be live at:
- **Production**: `https://fvnix-site.vercel.app`
- **Custom Domain**: Configure in Vercel dashboard

### Step 4: Enable Auto-Deploy (Optional)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your GitHub repository
3. Enable auto-deploy:
   - **Push to `main`** → Production deployment
   - **Push to other branches** → Preview deployments
   - **Open PR** → Automatic preview comment

## 📦 Method 2: Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard**: https://vercel.com/new
2. **Import Git Repository**:
   - Connect GitHub account
   - Select `fvnix-site` repository
3. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
4. **Deploy**: Click "Deploy" button

## 🌐 Method 3: Deploy to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

**Note**: Next.js on Netlify requires the `@netlify/plugin-nextjs` plugin.

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect GitHub repository
3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t fvnix-site .
docker run -p 3000:3000 fvnix-site
```

## 🔧 Environment Variables

Currently, the project doesn't require environment variables. Future additions:

```bash
# Email API (example)
SENDGRID_API_KEY=your_api_key
CONTACT_EMAIL=contact@fvnix.com

# Analytics (example)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Database (future)
DATABASE_URL=postgresql://...
```

### Setting Environment Variables in Vercel

1. Go to Project Settings → Environment Variables
2. Add variables:
   - **Production**: Used for `vercel --prod`
   - **Preview**: Used for branch previews
   - **Development**: Used for local `vercel dev`

## 📊 Post-Deployment Verification

After deployment, verify:

### ✅ Homepage
- [ ] Visit root URL: `https://your-domain.vercel.app`
- [ ] 3D CloudHero renders correctly
- [ ] Hero card displays properly
- [ ] "Browse Oils" and "Download Documents" buttons work

### ✅ Products Page
- [ ] Visit `/products`
- [ ] All 16 products display
- [ ] Filters work (series, origin, extraction, tag)
- [ ] Search bar works
- [ ] Product count displays correctly
- [ ] Tag badges appear on cards
- [ ] Clicking product opens detail page

### ✅ Product Detail Page
- [ ] Visit `/products/lavender`
- [ ] Product info displays
- [ ] Lots section shows A1, A2
- [ ] Documents are clickable
- [ ] "Request Sample" and "Request Quote" buttons work

### ✅ Documents Page
- [ ] Visit `/documents`
- [ ] 36 documents display in grid
- [ ] Document cards show correct metadata
- [ ] Clicking document opens PDF (even if 404, link should work)

### ✅ Request Form
- [ ] Visit `/request`
- [ ] Form fields render
- [ ] Auto-fill works: `/request?type=sample&product=lavender`
- [ ] Submit button works
- [ ] API responds (check Network tab)

## 🐛 Troubleshooting

### Build Fails

**Issue**: `npm run build` fails locally or on Vercel

**Solutions**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build

# Check for TypeScript errors
npm run lint

# Check for missing dependencies
npm audit
```

### 3D Scene Not Rendering

**Issue**: CloudHero doesn't display or shows errors

**Solutions**:
1. Ensure `public/textures/clouds.png` exists
2. Check browser console for Three.js errors
3. Verify WebGL support: https://get.webgl.org/
4. Check `@react-three/fiber` and `three` versions match

### API Routes 404

**Issue**: `/api/request` returns 404

**Solutions**:
1. Verify file exists: `src/app/api/request/route.ts`
2. Check Vercel logs for build errors
3. Ensure proper export: `export async function POST(req: Request)`

### Slow Build Times

**Issue**: Build takes too long on Vercel

**Solutions**:
1. Enable caching in `next.config.ts`
2. Optimize dependencies (remove unused packages)
3. Use Vercel Pro for faster builds
4. Split large components into chunks

## 📈 Performance Optimization

### 1. Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/textures/clouds.png"
  width={1024}
  height={512}
  alt="Cloud texture"
  priority
/>
```

### 2. Static Generation

All pages currently use Static Site Generation (SSG) for optimal performance. To verify:

```bash
npm run build
# Look for Static (○) indicators in build output
```

### 3. Bundle Analysis

```bash
# Install analyzer
npm install -D @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit secrets to git
2. **API Routes**: Add rate limiting for production
3. **CORS**: Configure proper CORS headers
4. **Headers**: Add security headers in `next.config.ts`

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

## 📊 Monitoring & Analytics

### Vercel Analytics

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics (Optional)

```bash
# Install package
npm install @next/third-parties

# Add to app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

## 🔄 Continuous Deployment Workflow

### Recommended Git Workflow

```bash
# Feature branch workflow
git checkout -b feature/new-product-page
# Make changes...
git add .
git commit -m "feat: add new product comparison page"
git push origin feature/new-product-page

# Create PR on GitHub
# Vercel automatically deploys preview
# Review preview URL
# Merge PR → Auto-deploy to production
```

### Deployment Checklist

Before each deployment:
- [ ] Run `npm run lint`
- [ ] Run `npm run build` locally
- [ ] Test all pages manually
- [ ] Check browser console for errors
- [ ] Test on mobile viewport
- [ ] Verify all links work
- [ ] Check document downloads
- [ ] Test request form submission

## 📞 Support & Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel Status**: https://www.vercel-status.com/

## 🎯 Next Steps After Deployment

1. **Custom Domain**: Configure custom domain in Vercel dashboard
2. **SSL Certificate**: Vercel provides automatic HTTPS
3. **Email Service**: Integrate SendGrid/Resend for contact form
4. **Analytics**: Add Vercel Analytics or Google Analytics
5. **SEO**: Add sitemap.xml and robots.txt
6. **Monitoring**: Set up error tracking (Sentry)

---

**Deployment Complete! 🚀**

Your FV NIX essential oils platform is now live and ready for customers.
