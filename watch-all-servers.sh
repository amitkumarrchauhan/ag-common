
if [[ $LOG_FOLDER -eq '' ]]; then
  LOG_FOLDER="$PWD/logs"
fi;

cd core-utils
rm -f $LOG_FOLDER/core-utils.*.log;
pnpm run watch > $LOG_FOLDER/core-utils.compile.log &
pnpm run watch:dt.ts > $LOG_FOLDER//core-utils.compile.dt.ts.log &
printf "\n watcher servers started for core-utils: $LOG_FOLDER/core-utils*.log \n"

cd ../ui-components
pwd