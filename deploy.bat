@echo off
echo 🚀 Deploying gptard.wtf to Vercel...
echo.

echo 📦 Building project...
npm run build

echo.
echo 🌐 Deploying to Vercel...
vercel --prod

echo.
echo ✅ Deployment complete!
echo 📍 Your site will be live at: https://gptard.wtf
echo.
echo 🔧 Don't forget to:
echo   1. Set OPENAI_API_KEY in Vercel dashboard
echo   2. Configure your domain DNS
echo   3. Test the live site
echo.
pause
