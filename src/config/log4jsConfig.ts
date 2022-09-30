import path from 'path'

const APP_ROOT = path.join(__dirname, "../../")

export const log4jsConfig = {
    appenders: {
      ConsoleLogAppender: {
        type: "console"
      },
      SystemLogAppender: {
        type: "file",
        filename: path.join(APP_ROOT, "./log/system.log"),
        maxLogSize: 5000000,
        backups: 3,
        
      },
      HttpLogAppender: {
        type: "file",
        filename: path.join(APP_ROOT, "./log/http.log"),
        maxLogSize: 5000000,
        backups: 3,
      },
      AccessLogAppender: {
        type: "file",
        filename: path.join(APP_ROOT, "./log/access.log"),
        maxLogSize: 5000000
      }
    },
    categories: {
      default: {
        appenders: ["ConsoleLogAppender"],
        level: "all"
      },
      system: {
        appenders: ["SystemLogAppender"],
        level: "info"
      },
      http: {
        appenders: ["HttpLogAppender"],
        level: "info"
      },
      access: {
        appenders: ["AccessLogAppender"],
        level: "info"
      }
    }
  }