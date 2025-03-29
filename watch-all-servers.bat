
start cmd /k "cd core-utils && pnpm run watch"


@REM if [[ $LOG_FOLDER -eq '' ]]; then
@REM   LOG_FOLDER="$PWD/logs"
@REM fi;

@REM cd core-utils
@REM rm -f $LOG_FOLDER/core-utils.*.log;
@REM pnpm run watch > $LOG_FOLDER/core-utils.compile.log &
@REM pnpm run watch:dt.ts > $LOG_FOLDER//core-utils.compile.dt.ts.log &
@REM printf "\n watcher servers started for core-utils: $LOG_FOLDER/core-utils*.log \n"

@REM cd ../core-utils-svc
@REM rm -f $LOG_FOLDER/core-utils-svc.*.log;
@REM pnpm run watch > $LOG_FOLDER/core-utils-svc.compile.log &
@REM pnpm run watch:dt.ts > $LOG_FOLDER//core-utils-svc.compile.dt.ts.log &
@REM printf "\n watcher servers started for core-utils-svc: $LOG_FOLDER/core-utils-svc*.log \n"
@REM pwd

@REM cd ../ui-components
@REM rm -f $LOG_FOLDER/ui-components.*.log;
@REM pnpm run watch > $LOG_FOLDER/ui-components.compile.log &
@REM pnpm run watch:dt.ts > $LOG_FOLDER//ui-components.compile.dt.ts.log &
@REM printf "\n watcher servers started for ui-components: $LOG_FOLDER/ui-components*.log \n"
@REM pwd