# 🚀 Fix Online Deployment - gptard.wtf

## Current Issues Fixed:
- ✅ Backend API not deployed (only frontend was deployed)
- ✅ CORS configuration for production domains
- ✅ API URL configuration for production
- ✅ Vercel serverless function setup

## Quick Deploy Steps:

### 1. Install Vercel CLI (if not installed)
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy to Production
```bash
npm run deploy
```

### 4. Set Environment Variables in Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   ```
   Name: OPENAI_API_KEY
   Value: sk-your-actual-openai-api-key-here
   Environment: Production
   ```

### 5. Add Custom Domain (Optional)
1. Go to Settings → Domains
2. Add: `gptard.wtf`
3. Update DNS records as shown

## Manual Deployment Steps:

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to Vercel
```bash
vercel --prod
```

### Step 3: Configure Environment Variables
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `OPENAI_API_KEY` = `your_openai_api_key_here`

## What Was Fixed:

### 1. Backend API Deployment
- Added server.js to Vercel builds
- Configured API routes to use serverless functions
- Set proper function timeout (30 seconds)

### 2. CORS Configuration
- Added production domains to allowed origins
- Configured for both localhost and production

### 3. API URL Configuration
- Frontend now uses correct API URL in production
- Falls back to proxy in development

### 4. Security Headers
- Added proper security headers
- Configured for production environment

## Testing Your Deployment:

### 1. Check Frontend
- Visit: https://gptard.vercel.app
- Should load without errors

### 2. Check Backend API
- Visit: https://gptard.vercel.app/api/health
- Should return: `{"status":"OK","message":"Server is running"}`

### 3. Test AI Chat
- Try sending a message with GPT-3.5 Turbo
- Should work if OpenAI API key is configured

## Troubleshooting:

### If site still doesn't load:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Check browser console for errors
4. Ensure DNS is properly configured

### If API calls fail:
1. Verify OPENAI_API_KEY is set in Vercel
2. Check API endpoint: `/api/health`
3. Test with a simple message

### If you get CORS errors:
1. Check CORS configuration in server.js
2. Verify domain is in allowed origins
3. Check if using HTTPS

## Next Steps:
1. ✅ Deploy with `npm run deploy`
2. ✅ Set environment variables in Vercel
3. ✅ Test the site functionality
4. ✅ Add custom domain if needed

Your site should now work online at: https://gptard.vercel.app 🎉
