set NODE_ENV=development

set CORE_UTILS=core-utils
set CORE_UTILS_SVC=core-utils-svc
set UI_COMP=ui-components
set UI_CORE=ui-core

rmdir /S $CORE_UTILS/dist
rmdir /S $CORE_UTILS_SVC/dist 
rmdir /S $UI_COMP/dist 

start cmd /k "cd core-utils && pnpm run watch:win"
timeout 5 
start cmd /k "cd core-utils-svc && pnpm run watch:win"
timeout 5 
start cmd /k "cd ui-components && pnpm run watch:win"
timeout 5 

start cmd /k "cd core-utils && pnpm run watch:d.ts"
timeout 3

start cmd /k "cd core-utils-svc && pnpm run watch:d.ts"
timeout 3

start cmd /k "cd ui-components && pnpm run watch:d.ts"
timeout 3