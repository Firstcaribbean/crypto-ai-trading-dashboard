@echo off
REM Next.js 14 App Router Structure Setup

REM Set the project directory
set PROJECT_DIR=C:\Users\timot\Documents\fx bot

REM Navigate to project
cd /d "%PROJECT_DIR%"

REM Create the app directory structure
echo Creating app directory structure...
if not exist "app" mkdir app
if not exist "app\dashboard" mkdir app\dashboard
if not exist "app\dashboard\trading" mkdir app\dashboard\trading
if not exist "app\dashboard\portfolio" mkdir app\dashboard\portfolio
if not exist "app\dashboard\bots" mkdir app\dashboard\bots
if not exist "app\components" mkdir app\components

echo.
echo App structure created successfully!
echo Created directories:
echo   - app/
echo   - app/dashboard/
echo   - app/dashboard/trading/
echo   - app/dashboard/portfolio/
echo   - app/dashboard/bots/
echo   - app/components/
echo.
echo Next steps:
echo 1. Move layout.tsx and globals.css to app/
echo 2. Move page.tsx to app/
echo 3. Move dashboard-layout.tsx to app/dashboard/layout.tsx
echo 4. Move dashboard-page.tsx to app/dashboard/page.tsx
echo 5. Move trading-page.tsx to app/dashboard/trading/page.tsx
echo 6. Move portfolio-page.tsx to app/dashboard/portfolio/page.tsx
echo 7. Move bots-page.tsx to app/dashboard/bots/page.tsx
echo 8. Move all component files to app/components/
echo 9. Move animations.ts to app/components/
echo.
pause
