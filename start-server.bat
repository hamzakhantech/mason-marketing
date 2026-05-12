@echo off
title MASON Dev Server — localhost:8787
echo.
echo  Starting MASON local server on http://localhost:8787
echo  Press Ctrl+C to stop.
echo.
start "" "http://localhost:8787/MASON Landing.html"
python -m http.server 8787 --bind 127.0.0.1 --directory "%~dp0"
pause
