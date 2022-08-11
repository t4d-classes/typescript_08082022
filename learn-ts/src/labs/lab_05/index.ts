import { saveToConsole, saveToDatabase, saveToFile } from "./io";

export type LogLevel = 'info' | 'debug' | 'error';

export interface Logger {
  level: LogLevel;
  log: (message: string) => void;
}


export abstract class AppLogger implements Logger {

  // protected readonly name: string;

  // constructor(name: string) {
  //   this.name = name;
  // }
  
  private _level: LogLevel;

  constructor(protected readonly name: string, logLevel: LogLevel) {
    this._level = logLevel;
  }
  
  public get level() {
    return this._level;
  }

  public set level(value: LogLevel) {
    this._level = value;
  }


  public abstract log(message: string): void;

}

export class FileLogger extends AppLogger {
  log(message: string) {
    saveToFile(`${this.level}: ${message}`);
  }
}

export class ConsoleLogger extends AppLogger {
  log(message: string) {
    saveToConsole(`${this.level}: ${message}`);
  }
}

export class DatabaseLogger extends AppLogger {
  log(message: string) {
    saveToDatabase(`${this.level}: ${message}`);
  }
}

// const fileLogger = {
//   name: 'file-logger',
//   level: 'info',
//   // log: function(message: string) {
//   log(message: string) {
//       // save log entry to file
//     saveToFile(`${this.level}: ${message}`);
//   },
// };

// const consoleLogger = {
//   name: 'console-logger',
//   level: 'debug',
//   log(message: string) {
//     // save log entry to console
//     saveToConsole(`${this.level}: ${message}`);
//   },
// };

// const databaseLogger = {
//   name: 'database-logger',
//   level: 'error',
//   log(message: string) {
//     // save log entry to database
//     saveToDatabase(`${this.level}: ${message}`);
//   },
// };
