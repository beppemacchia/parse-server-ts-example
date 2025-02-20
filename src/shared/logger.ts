import _logger from 'parse-server/lib/logger';

interface ParseLogger {
  warn: (message: any) => any;
  error: (message: any) => any;
  info: (message: any) => any;
}

const messageObjToString = (message: any): any => {
  if (!message) {
    return '';
  }
  if (typeof message === 'object') {
    return JSON.stringify(message, Object.getOwnPropertyNames(message));
  }
  return message;
};

export const logger: ParseLogger = {
  warn: (message: any) => {
    return _logger.warn(messageObjToString(message));
  },
  error: (message: any) => {
    return _logger.error(messageObjToString(message));
  },
  info: (message: any) => {
    return _logger.info(messageObjToString(message));
  },
};
