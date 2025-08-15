# PowerShell deployment script for gptard.wtf
Write-Host "🚀 Deploying gptard.wtf to Vercel..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Deploy to Vercel
Write-Host "🌐 Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

Write-Host "🎉 Deployment successful!" -ForegroundColor Green
Write-Host "🌍 Your site should be live at: https://gptard.vercel.app" -ForegroundColor Cyan
