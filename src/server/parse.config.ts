import type { ParseServer } from 'parse-server';
import PushAdapter from '@parse/push-adapter';
import { envConfig, localParseUrl, publicParseUrl } from '../shared/constants';
import { logger } from '../shared/logger';

const databaseUri = envConfig.DATABASE_URI;

const pushConfig: any = {};

Parse.initialize(envConfig.APP_ID || 'myAppId', envConfig.JAVASCRIPT_KEY || '');

if (!databaseUri) {
  logger.info('DATABASE_URI not specified, falling back to localhost.');
}

const protectedFields = {
  _User: {
    '*': ['emailVerified'],
  },
};

let masterKeyIps: string[] = []; // ['0.0.0.0/0', '::/0']
if (envConfig.PARSE_SERVER_MASTER_KEY_IPS) {
  masterKeyIps = envConfig.PARSE_SERVER_MASTER_KEY_IPS.split(',');
}

export const parseConfig: ParseServer.ParseServerOptions = {
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
  push: {
    adapter: new PushAdapter(pushConfig),
  },
  cloud: 'src/cloud/main',
  appId: envConfig.APP_ID || 'myAppId',
  masterKey: envConfig.MASTER_KEY || '',
  serverURL: localParseUrl || 'http://localhost:1337/parse',
  clientKey: envConfig.CLIENT_KEY || '',
  javascriptKey: envConfig.JAVASCRIPT_KEY || '',
  restAPIKey: envConfig.RESTAPI_KEY || '',
  dotNetKey: envConfig.DOTNET_KEY || '',
  appName: envConfig.APP_NAME || 'Parse Demo',
  publicServerURL: publicParseUrl,
  protectedFields: protectedFields,
  masterKeyIps,
};
