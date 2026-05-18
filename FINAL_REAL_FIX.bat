@echo off
REM REAL FIX - Remove root globals.css permanently from git

cd /d "C:\Users\timot\Documents\fx bot"

echo.
echo ========================================
echo REMOVING ROOT globals.css PERMANENTLY
echo ========================================
echo.

REM Check if file exists
if exist "globals.css" (
  echo [1] Found root globals.css - removing from git...
  git rm --force globals.css
  echo ✓ Removed from git
) else (
  echo [1] Root globals.css not found locally (already deleted)
)

echo.
echo [2] Staging changes...
git add -A

echo [3] Committing...
git commit -m "FINAL FIX: Remove root globals.css and fix import path

ROOT CAUSE: 
- Root globals.css was corrupting the build
- app/layout.tsx was importing ../globals.css (wrong path)

SOLUTION:
- Deleted root globals.css permanently
- Fixed app/layout.tsx to import ./globals.css
- app/globals.css is now the single source of truth"

echo.
echo [4] Pushing to GitHub...
git push origin main

echo.
echo ✓ DONE - All conflicts removed!
echo.
pause
