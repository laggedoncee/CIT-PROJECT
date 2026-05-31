Quick local run

Start both backend and frontend (PowerShell):

```powershell
# from workspace root
.\scripts\start-local.ps1
```

Manual commands:

```powershell
# API
cd artifacts/api-server
$env:PORT=4000
pnpm run start

# Frontend
cd artifacts/tirana
$env:PORT=5173
$env:BASE_PATH='/'
pnpm dev
```

URLs:
- Frontend: http://localhost:5173/
- API: http://localhost:4000/
