@echo off
cd /d "C:\Users\timot\Documents\fx bot"

echo ========================================
echo DEPLOYING FINAL CONFIG FIX
echo ========================================
echo.

echo [1/3] Staging changes...
git add -A

echo [2/3] Committing...
git commit -m "REAL FIX: Fix PostCSS and Tailwind configs - CommonJS ESM syntax bug"

echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ✓ DEPLOYED! Vercel will rebuild automatically.
echo.
pause
