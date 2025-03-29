
if [[ $LOG_FOLDER -eq '' ]]; then
  LOG_FOLDER="$PWD/logs"
fi;

cd core-utils
rm -f $LOG_FOLDER/core-utils.*.log;
pnpm run watch > $LOG_FOLDER/core-utils.compile.log &
pnpm run watch:dt.ts > $LOG_FOLDER//core-utils.compile.dt.ts.log &
printf "\n watcher servers started for core-utils: $LOG_FOLDER/core-utils*.log \n"

cd ../core-utils-svc
rm -f $LOG_FOLDER/core-utils-svc.*.log;
pnpm run watch > $LOG_FOLDER/core-utils-svc.compile.log &
pnpm run watch:dt.ts > $LOG_FOLDER//core-utils-svc.compile.dt.ts.log &
printf "\n watcher servers started for core-utils-svc: $LOG_FOLDER/core-utils-svc*.log \n"
pwd

cd ../ui-components
rm -f $LOG_FOLDER/ui-components.*.log;
pnpm run watch > $LOG_FOLDER/ui-components.compile.log &
pnpm run watch:dt.ts > $LOG_FOLDER//ui-components.compile.dt.ts.log &
printf "\n watcher servers started for ui-components: $LOG_FOLDER/ui-components*.log \n"
pwd