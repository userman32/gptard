@echo off
echo Starting gptard.wtf development environment...
echo.

REM Check if .env file exists
if not exist ".env" (
    echo Warning: .env file not found!
    echo Please create a .env file with your OpenAI API key
    echo See env.example for reference
    echo.
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Start the backend server
echo Starting backend server on port 3002...
start "Backend Server" cmd /k "npm run server"

REM Wait a moment for server to start
timeout /t 3 /nobreak > nul

REM Start the frontend
echo Starting frontend on port 3003...
start "Frontend" cmd /k "npm run dev"

echo.
echo Development environment started!
echo Backend: http://localhost:3002
echo Frontend: http://localhost:3003
echo.
echo Press any key to exit this window...
pause > nul
