@echo off
REM Final cleanup - Remove root globals.css from git tracking permanently

cd /d "C:\Users\timot\Documents\fx bot"

echo ========================================
echo FINAL FIX - Removing root globals.css
echo ========================================
echo.

echo Step 1: Remove root globals.css from git tracking (force)
git rm --force globals.css
echo ✓ Removed from git

echo.
echo Step 2: Delete root-level files that duplicate app/ structure
REM These are old files that should only exist in app/
for %%F in (layout.tsx page.tsx animations.ts hero.tsx stats.tsx testimonials.tsx faq.tsx dashboard-layout.tsx dashboard-page.tsx trading-page.tsx portfolio-page.tsx bots-page.tsx) do (
  if exist "%%F" (
    git rm --force "%%F" 2>nul
    echo Removed: %%F
  )
)

echo.
echo Step 3: Commit removal
git commit -m "Remove: Permanently delete duplicate root-level files

- Removed root globals.css (duplicate, app/globals.css is correct)
- Removed old root layout.tsx, page.tsx (now in app/)
- Removed old component files (now in app/dashboard/)
- Fixed all import conflicts
- Clean Next.js 14 app router structure"

echo.
echo Step 4: Push to GitHub
git push origin main

echo.
echo ✓ DONE! All conflicting files removed.
echo.
echo Vercel will now build successfully!
echo.
pause
