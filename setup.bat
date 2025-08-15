@echo off
echo Setting up gptard.wtf development environment...
echo.

REM Check if .env file exists
if exist ".env" (
    echo .env file already exists
) else (
    echo Creating .env file...
    echo # OpenAI API Configuration > .env
    echo OPENAI_API_KEY=sk-your-openai-api-key-here >> .env
    echo. >> .env
    echo # Server Configuration >> .env
    echo PORT=3002 >> .env
    echo NODE_ENV=development >> .env
    echo. >> .env
    echo # Frontend Configuration >> .env
    echo VITE_API_URL=http://localhost:3002 >> .env
    echo. >> .env
    echo # Security >> .env
    echo CORS_ORIGIN=http://localhost:3003 >> .env
    echo .env file created successfully!
)

echo.
echo IMPORTANT: You need to add your OpenAI API key to the .env file
echo 1. Open the .env file in a text editor
echo 2. Replace "sk-your-openai-api-key-here" with your actual OpenAI API key
echo 3. Save the file
echo.
echo To get an OpenAI API key:
echo 1. Go to https://platform.openai.com/api-keys
echo 2. Sign up or log in
echo 3. Create a new API key
echo 4. Copy the key and paste it in the .env file
echo.

REM Install dependencies
echo Installing dependencies...
npm install

echo.
echo Setup complete! Now you can:
echo 1. Edit .env file with your OpenAI API key
echo 2. Run "npm run dev:full" to start the development server
echo 3. Or double-click start.bat to start automatically
echo.
pause
