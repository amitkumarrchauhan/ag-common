set NODE_ENV=development

start cmd /k "cd core-utils && pnpm run watch:win"
timeout 5 
start cmd /k "cd core-utils && pnpm run watch:dt.ts"
timeout 2

start cmd /k "cd core-utils-svc && pnpm run watch:win"
timeout 5 
start cmd /k "cd core-utils-svc && pnpm run watch:dt.ts"
timeout 2

start cmd /k "cd ui-components && pnpm run watch:win"
timeout 5 
start cmd /k "cd ui-components && pnpm run watch:dt.ts"