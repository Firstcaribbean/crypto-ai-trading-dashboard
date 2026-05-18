@echo off
cd /d "C:\Users\timot\Documents\fx bot"

echo.
echo ========================================
echo FINAL DEPLOYMENT - MISSING DEPENDENCY FIX
echo ========================================
echo.

echo [1/3] Staging changes...
git add -A

echo [2/3] Committing...
git commit -m "FINAL FIX: Remove @tailwindcss/forms plugin - not installed

The tailwind.config.ts was requiring @tailwindcss/forms but it was
not in package.json. Removed the plugin since we don't use Tailwind forms."

echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ✅ DEPLOYMENT COMPLETE!
echo.
echo Vercel will now rebuild and deploy successfully.
echo.
pause
