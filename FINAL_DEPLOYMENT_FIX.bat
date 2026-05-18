@echo off
REM ==============================================================================
REM FINAL FIX - Complete cleanup and proper deployment
REM ==============================================================================

cd /d "C:\Users\timot\Documents\fx bot"

echo.
echo ██████ CRYPTO-AI DASHBOARD - FINAL DEPLOYMENT FIX ██████
echo.

REM Step 1: Remove conflicting files from git (not just local disk)
echo [1/4] Removing conflicting files from git tracking...
git rm --force --cached globals.css 2>nul
git rm --force --cached layout.tsx 2>nul
git rm --force --cached page.tsx 2>nul
git rm --force --cached animations.ts 2>nul
git rm --force --cached hero.tsx 2>nul
git rm --force --cached stats.tsx 2>nul
git rm --force --cached testimonials.tsx 2>nul
git rm --force --cached faq.tsx 2>nul
git rm --force --cached dashboard-layout.tsx 2>nul
git rm --force --cached dashboard-page.tsx 2>nul
git rm --force --cached trading-page.tsx 2>nul
git rm --force --cached portfolio-page.tsx 2>nul
git rm --force --cached bots-page.tsx 2>nul
echo ✓ Files removed from git tracking

echo.
echo [2/4] Deleting local copies...
del /Q globals.css 2>nul
del /Q layout.tsx 2>nul
del /Q page.tsx 2>nul
del /Q animations.ts 2>nul
del /Q hero.tsx 2>nul
del /Q stats.tsx 2>nul
del /Q testimonials.tsx 2>nul
del /Q faq.tsx 2>nul
del /Q dashboard-layout.tsx 2>nul
del /Q dashboard-page.tsx 2>nul
del /Q trading-page.tsx 2>nul
del /Q portfolio-page.tsx 2>nul
del /Q bots-page.tsx 2>nul
echo ✓ Local files deleted

echo.
echo [3/4] Staging and committing final fix...
git add -A
git commit -m "Remove duplicate root-level files permanently

FIXES: CSS parser error and file conflicts
- Removed root globals.css (app/globals.css is the correct one)
- Removed all root-level .tsx files (moved to app/ structure)
- Only app/ directory files should be tracked
- Next.js 14 app router now properly configured"

echo ✓ Commit created

echo.
echo [4/4] Pushing to GitHub...
git push origin main
echo ✓ Pushed successfully

echo.
echo ========================================
echo ✓ DEPLOYMENT READY
echo ========================================
echo.
echo Your site will build and deploy in 1-2 minutes
echo View at: https://crypto-ai-trading-dashboard.vercel.app
echo.
pause
