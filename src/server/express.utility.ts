import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';
import { logger } from '../shared/logger';
import { envConfig, isDev, localDashboardUrl, publicParseUrl } from '../shared/constants';

let corsOrigin: cors.CorsOptions = { origin: '*' };
if (isDev) {
  corsOrigin = { origin: '*' };
}

// CORS Configuration
const corsConfig = cors(corsOrigin);

// Pass IP address to CloudCode
const forwardIP = (req: Request, res: Response, next: NextFunction): void => {
  req.headers['x-real-ip'] = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  next();
};

const displayEnvironment = (): void => {
  // Display all environmental variables on start.
  logger.info('-------- Environmental Variables: ---------------------');
  for (const key in envConfig) {
    const configValue = envConfig[key as keyof typeof envConfig];
    if (typeof configValue === 'string') {
      // Redact most of the value of anything with KEY or SECRET in the key
      const value =
        key.includes('KEY') ||
        key.includes('SECRET') ||
        key.includes('TOKEN') ||
        key.includes('DATABASE') ||
        key.includes('PASS')
          ? `****** Redacted ***** ${configValue.slice(-6)}`
          : configValue;
      logger.info(key + ' : ' + value);
    }
  }

  logger.info('------------------------------ End of Environment.');

  if (isDev) {
    logger.info(`📡 Started Parse Dashboard at ${localDashboardUrl}`);
  }
  logger.info(`📡 Started Parse Server at ${publicParseUrl} in ${envConfig.NODE_ENV} mode`);
};

export { corsConfig, forwardIP, displayEnvironment };
