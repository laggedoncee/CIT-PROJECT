# Start both API server and Tirana frontend in separate PowerShell windows
# Usage: .\scripts\start-local.ps1

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# Start API server in new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location -Path '$PWD\artifacts\api-server'; $env:PORT=4000; pnpm run start"

# Start Tirana frontend in new PowerShell window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location -Path '$PWD\artifacts\tirana'; $env:PORT=5173; $env:BASE_PATH='/'; pnpm dev"
