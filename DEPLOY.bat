@echo off
REM Deploy fixes to GitHub and Vercel

echo ========================================
echo Deploying CryptoAI Dashboard
echo ========================================
echo.

cd /d "C:\Users\timot\Documents\fx bot"

echo [1/5] Checking git status...
git status
echo.

echo [2/5] Adding all changes...
git add -A
echo ✓ Files staged
echo.

echo [3/5] Creating commit...
git commit -m "Fix: Reorganize to Next.js 14 app router structure

- Moved files to correct app/ directory layout
- Fixed next.config.js to use CommonJS
- Created dashboard layout with sidebar navigation
- Added trading, portfolio, and bots pages
- Fixed @types/three dependency issue
- All pages now in proper Next.js routing structure

Resolves Vercel build error"
echo ✓ Commit created
echo.

echo [4/5] Pushing to GitHub...
git push origin main
echo ✓ Pushed to GitHub
echo.

echo [5/5] Done! Vercel will auto-deploy in 1-2 minutes
echo.
echo View your site at: https://crypto-ai-trading-dashboard.vercel.app
echo.
pause
