set NODE_ENV=development

start cmd /k "cd core-utils && pnpm run watch:win"
start cmd /k "cd core-utils && pnpm run watch:dt.ts"

start cmd /k "cd core-utils-svc && pnpm run watch:win"
start cmd /k "cd core-utils-svc && pnpm run watch:dt.ts"

start cmd /k "cd ui-components && pnpm run watch:win"
start cmd /k "cd ui-components && pnpm run watch:dt.ts"