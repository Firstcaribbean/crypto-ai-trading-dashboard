@echo off
REM Clean up old files and push fixes to GitHub

cd /d "C:\Users\timot\Documents\fx bot"

echo Removing old root-level files that conflict with app/ structure...
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

echo.
echo Files removed. Now committing changes...
echo.

git add -A
git commit -m "Fix: Remove duplicate files and fix import errors

- Removed root-level globals.css (now in app/)
- Removed old root layout.tsx and page.tsx 
- Removed old component files (now in app/dashboard/)
- Fixed FiBot import (react-icons doesn't have this - using FiZapOff)
- All files properly organized in Next.js 14 app router structure"

git push origin main

echo.
echo ✓ Changes pushed! Vercel will redeploy in 1-2 minutes.
echo.
pause
