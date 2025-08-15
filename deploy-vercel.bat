@echo off
echo Deploying gptard.wtf to Vercel...
echo.

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing Vercel CLI...
    npm install -g vercel
    echo.
)

REM Build the project
echo Building project...
npm run build
if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

REM Deploy to Vercel
echo.
echo Deploying to Vercel...
vercel --prod

echo.
echo Deployment complete!
echo.
echo IMPORTANT: Set up environment variables in Vercel Dashboard:
echo 1. Go to https://vercel.com/dashboard
echo 2. Select your project
echo 3. Go to Settings → Environment Variables
echo 4. Add: OPENAI_API_KEY = your_openai_api_key_here
echo.
echo Your site will be available at: https://gptard.vercel.app
echo.
pause
