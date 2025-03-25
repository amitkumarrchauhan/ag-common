class AppLogger {
  constructor(private prefix: string) {
    this.prefix = prefix;
  }

  log(...args: unknown[]) {
    const finalArgs = [`[${this.prefix}]: `, ...args];
    console.log(...finalArgs);
  }
  warn(...args: unknown[]) {
    const finalArgs = [`[${this.prefix}]: `, ...args];
    console.warn(...finalArgs);
  }
  error(...args: unknown[]) {
    const finalArgs = [`[${this.prefix}]: `, ...args];
    console.error(...finalArgs);
  }
}

type LoggerMap = { [key: string]: AppLogger };
const loggerMap = {} as LoggerMap;

class Logger {
  static getLogger(prefix: string): AppLogger | Console {
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
      if (process.env.NEXT_RUNTIME !== 'nodejs') {
        return console;
      }
    }

    if (!loggerMap[prefix]) {
      loggerMap[prefix] = new AppLogger(prefix);
    }

    return loggerMap[prefix];
  }
}

export { Logger };
